import { injectable } from "inversify";
import "reflect-metadata";
import { GraphQLBaseService } from "@/data/GraphQLBaseService";
import { MoodDataSource } from "@/data/datasource/interfaces/MoodDataSource";

@injectable()
export class MoodDataSourceImpl
  extends GraphQLBaseService
  implements MoodDataSource
{
  async fetchMoodRecommendations() {}

  async retrieveMoodHistoryList() {}

  async removeMoodHistoryEntry() {}

  async getMoodDetails() {}
}
