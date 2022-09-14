import React, { useState } from 'react';

const Button = ({children}) => {
  const [color, setColor] = useState('lightblue')
  const [toggle, setToggle] = useState(true)
  const handleClick = () =>{
setToggle(!toggle )
console.log('e')
  }
  return (
    <button 
    style={{background: toggle? 'lightBlue' : 'red' }}
    onClick={handleClick}
     className="btn">
        {children}
    </button>
    
  )
}

export default Button