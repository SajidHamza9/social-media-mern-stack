const express = require('express');
const router = express.Router();
const followsController = require('../../controller/followsController');
const auth = require('../../middleware/auth');

router.route('/:id/followers').get(auth, followsController.getFollowers);
router.route('/:id/following').get(auth, followsController.getFollowing);
router.route('/following/:id').delete(auth, followsController.deleteFollowing);
router.route('/following').post(auth, followsController.addFollowing);

module.exports = router;
