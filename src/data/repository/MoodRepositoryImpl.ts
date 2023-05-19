import "reflect-metadata";
import { injectable, inject } from "inversify";
import { TYPES } from "@/container/types";

import type { MoodDataSource } from "@/data/datasource/interfaces/MoodDataSource";
import { MoodRepository } from "@/data/repository/interfaces/MoodRepository";

@injectable()
export class MoodRepositoryImpl implements MoodRepository {
  private moodDataSource: MoodDataSource;

  public constructor(
    @inject(TYPES.MoodDataSource) moodDataSource: MoodDataSource
  ) {
    this.moodDataSource = moodDataSource;
  }

  async fetchMoodRecommendations() {
    return this.moodDataSource.fetchMoodRecommendations();
  }

  async retrieveMoodHistoryList() {
    return this.moodDataSource.removeMoodHistoryEntry();
  }

  async removeMoodHistoryEntry() {
    return this.moodDataSource.removeMoodHistoryEntry();
  }

  async getMoodDetails() {
    return this.moodDataSource.getMoodDetails();
  }
}
