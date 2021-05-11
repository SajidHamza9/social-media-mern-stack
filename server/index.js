const express = require('express');
const mongoose = require('mongoose');
const app = express();


//middeleware
const auth = require('./middleware/auth');
//body parser
app.use(express.json());
app.use(express.urlencoded());

//DB coniguration
const db = require('./config/key').mongoURI;

// some other params for connection to mongoose
const params = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true  
}
//connection to mongoDB
mongoose.connect(db, params)
        .then(() => console.log('successful connection to mongoDB ...!'))
        .catch(err => console.log(`Failed connection : ${err}`))


//use routes api
app.use('/api/users', require('./routes/api/users'));


app.get('/items',auth, (req, res) => {
    res.send('hello from social etwork apk');
})

const port = 5000;

app.listen(port, () => {
    console.log('server running');
});