const express = require('express');
const router = express.Router();
const postController = require('../../controller/postController');
const commentController = require('../../controller/commentController');
const auth = require('../../middleware/auth');
const paramsValidation = require('../../middleware/paramsValidation');
const { addPostValidation, commentValidation } = require('../../middleware/postsValidation');
const errorMiddleware = require('../../middleware/errorMiddleware');
const errorHandler = require('../../middleware/errorMiddleware');

router.route('/:id/likes').post(postController.addLike);
router.route('/:id/likes').delete(postController.removeLike);

//partie brahim
router.post('/',[auth, addPostValidation], postController.addPost);
router.route('/:id')
    .put(postController.updatePost)
    .delete(auth, postController.deletePost);

//management comments routes
router.post('/:id/comments', [auth,paramsValidation(['id']), commentValidation], commentController.addComment);
router.get('/:idPost/comments/:bo', paramsValidation(['idPost', 'bo']), commentController.getComments);
router.route('/:idPost/comments/:idComment')
      .put([auth,paramsValidation(['idPost','idComment']), commentValidation], commentController.updateComment)
      .delete([auth,paramsValidation(['idPost','idComment'])], commentController.deleteComent);
      
module.exports = router;
