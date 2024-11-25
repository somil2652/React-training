// .Develop an HOC named withDataFetching that fetches data from an API and passes it as props to a component. Use this HOC to retrieve and display data in a component.

import { useEffect, useState } from "react";
import axios from "axios";

const EnhancedComponent = (url) => {
  const [data, setData] = useState();
  const handleDataFetch = async () => {
    const response = await axios.get(url);

    console.log(response);
    setData(response);
  };
  useEffect(() => {
    handleDataFetch();
  }, [url]);
  return { data };
};

const WithDataFetching = (OriginalComponent) => (props) => {
  const { data } = EnhancedComponent(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return <OriginalComponent data={data} />;
};
export default WithDataFetching;
