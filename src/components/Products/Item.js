import React from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "./card.css";
import '../Button/button.css'

function Item(props) {
  let { price, title, img, detail, id} = props;

  const urlDetail = `/item/${id}`
  


        
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
      <Link to={urlDetail}>
      <Button>Ver más</Button>
      </Link>


    </div>
  );
}

export default Item;