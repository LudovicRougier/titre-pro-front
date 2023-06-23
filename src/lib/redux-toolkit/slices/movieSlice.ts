import { MovieModel } from "@/domain/model/Movie";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [] as MovieModel[],
};

const movieSlice = createSlice({
  name: "movieSlice",
  initialState,
  reducers: {
    ADD_MOVIE(state, action) {
      const moviesToAdd = Array.isArray(action.payload)
        ? action.payload
        : [action.payload];

      moviesToAdd.forEach((movie) => {
        const existingMovie = state.movies.find(
          (existing) => existing.id === movie.id
        );
        if (!existingMovie) {
          state.movies.push(movie);
        }
      });
    },
  },
});

export const { ADD_MOVIE } = movieSlice.actions;
export default movieSlice.reducer;
