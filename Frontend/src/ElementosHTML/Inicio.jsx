import { Link } from 'react-router-dom'

function Inicio(){

  return(
    <div className="h-auto w-full flex flex-col">
      <header className="flex w-full h-screen">
        <div className="w-1/2 grid place-content-center gap-10 p-8 bg-cover bg-no-repeat overflow-hidden" style={{ backgroundImage: 'url("/src/assets/1x/Recurso5.png")' }}>
          <h1 className="text-2xl font-semibold">Bienvenido a Dext</h1>
          <p className="font-semibold text-gray-800">
              Tu compañero ideal para gestionar
              entrenamientos, formar equipos y
              planificar jugadas. Con nuestra app, llevar
              el control de la asistencia a los
              entrenamientos nunca ha sido tan fácil.
              Además, te ofrecemos herramientas
              intuitivas para crear estrategias
              ganadoras y organizar tus equipos de
              manera eficiente. ¡Lleva tu pasión por el
              deporte al siguiente nivel con <span className="text-black font-extrabold">Dext</span>!
          </p>
        </div>
        <div className="w-1/2 bg-cover bg-no-repeat"  style={{ backgroundImage: 'url("/src/assets/1x/Recurso4.png")' }}></div>
      </header>
      <main className="relative h-screen bg-cover bg-center bg-no-repeat flex justify-around items-center flex-col text-white"  style={{ backgroundImage: 'url("/src/assets/1x/Recurso6.jpg")' }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <h3 className="text-4xl underline ">Elige tu Deporte entre los disponibles</h3>
        <div className='relative z-10'>
          <p className="w-80 p-10 text-5xl rounded-xl bg-neutral-700 bg-opacity-60"><Link to='/equipo'>Rugby 🏉</Link></p>
        </div>
      </main>
    </div>
  )
}

export default Inicio