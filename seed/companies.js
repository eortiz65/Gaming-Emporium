const db = require('../db')
const Company = require('../models/company.js')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const companies = [
    {
      id: '1',
      name: 'Wizard of the Coast',
      url: 'https://images.ctfassets.net/ojjl8z69k7ls/45zLMlYttqmXYUVvCPhvgQ/782846e6fa1da89e2ca166568443f040/Meta-ShareImage.jpg'
    },
    {
      id: '2',
      name: 'Upper Deck',
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqi7RnsKTd8Ft4rB-90E52cwODft9YWg-U5A&usqp=CAU'
    },
    {
      id: '3',
      name: 'Rio Grande Games',
      url: 'https://d2k4q26owzy373.cloudfront.net/700x700/games/userfiles/1598031153800-RioGrandeGames-favicon-700x700.png'
    },
    {
      id: '4',
      name: 'Portal Games',
      url: 'https://d2k4q26owzy373.cloudfront.net/700x700/games/userfiles/1598033376386-LOGO_PORTAL_GAMES_HORIZONTAL_1000x.png'
    },
    {
      id: '5',
      name: 'Hasbro',
      url: 'https://images.ctfassets.net/ojjl8z69k7ls/45zLMlYttqmXYUVvCPhvgQ/782846e6fa1da89e2ca166568443f040/Meta-ShareImage.jpg'
    },
    {
      id: '6',
      name: 'Games Workshop',
      url: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/fe/Games_Workshop_logo.svg/1200px-Games_Workshop_logo.svg.png'
    }
  ]

  await Company.insertMany(companies)
  console.log('Created Companies')
}
const run = async () => {
  await main()
  db.close()
}

run()
