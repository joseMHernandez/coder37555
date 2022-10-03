import React, { useEffect, useState } from "react";
import { getItems, getItemByCategory} from '../../services/mockApi';
import {useParams} from 'react-router-dom'

import Item from '../Products/Item';
const ItemListContainer = ()=> {

let [data, setdata] = useState([])

const {cat} = useParams()
console.log()

   useEffect(()=>{
    if(cat === undefined){
      getItems().then(dataResponse => setdata(dataResponse))

    }else{
      getItemByCategory(cat).then(dataResponse => setdata(dataResponse))

    }
 }, [cat])
   
 



  
/* 
--ciclos de Video
--promesas
--estado
--props
--map
--key */

return (
    <>
      <div className="main-container">
     
        {
          data.map(({id, price, title, detail, stock, img})=>{
            return( <Item
              id={id}
              key={id}
              price={price}
              title={title}
              img={img}
              detail={detail}
              stock={stock}          
            />
            )
            }
       
          )}


      </div>
    </> 

  );
          }

export default ItemListContainer
