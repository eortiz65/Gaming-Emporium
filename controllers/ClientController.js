const Company = require('../models/company')
const Cgame = require('../models/cardgame')
const Bgame = require('../models/boardgame')
const Figure = require('../models/figure')

//Create new Item
const createCompany = async (req, res) => {
  try {
    const company = await new Company(req.body)
    await company.save()
    return res.status(201).json({
      company
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const createCGame = async (req, res) => {
  try {
    const cgame = await new Cgame(req.body)
    await cgame.save()
    return res.status(201).json({
      cgame
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const createBgame = async (req, res) => {
  try {
    const bgame = await new Bgame(req.body)
    await bgame.save()
    return res.status(201).json({
      bgame
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const createFigure = async (req, res) => {
  try {
    const figure = await new Figure(req.body)
    await figure.save()
    return res.status(201).json({
      figure
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

//Get all items
const getCompany = async (req, res) => {
  try {
    const company = await Company.find()
    return res.status(200).json({ company })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getCgame = async (req, res) => {
  try {
    const cgame = await Cgame.find()
    return res.status(200).json({ cgame })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getBgame = async (req, res) => {
  try {
    const bgame = await Bgame.find()
    return res.status(200).json({ bgame })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getFigure = async (req, res) => {
  try {
    const figure = await Figure.find()
    return res.status(200).json({ figure })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createCompany,
  createCGame,
  createBgame,
  createFigure,
  getFigure,
  getBgame,
  getCgame,
  getCompany
}
