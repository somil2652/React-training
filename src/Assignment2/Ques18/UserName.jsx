import React from "react";
import useLocalStorage from "./UseLocalStorage";

function UserName() {
  const [name, setName, deleteName] = useLocalStorage("name", "");

  return (
    <div>
      <p>Name: {name}</p>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={deleteName}>Clear Name</button>
    </div>
  );
}

export default UserName;
