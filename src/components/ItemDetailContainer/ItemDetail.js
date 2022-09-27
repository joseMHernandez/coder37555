import React from 'react';
import ItemList from '../Products/ItemList';
import { useEffect, useState } from "react";
import { getSingleItems } from '../../services/mockApi';
function ItemListContainer(props) {
const {greeting} = props

let [data, setdata] = useState({ })

useEffect(()=>{
  getSingleItems().then(dataResponse => setdata(dataResponse))
}, [])
  
/* 
--ciclos de Video
--promesas
--estado
--props
--map
--key */

return (
    <div>
      <h1 className="greeting">{greeting}</h1>  
      <div className="main-container">

        <ItemList data={data}/>

      </div>
    </div> 
  );
}

export default ItemListContainer;