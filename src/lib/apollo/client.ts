import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  gql,
  useQuery,
  createHttpLink,
  NormalizedCacheObject,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { getSession } from "next-auth/react";

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL,
  fetch,
});

const authLink = setContext(async (_, { headers }) => {
  const session = await getSession();
  if (!session) return { headers };

  const { token } = session.user;

  return {
    headers: {
      ...headers,
      "Content-Type": "application/json",
      Authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const apolloClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({ resultCaching: false }),
});

export default apolloClient;

export { ApolloProvider, gql, useQuery as useGraphQuery, ApolloClient };
export type { NormalizedCacheObject };
