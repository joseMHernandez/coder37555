import React from 'react'
//import Item from "../Products/Item";
import { useEffect, useState } from "react";
import { getSingleItems } from '../../services/mockApi';
import {Link, useParams} from 'react-router-dom'
import '../ItemDetailContainer/itemList.css'
import ItemCount from "../Button/ItemCount";
import '../Cart/cart.css'
const ItemDetail = () => {

  
let [data, setdata] = useState({})
const [first, setfirst] = useState(false)
const {id} = useParams()


const onAddtoCart = (count) => {
  alert(`agregaste ${count} productos al carrito`)
  setfirst(!first)
}
      
useEffect(()=>{
  
    getSingleItems(id).then(dataResponse => setdata(dataResponse))

  
}, [id])
  
  return (
    <>
    <div className="main-detail">
    <div className='item-detail'>
   <img src={data.img} alt={data.title} />

   </div>
   <h1>{data.title}</h1>
   <h1>{data.price}</h1>
   <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </h3>
  
    </div>

{
  first === false? <ItemCount stock={15} initial={1} onAddtoCart={onAddtoCart} /> : <Link className='cart-btn' to='/cart'>Finalizar Compra</Link>
}

 
   

        
    </>
  )
}

export default ItemDetail