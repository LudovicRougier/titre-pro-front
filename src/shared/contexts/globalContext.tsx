import React from "react";
import { ChildrenInterface } from "@/shared/interfaces/general/childrenNode";
import apolloClient from "@/lib/apollo/client";
import QueryProvider from "@/lib/react-query/provider";
import ReduxProvider from "@/lib/redux-toolkit/provider";
import { DependenciesProvider } from "@/shared/contexts/dependencies";
import { ApolloProvider } from "@apollo/client";

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
