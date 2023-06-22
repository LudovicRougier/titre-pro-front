import { createSlice } from "@reduxjs/toolkit";
import { WatchProvider } from "@/domain/model/WatchProvider";

const initialState = {
  watchProviders: [] as WatchProvider[],
};

const watchProviderSlice = createSlice({
  name: "watchProviderSlice",
  initialState,
  reducers: {
    ADD_WATCH_PROVIDER(state, action) {
      const watchProviderToAdd = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];

      watchProviderToAdd.forEach((watchProvider) => {
        if (!watchProvider.providerId) return;
        const existingMood = state.watchProviders.find(
          (existing) => existing.providerId === watchProvider.providerId
        );
        if (!existingMood) {
          state.watchProviders.push(watchProvider);
        }
      });
    },
  },
});

export const { ADD_WATCH_PROVIDER } = watchProviderSlice.actions;
export default watchProviderSlice.reducer;
