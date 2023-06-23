"use client";

import { configureStore } from "@reduxjs/toolkit";

import movieSlice from "@/lib/redux-toolkit/slices/movieSlice";
import moodSlice from "@/lib/redux-toolkit/slices/moodSlice";
import watchProviderSlice from "@/lib/redux-toolkit/slices/watchProviderSlice";
import genreSlice from "@/lib/redux-toolkit/slices/genreSlice";

export const store = configureStore({
  reducer: {
    MOVIE: movieSlice,
    MOOD: moodSlice,
    WATCH_PROVIDER: watchProviderSlice,
    GENRE: genreSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
