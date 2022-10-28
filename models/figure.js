const { Schema } = require('mongoose')

const figureSchema = new Schema(
  {
    name: { type: String, required: true },
    url: { type: String, required: true },
    details: { type: String, required: true },
    price: { type: String, required: true },
    company: { type: Schema.Types.ObjectId, ref: 'Company' }
  },
  { timestamps: true }
)

module.exports = figureSchema
