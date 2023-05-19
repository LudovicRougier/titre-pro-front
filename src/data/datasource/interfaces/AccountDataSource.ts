export interface AccountDataSource {
  getAccountDetails: () => Promise<void>;
  updateAccountDetails: () => Promise<void>;
  deleteAccount: () => Promise<void>;
}
