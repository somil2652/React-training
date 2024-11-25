// Create a React component that fetches data from a public API (e.g., JSONPlaceholder) and displays it on the page. Use the fetch function to make the request.

import React, { useState } from "react";

function Question1() {
  const [data, setData] = useState([]);
  const handleClick = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })

      .then((data) => {
        setData(data);
      });
  };

  return (
    <div>
      <h3>Fetch API:</h3>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>

      <br />
      <button onClick={handleClick}>Fetch Data</button>
    </div>
  );
}

export default Question1;
