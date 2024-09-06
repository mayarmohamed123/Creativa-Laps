import React, { Component } from "react";
import { UserConsumer } from "../../../../../../Context/Context";
import "../../../../Style/Style.css";
export class ComponentFive extends Component {
  render() {
    return (
      <div>
        <UserConsumer>
          {(product) => {
            return (
              <div className="product-card">
                <h2 className="product-title">
                  Component Three: {product.name}
                </h2>
                <img src={product.img} alt="Product" className="product-img" />
                <p className="product-description">{product.description}</p>
                <p className="product-price">Price: ${product.price}</p>
                <p className="product-category">Category: {product.category}</p>
              </div>
            );
          }}
        </UserConsumer>
        ComponentFive
      </div>
    );
  }
}

export default ComponentFive;
