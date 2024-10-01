const express = require('express')
const app = express()
const cors = require('cors')
const equipoRouter = require('./routers/equipoRouter')
const posicionesRouter = require('./routers/posicionesRouter')

app.use(cors())
app.use(express.json())

app.get('/', (request, response) => {
  response.send('<h1>Página de inicio</h1>')
})
app.use('/api/equipo', equipoRouter)
app.use('/api/posiciones', posicionesRouter)


module.exports = app