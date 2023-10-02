require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes/client.route')
const cors = require('cors')
const app = express()
let arr = [
     {
       "_id": "651adecbc3073657df7333fb",
       "username": "christelle",
       "phoneNumber": "+250 79123454",
       "email": "christelle@gmail.com",
       "password": "12345",
       "__v": 0
     },
     {
       "_id": "651adf27c3073657df7333ff",
       "username": "sereine",
       "phoneNumber": "+9 2345676543234",
       "email": "sereine@yahoo.en",
       "password": "sere1234",
       "__v": 0
     },
     {
       "_id": "651adf50c3073657df733403",
       "username": "sandrine",
       "phoneNumber": "+456 123098345",
       "email": "sando@yahoo.en",
       "password": "sando12",
       "__v": 0
     },
     {
       "_id": "651adf90c3073657df733405",
       "username": "steven",
       "phoneNumber": "+33 1298345",
       "email": "steve@yahoo.fr",
       "password": "steve10",
       "__v": 0
     },
     {
       "_id": "651ae974257a7dbe7c195e1a",
       "username": "qodahakid",
       "phoneNumber": "+1 (768) 251-3656",
       "email": "koricyr@mailinator.com",
       "password": "Pa$$w0rd!",
       "__v": 0
     }
   ]
// const connection = mongoose.createConnection(process.env.MONGO_URI);

// connection.on('connected', function() {
//   console.log('Connected to MongoDB Atlas!');
// });

// connection.on('error', function(err) {
//   console.log('Error connecting to MongoDB Atlas:', err);
// });
const MONGO_URI = 'mongodb+srv://christelle:12345@booking.ip4hc30.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(MONGO_URI, {
     useNewUrlParser: true,
     useUnifiedTopology: true
})
.then(() =>{
     console.log('database connected successfully.');
})
.catch(err =>{
     console.log(err.message);
})

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors())
app.use('/client', routes)
app.get('/', (req, res) =>{
     res.send(arr)
})

app.listen(5000, () =>{
     console.log('app running on port 5000...');
})