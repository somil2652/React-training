// Implement error handling for the fetch request. Display an error message if the request fails and provide a way for the user to retry the request.

import React, { useEffect, useState } from "react";

const Question2 = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [isButtonClicked, setIsButtonClicked] = useState(false);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.om/users")
      .then((response) => response.json())
      .then((respnse) => {
        setData(respnse);
      })
      .catch((err) => setError(err));
  }, [isButtonClicked]);
  const handleClick = () => {
    setIsButtonClicked(true);
  };

  return (
    <div>
      <h3>Error Handling :</h3>
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
};

export default Question2;
