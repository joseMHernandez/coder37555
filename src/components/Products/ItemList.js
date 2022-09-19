import React from 'react'
import Item from "../Products/Item";

const ItemList = ({data}) => {

  return (
    <>
          {
        data.map(({id, title, price, img })=>{
       return <Item
          key={id}
          title={title}
          price={price}
          img={img}
          
          />
          
        })
      }
        
    </>
  )
}

export default ItemList