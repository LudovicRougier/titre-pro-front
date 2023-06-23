export interface RefreshToken {
  invoke: () => Promise<string | null>;
}
