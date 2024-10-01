const connectDB = require('../connectionDB')

const getPosiciones = async (req, res) => {
    const sql = 'SELECT * FROM posiciones'

    try {
        const connection = await connectDB()
        const [rows, fields] = await connection.execute(sql)

        res.json(rows)
    } catch (error) {
        console.error('Error fetching de datos: ', error)
        response.status(500).send('Error de fetching de datos')        
    }
}

const getUnaPosicion = async (req, res) => {
    const { id } = req.params
    const sql = `SELECT * FROM posiciones WHERE id = ?`

    try {
        const connection = await connectDB()
        const [rows] = await connection.execute(sql, [id])  
        
        res.json(rows[0])
    } catch (error) {
        console.error('Error fetching de datos: ', error)
        res.status(500).send('Error de fetching de datos')        
    }
}

module.exports = {
    getPosiciones,
    getUnaPosicion
}