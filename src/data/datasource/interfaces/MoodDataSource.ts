import { APIMood } from "@/domain/model/Mood";

export interface MoodDataSource {
  fetchMoodRecommendations: (userInput: string) => Promise<APIMood | null>;
  getMoodDetails: (id: string) => Promise<APIMood | null>;
  retrieveMoodHistoryList: (id: number) => Promise<APIMood[] | null>;
  removeMoodHistoryEntry: () => Promise<void>;
}
