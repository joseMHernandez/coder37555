import React from 'react'
//import Item from "../Products/Item";
import { useEffect, useState } from "react";
import { getSingleItems } from '../../services/mockApi';
import '../ItemDetailContainer/itemList.css'
const ItemList = () => {

let [data, setdata] = useState([])

useEffect(()=>{
  getSingleItems().then(dataResponse => setdata(dataResponse))
}, [])

  
  return (
    <>
    <div className="main-container">
    <div className='item-detail'>
   <img src="./assets/img/blue-shoes.jpg" alt="" />

   </div>
   <h1>{data.title}</h1>
   <h1>{data.price}</h1>
   <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </h3>
  
    </div>
 
   

        
    </>
  )
}

export default ItemList
