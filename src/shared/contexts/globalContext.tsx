import React from "react";
import { ChildrenInterface } from "@/shared/interfaces/general/childrenNode";
import ReduxProvider from "@/redux/provider";
import QueryProvider from "@/query/provider";
import apolloClient, { ApolloProvider } from "@/lib/apollo";

const GlobalContext: React.FC<ChildrenInterface> = ({ children }) => {
  return (
    <QueryProvider>
      <ReduxProvider>
        <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
      </ReduxProvider>
    </QueryProvider>
  );
};

export default GlobalContext;
