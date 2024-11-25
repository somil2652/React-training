import React from "react";
import { Parent } from "./Parent";
import Child from "./Child";

function LoginPage() {
  return (
    <>
      <Parent>
        <Child />
      </Parent>
    </>
  );
}

export default LoginPage;
