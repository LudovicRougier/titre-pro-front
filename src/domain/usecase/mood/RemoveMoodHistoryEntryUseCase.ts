import "reflect-metadata";
import { injectable, inject } from "inversify";
import { TYPES } from "@/container/types";

import type { MoodRepository } from "@/data/repository/interfaces/MoodRepository";
import { RemoveMoodHistoryEntry } from "@/domain/usecase/mood/interfaces/RemoveMoodHistoryEntry";

@injectable()
export class RemoveMoodHistoryEntryUseCase implements RemoveMoodHistoryEntry {
  private moodRepository: MoodRepository;

  public constructor(
    @inject(TYPES.MoodRepository) moodRepository: MoodRepository
  ) {
    this.moodRepository = moodRepository;
  }

  public async invoke(id: string) {
    return this.moodRepository.removeMoodHistoryEntry(id);
  }
}
