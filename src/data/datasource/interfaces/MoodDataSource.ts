import { APIMood } from "@/domain/model/Mood";

export interface MoodDataSource {
  fetchMoodRecommendations: (userInput: string) => Promise<APIMood | null>;
  getMoodDetails: (id: string) => Promise<APIMood | null>;
  retrieveMoodHistoryList: () => Promise<APIMood[] | null>;
  removeMoodHistoryEntry: (id: string) => Promise<void | null>;
}
