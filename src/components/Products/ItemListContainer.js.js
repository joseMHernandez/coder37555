import ItemList from '../Products/ItemList';
//import React, { useEffect, useState } from "react";
import getItems from '../../services/mockApi';

function ItemListContainer(props) {
//const {greeting} = props

/* 
--ciclos de Video
--promesas
--estado
--props
--map
--key */

return (
    <div>
{/*       <h1 className="greeting">{greeting}</h1>  
 */}      

        <ItemList data={data}/>

      
    </div> 
  );
}

export default ItemListContainer;