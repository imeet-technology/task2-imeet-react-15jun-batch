import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Index'
import About from './pages/About/Index'
import Contact from './pages/Contact/Index'
import Login from './pages/Login/Index'
import RegisterForm from './pages/Register/Index'

const App = () => {
  return (
    <Routes>
          <Route  path='/'  Component={Home} />
          <Route  path='/about'  Component={About} />
          <Route  path='/contact'  Component={Contact} />
          <Route  path='/login'  Component={Login} />
          <Route  path='/register'  Component={RegisterForm} />
    </Routes>
  )
}

export default App
