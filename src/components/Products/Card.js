import React from "react";
import Button from "../Button/Button";
import ItemCount from "../Button/ItemCount";
import "./card.css";
import '../Button/button.css'

function Card(props) {
  let { price, title, img, detail, } = props;
  

  const onAdd = () =>{
    alert(`agregaste este producto al carrito`)
        }

        
  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt="card img"></img>
      </div>
      <div className="card-detail">
        <h3>{title}</h3>
        <p>{detail}</p>
        <h4>${price}</h4>
       
      </div>
      <Button>Ver más</Button>

      <ItemCount stock={15} initial={1} onAdd={onAdd}/>

    </div>
  );
}

export default Card;