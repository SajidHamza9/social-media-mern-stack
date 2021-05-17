const express = require('express');
const dotenv = require('dotenv').config();
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorMiddleware');
const postRoutes = require('./routes/api/posts');


connectDB();

const app = express();

//middeleware
const auth = require('./middleware/auth');
//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//use routes api
app.use('/api/users', require('./routes/api/users'));

// app.get('/items', auth, (req, res) => {
//   res.send('hello from social network apk');
// });
app.use('/posts', postRoutes);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log('server running');
});
