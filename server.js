const express = require('express')
const logger = require('morgan')
const routes = require('./routes')
const db = require('./db')
const cors = require('cors')
//Herokue Deploy Test
const PORT = process.env.PORT || 3001

const app = express()

app.use(express.json())
app.use(express.static(`${__dirname}/client/build`))
app.use(logger('dev'))
app.use(cors())
app.use('/api', routes)
app.get('/*', (req, res) => {
  res.sendFile(`${__dirname}/client/build/index.html`)
})

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
