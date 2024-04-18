import React from 'react'

import Header from './Header'
import Footer from './Footer'
import { Outlet, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'

function Layout() {
  return (
    <div className="layout">

        <Header/>
        <hr className="horizontal-line" />
        <div className='home'>

        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
        </Routes>
        </div>
       
        <Footer/>
        
      
    </div>
  )
}

export default Layout
