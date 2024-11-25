// .Build an HOC called withLogger that logs the events of a component (e.g., mounting, unmounting, updating). Apply this HOC to a component and display the logs in the browser console

import { useEffect, useState } from "react";

const withLogger = (OriginalComponent) => {
  const EnhancedComponent = (props) => {
    const [count, setCount] = useState(0);

    const incCounter = () => {
      setCount(count + 1);
    };
    useEffect(() => {
      if (count === 0) console.log("Component Mounts");
      else console.log("Component updates");
      return () => {
        console.log("Component Unmounts");
      };
    }, [count]);

    return (
      <OriginalComponent {...props} count={count} incCounter={incCounter} />
    );
  };
  return EnhancedComponent;
};
export default withLogger;
