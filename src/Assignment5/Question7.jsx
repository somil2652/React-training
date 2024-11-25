// Create a form in your React component that allows the user to input data (e.g., a post title and content). Use Axios to send a POST request to an API endpoint, posting the user's data.

import React, { useState } from "react";
import axios from "axios";

const Question7 = () => {
  const [data, setData] = useState({ title: "", content: "" });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  async function handleClick(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/posts",
        data
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <p>AXIOS POST:</p>
      <label>Title:</label>
      <input
        type="text"
        placeholder="Type Here"
        value={data.title}
        name="title"
        onChange={handleChange}
      />
      <br />
      <br />
      <label>Content:</label>
      <input
        type="text"
        placeholder="Type Here"
        value={data.content}
        name="content"
        onChange={handleChange}
      />
      <br />
      <br />
      <button onClick={handleClick}>Post</button>
    </>
  );
};

export default Question7;
