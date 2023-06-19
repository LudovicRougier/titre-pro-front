import "reflect-metadata";
import { GraphQLBaseService } from "@/data/GraphQLBaseService";
import { MoodDataSource } from "@/data/datasource/interfaces/MoodDataSource";
import {
  GET_MOOD_DETAILS,
  GET_RECOMMANDATIONS,
  GET_MOOD_HISTORY,
} from "@/lib/apollo/request/mood";

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

  async getMoodDetails(id: number) {
    const res = await this.api.query({
      query: GET_MOOD_DETAILS.query,
      variables: {
        id,
      },
    });

    if (res.errors) return null;
    return res.data[GET_MOOD_DETAILS.queryName];
  }

  async retrieveMoodHistoryList(id: number) {
    const res = await this.api.query({
      query: GET_MOOD_HISTORY.query,
      variables: {
        id,
      },
    });

    if (res.errors) return null;
    return res.data[GET_MOOD_HISTORY.queryName].prompts;
  }

  async removeMoodHistoryEntry() {}
}
