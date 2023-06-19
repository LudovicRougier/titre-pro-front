import "reflect-metadata";
import { injectable, inject } from "inversify";
import { TYPES } from "@/container/types";

import { FetchMoodRecommendations } from "@/domain/useCase/mood/interfaces/FetchMoodRecommendations";
import type { MoodRepository } from "@/data/repository/interfaces/MoodRepository";

@injectable()
export class FetchMoodRecommendationsUseCase
  implements FetchMoodRecommendations
{
  private moodRepository: MoodRepository;

  public constructor(
    @inject(TYPES.MoodRepository) moodRepository: MoodRepository
  ) {
    this.moodRepository = moodRepository;
  }

  public async invoke(userInput: string) {
    return this.moodRepository.fetchMoodRecommendations(userInput);
  }
}
