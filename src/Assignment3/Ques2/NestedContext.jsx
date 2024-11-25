import React from "react";
import { Parent } from "./Parent";
import Child from "./Child";

function NestedContext() {
  return (
    <>
      <Parent>
        <Child />
      </Parent>
    </>
  );
}

export default NestedContext;
