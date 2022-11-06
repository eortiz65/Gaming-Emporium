const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Figure = new Schema(
  {
    id: { type: String, required: true },
    name: { type: String, required: true },
    url: { type: String, required: true },
    details: { type: String, required: true },
    price: { type: String, required: true },
    company: { type: Schema.Types.ObjectId, ref: 'Company' }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Figure', Figure)
