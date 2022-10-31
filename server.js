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

app.use('/api', routes)

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
