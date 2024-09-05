import React, { useState } from "react";
import { products } from "../../Products/ProductData";
import "./style.css";
import CardComponentWithHooks from "../CardComponentWithHooks/CardComponentWithHooks";

function HooksProduct() {
  const [data, setData] = useState(products);
  const addProduct = () => {
    setData([
      ...data,
      {
        id: data.length + 1,
        name: "New Product",
        description: "New Product Description",
        category: "New Product Category",
        price: 0,
      },
    ]);
  };
  return (
    <>
      <div className="home-btn">
        <button onClick={addProduct}>Add Product</button>
      </div>
      <div className="card-container">
        {data.map((element) => (
          <div className="card" key={element.id}>
            <div className="card-img">
              <img src={element.img} alt={element.name} />
            </div>
            <div className="product-info">
              <h2 className="product-name">{element.name}</h2>
              <p className="product-description">{element.description}</p>
              <p className="product-category">category: {element.category}</p>
            </div>
            <div className="card-pro">
              <p>Price: {element.price} $</p>
              <span>
                <CardComponentWithHooks />
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default HooksProduct;
