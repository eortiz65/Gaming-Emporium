const mongoose = require('mongoose')
const companySchema = require('./company')
const figureSchema = require('./figure')

const Company = mongoose.model('Company', companySchema)
const Figure = mongoose.model('Figure', figureSchema)

module.exports = {
  Company,
  Figure
}
