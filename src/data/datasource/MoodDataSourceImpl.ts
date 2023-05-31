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

  async fetchMoodRecommendations(userInput: string) {
    return null;
  }

  async retrieveMoodHistoryList() {
    return null;
  }

  async removeMoodHistoryEntry() {}

  async getMoodDetails() {
    return null;
  }
}
