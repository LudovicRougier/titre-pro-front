import { Genre } from "@/domain/model/Genre";

export interface GetGenres {
  invoke: () => Promise<Genre[] | null>;
}
