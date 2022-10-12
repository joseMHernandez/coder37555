import React, { useContext } from 'react'
import { BsCart2} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { cartCtx } from '../../context/cartContext';

import './logo.css'
const Logo = () => {

  const { getTotalItemsInCart} = useContext(cartCtx);

  return (
   <div className='logo'>
<Link to={'/cart'}><BsCart2/></Link>  

<span className='logo-count'>{getTotalItemsInCart()}</span>
   </div> 
  )
}

export default Logo