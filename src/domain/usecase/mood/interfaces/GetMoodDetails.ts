import { MoodModel } from "@/domain/model/Mood";

export interface GetMoodDetails {
  invoke: (id: string) => Promise<MoodModel | null>;
}
