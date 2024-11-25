// Add a loading indicator (e.g., a spinner) to the component. Display it while the data is being fetched and hide it once the data is loaded

import React, { useEffect, useState } from "react";

const Question3 = () => {
  const [data, setData] = useState([]);
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          return response.json();
        })
        .then((data) => {
          console.log(data);
          setData(data);
          setIsLoading(false);
        })
        .catch((error) => {
          console.log("Invalid api:", error);
        });
    }, 3000);
  }, [isButtonClicked]);

  const handleClick = () => {
    setIsButtonClicked(true);
  };

  return (
    <div>
      {isButtonClicked ? (
        isLoading ? (
          "Loading..."
        ) : (
          <ul>
            {data.map((user) => (
              <li key={user.id}>{user.username}</li>
            ))}
          </ul>
        )
      ) : (
        <p>Click Button!</p>
      )}

      <button onClick={handleClick} disabled={isButtonClicked}>
        Fetch Data
      </button>
    </div>
  );
};
export default Question3;
