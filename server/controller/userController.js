const { json } = require('express');
const asyncHandler = require('express-async-handler');
const Post = require('../models/Posts');
const User = require('../models/User');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const { encode } = require('base64-arraybuffer');
// @desc    get posts
// @route   GET /users/id/posts?all=true
// @access  Private

exports.getPosts = asyncHandler(async (req, res) => {
  const all = req.query.all === 'true';
  const userId = req.params.id;
  const user = await User.findById(userId, '_id following');
  if (user) {
    const followingIds = user.following.map((f) => f.userId);
    const ids = all ? [...followingIds, userId] : [userId];
    const posts = await Post.find({
      userId: {
        $in: ids,
      },
    }).sort({
      createdAt: -1,
    });

    const users = await User.find(
      {
        _id: {
          $in: ids,
        },
      },
      {
        pdp: 1,
        username: 1,
      },
    );
    const postsList = posts.map((p) => {
      const { pdp, username } = users.find(
        (u) => u._id.toString() === p.userId.toString(),
      );
      const isLiked = !!p._doc.likes.find(
        (l) => l.userId.toString() === req.user.id.toString(),
      );
      return { ...p._doc, pdp, username, isLiked };
    });

    res.json(postsList);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc    get user info (name, email, _id, pdp, status, followers[user], following[user]);
// @route   GET /users/id
// @access  Private

exports.getUserInfo = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const currentUser = await User.findById(req.user.id);
  const user = await User.findById(userId).select(
    '-password -posts -__v -createdAt -updatedAt',
  );
  if (user) {
    //traitement following and followers
    user.following.map((fl) => {
      const found = currentUser.following.find(
        (cf) => cf.userId.toString() === fl.userId.toString(),
      );
      found ? (fl.isFollow = true) : (fl.isFollow = false);
      return fl;
    });
    user.followers.map((fl) => {
      const found = currentUser.following.find(
        (cf) => cf.userId.toString() === fl.userId.toString(),
      );
      found ? (fl.isFollow = true) : (fl.isFollow = false);
      return fl;
    });
    //found follow
    const found = currentUser.following.find((fl) => fl.userId == userId);
    user._doc.isFollow = found ? true : false;
    res.json(user);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

exports.updateUser = asyncHandler(async (req, res) => {
  const { username, bio } = req.body;
  if (!username | (username === ''))
    return res.status(400).json({ error: 'Username cannot be empty' });
  var pdp = null;
  const dirname = __dirname.replace('\\server\\controller', '');
  if (req.file) {
    const base64String = fs.readFileSync(
      path.join(dirname + '/uploads/' + req.file.filename),
    );
    pdp = {
      data: encode(base64String),
      contentType: req.file.mimetype,
    };

    //delete file
    fs.unlink(path.join(dirname + '/uploads/' + req.file.filename), (err) => {
      if (err) throw new Error(err);
    });
  }
  //update user
  const currentUser = await User.findById(req.user.id);
  currentUser.username = username;
  currentUser.bio = bio && bio !== '' ? bio : 'Bio';
  currentUser.pdp = pdp ? pdp : currentUser.pdp;
  await currentUser.save();

  const otherUsers = await User.find(
    { _id: { $ne: req.user.id } },
    'username following followers',
  ).exec();
  otherUsers.forEach(
    asyncHandler(async (user) => {
      //update followers
      const find1 = user.followers.find((fl) => fl.userId == req.user.id);
      if (find1) {
        await User.findByIdAndUpdate(
          { _id: user._id },
          {
            $pull: {
              followers: {
                userId: req.user.id,
              },
            },
          },
        );
        await User.findByIdAndUpdate(
          { _id: user._id },
          {
            $push: {
              followers: {
                userId: req.user.id,
                username,
                pdp,
              },
            },
          },
        );
      }

      //update following
      const find2 = user.following.find((fl) => fl.userId == req.user.id);
      if (find2) {
        await User.findByIdAndUpdate(
          { _id: user._id },
          {
            $pull: {
              following: {
                userId: req.user.id,
              },
            },
          },
        );
        await User.findByIdAndUpdate(
          { _id: user._id },
          {
            $push: {
              following: {
                userId: req.user.id,
                username,
                pdp,
              },
            },
          },
        );
      }
    }),
  );

  //update comment && likes
  const posts = await Post.find({});
  posts.forEach(
    asyncHandler(async (post) => {
      //update comments
      const find1 = post.comments.find((cm) => cm.userId == req.user.id);
      if (find1) {
        await Post.findByIdAndUpdate(
          { _id: post._id },
          {
            $pull: {
              comments: {
                userId: req.user.id,
              },
            },
          },
        );
        await Post.findByIdAndUpdate(
          { _id: post._id },
          {
            $push: {
              comments: {
                userId: req.user.id,
                username,
                pdp,
              },
            },
          },
        );
      }
      //update likes
      const find2 = post.likes.find((lk) => lk.userId == req.user.id);
      if (find1) {
        await Post.findByIdAndUpdate(
          { _id: post._id },
          {
            $pull: {
              likes: {
                userId: req.user.id,
              },
            },
          },
        );
        await Post.findByIdAndUpdate(
          { _id: post._id },
          {
            $push: {
              likes: {
                userId: req.user.id,
                username,
                pdp,
              },
            },
          },
        );
      }
    }),
  );

  res.status(200).json({ message: 'user updated with success' });

  //return res.status.json({message: "user updated with success"});
});

// @desc    remove account
// @route   DELETE /users/id
// @access  Private

exports.removeUser = asyncHandler(async (req, res) => {
  const userId = req.params.id;
  const user = await User.findById(userId);
  if (user) {
    await user.remove();
    await Post.deleteMany({ userId });
    await Post.updateMany(
      {},
      {
        $pull: {
          like: { userId: userId },
          comments: { userId: userId },
        },
      },
      { multi: true },
    );
    await User.updateMany(
      {},
      {
        $pull: {
          followers: { userId: userId },
          following: { userId: userId },
        },
      },
      { multi: true },
    );
    res.json({ message: "User's account removed" });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

exports.getUsers = asyncHandler(async (req, res) => {
  const q = req.query.q ? req.query.q : '';
  var users = [];
  if (q != '')
    users = await User.find(
      { username: { $regex: q.toLowerCase(), $options: 'i' } },
      'username pdp',
    ).exec();
  res.status(200).json(users);
});

exports.getSuggestion = asyncHandler(async (req, res) => {
  const currentUser = await User.findById(req.user.id);

  const map = currentUser.following.map((fl) =>
    mongoose.Types.ObjectId(fl.userId),
  );
  map.push(mongoose.Types.ObjectId(req.user.id));
  const toto = await User.aggregate([
    { $match: { _id: { $nin: map } } },
    { $sample: { size: 10 } },
    { $project: { _id: 1, username: 1, pdp: 1 } },
  ]);
  res.status(200).json(toto);
});

// exports.updateUser = asyncHandler(async(req, res) => {
//     const {username, bio, email, pdp}
// })
