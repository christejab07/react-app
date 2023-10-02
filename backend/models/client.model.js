const mongoose  = require("mongoose")

const ClientSchema = new mongoose.Schema({
     username: {
          type: String,
          required: [true, 'please provide a username']
     },
     phoneNumber: {
          type: String,
          required: [true, 'please provide your phone number'],
          unique: [true, 'This phone number has already been taken']
     },
     email: {
          type: String, 
          required: [true, 'please provide a valid email'],
          unique: [true, 'This email has been already used.']
     },
     password: {
          type: String,
          required: [true, 'Enter a password']
     }
})

const client = new mongoose.model('Client', ClientSchema)
module.exports = client