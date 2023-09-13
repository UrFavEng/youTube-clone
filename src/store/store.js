import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { youTubeApi } from "./apiSlice";

export const store = configureStore({
  reducer: {
    [youTubeApi.reducerPath]: youTubeApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(youTubeApi.middleware),
});

setupListeners(store.dispatch);
