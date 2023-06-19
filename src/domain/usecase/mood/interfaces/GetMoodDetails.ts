import { MoodModel } from "@/domain/model/Mood";

export interface GetMoodDetails {
  invoke: (id: number) => Promise<MoodModel | null>;
}
