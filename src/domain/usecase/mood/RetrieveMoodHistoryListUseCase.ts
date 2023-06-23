import "reflect-metadata";
import { injectable, inject } from "inversify";
import { TYPES } from "@/container/types";

import type { MoodRepository } from "@/data/repository/interfaces/MoodRepository";
import { RetrieveMoodHistoryList } from "@/domain/usecase/mood/interfaces/RetrieveMoodHistoryList";

@injectable()
export class RetrieveMoodHistoryListUseCase implements RetrieveMoodHistoryList {
  private moodRepository: MoodRepository;

  public constructor(
    @inject(TYPES.MoodRepository) moodRepository: MoodRepository
  ) {
    this.moodRepository = moodRepository;
  }

  public async invoke(id: number) {
    return this.moodRepository.retrieveMoodHistoryList(id);
  }
}
