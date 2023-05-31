import { MoodModel } from "@/domain/model/Mood";

export interface RetrieveMoodHistoryList {
  invoke: () => Promise<MoodModel[] | null>;
}
