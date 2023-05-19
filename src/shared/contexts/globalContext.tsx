import React from "react";
import { ChildrenInterface } from "@/shared/interfaces/general/childrenNode";
import ReduxProvider from "@/redux/provider";
import QueryProvider from "@/query/provider";
import { DependenciesProvider } from "@/shared/contexts/dependencies";

const GlobalContext: React.FC<ChildrenInterface> = ({ children }) => {
  return (
    <QueryProvider>
      <ReduxProvider>
        <DependenciesProvider>{children}</DependenciesProvider>
      </ReduxProvider>
    </QueryProvider>
  );
};

export default GlobalContext;
