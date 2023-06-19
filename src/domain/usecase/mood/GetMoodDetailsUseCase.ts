import "reflect-metadata";
import { injectable, inject } from "inversify";
import { TYPES } from "@/container/types";

import type { MoodRepository } from "@/data/repository/interfaces/MoodRepository";
import { GetMoodDetails } from "@/domain/useCase/mood/interfaces/GetMoodDetails";

@injectable()
export class GetMoodDetailsUseCase implements GetMoodDetails {
  private moodRepository: MoodRepository;

  public constructor(
    @inject(TYPES.MoodRepository) moodRepository: MoodRepository
  ) {
    this.moodRepository = moodRepository;
  }

  public async invoke(id: number) {
    return this.moodRepository.getMoodDetails(id);
  }
}
