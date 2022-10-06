import React, { useContext } from "react";
import { cartCtx } from '../../context/cartContext';
import '../Cart/cart.css'
function Cart() {
  const { getTotalItemsInCart } = useContext(cartCtx);

  return (
    <div className="cart">
      <span>X</span>
      <span>{getTotalItemsInCart()}</span>
    </div>
  );
}

export default Cart;