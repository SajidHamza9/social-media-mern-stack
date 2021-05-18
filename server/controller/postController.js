const asyncHandler = require('express-async-handler');
const Post = require('../models/Posts');
const User = require('../models/User');
const mongoose = require('mongoose');


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
    res.status(201).json({ message: 'Like added' });
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

// @route POST api/posts
// @desc create new Post
// @access Private
exports.addPost = (req, res) => {
    const {image, caption} = req.body;
    console.log(req.user.id);
    User.findById(req.user.id)
        .then(user => {
          const newPost = new Post({
            userId: user._id,
            image,
            caption
          });
          newPost.save().then(post => {
            const postId = {
              postId: post._id
            };
            user.posts.push(postId);
            user.save().then(() => res.status(201).json(post))
                        .catch(err => res.status(400).json({error: true, message: 'err'}));
          }).catch(err => res.status(400).json({error: true, message: err}))
        })
        .catch(err => res.status(400).json({error: true, message: err}))
}

// @route Put api/posts/:id
// @desc  Update post
// @access Private
exports.updatePost = (req, res) => {
  const { caption } = req.body;
  const idPost = req.params.id;
  Post.findById(idPost)
      .then(post => {
        post.caption = caption;
        post.save().then(updatedPost => res.status(200).json(updatedPost));
      })
      .catch(err => res.status(400).json({error: true, message: "post not found"}));
};

// @route delete api/posts/:id
// @desc  delete post
// @access Private
exports.deletePost = (req, res) => {
  const idPost = req.params.id;
  Post.deleteOne({_id: idPost})
      .then(() => {
        
        User.findById(req.user.id)
            .then(user => {
              const index = user.posts.findIndex(post => post.postId == idPost);
              if(index > -1) user.posts.splice(index, 1);
              user.save().then(() => res.status(200).json({msg: "post deleted with success"}));
            })
            .catch(err => res.status(400).json({error: true, msg: err}))
      })
      .catch(err =>  res.status(400).json({error: true, message: "post not found"}))
}






