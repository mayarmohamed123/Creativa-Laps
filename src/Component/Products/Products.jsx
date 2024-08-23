import React from "react";
import { products } from "./ProductData";
import CardComponent from "../CardComponent/CardComponent";
import "./style.css";

function Products() {
  return (
    <div className="card-container">
      {products.map((product) => (
        <div className="card" key={product.id}>
          <div className="card-img">
            <img src={product.img} alt={product.name} />
          </div>
          <div className="product-info">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <p className="product-category">category: {product.category}</p>
          </div>
          <div className="card-pro">
            <p>Price: {product.price} $</p>
            <span>
              <CardComponent />
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
