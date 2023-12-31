import "reflect-metadata";
import { GraphQLBaseService } from "@/data/GraphQLBaseService";
import { MoodDataSource } from "@/data/datasource/interfaces/MoodDataSource";
import { APIMood } from "@/domain/model/Mood";
import {
  GET_MOOD_DETAILS,
  GET_RECOMMANDATIONS,
  GET_MOOD_HISTORY,
  DELETE_PROMPT,
} from "@/lib/apollo/request/mood";

/**
 * Implementation of the MoodDataSource interface.
 * Provides methods for interacting with mood data from a GraphQL API.
 *
 * @extends {GraphQLBaseService}
 * @implements {MoodDataSource}
 */
export class MoodDataSourceImpl
  extends GraphQLBaseService
  implements MoodDataSource
{
  /**
   * Fetches mood recommendations based on user input.
   *
   * @param {string} userInput - The user input for mood recommendations.
   * @returns {Promise<APIMood | null>} A promise that resolves to the fetched mood recommendations.
   */
  async fetchMoodRecommendations(userInput: string): Promise<APIMood | null> {
    const res = await this.api.mutate({
      mutation: GET_RECOMMANDATIONS.query,
      variables: {
        userInput,
      },
    });

    if (res.errors) return null;
    return res.data[GET_RECOMMANDATIONS.queryName];
  }

  /**
   * Retrieves the details of a mood by ID.
   *
   * @param {number} id - The ID of the mood.
   * @returns {Promise<APIMood | null>} A promise that resolves to the retrieved mood details.
   */
  async getMoodDetails(id: string): Promise<APIMood | null> {
    const res = await this.api.query({
      query: GET_MOOD_DETAILS.query,
      variables: {
        id,
      },
    });

    if (res.errors) return null;
    return res.data[GET_MOOD_DETAILS.queryName];
  }

  /**
   * Retrieves the history list of moods for a given ID.
   *
   * @returns {Promise<APIMood[] | null>} A promise that resolves to the retrieved mood history list.
   */
  async retrieveMoodHistoryList(): Promise<APIMood[] | null> {
    const res = await this.api.query({
      query: GET_MOOD_HISTORY.query,
    });

    if (res.errors) return null;
    return res.data[GET_MOOD_HISTORY.queryName];
  }

  /**
   * Removes a mood history entry.
   *
   * @param {number} id - The ID of the mood.
   * @returns {Promise<APIMood | null>} A promise that resolves when the mood history entry is removed.
   */
  async removeMoodHistoryEntry(id: string): Promise<void | null> {
    const res = await this.api.mutate({
      mutation: DELETE_PROMPT.query,
      variables: {
        id,
      },
    });

    if (res.errors) return null;
  }
}
