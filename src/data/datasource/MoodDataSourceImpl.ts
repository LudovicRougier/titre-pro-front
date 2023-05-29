import "reflect-metadata";
import { inject, injectable } from "inversify";
import { TYPES } from "@/container/types";
import { GraphQLBaseService } from "@/data/GraphQLBaseService";
import { MoodDataSource } from "@/data/datasource/interfaces/MoodDataSource";
import { APIService } from "@/data/datasource/interfaces/APIService";

@injectable()
export class MoodDataSourceImpl implements MoodDataSource {
  private api;

  public constructor(
    @inject(TYPES.APIService) apiService: GraphQLBaseService | APIService
  ) {
    this.api = apiService.api;
  }

  async fetchMoodRecommendations() {}

  async retrieveMoodHistoryList() {}

  async removeMoodHistoryEntry() {}

  async getMoodDetails() {}
}
