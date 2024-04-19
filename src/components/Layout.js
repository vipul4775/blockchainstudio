import React from 'react'

import Header from './Header'
import Footer from './Footer'
import { Outlet, Route, Routes } from 'react-router-dom'
import Home from './Home'
import About from './About'
import ArticleCard from './ArticleCard'
import Articles from './Articles'

function Layout() {
  return (
    <div className="layout">

        <Header/>
        <hr className="horizontal-line" />
        <div className='home'>

        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/articles' element={<Articles/>}></Route>
        </Routes>
        </div>

        <hr className="horizontal-line" />
       
        <Footer/>
        
      
    </div>
  )
}

export default Layout
