const mongoose = require('mongoose')
const companySchema = require('./company')
const cardGameSchema = require('./cardgame')
const boardGameSchema = require('./boardgame')
const figureSchema = require('./figure')

const Company = mongoose.model('Company', companySchema)
const CardGame = mongoose.model('CardGame', cardGameSchema)
const BoardGame = mongoose.model('BoardGame', boardGameSchema)
const Figure = mongoose.model('Figure', figureSchema)

module.exports = {
  Company,
  CardGame,
  BoardGame,
  Figure
}
