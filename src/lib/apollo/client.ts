import { getToken } from "@/utils/getToken";
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

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_API_URL,
  fetch,
});

const authLink = setContext(async (_, { headers }) => {
  const token = await getToken();
  return {
    headers: {
      ...headers,
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
