import React from "react";
import { ChildrenInterface } from "@/shared/interfaces/general/childrenNode";
import ReduxProvider from "@/redux/provider";
import QueryProvider from "@/query/provider";

const GlobalContext: React.FC<ChildrenInterface> = ({ children }) => {
  return (
    <QueryProvider>
      <ReduxProvider>{children}</ReduxProvider>
    </QueryProvider>
  );
};

export default GlobalContext;
