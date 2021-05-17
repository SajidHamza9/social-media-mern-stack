const mongoose = require('mongoose');
const UserPayload = require('./UserPayload');
const Schema = mongoose.Schema;
<<<<<<< HEAD
const PostShema = new mongoose.Schema(
=======

const PostSchema = new Schema(
>>>>>>> b50e4ef82f75bf0888f032197a0014ed52dcc369
  {
    postId: {
      type: Schema.Types.ObjectId,
      ref: 'Posts',
    },
  },
  { _id: false },
);
const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    bio: {
      type: String,
    },
    pdp: {
      type: String,
      default: '',
    },
    status: {
      type: Boolean,
      default: false,
    },
    posts: [PostSchema],
    followers: [UserPayload],
    following: [UserPayload],
  },
  { timestamps: true },
);

module.exports = mongoose.model('User', UserSchema);
