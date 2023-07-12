import "reflect-metadata";
import { injectable } from "inversify";

import type { NotificationEvent } from "@/types/NotificationEvents";
import { notificationService } from "@/lib/mantine-notifications/client";

interface IBaseUseCase {
  notifications: NotificationEvent;
}

@injectable()
export abstract class BaseUseCase implements IBaseUseCase {
  public notifications: NotificationEvent;

  public constructor() {
    this.notifications = notificationService;
  }
}
