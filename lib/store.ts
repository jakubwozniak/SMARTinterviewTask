import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./state/books/booksSlice";
import { booksApi } from "./state/books/apiSlice";

export const store = configureStore({
  reducer: {
    books: booksReducer,
    [booksApi.reducerPath]: booksApi.reducer,
  }, // Using `as any` to workaround TypeScript error
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
