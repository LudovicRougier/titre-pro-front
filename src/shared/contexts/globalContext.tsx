import React from "react";
import { ChildrenInterface } from "@/shared/interfaces/general/childrenNode";
import ReduxProvider from "@/redux/provider";
import QueryProvider from "@/query/provider";
import { DependenciesProvider } from "@/shared/contexts/dependencies";
import apolloClient, { ApolloProvider } from "@/lib/apollo";

const GlobalContext: React.FC<ChildrenInterface> = ({ children }) => {
  return (
    <QueryProvider>
      <ReduxProvider>
        <DependenciesProvider>
          <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
        </DependenciesProvider>
      </ReduxProvider>
    </QueryProvider>
  );
};

export default GlobalContext;
