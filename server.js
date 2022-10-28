const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

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
app.post('/', (req, res) => {
  res.send('post route')
})

//Put Routes
app.get('/', (req, res) => {
  res.put('put route')
})

//Delete Routes
app.delete('/', (req, res) => {
  res.send('delete route')
})

//tTest route

app.get('/', (request, response) => {
  response.send({ msg: 'Server Running' })
})

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
