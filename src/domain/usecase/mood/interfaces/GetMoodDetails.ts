import { MoodModel } from "@/domain/model/Mood";

export interface GetMoodDetails {
  invoke: () => Promise<MoodModel | null>;
}
