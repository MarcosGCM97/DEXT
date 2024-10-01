import { useContext, useState } from 'react'
import DataContext from './ContextHookDatos/DataContext'
import PropTypes from 'prop-types'


function EquipoPartido({ lista, setLista }){
  const { data } = useContext(DataContext)
  const [ listaPartido, setListaPartido ] = useState([])
  const [ nombreJugador, setNombreJugador ] = useState('')
  const [jugadoresSeleccionados, setJugadoresSeleccionados] = useState({})


  const seleccionarJugador = (event, posicion) => {
    event.preventDefault()

    const jugador = lista.find(jug => jug.nombre === nombreJugador)
    console.log(jugador)
    const verificarJugador = listaPartido.find(jug => jug === jugador)
    if(verificarJugador || jugador === undefined){
      return
    }

    setListaPartido(prev => [...prev, jugador])
    setJugadoresSeleccionados(prev => ({ ...prev, [posicion]: jugador.nombre }))
    setNombreJugador('')
  }

  const jugadorChange = (e) => {
    setNombreJugador(e.target.value)
  }

  const editarJugador = (posicion) => {
    setListaPartido(prev => prev.filter(jug => jug.posicion !== posicion))
    setJugadoresSeleccionados(prev => {
      const nuevoEstado = { ...prev }
      delete nuevoEstado[posicion]
      return nuevoEstado
    })
  }

  return (
    <div className='relative z-10 w-80 h-1/3 overflow-y-auto scroll-smooth flex flex-col justify-center items-center'>
      <h3 className='text-xl font-extrabold'>Lista para Partido</h3>
      <div className='w-full overflow-y-auto scroll-smooth h-auto rounded-xl border border-slate-400'>
        <table  className="w-auto table-fixed border-collapse bg-gray-800 bg-opacity-80">
          <thead>
            <tr>
              <th className='border border-slate-400 w-96'>Posicion</th>
              <th className='border border-slate-400 w-80'>Nombre</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((posiciones) => (
                <tr key={posiciones.id} value={posiciones.posicion}  className='border-b-2'>
                  <td className='text-left p-1'>{posiciones.posicion}</td>
                  <td>
                    {
                      jugadoresSeleccionados[posiciones.posicion] ? (
                        <div className='flex justify-between items-center p-1'>
                          <p>{ jugadoresSeleccionados[posiciones.posicion] }</p>
                          <button
                            className='btn-tablas'
                            onClick={() => editarJugador(posiciones.posicion)}>🔧</button>
                        </div>
                      ) : (
                        <form
                          onSubmit={(e) => seleccionarJugador(e, posiciones.posicion)}
                          className='flex justify-between items-center p-1'
                        >
                          {
                            <select
                              value={nombreJugador}
                              onChange={jugadorChange}
                              className='w-3/4 bg-transparent border-b-2'>
                              <option value=''></option>
                              {
                                lista.map(jug => {
                                  if(jug.posicion === posiciones.posicion){
                                    return (<option
                                      value={jug.nombre}
                                      className='text-black'
                                      key={jug.numero}>
                                      {jug.nombre}
                                    </option>)
                                  }
                                })
                              }
                            </select>
                          }
                          <button className='btn-tablas'>✔</button>
                        </form> )
                    }
                  </td>
                </tr>
              ))
            }
            <tr>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

EquipoPartido.propTypes = {
  lista: PropTypes.array
}

export default EquipoPartido