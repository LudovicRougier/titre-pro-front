export interface MoodDataSource {
  fetchMoodRecommendations: () => Promise<void>;
  retrieveMoodHistoryList: () => Promise<void>;
  removeMoodHistoryEntry: () => Promise<void>;
  getMoodDetails: () => Promise<void>;
}
