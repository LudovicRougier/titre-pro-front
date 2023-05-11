import React from "react";
import { ChildrenInterface } from "~/shared/interfaces/general/childrenNode";

const GlobalContext: React.FC<ChildrenInterface> = ({ children }) => {
  return <div>{children}</div>;
};

export default GlobalContext;
