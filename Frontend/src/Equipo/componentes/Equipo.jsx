import { useState, useEffect, useContext } from 'react'
import servicioEquipo from '../../servicio/servicio'
import PropTypes from 'prop-types'
import SelectEditar from './SelectEdit'
import DataContext from './ContextHookDatos/DataContext'


function Equipo({ lista, setLista }){
  const [ listaOrdenada, setListaOrdenada ] = useState([])
  const [ editar, setEditar ] = useState({ id: null, posicion: '' })
  const { data } = useContext(DataContext)

  useEffect(() => {
    setListaOrdenada(
      lista.map(jug => ({ ...jug })).sort((a,b) => a.numero - b.numero)
    )
  },[lista])

  const handleAsistencia =(id, accion) => {
    const jugador = lista.find(jug => jug.id === id)
    let copiaLista = []

    if(jugador){
      copiaLista = lista.map(jug => {
        if(jug.id === jugador.id && accion === 'sumar'){
          return {
            ...jug,
            asistencia: jug.asistencia + 1,
            posicion_id: data.find(pos => pos.posicion === jug.posicion).id
          }
        } else if(jug.id === jugador.id && accion === 'restar' && jug.asistencia !== 0){
          return {
            ...jug,
            asistencia: jug.asistencia - 1,
            posicion_id: data.find(pos => pos.posicion === jug.posicion).id
          }
        }
        return jug
      })
    }

    const jugadorAsistencia = copiaLista.find(jug => jug.id === id)

    servicioEquipo
      .update(jugadorAsistencia, id, 'equipo')
      .then(setLista(copiaLista))
  }

  const eliminarJugador =(id) => {
    const copiaLista = lista.filter(jug => jug.id !== id)

    servicioEquipo
      .deleteJugador(id, 'equipo')
      .then(setLista(copiaLista))
  }

  const handleEdit = (id) => {
    setEditar({ id: id, posicion: '' })
  }

  const handleCambioPosicion =(event) => {
    const nuevaPosicion = event.target.value
    const nuevoNumero = data.find(jug => jug.posicion === nuevaPosicion).numero

    setEditar(last => ({ ...last, posicion: nuevaPosicion, numero: nuevoNumero }))
  }

  const handleSave =(id) => {
    const copiaLista = lista.map(jug => {
      if(jug.id === id) {
        return {
          ...jug,
          posicion: editar.posicion ? editar.posicion : jug.posicion,
          numero: editar.numero ? editar.numero : jug.numero
        }
      }
      return jug
    })

    const editarEste = copiaLista.find(jug => jug.id === id)

    servicioEquipo
      .update(editarEste, id, 'equipo')
      .then(() => setLista(copiaLista))
      .then(setEditar({ id: null, posicion: '' }))
  }

  return (
    <div className='relative z-10  w-2/3 h-1/2 flex flex-col justify-center items-center'>
      <h3 className='text-black text-xl font-extrabold'>Lista de Entrenamiento</h3>
      <div className='overflow-y-auto scroll-smooth  h-4/5 rounded-xl border border-slate-400 scrollbar-thin scrollbar-thumb-slate-700 scrollbar-track-blue-300'>

        <table className='table-fixed border-collapse bg-gray-800 bg-opacity-80 max-w-full'>
          <thead>
            <tr className=''>
              <th className='border border-slate-400 w-36 min-w-24'>Asistencia</th>
              <th className='border border-slate-400 w-auto min-w-20'>Nombre</th>
              <th className='border border-slate-400 w-80'>Posicion</th>
              <th className='border border-slate-400 w-42
              '>Editar</th>
            </tr>
          </thead>
          <tbody>
            {listaOrdenada.map(jugador => (
              <tr key={jugador.id} className='border-b-2 h-14'>
                <th className='flex justify-center items-center'>
                  <p className='bg-blue-400 bg-opacity-30 w-7 h-7 mr-3 rounded-full grid place-content-center'>{jugador.asistencia}</p>
                  <button className='btn-tablas' onClick={() => handleAsistencia(jugador.id, 'sumar')}>➕</button>
                  <button className='btn-tablas' onClick={() => handleAsistencia(jugador.id, 'restar')}>➖</button>
                </th>
                <td>{jugador.nombre}</td>
                <td className='text-left px-2'>
                  {
                    editar.id === jugador.id ?(
                      <SelectEditar
                        defaultValue={jugador.posicion}
                        handleChange={handleCambioPosicion}
                      />
                    ) : (
                      <span>{ jugador.numero }-{ jugador.posicion }</span>
                    )
                  }
                </td>
                <td className='w-full p-2 flex justify-around items-center'>
                  {editar.id === jugador.id ? (
                    <button  className='btn-tablas' onClick={() => handleSave(jugador.id)}>✔</button>
                  ) : (
                    <button className='btn-tablas' onClick={() => handleEdit(jugador.id)}>🔧</button>
                  )}
                  <button className='btn-tablas' onClick={() => eliminarJugador(jugador.id)}>❌</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

Equipo.propTypes = {
  lista: PropTypes.array.isRequired,
  descargar: PropTypes.object,
  setLista: PropTypes.func,
  handleEdit: PropTypes.func
}

export default Equipo