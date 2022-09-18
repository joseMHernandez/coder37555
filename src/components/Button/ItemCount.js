import React, { useState } from 'react'

const ItemCount = ({stock, initial}) => {

    const [count, setcount] = useState(initial)



    const onAdd = () =>{
alert(`agregaste ${count} productos al carrito`)
    }
    const increment = () => {
        if(count < stock){
            setcount(count + 1)
        } 
     }

    const decrement = () => {
        if(count > 1)
setcount(count-1)
    }

    
  return (
<>
<div className='btn-count'>
    <div className='btn-count-buttons'>
    <div className='decrement' onClick={decrement}>-</div>
    <h1>{count}</h1>
    <div className='increment' onClick={increment}>+</div>

    </div>
    
    <button onClick={onAdd}  className='btn-cart'>Add Cart</button>
</div>

</>
  )
}

export default ItemCount