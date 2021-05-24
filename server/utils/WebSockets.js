const Conversation = require('../models/Conversation');
const User = require('../models/User');
class WebSockets {
  users = [];
  connection = (socket) => {
    socket.on('disconnect', () => {
      // this.expired.push(socket.id);
      this.users = this.users.filter((user) => user.socketId !== socket.id);
    });
    socket.on('identity', async (user) => {
      this.users.push({
        socketId: socket.id,
        userId: user,
      });
      console.log(this.users);
      // const loggedIn = this.users.map((user) => user.userId);
      // to remove
      await User.updateOne(
        { _id: user },
        {
          status: true,
        },
      );

      // get friend's sockets id and send them
      const loggedIn = await User.find(
        { status: true },
        { _id: 1, pdp: 1, username: 1, status: 1 },
      );

      // send to all users TODO
      global.io.sockets.emit('loggedIn', loggedIn);
    });
    socket.on('message', (message) => {
      const toSend = this.users.find(
        (user) => user.userId === message.receiver,
      );

      if (toSend) {
        global.io.to(toSend.socketId).emit('message', { message });
      }
    });
  };
}

module.exports = new WebSockets();
