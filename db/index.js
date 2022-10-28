const mongoose = require('mongoose')
require('dotenv').config()

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Succesful connection with MongoDB')
  })
  .catch((e) => {
    console.log('Connection Error', e.messages)
  })

const db = mongoose.connection

module.exports = db
