import { ChildrenInterface } from "@/shared/interfaces/general/childrenNode";
import { AuthDependencyProvider } from "@/shared/contexts/dependencies/auth";
import { MovieDependencyProvider } from "@/shared/contexts/dependencies/movie";
import { MoodDependencyProvider } from "@/shared/contexts/dependencies/mood";

export const DependenciesProvider: React.FC<ChildrenInterface> = ({
  children,
}) => {
  return (
    <MovieDependencyProvider>
      <MoodDependencyProvider>
        <AuthDependencyProvider>{children}</AuthDependencyProvider>
      </MoodDependencyProvider>
    </MovieDependencyProvider>
  );
};
