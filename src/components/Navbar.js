import React from 'react'
import { Link } from 'react-router-dom';
import Logo from './Logo/CartWidget';

const Navbar = () => {
  return (
    <>
    <nav className='nav'>
        
    <Link to='/'> <div className='nav-logo'>eShoes</div></Link>
        
        <div className='nav-link'>
        <li><Link to='/category/sport'>Sport</Link></li>
        <li><Link to={'/category/casual'} >Casual</Link></li>
        <li><Link to='/category/classic'>Classic</Link></li>
     <Logo />
        </div>

    </nav>
    
    </>
  )
}

export default Navbar;