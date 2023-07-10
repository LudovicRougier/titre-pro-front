import "reflect-metadata";
import { injectable, inject } from "inversify";
import { TYPES } from "@/container/types";

import { store } from "@/lib/redux-toolkit/store";
import { ADD_MOVIE } from "@/lib/redux-toolkit/slices/movieSlice";
import { ADD_MOOD } from "@/lib/redux-toolkit/slices/moodSlice";

import type { MoodDataSource } from "@/data/datasource/interfaces/MoodDataSource";
import { MoodRepository } from "@/data/repository/interfaces/MoodRepository";
import { MoodModel } from "@/domain/model/Mood";

/**
 * Implementation of the MoodRepository interface.
 * Provides methods for interacting with mood data.
 *
 * @implements {MoodRepository}
 */
@injectable()
export class MoodRepositoryImpl implements MoodRepository {
  private moodDataSource: MoodDataSource;

  public constructor(
    @inject(TYPES.MoodDataSource) moodDataSource: MoodDataSource
  ) {
    this.moodDataSource = moodDataSource;
  }

  /**
   * Fetches mood recommendations based on user input.
   *
   * @param {string} userInput - The user input for mood recommendations.
   * @returns {Promise<?MoodModel>} A promise that resolves to the fetched mood recommendations.
   */
  async fetchMoodRecommendations(userInput: string): Promise<MoodModel | null> {
    const res = await this.moodDataSource.fetchMoodRecommendations(userInput);
    if (res === null) return null;

    const mood = MoodModel.fromJSON(res);
    this.updateStoreData(mood);
    return mood;
  }

  /**
   * Retrieves the details of a mood by ID.
   *
   * @param {number} id - The ID of the mood.
   * @returns {Promise<?MoodModel>} A promise that resolves to the retrieved mood details.
   */
  async getMoodDetails(id: string): Promise<MoodModel | null> {
    const res = await this.moodDataSource.getMoodDetails(id);
    if (res === null) return null;

    const mood = MoodModel.fromJSON(res);
    this.updateStoreData(mood);

    return mood;
  }

  /**
   * Retrieves the history list of moods for a given ID.
   *
   * @returns {Promise<?MoodModel[]>} A promise that resolves to the retrieved mood history list.
   */
  async retrieveMoodHistoryList(): Promise<MoodModel[] | null> {
    const res = await this.moodDataSource.retrieveMoodHistoryList();
    if (res === null) return null;

    const moods = res.map((mood) => MoodModel.fromJSON(mood));
    moods.forEach((mood) => this.updateStoreData(mood));

    return moods;
  }

  /**
   * Removes a mood history entry.
   *
   * @returns {Promise<void>} A promise that resolves when the mood history entry is removed.
   */
  async removeMoodHistoryEntry(): Promise<void> {
    return this.moodDataSource.removeMoodHistoryEntry();
  }

  /**
   * Updates the store data with a mood model.
   *
   * @param {MoodModel} mood - The mood model to update the store data with.
   * @private
   */
  private updateStoreData(mood: MoodModel) {
    this.updateMovieList(mood);
    this.updateMoodList(mood);
  }

  /**
   * Updates the movie list in the store with a mood model.
   *
   * @param {MoodModel} moodModel - The mood model to update the movie list with.
   * @private
   */
  private updateMovieList(moodModel: MoodModel) {
    const mood = moodModel.toJSON();
    const movies = [
      ...mood.moviesRelatedToEmotions,
      ...mood.moviesRelatedToTopic,
    ];
    store.dispatch(ADD_MOVIE(movies));
  }

  /**
   * Updates the mood list in the store with a mood model.
   *
   * @param {MoodModel} moodModel - The mood model to update the mood list with.
   * @private
   */
  private updateMoodList(moodModel: MoodModel) {
    store.dispatch(ADD_MOOD(moodModel.toJSON()));
  }
}
