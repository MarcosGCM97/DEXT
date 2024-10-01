import { useState } from 'react'
import servicesLogin from '../servicio/servicio'
import { Link } from 'react-router-dom'

function RegistroUser (){
  const [ usuario, setUsuario ] = useState([])

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value

    setUsuario(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    servicesLogin
      .create(usuario, 'usuarios')
      .then(response => console.log(response))
    console.log(usuario)
    // Resetea el estado del usuario
    setUsuario({
      nombre: '',
      email: '',
      password: ''
    })
  }
  return (
    <div className="w-screen h-screen grid place-content-center " style={{ backgroundImage: 'url("/src/assets/1x/Recurso1.png")' }}>
      <h3 className="text-2xl font-extrabold text-center w-full p-4">Registrarse ahora</h3>
      <form onSubmit={handleSubmit} className="w-72 p-4 flex flex-col justify-center items-center gap-4 bg-slate-700 bg-opacity-70 text-white rounded-xl">
        <label>
          <p>Usuario</p>
          <input onChange={handleChange} name='nombre' value={usuario.nombre} className="input-general" type='text' />
        </label>
        <label>
          <p>Email</p>
          <input onChange={handleChange} name='email' value={usuario.email} className="input-general" type='email' />
        </label>
        <label>
          <p>Contraseña</p>
          <input onChange={handleChange} name='password' value={usuario.password} className="input-general" type='password' />
        </label>

        <Link to='/login'>Ya tengo cuenta</Link>
        <button className="btn-log" >Registrarse</button>
      </form>
    </div>
  )
}

export default RegistroUser