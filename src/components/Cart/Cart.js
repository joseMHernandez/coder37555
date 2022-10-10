import React, { useContext } from "react";
import { cartCtx } from '../../context/cartContext';
import '../Cart/cart.css'
function Cart() {
  const { getTotalItemsInCart, cart} = useContext(cartCtx);

  return (
    <div className="cart">
      <span>X</span>
      <span>{getTotalItemsInCart()}</span>

   {
    cart.map((item)=>(
      
        <div className='cart'>
          <h2 className='cart-title'>{item.title}</h2>
          <img className='cart-img' src={item.img} alt="img" />
          <span className='cart.price'>${item.price}</span>
          <p className='cart-detail'>{item.detail}</p>
        </div>
      
    ))
   }
    </div>
  );
}

export default Cart;