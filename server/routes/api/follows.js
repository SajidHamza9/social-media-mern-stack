const express = require('express');
const router = express.Router();
const followsController = require('../../controller/followsController');

router.route('/:id/followers').get(followsController.getFollowers);
router.route('/:id/following').get(followsController.getFollowing);
router.route('/:id/following').delete(followsController.deleteFollowing);
router.route('/:id/following').post(followsController.addFollowing);

module.exports = router;