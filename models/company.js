const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Company = new Schema(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    url: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Company', Company)
