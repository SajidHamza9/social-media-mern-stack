const asyncHandler = require('express-async-handler');
const User = require('../models/User');
//JWT
const jwt = require('jsonwebtoken');
//Bcryptjs
const bcrypt = require('bcryptjs');
const { getHashPassowrd } = require('../config/salt');
//@Method Register
//desc register new User
//acess Public

exports.register = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    const newUser = new User({
      username,
      email,
      password: getHashPassowrd(password),
    });

    const user = await newUser.save();

    jwt.sign(
        { id: user._id },
        process.env.jwtKeySecret,
        { expiresIn: 4000 },
        (err, token) => {
          if (err) throw err;
          res.status(201).json({
            token,
            user: {
              id: user.id,
              username: user.username,
              email: user.email,
            },
          });
        },
      );

});

exports.login = asyncHandler(async(req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({email});
    if(!user) {
        res.status(400);
        throw new Error("Invalid Credentials !!!");
    }
    const isEqual = await bcrypt.compare(password, user.password);
    if(!isEqual){
       return res.status(400).json({msg: "invalid cccerrr"});
    }
    user.status = true;
    await user.save();
    jwt.sign(
      { id: user.id },
      process.env.jwtKeySecret,
      { expiresIn: 4000 },
      (err, token) => {
        if (err) throw err;
        res.status(200).json({
          token,
          user: {
            id: user.id,
            username: user.username,
            email: user.email,
          },
        });
      },
    );
    
});

exports.logout = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user.id);
    if(!user) {
        res.status(400);
        throw new Error("Invalid Credentials !!!");
    }
    user.status = false;
    await user.save();
    return res.status(200).json({message: "logout with success"});
})

exports.getAuth = (req, res) => {
    User.findById(req.user.id)
    .select('-password')
    .then(user => res.status(200).json(user))
}