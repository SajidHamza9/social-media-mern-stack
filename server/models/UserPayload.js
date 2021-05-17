var mongoose = require('mongoose');
const Schema = mongoose.Schema;
module.exports = UserShema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    username: {
      type: String,
      required: true,
    },
    pdp: {
      type: String,
      required: true,
    },
  },
  { _id: false }
);
