const express = require('express');
const router = express.Router();
const followsController = require('../../controller/followsController');
const auth = require('../../middleware/auth');

router.route('/followers').get(auth, followsController.getFollowers);
router.route('/following').get(auth, followsController.getFollowing);
router.route('/following').delete(auth, followsController.deleteFollowing);
router.route('/following').post(auth, followsController.addFollowing);

module.exports = router;
