const mysql = require('mysql2/promise')

const connectDB = async () => {
  try {
    const conn = await mysql.createConnection({
      host: 'localhost',
      database: 'depx_db',
      user: 'root',
      password: ''
    })

    console.log('Connected!!')
    return conn
  } catch (error) {
    console.error('Error al conectar a base de datos', error)
    throw error
  }
}
module.exports = connectDB
