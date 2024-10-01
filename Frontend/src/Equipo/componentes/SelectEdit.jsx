import { useContext } from 'react'
import PropTypes from 'prop-types'
import DataContext from './ContextHookDatos/DataContext'

const SelectEditar = ({ defaultValue, handleChange }) => {
  const { data } = useContext(DataContext)


  return (
    <select
      className='bg-transparent border-b-2'
      defaultValue={defaultValue}
      onChange={handleChange}>
      {
        data.map((jugador) => (
          <option
            className='text-black'
            key={jugador.numero}
            value={jugador.posicion}>{jugador.posicion}</option>
        ))
      }
    </select>
  )
}

SelectEditar.propTypes = {
  defaultValue: PropTypes.string,
  handleChange: PropTypes.func,
}

export default SelectEditar
