import servicioEquipo from '../../servicio/servicio'
import { useState, useContext } from 'react'
import DataContext from './ContextHookDatos/DataContext'
import PropTypes from 'prop-types'

function FormularioJugadores({ lista, setLista }){
  const [ nombre, setNombre ] = useState('')
  const [ posicion,setPosicion ] = useState('')
  const { data } = useContext(DataContext)

  const handleNombre=(e) => {
    e.preventDefault()
    setNombre(e.target.value)
  }

  const handlePosicion=(e) => {
    e.preventDefault()
    setPosicion(e.target.value)
  }

  const handleSubmit=(e) => {
    e.preventDefault()

    if(lista.length === 0){
      const posicionData = data.find(jug => jug.posicion === posicion)

      let nuevoJugadorDB = {
        'posicion': posicionData.id,
        'nombre': nombre,
        'asistencia': 0,
        'juega': false
      }
      let nuevoJugadorFront = {
        'posicion': posicionData.posicion,
        'numero': posicionData.numero,
        'nombre': nombre,
        'asistencia': 0,
        'juega': false
      }

      servicioEquipo
        .create(nuevoJugadorDB, 'equipo')
        .then(setLista([nuevoJugadorFront]))
    } else{
      const posicionData = data.find(jug => jug.posicion === posicion)

      let nuevoJugadorDB = {
        'posicion_id': posicionData.id,
        'nombre': nombre,
        'asistencia': 0,
        'juega': false
      }
      let nuevoJugadorFront = {
        'posicion': posicionData.posicion,
        'numero': posicionData.numero,
        'nombre': nombre,
        'asistencia': 0,
        'juega': false
      }

      const copiaLista = [ ...lista, nuevoJugadorFront ]

      if(posicionData.posicion === posicion){
        servicioEquipo
          .create(nuevoJugadorDB, 'equipo')
          .then(setLista(copiaLista))
      } else {
        console.error('Posicion no encontrada')
        return
      }

    }
    setNombre('')
    setPosicion('')
  }

  return (
    <form className="relative z-10 h-60 w-1/4 flex flex-wrap justify-center w-26 rounded-lg bg-gray-800 bg-opacity-80" onSubmit={handleSubmit}>
      <h4 className='font-medium underline'>Ingresa un Jugador</h4>
      <label  className='w-4/5 flex flex-col'>
        <p>Nombre</p>
        <input className=" bg-transparent border-b-2" id="nombre" type="text" onChange={handleNombre} value={nombre}></input>
      </label>

      <label  className='w-4/5 flex flex-col'>
        <p>Posición</p>
        <select className=" bg-transparent border-b-2" name="posicion" id="posicion" onChange={handlePosicion} value={posicion}>
          <option className='text-black'></option>
          {
            data.map((jugador) => (
              <option className='text-black' key={jugador.numero} value={jugador.posicion}>{jugador.posicion}</option>
            ))
          }

        </select>
      </label>
      <button className="btn-log py-0 m-4" type="submit">Enviar</button>
    </form>
  )
  /*<PDFViewer>
            <MiDocumento equipo={lista}/>
            </PDFViewer>
            <PDFDownloadLink document={<MiDocumento equipo={lista}/>} fileName="Lista-de-Jugadores.pdf">
                {
                    ({loading, url, error}) => loading ? <button className="btnDescargarLista">Cargando Documento</button> : <button className="btnDescargarLista">Descargar PDF!</button>
                }
            </PDFDownloadLink>*/
}

FormularioJugadores.propTypes = {
  lista: PropTypes.array.isRequired,
  setLista: PropTypes.func.isRequired
}
export default FormularioJugadores