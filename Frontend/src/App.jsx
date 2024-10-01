import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Nav from './ElementosHTML/Nav'
import LogIn from './LogIn-SignIn/LogIn'
import RegistroUser from './LogIn-SignIn/RegistroUser'
import Head from './ElementosHTML/Inicio'
import Cuerpo from './ElementosHTML/Cuerpo'
import Footer from './ElementosHTML/Footer'

function App() {

  return (
    <main className='font-mono h-auto w-full flex flex-row items-center justify-center flex-wrap bg-slate-300'>
      <Router>
        <Nav/>
        <Routes>
          <Route path='/login' element={<LogIn />} />
          <Route path='/signin' element={<RegistroUser />} />
          <Route path='/' element={<Head />} />
          <Route path='/equipo' element={<Cuerpo />} />
        </Routes>
      </Router>
      <Footer />
    </main>
  )
}

export default App
