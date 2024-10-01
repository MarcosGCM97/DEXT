import { PDFDownloadLink } from '@react-pdf/renderer'
import MiDocumento from './MiDocumento'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'

function BtnDescargarLista({ lista }){
  const [ listaOrdenada, setListaOrdenada ] = useState([])

  useEffect(() => {
    setListaOrdenada(
      lista.map(jug => ({ ...jug })).sort((a,b) => a.numero - b.numero)
    )
  }, [lista])

  return (
    <div className='grid justify-center items-center'>
      <h3>Descargar aqui!</h3>

      <PDFDownloadLink document={<MiDocumento equipo={listaOrdenada}/>} fileName="Lista-de-Jugadores.pdf">
        {
          ({ loading }) => loading ? <button className="relative z-10 ">Cargando Documento</button> : <button className="relative z-10 ">Obtén tu PDF!</button>
        }
      </PDFDownloadLink>
    </div>
  )
}

BtnDescargarLista.propTypes = {
  lista: PropTypes.array.isRequired
}

export default BtnDescargarLista
