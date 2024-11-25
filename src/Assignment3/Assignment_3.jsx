import React from "react";
import LoginPage from "./Ques1/LoginPage";
import NestedContext from "./Ques2/NestedContext";

import Routing from "../Routing";
import Home from "./Ques3/Home";
import HomeQ4 from "./Ques4/HomeQ4";
import Dashboard from "./Ques5/Dashboard";
import ProductsList from "./Ques6/ProductsList";

const Assignment_3 = () => {
  return (
    <div>
      <h2>Question-1</h2>
      <LoginPage />
      <hr />
      <h2>Question-2</h2>
      <NestedContext />
      <hr />
      <h2>Question-3</h2>
      <Home />
      <hr />
      <h2>Question-4</h2>
      <HomeQ4 />
      <hr />
      <h2>Question-5</h2>
      <Dashboard />
      <hr />
      <h2>Question-6</h2>
      <ProductsList />
    </div>
  );
};

export default Assignment_3;
