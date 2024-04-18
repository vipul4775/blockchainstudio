import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoSearch } from "react-icons/io5";
import { Form } from 'react-router-dom';

import '../styles/Header.css'

function Header() {
  return (
   
    <div className='header'>

      <div className='logo'>
      <NavLink to="/">
      <img src="../logo.svg" alt="Logo" />
      
      </NavLink>
      </div>

      <div className='nav'>
      <ul >
        <li><NavLink to='/' activeClassName="active">Home </NavLink></li>
        <li><NavLink to='/Articles' activeClassName="active"> Articles</NavLink></li>
        <li><NavLink to='/learn' activeClassName="active"> Learn</NavLink></li>
        <li><NavLink to='/news' activeClassName="active"> News</NavLink></li>
        <li> <NavLink to='/about' activeClassName="active">About Us</NavLink></li>
        <li> <NavLink to='/contact' activeClassName="active">Contact </NavLink></li>
      </ul>
      </div>

      <div className='searchbar'> 
      {/* <Form> */}
        <input >
        </input>
        <IoSearch className='searchicon'/>
        {/* </Form> */}
      </div>

    </div>
  )
}

export default Header
