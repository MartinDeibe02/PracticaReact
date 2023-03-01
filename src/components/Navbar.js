import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../images/logo.png'

export const Navbar = () => {
  return (
    <div className='navBar'>
        <div className='img'>
            <img src={logo} alt='logo'></img>
        </div>
        <div className='derecha'>
            <Link to='/login' className='link'>login</Link>
            <Link to='/signup' className='link'>signup</Link>
        </div>
    </div>
  )
}
