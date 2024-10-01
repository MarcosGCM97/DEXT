import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/'

const getAll = async (tipo) => {
  try{
    const response = await axios.get(`${baseUrl}${tipo}`)

    return response.data
  } catch(error){
    console.log('error de fetching de datos:', error)
    throw error
  }
}

const getOne = async (id, tipo) => {
  try{
    const response = await axios.get(`${baseUrl}${tipo}/${id}`)

    return response.data
  } catch(error){
    console.log('error de fetchin de datos:', error)
    throw error
  }
}

const create = async (jugador, tipo) => {
  try{
    const response = await axios.post(`${baseUrl}${tipo}`, jugador)

    return response.data
  } catch(error){
    console.log('Error de fetching de datos', error)
    throw error
  }

}

const update = async (jugador, id, tipo) => {
  try{
    const response = await axios.put(`${baseUrl}${tipo}/${id}`, jugador)

    return response.data
  } catch(error){
    console.log('Error de fetching de datos', error)
    throw error
  }

}

const deleteJugador = async (id, tipo) => {
  try{
    const response = await axios.delete(`${baseUrl}${tipo}/${id}`)

    return response.data
  } catch(error){
    console.log('Error de fetching de datos', error)
    throw error
  }

}


export default { getAll, getOne, create, update, deleteJugador }