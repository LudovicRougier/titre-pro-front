import "reflect-metadata";
import { injectable, inject } from "inversify";
import { TYPES } from "@/container/types";

import type { MoodRepository } from "@/data/repository/interfaces/MoodRepository";
import type { NotificationEvent } from "@/types/NotificationEvents";
import { RemoveMoodHistoryEntry } from "@/domain/usecase/mood/interfaces/RemoveMoodHistoryEntry";
import { LOCALE } from "@/shared/enums/locale";
import { BaseUseCase } from "../BaseUseCase";

@injectable()
export class RemoveMoodHistoryEntryUseCase
  extends BaseUseCase
  implements RemoveMoodHistoryEntry
{
  private moodRepository: MoodRepository;

  public constructor(
    @inject(TYPES.MoodRepository) moodRepository: MoodRepository
  ) {
    super();
    this.moodRepository = moodRepository;
  }

  public async invoke(id: string) {
    const res = await this.moodRepository.removeMoodHistoryEntry(id);
    if (res === null) {
      this.notifications.show({
        id: "update-profile-error",
        withCloseButton: true,
        autoClose: 2000,
        title: LOCALE.ERROR,
        message: LOCALE.SOMETHING_WENT_WRONG,
        color: "red",
      });
    } else {
      this.notifications.show({
        id: "update-profile-success",
        withCloseButton: true,
        autoClose: 2000,
        title: LOCALE.SUCCESS,
        message: LOCALE.MOOD_DELETED_SUCCESSFULY,
        color: "green",
      });
    }
  }
}
