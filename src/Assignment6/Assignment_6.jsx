import React from "react";
import Counter6 from "./Question3_1";
import LoginQ4 from "./Question4";
import ModalQ6 from "./Question6";
import Question1 from "./Question1";
import UserProfile from "./Question5";
import LazyWithError from "./Question2";

const Assignment_6 = () => {
  const data = {
    name: "John",
    email: "john123@gmail.com",
    phone: "872399280",
  };
  return (
    <div>
      <h2>Question-1</h2>
      <Question1 />
      <hr />
      <h2>Question-2</h2>
      <LazyWithError />
      <hr />
      <h2>Question-3</h2>
      <Counter6 />
      <hr />
      <h2>Question-4</h2>
      <LoginQ4 />
      <hr />
      <h2>Question-5</h2>
      <UserProfile {...data} />
      <hr />
      <h2>Question-6</h2>
      <ModalQ6 />
    </div>
  );
};

export default Assignment_6;
