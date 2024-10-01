const connectDB = require('../connectionDB')

const getEquipo = async (req, res) => {
    const sql = `SELECT equipo.id, equipo.nombre, equipo.asistencia, equipo.juega, posiciones.posicion AS posicion, posiciones.numero AS numero FROM equipo JOIN posiciones ON equipo.posicion_id = posiciones.id`

    try {
        const connection = await connectDB()
        const [rows] = await connection.execute(sql)

        res.json(rows)
    } catch(err) {
        console.error('Error fetching de datos: ', err)
        response.status(500).send('Error de fetching de datos')
    }
}

const getUnJugador = async (req, res) => {
    const { id } = req.params
    const sql = `SELECT equipo.id, equipo.nombre, equipo.asistencia, equipo.juega, posiciones.posicion AS posicion, posiciones.numero AS numero FROM equipo JOIN posiciones ON equipo.posicion_id = posiciones.id WHERE equipo.id = ?`

    try {
        const connection = await connectDB()
        const [rows, fields] = await connection.execute(sql, [id])  
        
        res.json(rows[0])
    } catch (error) {
        console.error('Error fetching de datos: ', error)
        res.status(500).send('Error de fetching de datos')        
    }
}

const createdJugador = async (req, res) => {
    const { nombre, posicion_id, asistencia, juega } = req.body

    const sql = `INSERT INTO equipo (nombre, posicion_id, asistencia, juega) VALUES (?, ?, ?, ?)`
    
    try{
      const connection = await connectDB()
      
      await connection.execute(sql, [nombre, posicion_id, asistencia, juega])

      await connection.end()
      res.status(201).send('Jugador creado exitosamente')    
    }catch (error) {

      console.error('Error al crear jugador: ', error)
      res.status(500).send('Error al crear jugador')      
    }
}

const updatedJugador = async (req, res) => {
    const { id } = req.params
    const { nombre, posicion_id, asistencia, juega } = req.body

    const sql = `UPDATE equipo SET nombre = ?, posicion_id = ?, asistencia = ?, juega = ? WHERE id = ?`

    try {
      const connection = await connectDB()
      await connection.execute(sql, [nombre, posicion_id, asistencia, juega, id])  

      await connection.end()
      res.status(200).send('Jugador actualizado correctamente')
    } catch (error) {
        console.error('Error al actualizar jugador: ', error);
        res.status(500).send('Error al actualizar jugador');
    }
}

const deleteJugador = async (req, res) => {
    const { id } = req.params
    const sql = 'DELETE FROM equipo WHERE id = ?'

    try {
      const connection = await connectDB()
      await connection.execute(sql, [id])

      await connection.end()
      res.status(204).send('Jugador borrado con exito')
    } catch (error) {
      console.error('Error al borrar jugador: ', error);
      res.status(500).send('Error al borrar jugador');        
    }
}

module.exports = { 
    getEquipo,
    getUnJugador,
    createdJugador,
    updatedJugador,
    deleteJugador
}