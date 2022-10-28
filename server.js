const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const PORT = process.env.PORT || 3001

const app = express()

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})

//Get Routes
app.get('/', (req, res) => {
  res.send('get route')
})

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
