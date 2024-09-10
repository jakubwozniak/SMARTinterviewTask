import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UsersState {
  filters: {
    name: string;
    username: string;
    email: string;
    phone: string;
  };
}

const initialState: UsersState = {
  filters: {
    name: "",
    username: "",
    email: "",
    phone: "",
  },
};

const usersSlice = createSlice({
  name: "usersSlice",
  initialState,
  reducers: {
    updateNameFilter: (state, action) => {
      if (action.payload != null) state.filters.name = action.payload;
    },
    updateUsernameFilter: (state, action) => {
      if (action.payload != null) state.filters.username = action.payload;
    },
    updateEmailFilter: (state, action) => {
      if (action.payload != null) state.filters.email = action.payload;
    },
    updatePhoneFilter: (state, action) => {
      if (action.payload != null) state.filters.phone = action.payload;
    },
  },
});

export const {
  updateNameFilter,
  updateUsernameFilter,
  updateEmailFilter,
  updatePhoneFilter,
} = usersSlice.actions;

export default usersSlice.reducer;
