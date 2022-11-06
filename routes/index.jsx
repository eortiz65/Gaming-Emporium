const { Router } = require('express')
const router = Router()
const controllers = require('../controllers/index.js')

//Root
router.get('/', (req, res) => res.send('this is root'))

//Get routes
router.get('/company', controllers.getCompany)
router.get('/figure', controllers.getFigure)

//Post routes
router.post('/addcompany', controllers.createCompany)
router.post('/addfigure', controllers.createFigure)

//Put routes
router.put('/company/:id', controllers.updateCompany)
router.put('/figure/:id', controllers.updateFigure)

//Delete routes
router.delete('/company/:id', controllers.deleteCompany)
router.delete('/figure/:id', controllers.deleteFigure)

module.exports = router;
