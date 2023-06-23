import { ChildrenInterface } from "@/shared/interfaces/general/childrenNode";
import { AuthDependencyProvider } from "@/shared/contexts/dependencies/auth";
import { MovieDependencyProvider } from "@/shared/contexts/dependencies/movie";
import { MoodDependencyProvider } from "@/shared/contexts/dependencies/mood";
import { AccountDependencyProvider } from "@/shared/contexts/dependencies/account";
import { WatchProviderDependencyProvider } from "@/shared/contexts/dependencies/watchProvider";
import { GenreDependencyProvider } from "@/shared/contexts/dependencies/genre";

export const DependenciesProvider: React.FC<ChildrenInterface> = ({
  children,
}) => {
  return (
    <GenreDependencyProvider>
      <MovieDependencyProvider>
        <WatchProviderDependencyProvider>
          <MoodDependencyProvider>
            <AccountDependencyProvider>
              <AuthDependencyProvider>{children}</AuthDependencyProvider>
            </AccountDependencyProvider>
          </MoodDependencyProvider>
        </WatchProviderDependencyProvider>
      </MovieDependencyProvider>
    </GenreDependencyProvider>
  );
};
