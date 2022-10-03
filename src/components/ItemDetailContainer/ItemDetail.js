import React from 'react'
//import Item from "../Products/Item";
import { useEffect, useState } from "react";
import { getSingleItems } from '../../services/mockApi';
import {useParams} from 'react-router-dom'
import '../ItemDetailContainer/itemList.css'
import ItemCount from "../Button/ItemCount";

const ItemDetail = () => {

let [data, setdata] = useState({})

const {id} = useParams()

const onAdd = () =>{
  alert(`agregaste este producto al carrito`)
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

    <ItemCount stock={15} initial={1} onAdd={onAdd}/>



 
   

        
    </>
  )
}

export default ItemDetail