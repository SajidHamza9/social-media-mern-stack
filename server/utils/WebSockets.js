const Conversation = require("../models/Conversation");
const User = require("../models/User");
class WebSockets {
  users = [];
  connection = (socket) => {
    socket.on("disconnect", async () => {
      // this.expired.push(socket.id);
      this.users = this.users.filter((user) => user.socketId !== socket.id);
    });
    socket.on("identity", async (user) => {
      this.users.push({
        socketId: socket.id,
        userId: user,
      });
      console.log(this.users);

      const loggedIn = await User.find(
        { status: true },
        { _id: 1, pdp: 1, username: 1, status: 1 }
      );
      // get friend's sockets id and send them

      // send to all users TODO
      global.io.sockets.emit("loggedIn", loggedIn);
    });
    socket.on("message", (message) => {
      const toSend = this.users.find(
        (user) => user.userId === message.receiver
      );
      if (toSend) {
        global.io.to(toSend.socketId).emit("message", { message });
      }
    });

    socket.on("logout", async (user) => {
      this.users = this.users.filter((user) => user.socketId !== socket.id);
      const loggedIn = await User.find(
        { status: true },
        { _id: 1, pdp: 1, username: 1, status: 1 }
      );
      // get friend's sockets id and send them
      console.log(this.users);
      // send to all users TODO
      global.io.sockets.emit("loggedIn", loggedIn);
    });
  };
}

module.exports = new WebSockets();
