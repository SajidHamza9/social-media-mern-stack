const User = require("../models/User");
class WebSockets {
  users = [];
  expired = [];
  connection = (socket) => {
    socket.on("disconnect", async () => {
      this.expired.push(socket.id);
    });
    socket.on("identity", async (user) => {
      if (user) {
        await User.updateOne(
          { _id: user._id },
          {
            status: true,
            $push: { tokens: socket.id },
          }
        );
        await User.updateOne(
          { _id: user._id },
          {
            status: true,
            $pullAll: { tokens: this.expired },
          }
        );
        this.users = await User.find(
          { status: true },
          { _id: 1, pdp: 1, username: 1 }
        );
        // send to all users TODO
        global.io.sockets.emit("loggedIn", this.users);
      }
    });
  };
}

module.exports = new WebSockets();
