const asyncHandler = require('express-async-handler');
const Post = require('../models/Posts');
const User = require('../models/User');
exports.getFollowers = asyncHandler(async (req, res) => {
    User.findById({ _id: req.params.id }, async (err, data) => {
        if (err) {
            await res
                .status(500)
                .json({
                    message: "error",
                    err: err
                })
        } else {
            if (data.followers.length == 0) {
                res.status(200).json({
                    message: "there is no followers"
                });
            } else {
                res.status(200).json({
                    followers: data.followers
                });
            }
        }
    });
});
exports.getFollowing = asyncHandler(async (req, res) => {
    User.findById({ _id: req.params.id }, async (err, data) => {
        if (err) {
            await res
                .status(500)
                .json({
                    message: "error",
                    err: err
                })
        } else {
            if (data.following.length == 0) {
                res.status(200).json({
                    message: "there is no following"
                });
            } else {
                res.status(200).json({
                    following: data.following
                });
            }
        }
    });
});
exports.deleteFollowing = asyncHandler(async (req, res) => {
    User.findById({ _id: req.body.id }, async (err, data) => {
        if (err) {
            await res
                .status(404)
                .json({
                    message: `Cannot find user with this ID : ${req.params.id}`,
                    err: err
                })
        } else {
            User.findByIdAndUpdate(
                { _id: req.params.id },
                {
                    $pull: {
                        following: {
                            userId: req.body.id,
                        }
                    }
                },
                async (err, data1) => {
                    if (err) {
                        await res
                            .status(404)
                            .send(`Cannot find follower with this ID : ${req.body.id}`);
                    } else {
                        res.status(201).json({
                            message: "friend deleted  to the list of following"
                        });
                    }
                }
            );
            User.findByIdAndUpdate(
                { _id: req.body.id },
                {
                    $pull: {
                        followers: {
                            userId: req.params.id,
                        }
                    }
                },
                async (err, data1) => {
                    if (err) {
                        await res
                            .status(404)
                            .send(`Cannot find follower with this ID : ${req.params.id}`);
                    } else {
                        res.status(201).json({
                            message: "friend deleted  to the list of followers"
                        });
                    }
                }
            );
        }
    })
});
exports.addFollowing = asyncHandler(async (req, res) => {
    User.findById({ _id: req.body.id }, async (err, data) => {
        if (err) {
            await res
                .status(404)
                .json({
                    message: `Cannot find user with this ID : ${req.params.id}`,
                    err: err
                })
        } else {
            User.findByIdAndUpdate(
                { _id: req.params.id },
                {
                    $push: {
                        following: {
                            userId: req.body.id,
                            username: data.username,
                            pdp: data.pdp
                        }
                    }
                },
                async (err, data1) => {
                    if (err) {
                        await res
                            .status(404)
                            .send(`Cannot find follower with this ID : ${req.params.id}`);
                    } else {
                        res.status(201).json({
                            message: "follow added to the list of following"
                        });
                    }
                }
            );
            User.findByIdAndUpdate(
                { _id: req.body.id },
                {
                    $push: {
                        followers: {
                            userId: req.params.id,
                            username: data1.username,
                            pdp: data1.pdp
                        }
                    }
                },
                async (err, data2) => {
                    if (err) {
                        await res
                            .status(404)
                            .send(`Cannot find follower with this ID : ${req.params.id}`);
                    } else {
                        res.status(201).json({
                            message: "follow added to the list of following"
                        });
                    }
                }
            );
        }
    })
});