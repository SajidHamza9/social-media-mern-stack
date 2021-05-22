const asyncHandler = require('express-async-handler');
const Post = require('../models/Posts');
const User = require('../models/User');
const Notification = require('../models/Notifications');
const WebSockets = require('../utils/WebSockets');

// @desc    add like
// @route   POST /posts/:id/likes
// @access  Private

exports.addLike = asyncHandler(async (req, res) => {
  const { userId } = req.body;
  const post = await Post.findById(req.params.id);

  if (post) {
    const user = await User.findById(userId, 'username pdp _id').exec();
    if (!user) {
      res.status(404);
      throw new Error('User not found');
    }
    const alreadyLiked = post.likes.find(
      (item) => item.userId.toString() === user._id.toString(),
    );
    if (alreadyLiked) {
      res.status(400);
      throw new Error('Post already liked');
    }
    const userData = {
      username: user.username,
      pdp: user.pdp,
      userId: user._id,
    };
    post.likes.push(userData);
    await post.save();
    const notification = new Notification({
      type: 'LIKE',
      targetUserId: post.userId,
      currentUser: userData,
      postId: req.params.id,
    });
    const notif = await notification.save();
    const socketIds = WebSockets.users.filter((user) => {
      return user.userId.toString() === post.userId.toString();
    });
    socketIds.forEach((item) => {
      global.io.to(item.socketId).emit('notification', { notification: notif });
    });

    res.status(201).json({ message: 'Like added', notif });
  } else {
    res.status(404);
    throw new Error('Post not found');
  }
});

// @desc    remove like
// @route   DELETE /posts/:id/likes
// @access  Private

exports.removeLike = asyncHandler(async (req, res) => {
  const { userId } = req.body;
  const post = await Post.findById(req.params.id);

  if (post) {
    const user = await User.findById(userId, '_id').exec();
    if (!user) {
      res.status(404);
      throw new Error('User not found');
    }

    const likes = [...post.likes];
    const index = likes.findIndex(
      (like) => like.userId.toString() === user._id.toString(),
    );
    if (index > -1) {
      post.likes.splice(index, 1);
      await post.save();
      await Notification.deleteMany({
        postId: req.params.id,
        targetUserId: req.body.user,
      });
      res.status(201).json({ message: 'Like removed' });
    } else {
      res.status(404);
      throw new Error('Like not found');
    }
  } else {
    res.status(404);
    throw new Error('Post not found');
  }
});
