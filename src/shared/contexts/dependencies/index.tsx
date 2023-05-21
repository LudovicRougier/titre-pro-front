import { ChildrenInterface } from "@/shared/interfaces/general/childrenNode";
import { AuthDependencyProvider } from "@/shared/contexts/dependencies/auth";
import { MovieDependencyProvider } from "@/shared/contexts/dependencies/movie";

export const DependenciesProvider: React.FC<ChildrenInterface> = ({
  children,
}) => {
  return (
    <MovieDependencyProvider>
      <AuthDependencyProvider>{children}</AuthDependencyProvider>
    </MovieDependencyProvider>
  );
};
