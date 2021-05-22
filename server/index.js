const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const errorHandler = require("./middleware/errorMiddleware");
const postRoutes = require("./routes/api/posts");
const convRoutes = require("./routes/api/conversation.routes");
const msgRoutes = require("./routes/api/message.routes");
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
app.use("/api/users", require("./routes/api/authentification"));
app.use("/api/users", require("./routes/api/follows"));
//notifications
app.use("/api/notifications", require('./routes/api/notifications'));
// app.get('/items', auth, (req, res) => {
//   res.send('hello from social network apk');
// });
app.use('/api/posts', postRoutes);


app.use("/conversations", convRoutes);
app.use("/messages", msgRoutes);
app.use(errorHandler);

const server = app.listen(process.env.PORT, () => {
  console.log("server running");
});
/** Create socket connection */
global.io = socketio(server);
global.io.on("connection", WebSockets.connection);
