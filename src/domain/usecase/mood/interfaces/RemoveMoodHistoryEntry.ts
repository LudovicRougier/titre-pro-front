export interface RemoveMoodHistoryEntry {
  invoke: (id: string) => Promise<void | null>;
}
