"use client";

import { configureStore } from "@reduxjs/toolkit";

import movieSlice from "@/lib/redux-toolkit/slices/movieSlice";
import moodSlice from "@/lib/redux-toolkit/slices/moodSlice";

export const store = configureStore({
  reducer: {
    MOVIE: movieSlice,
    MOOD: moodSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
