import "reflect-metadata";
import { injectable, inject } from "inversify";
import { TYPES } from "@/container/types";

import type { MoodDataSource } from "@/data/datasource/interfaces/MoodDataSource";
import { MoodRepository } from "@/data/repository/interfaces/MoodRepository";
import { MoodModel } from "@/domain/model/Mood";

@injectable()
export class MoodRepositoryImpl implements MoodRepository {
  private moodDataSource: MoodDataSource;

  public constructor(
    @inject(TYPES.MoodDataSource) moodDataSource: MoodDataSource
  ) {
    this.moodDataSource = moodDataSource;
  }

  async fetchMoodRecommendations(userInput: string) {
    const res = await this.moodDataSource.fetchMoodRecommendations(userInput);
    if (res === null) return null;
    return MoodModel.fromJSON(res);
  }

  async getMoodDetails(id: number) {
    const res = await this.moodDataSource.getMoodDetails(id);
    if (res === null) return null;
    return MoodModel.fromJSON(res);
  }

  async retrieveMoodHistoryList(id: number) {
    const res = await this.moodDataSource.retrieveMoodHistoryList(id);
    if (res === null) return null;
    return res.map((mood) => MoodModel.fromJSON(mood));
  }

  async removeMoodHistoryEntry() {
    return this.moodDataSource.removeMoodHistoryEntry();
  }
}
