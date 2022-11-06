import { route } from "express/lib/application";
const controllers = require('../controllers/index.js')

const { Company, CardGame, BoardGame, Figure } = require('./models')
const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

//Root
router.get('/', (req, res) => res.send('this is root'))

//Get routes
router.get('/company', controllers.getCompany)
router.get('/cgame', controllers.getCgame)
router.get('/bgame', controllers.getBgame)
router.get('/figure', controllers.getFigure)

//Post routes
router.post('/company', controllers.createCompany)
router.post('/cgame', controllers.createCGame)
router.post('/bgame', controllers.createBgame)
router.post('/figure', controllers.createFigure)

//Put routes
router.put('/company', controllers.updateCompany)
router.put('/cgame', controllers.updateCGame)
router.put('/bgame', controllers.updateBgame)
router.put('/figure', controllers.updateFigure)

//Delete routes
router.delete('/company', controllers.deleteCompany)
router.delete('/cgame', controllers.deleteCGame)
router.delete('/bgame', controllers.deleteBGame)
router.delete('/figure', controllers.deleteFigure)

module.exports = router;
