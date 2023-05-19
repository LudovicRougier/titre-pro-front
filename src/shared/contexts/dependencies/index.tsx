import { AuthDependencyProvider } from "@/shared/contexts/dependencies/auth";
import { ChildrenInterface } from "@/shared/interfaces/general/childrenNode";

export const DependenciesProvider: React.FC<ChildrenInterface> = ({
  children,
}) => {
  return <AuthDependencyProvider>{children}</AuthDependencyProvider>;
};
