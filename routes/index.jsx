import { route } from "express/lib/application";
import { createBgame, createCGame, createCompany, createFigure, deleteBGame, deleteCGame, deleteCompany, deleteFigure, getBgame, getCgame, getCompany, getFigure, updateBgame, updateCGame, updateCompany, updateFigure } from "../controllers/ClientController";

const { Company, CardGame, BoardGame, Figure } = require('./models')
const { Router } = require("express");
const controllers = require("../controllers");
const router = Router();

//Root
router.get('/', (req, res) => res.send('this is root'))

//Get routes
router.get('/company', getCompany)
router.get('/cgame', getCgame)
router.get('/bgame', getBgame)
router.get('/figure', getFigure)

//Post routes
router.post('/company', createCompany)
router.post('/cgame', createCGame)
router.post('/bgame', createBgame)
router.post('/figure', createFigure)

//Put routes
router.put('/company', updateCompany)
router.put('/cgame', updateCGame)
router.put('/bgame', updateBgame)
router.put('/figure', updateFigure)

//Delete routes
router.delete('/company', deleteCompany)
router.delete('/cgame', deleteCGame)
router.delete('/bgame', deleteBGame)
router.delete('/figure', deleteFigure)

module.exports = router;
