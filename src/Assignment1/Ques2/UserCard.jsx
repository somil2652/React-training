// Create a functional component named UserCard that accepts the following props: name, email, and avatarURL.
// Use the props to display the user's name, email, and an image (avatar) in the UserCard component.
// Create multiple instances of the UserCard component with different user data.

import React from "react";

function UserCard({ data }) {
  const userData = data.map((value) => (
    <li>
      <p>{value.name}</p>
      <p>{value.email}</p>
      <img src={value.avatarURL} />
    </li>
  ));

  return (
    <div>
      <ul>{userData}</ul>
    </div>
  );
}

export default UserCard;
