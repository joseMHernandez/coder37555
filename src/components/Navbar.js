import React from 'react'
import Logo from './Logo/CartWidget';

const Navbar = () => {
  return (
    <>
    <nav className='nav'>
        
        <div className='nav-logo'>eShoes</div>
        
        <div className='nav-link'>
        <li><a href='#'>Home</a></li>
        <li><a href='#'>About</a></li>
        <li><a href='#'>Contact</a></li>
        <Logo />
        </div>

    </nav>
    
    </>
  )
}

export default Navbar;