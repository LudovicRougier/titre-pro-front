import { APIUser } from "@/domain/model/User";

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
export interface APIUserInfo {
  id: string;
  name: string;
  age: number;
  country: string;
  gender: string | null;
  description: string | null;
  email: string;
  wanted_genres: Genre[] | null;
  unwanted_genres: Genre[] | null;
  wanted_watch_providers: APIWatchProvider[] | null;
}

export interface UserInfo {
  id: string;
  name: string;
  age: number;
  country: string;
  gender: string;
  description: string;
  email: string;
  wantedGenres: Genre[] | null;
  unwantedGenres: Genre[] | null;
  wantedWatchProviders: string[] | null;
}

export interface AccountDataSource {
  getAccountDetails: () => Promise<APIUser | null>;
  updateAccountDetails: (userInfo: APIUser) => Promise<void>;
  deleteAccount: () => Promise<void>;
}
