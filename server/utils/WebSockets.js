const Conversation = require('../models/Conversation');
const User = require('../models/User');
class WebSockets {
  users = [];
  connection = (socket) => {
    socket.on('disconnect', async () => {
      // this.expired.push(socket.id);
      this.users = this.users.filter((user) => user.socketId !== socket.id);
    });
    socket.on('identity', async (user) => {
      this.users.push({
        socketId: socket.id,
        userId: user,
      });
      console.log(this.users);

      let loggedIn = await User.find(
        { status: true },
        { _id: 1, pdp: 1, username: 1, status: 1 },
      );
      // get friend's sockets id and send them
      let friends = await User.findOne({ _id: user }, { _id: 0, following: 1 });
      friends = friends.following?.map((friend) => friend.userId);
      loggedIn = loggedIn.filter((user) => friends.includes(user._id));
      socket.emit('loggedIn', loggedIn);
    });
    socket.on('message', (message) => {
      const toSend = this.users.find(
        (user) => user.userId === message.receiver,
      );
      if (toSend) {
        global.io.to(toSend.socketId).emit('message', { message });
      }
    });

    socket.on('logout', async (user) => {
      this.users = this.users.filter((user) => user.socketId !== socket.id);
      let loggedIn = await User.find(
        { status: true },
        { _id: 1, pdp: 1, username: 1, status: 1 },
      );
      // get friend's sockets id and send them
      console.log(this.users);
      // send to all users TODO
      let friends = await User.findOne({ _id: user }, { _id: 0, following: 1 });
      friends = friends.following?.map((friend) => friend.userId);
      loggedIn = loggedIn.filter((user) => friends.includes(user._id));
      socket.emit('loggedIn', loggedIn);
    });
  };
}

module.exports = new WebSockets();
