import { MoodModel } from "@/domain/model/Mood";

export interface MoodRepository {
  fetchMoodRecommendations: (userInput: string) => Promise<MoodModel | null>;
  retrieveMoodHistoryList: () => Promise<MoodModel[] | null>;
  removeMoodHistoryEntry: () => Promise<void>;
  getMoodDetails: () => Promise<MoodModel | null>;
}
