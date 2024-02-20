import { ApolloClient, InMemoryCache } from "@apollo/client";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const apolloClient = new ApolloClient({
  uri: SERVER_URL,
  cache: new InMemoryCache(),
});
