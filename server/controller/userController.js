const asyncHandler = require('express-async-handler');
const Post = require('../models/Posts');
const User = require('../models/User');

// @desc    get posts
// @route   GET /users/id/posts?all=true
// @access  Private

exports.getPosts = asyncHandler(async (req, res) => {
  const all = req.query.all === 'true';
  const userId = req.params.id;
  const user = await User.findById(userId, '_id following').exec();
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
