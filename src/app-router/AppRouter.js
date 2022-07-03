import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import NavBar from '../components/Navbar'
import { AuthContext } from '../contexts/AuthContext'

const AppRouter = () => {
  const {myKey,currentUser} = React.useContext(AuthContext)
  console.log(myKey)
  console.log(currentUser)
    return (
      <Router>
        <NavBar/>
          <Routes>
            <Route path="/" element={<Home/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
          </Routes>
      </Router>
  
    )
  }
  
  export default AppRouter