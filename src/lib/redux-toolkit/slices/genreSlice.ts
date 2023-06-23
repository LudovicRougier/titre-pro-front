import { createSlice } from "@reduxjs/toolkit";
import { Genre } from "@/domain/model/Genre";

const initialState = {
  genres: [] as Genre[],
};

const genreSlice = createSlice({
  name: "genreSlice",
  initialState,
  reducers: {
    ADD_GENRE(state, action) {
      const genreToAdd = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];

      genreToAdd.forEach((genre) => {
        if (!genre.id) return;
        const existingMood = state.genres.find(
          (existing) => existing.id === genre.id
        );
        if (!existingMood) {
          state.genres.push(genre);
        }
      });
    },
  },
});

export const { ADD_GENRE } = genreSlice.actions;
export default genreSlice.reducer;
