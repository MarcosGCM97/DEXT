import { useEffect, useState } from 'react'
import servicioEquipo from '../servicio/servicio'
import FormularioJugador from '../Equipo/componentes/FormularioJugador'
import Equipo from '../Equipo/componentes/Equipo'
import BtnDescargarLista from '../Equipo/componentes/PdfAcceso/BtnDescargarLista'
import DataPosiciones from '../Equipo/componentes/ContextHookDatos/DataPosiciones'
import EquipoPartido from '../Equipo/componentes/EquipoPartido'

function Cuerpo(){
  const [ lista, setLista ] = useState([])

  useEffect(() => {
    servicioEquipo
      .getAll('equipo')
      .then(response => setLista(response))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className='relative h-[180vh] w-screen flex justify-center items-center flex-wrap gap-x-8 bg-cover bg-no-repeat bg-center text-white'  style={{ backgroundImage: 'url("/src/assets/1x/Recurso7.jpg")' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <h2 className='relative z-10 w-full text-center text-4xl mt-20'>Armá tu Equipo</h2>
      <DataPosiciones>
        <FormularioJugador
          lista={ lista }
          setLista={ setLista }/>
        <Equipo
          lista={lista}
          setLista={setLista}
        />
        <EquipoPartido
          lista={lista}
          setLista={setLista} />
        <BtnDescargarLista lista={lista}/>
      </DataPosiciones>
    </div>
  )
}

export default Cuerpo