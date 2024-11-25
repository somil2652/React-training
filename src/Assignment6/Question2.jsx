// Extend Question 1 to include error handling. If a lazy-loaded component fails to load, display a user-friendly error message to the user instead of crashing the application. Implement this using the ErrorBoundary component.
import React, { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
// import HomeQ2 from "./Question2.1";
const HomeQ2 = lazy(() => import("./Question2.1"));

const LazyWithError = () => {
  return (
    <>
      <ErrorBoundary fallback={<div>Error Has Occured</div>}>
        <Suspense fallback={<div>Loading</div>}>
          <HomeQ2 />
        </Suspense>
      </ErrorBoundary>
    </>
  );
};
export default LazyWithError;
