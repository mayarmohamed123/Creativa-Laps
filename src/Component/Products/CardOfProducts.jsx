import React, { Component } from "react";
import { products } from "./ProductData";
import CardButtons from "../CardButtons/CardButtons";
import "./style.css";

export class CardOfProducts extends Component {
  render() {
    return (
      <div className="products-card">
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.img} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <div>{product.category}</div>
            <div>
              <span>{product.price} $</span>
              <CardButtons />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default CardOfProducts;
