export interface UserInfo {
  name: string;
  age: string;
  country: string;
  description: string;
  favoriteGenres: string[];
  excludedGenres: string[];
}
export interface AccountDataSource {
  getAccountDetails: () => Promise<UserInfo>;
  updateAccountDetails: (userInfo: UserInfo) => Promise<void>;
  deleteAccount: () => Promise<void>;
}
