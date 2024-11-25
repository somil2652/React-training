// Create a React component that fetches data from a public API (e.g., JSONPlaceholder) using Axios and displays it on the page.

import React, { useState } from "react";
import axios from "axios";

function Question5() {
  const [data, setData] = useState([]);
  async function handleClick() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <p>AXIOS GET:</p>
      <button onClick={handleClick}>Fetch Data</button>

      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <br />
    </div>
  );
}

export default Question5;
