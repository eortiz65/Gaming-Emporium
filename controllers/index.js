const Company = require('../models/company')
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

const getFigure = async (req, res) => {
  try {
    const figure = await Figure.find()
    return res.status(200).json({ figure })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

//Update items
const updateCompany = async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(company)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateFigure = async (req, res) => {
  try {
    const figure = await Figure.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(figure)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

//Delete item
const deleteCompany = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Company.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Company deleted')
    }
    throw new Error('Company not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteFigure = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Figure.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Figure deleted')
    }
    throw new Error('Figure not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createCompany,
  createFigure,
  getFigure,
  getCompany,
  updateFigure,
  updateCompany,
  deleteCompany,
  deleteFigure
}
