import { MoodModel } from "@/domain/model/Mood";

export interface MoodRepository {
  fetchMoodRecommendations: (userInput: string) => Promise<MoodModel | null>;
  getMoodDetails: (id: string) => Promise<MoodModel | null>;
  retrieveMoodHistoryList: (id: number) => Promise<MoodModel[] | null>;
  removeMoodHistoryEntry: (id: string) => Promise<void | null>;
}
