import { MoodModel } from "@/domain/model/Mood";

export interface FetchMoodRecommendations {
  invoke: (userInput: string) => Promise<MoodModel | null>;
}
