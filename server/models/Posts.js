const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const UserPayload = require('./UserPayload');

const CommentSchema = new Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    user: UserPayload,
  },
  { timestamps: true },
);

const PostSchema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },

    image: {
      type: String,
    },
    caption: {
      type: String,
    },
    comments: [CommentSchema],
    likes: [UserPayload],
  },
  { timestamps: true },
);

module.exports = mongoose.model('Post', PostSchema);
