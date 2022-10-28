const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const { Company, CardGame, BoardGame, Figure } = require('./models')

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Root
app.get('/', (req, res) => {
  res.send('This is root!')
})

//middleware
app.get(
  '/middleware',
  (request, response, next) => {
    console.log('this is middleware')
    next()
  },
  (req, res) => {
    res.send('response completed')
  }
)

//Get Routes
app.get('/company', async (req, res) => {
  const company = await Company.find({})
  res.json(company)
})

app.get('/company/:id', async (req, res) => {
  const { id } = req.params
  const company = await Company.findById(id)
  res.json(company)
})

app.get('/cgame', async (req, res) => {
  const cgame = await CardGame.find({})
  res.json(cgame)
})

app.get('/cgame/:id', async (req, res) => {
  const { id } = req.params
  const cgame = await CardGame.findById(id)
  res.json(cgame)
})

app.get('/bgame', async (req, res) => {
  const bgame = await BoardGame.find({})
  res.json(bgame)
})

app.get('/bgame/:id', async (req, res) => {
  const { id } = req.params
  const bgame = await BoardGame.findById(id)
  res.json(bgame)
})

app.get('/figure', async (req, res) => {
  const figure = await Figure.find({})
  res.json(figure)
})

app.get('/figure/:id', async (req, res) => {
  const { id } = req.params
  const figure = await Figure.findById(id)
  res.json(figure)
})

//Post Routes
app.post('/placeholder', (req, res) => {
  res.send('post route')
})

//Put Routes
app.get('/placeholder', (req, res) => {
  res.put('put route')
})

//Delete Routes
app.delete('/placeholder', (req, res) => {
  res.send('delete route')
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
