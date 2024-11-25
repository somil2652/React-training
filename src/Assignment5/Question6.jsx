// Modify the previous assignment to implement error handling using Axios. Display an error message if the request fails and provide a way for the user to retry the request.

import React, { useEffect, useState } from "react";
import axios from "axios";

function Question6() {
  const [data, setData] = useState([]);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/uss")
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        setError(true);
      });
  }, [isButtonClicked]);

  const handleClick = () => {
    setIsButtonClicked(true);
  };
  return (
    <div>
      <p>AXIOS GET:</p>

      {!error ? (
        <ul>
          {data.map((user) => (
            <li key={user.id}>{user.email}</li>
          ))}
        </ul>
      ) : (
        <>
          <p>Error Occured</p>
          <button onClick={handleClick}>Retry!</button>
        </>
      )}
    </div>
  );
}

export default Question6;
