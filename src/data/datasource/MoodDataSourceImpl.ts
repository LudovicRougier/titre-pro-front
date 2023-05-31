import "reflect-metadata";
import { GraphQLBaseService } from "@/data/GraphQLBaseService";
import { MoodDataSource } from "@/data/datasource/interfaces/MoodDataSource";
import { GET_RECOMMANDATIONS } from "@/lib/apollo/request/mood/getRecommandations";

export class MoodDataSourceImpl
  extends GraphQLBaseService
  implements MoodDataSource
{
  async fetchMoodRecommendations(userInput: string) {
    const res = await this.api.mutate({
      mutation: GET_RECOMMANDATIONS.query,
      variables: {
        userInput,
      },
    });

    if (res.errors) return null;
    return res.data[GET_RECOMMANDATIONS.queryName];
  }

  async retrieveMoodHistoryList() {
    return null;
  }

  async removeMoodHistoryEntry() {}

  async getMoodDetails() {
    return null;
  }
}
