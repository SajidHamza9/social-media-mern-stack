const bcrypt = require('bcryptjs');

const users = [
  {
    username: 'Hamza Sajid',
    email: 'sajid@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    bio: 'Hello World!',
    pdp: '/pdp/img.jpeg',
    status: true,
  },
  {
    username: 'Iliyas Boumour',
    email: 'boumour@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    bio: 'Hello World!',
    pdp: '/pdp/img.jpeg',
  },
  {
    username: 'Brahim Lqati',
    email: 'lqati@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    bio: 'Hello World!',
    pdp: '/pdp/img.jpeg',
  },
  {
    username: 'Abderrahmane Bouzzit',
    email: 'bouzzit@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    bio: 'Hello World!',
    pdp: '/pdp/img.jpeg',
    status: true,
  },
];

module.exports = users;
