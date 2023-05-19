export interface AccountRepository {
  getAccountDetails: () => Promise<void>;
  updateAccountDetails: () => Promise<void>;
  deleteAccount: () => Promise<void>;
}
