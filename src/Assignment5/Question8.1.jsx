import React from "react";
import FetchData from "./Question8.2";

import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
const link = new HttpLink({
  uri: "https://star-wars-graphql-dont-change.p.rapidapi.com/",
  headers: {
    "x-rapidapi-key": "10daac3d78msh6b0ad67e451f6f0p139f95jsna05747bec7f3",
    "x-rapidapi-host": "star-wars-graphql-dont-change.p.rapidapi.com",
    "Content-Type": "application/json",
  },
});

const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache(),
});

const ApolloProvider1 = () => {
  return (
    <ApolloProvider client={client}>
      <FetchData />
    </ApolloProvider>
  );
};

export default ApolloProvider1;
