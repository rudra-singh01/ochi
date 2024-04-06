import React from 'react'
import Header from './components/Header/Navbar'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

import LocomotiveScroll from 'locomotive-scroll';

function App() {
const scroll = new LocomotiveScroll()


  return (
    <>
      <div className='overflow-hidden'>
        <Header/>
        <Outlet/>
        <Footer/>
      </div>
    </>
  )
}

export default App