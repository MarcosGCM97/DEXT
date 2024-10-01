import { Link } from 'react-router-dom'


function Nav(){

  return (
    <nav className="w-full h-16 bg-zinc-800">
      <ul className="w-full h-full flex justify-around items-center">
        <li><Link to='/' className="font-black text-lg font-mono text-stone-400">Inicio</Link></li>

        <li><Link to='/equipo' className="font-black text-lg font-mono text-stone-400">Ver y Editar Lista</Link></li>

        <li><Link className="font-black text-lg font-mono text-stone-400">Info Plan de Juego</Link></li>

        <li><Link to='/login' className="font-black text-lg font-mono text-stone-400">logIn</Link></li>

        <li><Link to='signin' className="font-black text-lg font-mono text-stone-400">signIn</Link></li>
      </ul>
    </nav>
  )
}

export default Nav