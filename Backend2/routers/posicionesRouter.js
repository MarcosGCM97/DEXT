const posicionesRouter = require('express').Router()
const posicionesController = require('../controller/posicionesController')

posicionesRouter.get('/', posicionesController.getPosiciones)

posicionesRouter.get('/:id', posicionesController.getUnaPosicion)

module.exports = posicionesRouter