import React from 'react'
import Navpar from '../../compnantes/navpar/Navpar'
import Footer from '../../compnantes/footer/Footer'
import { Outlet } from 'react-router-dom'
const Layout = () => {
  return (
    <>
      <Navpar/>
      
      <Outlet/>

     <Footer/>
     {/* <div className='w-full p-7 text-center bg-black '>footer</div> */}
    </>
  )
}

export default Layout
