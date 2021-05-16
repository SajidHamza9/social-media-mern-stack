const UserPayload = require("./UserPayload");

CommentShema = new Schema(
  {
    comment: {
      type: String,
      required: true,
    },
    user: UserPayload,
  },
  { timestamps: true }
);

module.exports = PostShema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },

    image: {
      type: String,
    },
    caption: {
      type: String,
    },
    comments: [CommentShema],
    like: [UserPayload],
  },
  { timestamps: true }
);
