import { createContext, useContext, useMemo } from "react";
import { ChildrenInterface } from "@/shared/interfaces/general/childrenNode";

import { TYPES, container } from "@/container/container.config";

import { MoodRepository } from "@/data/repository/interfaces/MoodRepository";
import { FetchMoodRecommendationsUseCase } from "@/domain/usecase/mood/FetchMoodRecommendationsUseCase";
import { GetMoodDetailsUseCase } from "@/domain/usecase/mood/GetMoodDetailsUseCase";
import { RetrieveMoodHistoryListUseCase } from "@/domain/usecase/mood/RetrieveMoodHistoryListUseCase";
import { RemoveMoodHistoryEntryUseCase } from "@/domain/usecase/mood/RemoveMoodHistoryEntryUseCase";

export const MoodDependencyContext = createContext<{
  repository: MoodRepository;
  fetchMoodRecommandations: FetchMoodRecommendationsUseCase;
  getMoodDetails: GetMoodDetailsUseCase;
  retrieveMoodHistoryList: RetrieveMoodHistoryListUseCase;
  removeMoodHistoryEntry: RemoveMoodHistoryEntryUseCase;
} | null>(null);

export const MoodDependencyProvider: React.FC<ChildrenInterface> = ({
  children,
}) => {
  const dependencies = useMemo(() => {
    return {
      repository: container.get<MoodRepository>(TYPES.MoodRepository),
      fetchMoodRecommandations: container.get<FetchMoodRecommendationsUseCase>(
        TYPES.FetchMoodRecommendationsUseCase
      ),
      getMoodDetails: container.get<GetMoodDetailsUseCase>(
        TYPES.GetMoodDetailsUseCase
      ),
      retrieveMoodHistoryList: container.get<RetrieveMoodHistoryListUseCase>(
        TYPES.RetrieveMoodHistoryListUseCase
      ),
      removeMoodHistoryEntry: container.get<RemoveMoodHistoryEntryUseCase>(
        TYPES.RemoveMoodHistoryEntryUseCase
      ),
    };
  }, []);

  return (
    <MoodDependencyContext.Provider value={dependencies}>
      {children}
    </MoodDependencyContext.Provider>
  );
};

export const useMoodDependencies = () => {
  const context = useContext(MoodDependencyContext);
  if (!context) {
    throw new Error(
      "useMoodDependencies must be used within a MoodDependencyProvider"
    );
  }
  return context;
};
