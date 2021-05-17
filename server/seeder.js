const mongoose = require('mongoose');
const dotenv = require('dotenv');
const users = require('./data/users');
const posts = require('./data/posts');
const User = require('./models/User');
const Post = require('./models/Posts');
const connectDB = require('./config/db');

dotenv.config();

connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Post.deleteMany();

    const createdUsers = await User.insertMany(users);

    const user = await User.findById(createdUsers[0]._id);
    createdUsers.forEach(async (u, index) => {
      if (index) {
        user.following.push({
          username: u.username,
          pdp: u.pdp,
          userId: u._id,
        });
        const _user = await User.findById(u._id);
        _user.followers.push({
          username: user.username,
          pdp: user.pdp,
          userId: user._id,
        });
        await _user.save();
      }
    });
    await user.save();

    const _posts = posts.map((post, index) => {
      return { ...post, userId: createdUsers[index]._id };
    });

    await Post.insertMany(_posts);

    console.log('Data Imported!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

const removeData = async () => {
  try {
    await User.deleteMany();
    await Post.deleteMany();

    console.log('Data Destroyed!');
    process.exit();
  } catch (error) {
    console.error(`${error}`);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  removeData();
} else {
  importData();
}
