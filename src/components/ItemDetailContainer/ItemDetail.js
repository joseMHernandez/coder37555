import React from 'react'
//import Item from "../Products/Item";
import { useEffect, useState } from "react";
import { getSingleItems } from '../../services/mockApi';
import {useParams} from 'react-router-dom'
import '../ItemDetailContainer/itemList.css'
const ItemDetail = () => {

let [data, setdata] = useState([])

const {id} = useParams()


useEffect(()=>{
  
    getSingleItems(id).then(dataResponse => setdata(dataResponse))

  
}, [id])
  
  return (
    <>
    <div className="main-container">
    <div className='item-detail'>
   <img src={data.img} alt={data.title} />

   </div>
   <h1>{data.title}</h1>
   <h1>{data.price}</h1>
   <h3>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </h3>
  
    </div>
 
   

        
    </>
  )
}

export default ItemDetail