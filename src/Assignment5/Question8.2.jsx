// set up a GraphQL client library like Apollo Client. Create a simple component that uses the client to fetch and display data from a GraphQL API.

import { useQuery } from "@apollo/client";
import { GET_ALL_FILMS } from "./Question8.3";
import { useEffect, useState } from "react";

function FetchData() {
  const { data, loading, error } = useQuery(GET_ALL_FILMS, {
    variables: {
      after: "1",
      before: "10",
    },
  });
  // console.log(data);
  const [showData, setshowData] = useState([]);
  useEffect(() => {
    setshowData(data?.allFilms.edges);
  }, [data]);

  console.log(data?.allFilms.edges, loading, error);
  return (
    <>
      <p>GraphQL GET:</p>
      {!loading && showData?.map((item) => <li>{item.cursor}</li>)}
    </>
  );
}

export default FetchData;
