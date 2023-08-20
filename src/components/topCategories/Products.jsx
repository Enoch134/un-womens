import React from "react";
import { Link } from "react-router-dom";

export default function Product(props) {
  
  return (
    <Link to="products" className="card-link" style={{textDecoration:"none"}}>
    <div className="card">
      <img className="product--image" src={props.url} alt="product" />
      <h2>{props.name}</h2>
      <p className="price">{props.price}</p>
      <p>{props.description}</p>
      <p>
        <button>Add to Cart</button>
      </p>
    </div>
  </Link>
  );
}
