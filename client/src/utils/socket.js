import io from "socket.io-client";

const utils = {
  socket: io(),
  user: localStorage.getItem("currentUserId"),
};

export default utils;
