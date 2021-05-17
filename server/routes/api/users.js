const express = require("express");
const router = express.Router();
// User model
const User = require("../../models/User");
//JWT
const jwt = require("jsonwebtoken");
//Bcryptjs
const bcrypt = require("bcryptjs");
//hash function
const { getHashPassowrd } = require("../../config/salt");
//middleware auth
const auth = require("../../middleware/auth");
//middleware validation register
const {
  registerValidation,
  loginValidation,
} = require("../../middleware/authValidation");
//Validation with express-validator
const { body, validationResult } = require("express-validator");

// @route POST api/users
// @desc Register new User
// @acess Public
router.post("/", registerValidation, (req, res) => {
  const { username, email, password } = req.body;
  const newUser = new User({
    username,
    email,
    password: getHashPassowrd(password),
  });

  newUser.save().then((user) => {
    jwt.sign(
      { id: user.id },
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
      }
    );
  });

  // //check for existing email
  // User.findOne({email})
  //     .then(user => {
  //         if(user)
  //             return res.status(400).json({msg: 'this email is already exist'})

  //         const newUser = new User({
  //             username,
  //             email,
  //             password: getHashPassowrd(password)
  //         });

  //         newUser.save().then( user => {
  //             jwt.sign(
  //                 {id: user.id},
  //                 require('../../config/key').jwtKeySecret,
  //                 { expiresIn: 4000},
  //                 (err, token) => {
  //                     if(err) throw err;
  //                     res.status(201).json({
  //                         token,
  //                         user: {
  //                             id: user.id,
  //                             username: user.username,
  //                             email: user.email
  //                         }
  //                     });
  //                 }
  //             )
  //         });
  //     })
});

//log in
router.post("/login", loginValidation, (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email }).then((user) => {
    if (!user) return res.status(400).json({ msg: "Invalid credentials" });
    //Verify the password
    bcrypt.compare(password, user.password).then((isEqual) => {
      if (!isEqual) return res.status(400).json({ msg: "Invalid credentials" });

      jwt.sign(
        { id: user.id },
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
        }
      );
    });
  });
});

// @route POST api/auth/user
// @desc Get user data
// @acess Private
router.get("/auth", auth, (req, res) => {
  User.findById(req.user.id)
    .select("-password")
    .then((user) => res.json(user));
});


module.exports = router;
