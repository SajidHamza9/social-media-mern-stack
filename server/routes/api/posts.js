const express = require('express');
const router = express.Router();
const postController = require('../../controller/postController');

router.route('/:id/likes').post(postController.addLike);
router.route('/:id/likes').delete(postController.removeLike);

//partie brahim
router.post('/', postController.addPost);
router.route('/:id')
    .put(postController.updatePost)
    .delete(postController.deletePost);
      
module.exports = router;
