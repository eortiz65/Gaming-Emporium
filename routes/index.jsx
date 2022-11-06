const { Router } = require('express')
const router = Router()
const controllers = require('../controllers/index.js')

//Root
router.get('/', (req, res) => res.send('this is root'))

//Get routes
router.get('/company', controllers.getCompany)
router.get('/figure', controllers.getFigure)

//Post routes
router.post('/company', controllers.createCompany)
router.post('/figure', controllers.createFigure)

//Put routes
router.put('/company', controllers.updateCompany)
router.put('/figure', controllers.updateFigure)

//Delete routes
router.delete('/company', controllers.deleteCompany)
router.delete('/figure', controllers.deleteFigure)

module.exports = router;
