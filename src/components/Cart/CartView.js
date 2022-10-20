import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { cartCtx } from '../../context/cartContext';
import Button from "../Button/Button";
import '../Cart/cart.css'
function CartView() {
  const { cart, deleteItem, emptyCart, getTotalItemTotalPrice} = useContext(cartCtx);
  
if(cart.length === 0){
  return <div><h1>tu carrito esta vacio.. <Link to={'/'}>seguir comprando</Link></h1></div>
}
  return (
    <>
    {
        cart.map(item=>{
          return (
          <div className="cart-item" key={item.id}>
          
          <div className="cartview">
            <img className='cart-img' src={item.img} alt={item.title} />
          </div>

<div className="cartview-desc">
  <h2 className="carview-title">{item.title}</h2>
  <div className="cartview-info">
    <span className="cartview-price">${item.price}</span>
    <span className="cartview-count">Cantidad: {item.count}</span>
    <span className="cartview-detail">{item.detail}</span>
    <button className="cartview-delete-btn" onClick={() =>deleteItem(item.id)}>Delete Item</button>


  </div>
</div>

        </div>
        )
        })

        
      }

<div className="total-container">
        <button className="total-empty-btn" onClick={emptyCart} >Vaciar Carrito</button>
        <button className="total-btn-end" >Finalizar Compra</button>

<h2 className="total-price">Total Price: ${getTotalItemTotalPrice()}</h2>
      </div>

      
  

    



   

    </>
  );
}

export default CartView;



