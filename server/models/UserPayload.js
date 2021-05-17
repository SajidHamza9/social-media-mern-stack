<<<<<<< HEAD
var mongoose = require('mongoose');
const Schema = mongoose.Schema;
=======
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

>>>>>>> b50e4ef82f75bf0888f032197a0014ed52dcc369
module.exports = UserShema = new Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
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
  { _id: false },
);
