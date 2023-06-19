import { MoodModel } from "@/domain/model/Mood";

export interface RetrieveMoodHistoryList {
  invoke: (id: number) => Promise<MoodModel[] | null>;
}
