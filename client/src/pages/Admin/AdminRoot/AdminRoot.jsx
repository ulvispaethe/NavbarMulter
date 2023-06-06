import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../../layout/Admin/Footer/Footer'
import Header from '../../../layout/Admin/Header/Header'

const AdminRoot = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default AdminRoot