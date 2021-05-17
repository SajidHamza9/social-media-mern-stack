const express = require('express');
const router = express.Router();
const postController = require('../../controller/postController');

router.route('/:id/likes').post(postController.addLike);
router.route('/:id/likes').delete(postController.removeLike);

module.exports = router;
