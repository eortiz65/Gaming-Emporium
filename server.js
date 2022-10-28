const express = require('express')
const cors = require('cors')
const logger = require('morgan')

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

//Get Routes
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
