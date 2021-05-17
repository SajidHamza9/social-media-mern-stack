const { json } = require('express');
const asyncHandler = require('express-async-handler');
const Post = require('../models/Posts');
const User = require('../models/User');

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
    console.log(typeof all, ids);
    const posts = await Post.find({
      userId: {
        $in: ids,
      },
    });
    res.json(posts);
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
  const user = await User.findById(userId).select(
    '-password -posts -__v -createdAt -updatedAt',
  );
  if (user) {
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
