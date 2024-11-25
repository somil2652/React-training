// Create a React application that has multiple pages represented as components. Implement lazy loading for these components using React's lazy and Suspense features. When a user navigates to a particular page, the component should be loaded lazily, improving the application's initial loading time.

import React, { Suspense, lazy } from "react";
const HomeQ1 = lazy(() => import("./Question1.2"));
const Question1 = () => {
  return (
    <>
      <p>Lazy Loading</p>
      <Suspense fallback={<div>Loading</div>}>
        <HomeQ1 />
      </Suspense>
    </>
  );
};

export default Question1;
