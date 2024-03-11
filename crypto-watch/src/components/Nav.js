import React from 'react'
import {FaEye} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import './Navbar.css'

const Nav = () => {
  return (
    <Link to='/'>
      <div className='navbar'>
          <FaEye className='icon'/>
          <h1 className='firstword'>Crypto<span className='gold'>Watch</span></h1>
      </div>
    </Link>
  )
}

export default Nav