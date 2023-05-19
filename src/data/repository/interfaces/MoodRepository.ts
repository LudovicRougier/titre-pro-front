export interface MoodRepository {
  fetchMoodRecommendations: () => Promise<void>;
  retrieveMoodHistoryList: () => Promise<void>;
  removeMoodHistoryEntry: () => Promise<void>;
  getMoodDetails: () => Promise<void>;
}
