const { Schema } = require('mongoose')

const companySchema = new Schema(
  {
    id: { type: String, required: true }
    name: { type: String, required: true },
    url: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = companySchema
