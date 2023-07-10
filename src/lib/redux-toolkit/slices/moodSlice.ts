import { MoodModel } from "@/domain/model/Mood";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  moods: [] as MoodModel[],
};

const moodSlice = createSlice({
  name: "moodSlice",
  initialState,
  reducers: {
    ADD_MOOD(state, action) {
      const moodsToAdd = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];

      moodsToAdd.forEach((mood) => {
        if (!mood.id) return;
        const existingMood = state.moods.find(
          (existing) => existing.id === mood.id
        );
        if (!existingMood) {
          state.moods.push(mood);
        }
      });
    },
    REMOVE_MOOD(state, action) {
      const id = action.payload;
      const moodToRemove = state.moods.find((mood) => mood.id === id);
      if (moodToRemove)
        state.moods = state.moods.filter((mood) => mood.id !== id);
    },
  },
});

export const { ADD_MOOD, REMOVE_MOOD } = moodSlice.actions;
export default moodSlice.reducer;
