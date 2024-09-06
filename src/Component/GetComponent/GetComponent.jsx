import axios from "axios";
import React from "react";
import { Component } from "react";
import "./style.css";

class GetComponent extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) =>
        this.setState({
          data: response.data,
        })
      )
      .catch((error) => {
        console.error("There was an error for getting the data!", error);
      });
  }
  render() {
    const { data } = this.state;
    return (
      <div className="get-component">
        {data.map((item) => (
          <div key={item.id} className="get-component-item">
            <h2>{item.name}</h2>
            <p>{item.email}</p>
            <p>{item.body}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default GetComponent;
