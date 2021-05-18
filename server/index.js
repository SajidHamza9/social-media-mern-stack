const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorMiddleware");
const postRoutes = require("./routes/api/posts");
const socketio = require("socket.io");
const WebSockets = require("./utils/WebSockets");
//middeleware
const auth = require("./middleware/auth");
const app = express();

dotenv.config();
connectDB();

//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//use routes api
app.use("/api/users", require("./routes/api/users"));
app.use("/api/users", require("./routes/api/follows"));

app.use("/posts", postRoutes);
app.use(errorHandler);

const server = app.listen(process.env.PORT, () => {
  console.log("server running");
});
/** Create socket connection */
global.io = socketio(server);
global.io.on("connection", WebSockets.connection);
