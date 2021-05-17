const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const errorHandler = require('./middleware/errorMiddleware');
const postRoutes = require('./routes/api/posts');
dotenv.config();
connectDB();

const app = express();

//middeleware
const auth = require('./middleware/auth');
//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//use routes api
app.use('/api/users', require('./routes/api/users'));
app.use('/api/users', require('./routes/api/follows'));

// app.get('/items', auth, (req, res) => {
//   res.send('hello from social network apk');
// });
app.use('/posts', postRoutes);
app.use(errorHandler);

app.listen(process.env.PORT, () => {
  console.log('server running');
});
