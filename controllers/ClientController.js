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

const updateCGame = async (req, res) => {
  try {
    const cgame = await Cgame.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(cgame)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateBgame = async (req, res) => {
  try {
    const bgame = await Bgame.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(bgame)
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

const deleteCGame = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Cgame.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Card Game deleted')
    }
    throw new Error('Card Game  not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteBGame = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Bgame.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Board Game deleted')
    }
    throw new Error('Board game not found')
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
  createCGame,
  createBgame,
  createFigure,
  getFigure,
  getBgame,
  getCgame,
  getCompany,
  updateFigure,
  updateBgame,
  updateCGame,
  updateCompany,
  deleteCompany,
  deleteFigure,
  deleteBGame,
  deleteCGame
}
