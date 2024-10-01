import { useEffect, useState } from 'react'
import servicesLogin from '../servicio/servicio'
import { Link, useNavigate } from 'react-router-dom'

function LogIn (){
  const [ usuarios, setUsuarios ] = useState([])
  const [ usuarioLogin, setUsuarioLogin ] = useState([])
  const [ message, setMessage ] = useState('')
  const navigate = useNavigate()
  useEffect(() => {
    servicesLogin
      .getAll('usuarios')
      .then(response => setUsuarios(response))
  }, [])

  const handleChange = (e) => {
    const name = e.target.name
    const value =  e.target.value

    setUsuarioLogin(values => ({ ...values, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const verificarUsuario = usuarios.find(user => user.nombre === usuarioLogin.nombre)

    if(!verificarUsuario){
      setMessage('User not found')
      setTimeout(() => {
        setMessage('')
      }, 5000)
      return
    }

    if(verificarUsuario.password === usuarioLogin.password){
      navigate('/')
      console.log(usuarios, 'correcto')
    } else {
      setMessage('User not found')
      setTimeout(() => {
        setMessage('')
      }, 5000)
      return
    }
  }


  return (
    <div className="w-screen h-screen grid place-content-center " style={{ backgroundImage: 'url("/src/assets/1x/Recurso1.png")' }}>
      <h2 className="text-3xl font-extrabold text-center w-full p-4">Log In</h2>
      <p>{message}</p>
      <form onSubmit={handleSubmit} className="w-60 p-4 flex flex-col justify-center items-center gap-4 bg-slate-700 bg-opacity-70 text-white rounded-xl">
        <label>
          <p>Usuario/Email</p>
          <input onChange={handleChange} name='nombre' className="input-general" type='text' />
        </label>
        <label>
          <p>Contraseña</p>
          <input onChange={handleChange} name='password' className="input-general" type='password' />
        </label>

        <Link to='/signin'>Crear cuenta</Link>
        <button className="btn-log">Ingresar</button>
      </form>

    </div>
  )
}

export default LogIn