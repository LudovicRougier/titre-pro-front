export interface DeleteAccount {
  invoke: (
    currentPassword: string
  ) => Promise<{ status: string; success: boolean; errors?: string[] } | null>;
}
