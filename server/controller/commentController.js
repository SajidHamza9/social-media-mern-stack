const Post = require('../models/Posts');
const User = require('../models/User');
const asyncHandler = require('express-async-handler');
const mongoose = require('mongoose');

// @route Post api/posts/:id/comments
// @desc  Add comment to post
// @access Private
exports.addComment = asyncHandler(async (req, res) => {
  const id = req.params.id;
  // if(!mongoose.Types.ObjectId.isValid(id)){
  //     res.status(400);
  //     throw new Error('Params Invalid');
  // }

  const { comment } = req.body;
  //find current user
  const currentUser = await User.findById(req.user.id);

  const post = await Post.findById(id);
  if (!post) {
    res.status(400);
    throw new Error('Post not Found');
  }
  const commentaire = {
    comment,
    userId: currentUser._id,
    username: currentUser.username,
    pdp: currentUser.pdp,
  };
  post.comments.push(commentaire);
  await post.save();

  return res.status(201).json(post);
});

exports.updateComment = asyncHandler(async (req, res) => {
  const { idPost, idComment } = req.params;
  const commentBody = req.body.comment;
  // if(!mongoose.Types.ObjectId.isValid(idPost) || !mongoose.Types.ObjectId.isValid(idComment)) {
  //     res.status(400);
  //     throw new Error('Invalid params');
  // }

  const post = await Post.findById(idPost);

  const index = post.comments.findIndex((comment) => comment._id == idComment);

  //update comment
  post.comments[index].comment = commentBody;
  await post.save();
  return res.status(200).json({ msg: 'updated true', post: post });
});

exports.deleteComent = asyncHandler(async (req, res) => {
  const { idPost, idComment } = req.params;
  if (
    !mongoose.Types.ObjectId.isValid(idPost) ||
    !mongoose.Types.ObjectId.isValid(idComment)
  ) {
    res.status(400);
    throw new Error('Invalid params');
  }

  const post = await Post.findById(idPost);

  const index = post.comments.findIndex((comment) => comment._id == idComment);

  //delete comment
  post.comments.splice(index, 1);
  await post.save();
  return res.status(200).json({ msg: 'deleted with success' });
});

exports.getComments = asyncHandler(async (req, res) => {
  const { idPost } = req.params;
  const post = await Post.findById(idPost);
  const comments = post.comments;
  return res.json({ comments: comments });
});
