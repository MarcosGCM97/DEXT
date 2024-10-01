const equipoRouter = require('express').Router()
const equipoController = require('../controller/equipoController')


equipoRouter.post('/', equipoController.createdJugador)

equipoRouter.get('/', equipoController.getEquipo)

equipoRouter.get('/:id', equipoController.getUnJugador)

equipoRouter.put('/:id', equipoController.updatedJugador)

equipoRouter.delete('/:id', equipoController.deleteJugador)


module.exports = equipoRouter