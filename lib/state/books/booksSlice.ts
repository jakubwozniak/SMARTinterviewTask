import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface BooksState {
  books: Book[];
}

const initialState: BooksState = {
  books: [],
};

const booksSlice = createSlice({
  name: "booksSlice",
  initialState,
  reducers: {
    addBook: (state, action) => {
      if (action.payload != null) state.books.push(action.payload);
    },
    removeBook: (state, action: PayloadAction<Book>) => {
      if (action.payload != null)
        state.books = state.books.filter((book) => book !== action.payload);
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;

export default booksSlice.reducer;
