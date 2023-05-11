import React from "react";
import { ChildrenInterface } from "~/shared/interfaces/general/childrenNode";
import { ReduxProvider } from "../../redux/provider";

const GlobalContext: React.FC<ChildrenInterface> = ({ children }) => {
  return <ReduxProvider>{children}</ReduxProvider>;
};

export default GlobalContext;
