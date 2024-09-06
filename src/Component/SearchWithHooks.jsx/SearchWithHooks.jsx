import React, { useState, useEffect } from "react";
import axios from "axios";

function SearchWithHooks() {
  const [data, setData] = useState([]);
  const [postId, setPostId] = useState(0);

  const handelPostId = (e) => {
    setPostId(e.target.value);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, [postId]);
  return (
    <div>
      <input type="text" onChange={handelPostId} />
      <div>
        {data.map((x) => (
          <div key={x.id}>
            <h2>{x.name}</h2>
            <p>{x.email}</p>
            <p>{x.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchWithHooks;
