const bcrypt = require("bcryptjs");

const users = [
  {
    username: "Hamza Sajid",
    email: "sajid@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    bio: "Hello World!",
    pdp: "/images/img1.jpeg",
  },
  {
    username: "Iliyas Boumour",
    email: "boumour@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    bio: "Hello World!",
    pdp: "/images/man.png",
  },
  {
    username: "Brahim Lqati",
    email: "lqati@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    bio: "Hello World!",
    pdp: "/images/img2.jpeg",
  },
  {
    username: "Abderrahmane Bouzzit",
    email: "bouzzit@gmail.com",
    password: bcrypt.hashSync("123456", 10),
    bio: "Hello World!",
    pdp: "/images/img3.jpeg",
  },
];

module.exports = users;
