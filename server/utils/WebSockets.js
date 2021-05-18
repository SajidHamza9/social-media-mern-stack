class WebSockets {
  //  holds the list of all the active users
  users = [];
  // takes our server instance
  connection = (socket) => {
    // when a user connection is lost this method will be called
    socket.on("disconnect", () => {
      this.users = this.users.filter((user) => user.socketId !== socket.id);
    });
    // when user logs in he will make a connection with our socket by giving its id
    socket.on("identity", (userId) => {
      this.users.push({
        socketId: socket.id,
        userId: userId,
      });
      socket.emit("loggedIn", [
        ...new Set(this.users.map((item) => item.userId)),
      ]);
      console.log("sent ");
    });
  };
}

module.exports = new WebSockets();
