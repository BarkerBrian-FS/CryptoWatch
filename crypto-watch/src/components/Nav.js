import React from 'react'
import {FaEye} from 'react-icons/fa'
import './Navbar.css'

const Nav = () => {
  return (
    <div className='navbar'>
        <FaEye className='icon'/>
        <h1 className='firstword'>Crypto<span className='gold'>Watch</span></h1>
    </div>
  )
}

export default Nav