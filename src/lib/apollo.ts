import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  gql,
  useQuery,
} from "@apollo/client";

const apolloClient = new ApolloClient({
  // To fill in the futire with actual API uri
  uri: "",
  cache: new InMemoryCache(),
});

export default apolloClient;

export { ApolloProvider, gql, useQuery as useGraphQuery };
