import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import LoginPage from '../components/LoginPage'
import Page1 from '../components/Page1'

function Approuter() {
  return (
<Router>
    <Routes>
        <Route path='/' element={<LoginPage/>} />
        <Route path='/facepage' element={<Page1/>} />
        <Route path='/back to login' element={<LoginPage/>} />
        
    </Routes>
</Router>
  )
}

export default Approuter
