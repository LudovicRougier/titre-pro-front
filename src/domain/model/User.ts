import { WatchProviderModel } from "@/domain/model/WatchProvider";
import { Genre as movieGenre } from "@/domain/model/Genre";

export interface Genre {
  id: string;
  name: string;
}

export interface APIWatchProvider {
  provider_id: string;
  logo_path: string;
  provider_name: string;
  display_priority: number;
}

export interface WatchProvider {
  providerId: string;
  logoPath: string;
  providerName: string;
  displayPriority: number;
}
export interface APIUser {
  id?: string;
  name?: string;
  age?: number | string;
  country?: string;
  gender?: string | null;
  description?: string | null;
  email?: string;
  current_password?: string | null;
  new_password?: string | null;
  wanted_genres?: movieGenre[] | null;
  unwanted_genres?: movieGenre[] | null;
  wanted_watch_providers?: APIWatchProvider[] | null;
  prompts?: number[] | null;
}

export interface User {
  id?: string;
  name?: string;
  age?: number | string;
  country?: string;
  gender?: string | null;
  description?: string | null;
  email?: string;
  currentPassword?: string | null;
  newPassword?: string | null;
  wantedGenres?: movieGenre[] | null;
  unwantedGenres?: movieGenre[] | null;
  wantedWatchProviders?: WatchProvider[] | null;
  prompts?: number[] | null;
}

export class UserModel implements User {
  id?: string;

  name?: string;

  age?: number | string;

  country?: string;

  gender?: string | null;

  description?: string | null;

  email?: string;

  currentPassword?: string | null;

  newPassword?: string | null;

  wantedGenres?: movieGenre[] | null;

  unwantedGenres?: movieGenre[] | null;

  wantedWatchProviders?: WatchProvider[] | null;

  prompts?: number[] | null;

  public constructor(user: User) {
    Object.assign(this, user);
  }

  public static fromJSON(user: APIUser): UserModel {
    return new UserModel({
      id: user.id,
      name: user.name,
      age: user.age,
      country: user.country,
      gender: user.gender,
      description: user.description,
      email: user.email,
      currentPassword: null,
      newPassword: null,
      wantedGenres: user.wanted_genres,
      unwantedGenres: user.unwanted_genres,
      prompts: user.prompts,
      wantedWatchProviders: user.wanted_watch_providers
        ? user.wanted_watch_providers.map((provider) =>
            WatchProviderModel.fromJSON(provider)
          )
        : undefined,
    });
  }

  public static toJSON(user: UserModel): APIUser {
    return {
      id: user.id,
      name: user.name,
      age: user.age,
      country: user.country,
      gender: user.gender,
      description: user.description,
      email: user.email,
      current_password: user.currentPassword,
      new_password: user.newPassword,
      wanted_genres: user.wantedGenres,
      unwanted_genres: user.unwantedGenres,
      prompts: user.prompts,
      wanted_watch_providers: user.wantedWatchProviders
        ? user.wantedWatchProviders.map((provider) =>
            WatchProviderModel.toJSON(provider)
          )
        : undefined,
    };
  }
}
