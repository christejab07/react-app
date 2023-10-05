require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes/client.route')
const cors = require('cors')
const app = express()

mongoose.connect(process.env.MONGO_URI, {
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
     res.send({message: "Welcome to our app."})
})

app.listen(5000, () =>{
     console.log('app running on port 5000...');
})