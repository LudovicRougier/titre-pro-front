import { APIMood } from "@/domain/model/Mood";

export interface MoodDataSource {
  fetchMoodRecommendations: (userInput: string) => Promise<APIMood | null>;
  retrieveMoodHistoryList: () => Promise<APIMood[] | null>;
  removeMoodHistoryEntry: () => Promise<void>;
  getMoodDetails: () => Promise<APIMood | null>;
}
