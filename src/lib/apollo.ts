import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  gql,
  useQuery,
} from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: "https://countries.trevorblades.com/",
  cache: new InMemoryCache(),
});

export default apolloClient;

export { ApolloProvider, gql, useQuery as useGraphQuery };
