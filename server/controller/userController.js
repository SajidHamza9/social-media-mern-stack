const { json } = require('express');
const asyncHandler = require('express-async-handler');
const Post = require('../models/Posts');
const User = require('../models/User');
const mongoose = require('mongoose');
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
    user.following.map(fl => {
       const found = currentUser.following.find(cf => cf.userId.toString() === fl.userId.toString());
       found ? fl.isFollow = true : fl.isFollow = false;
       return fl;
    });
    user.followers.map(fl => {
      const found = currentUser.following.find(cf => cf.userId.toString() === fl.userId.toString());
      found ? fl.isFollow = true : fl.isFollow = false;
      return fl;
    });
    //found follow
    const found = currentUser.following.find(fl => fl.userId == userId);
    user._doc.isFollow = found ? true : false;
    res.json(user);
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// exports.updateUser = asyncHandler(async (req, res) => {
//     const userId = req.params.id;
//     const {username, bio, pdp} = req.body;
//     const user = await User.findById(userId, '_id');

//     if (user) {
//       res.json(user);
//     } else {
//       res.status(404);
//       throw new Error('User not found');
//     }
//   });

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
  console.log("get");
  const q = req.query.q ? req.query.q : '';

  const users = await User.find({username: {$regex: q, $options: 'i'} }, 'username pdp').limit(5).exec();
  res.status(200).json(users);
});

exports.getSuggestion = asyncHandler(async(req, res) => {
  const currentUser = await User.findById(req.user.id);

  const map = currentUser.following.map(fl => mongoose.Types.ObjectId(fl.userId));
  console.log(map);
  const toto = await User.aggregate([
    {$match: {_id: {$nin: map}}},
    {$sample: {size: 10}},
    { $project : { _id: 1, username: 1 } } 
  ]);
    res.status(200).json(toto);
})

// exports.updateUser = asyncHandler(async(req, res) => {
//     const {username, bio, email, pdp}
// })
