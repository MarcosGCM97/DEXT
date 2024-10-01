import { useState, useEffect } from 'react'
import servicioEquipo from '../../../servicio/servicio'
import PropTypes from 'prop-types'
import DataContext from './DataContext'

function DataJugadores({ children }){
  const [data, setData] = useState([])

  useEffect(() => {
    servicioEquipo
      .getAll('posiciones')
      .then(response => setData(response))
      .catch(error => console.log(error))
  },[])

  return (
    <DataContext.Provider value ={{ data }}>
      {children}
    </DataContext.Provider>
  )
}

DataJugadores.propTypes = {
  children: PropTypes.array
}

export default DataJugadores
