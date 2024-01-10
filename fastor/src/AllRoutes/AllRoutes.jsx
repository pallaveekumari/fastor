import React from 'react'
import Login from './Login'
import Otp from './Otp'
import {Route,Routes} from "react-router-dom"
const AllRoutes = () => {
  return (
    <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/otp" element={<Otp/>}/>
    </Routes>
  )
}

export default AllRoutes