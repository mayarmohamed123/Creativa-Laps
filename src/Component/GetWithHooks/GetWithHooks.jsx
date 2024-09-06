import axios from "axios";
import React, { useEffect, useState } from "react";

function GetWithHooks() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments?postId=1")
      .then((response) => setData(response.data))
      .catch((error) => console.error("Error fetching data: ", error));
  });
  return (
    <div>
      {data.map((x) => (
        <div key={x.id}>
          <h2>{x.name}</h2>
          <p>{x.email}</p>
          <p>{x.body}</p>
        </div>
      ))}
    </div>
  );
}

export default GetWithHooks;
