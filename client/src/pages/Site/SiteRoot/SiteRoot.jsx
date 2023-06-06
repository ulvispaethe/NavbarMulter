import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../../layout/Site/Footer/Footer'
import Header from '../../../layout/Site/Header/Header'

const SiteRoot = () => {
  return (
    <div>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default SiteRoot