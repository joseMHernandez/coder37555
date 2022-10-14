import React, { useEffect, useState } from "react";
import { getData, getItemByCategory} from '../../services/firestore';
import {useParams} from 'react-router-dom'
import ItemList from "./ItemList";

const ItemListContainer = ()=> {

let [data, setdata] = useState([])

const {cat} = useParams()

   useEffect(()=>{
    if(cat === undefined){
      getData().then(dataResponse => setdata(dataResponse))

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
            return( <ItemList
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
