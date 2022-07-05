import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import NavBar from '../components/Navbar'
import Quiz from '../pages/Quiz'

const AppRouter = () => {

    return (
      <Router>
        <NavBar/>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/quiz" element={<Quiz/>} />
          </Routes>
      </Router>
  
    )
  }
  
  export default AppRouter