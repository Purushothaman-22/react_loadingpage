import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
   <div className='nav'>
    <div className='nav-logo'>Ev-Motors</div>
    <ul className='nav-menu'>
    <li>Home</li>
    <li>Explore</li>
    <li>About</li>
    <li className='nav-contact'>Contact Us</li>
    </ul>
   </div>
  )
}

export default Navbar