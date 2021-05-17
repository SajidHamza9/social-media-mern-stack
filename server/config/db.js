const mongoose = require('mongoose');

const connectDB = async () => {
  
  try {
    const conn = await mongoose.connect(process.env.mongoURI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
    });

    console.log('successful connection to mongoDB ...!');
  } catch (error) {
    console.log(`Failed connection : ${error}`);
    process.exit(1);
  }
};

module.exports = connectDB;
