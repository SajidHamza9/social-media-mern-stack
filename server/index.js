const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const app = express();

dotenv.config();

//middeleware
const auth = require("./middleware/auth");
//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//DB coniguration
const db = process.env.mongoURI;

// some other params for connection to mongoose
const params = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
//connection to mongoDB
mongoose
  .connect(db, params)
  .then(() => console.log("successful connection to mongoDB ...!"))
  .catch((err) => console.log(`Failed connection : ${err}`));

//use routes api
app.use("/api/users", require("./routes/api/users"));

app.get("/items", auth, (req, res) => {
  res.send("hello from social network apk");
});

app.listen(process.env.PORT, () => {
  console.log("server running");
});
