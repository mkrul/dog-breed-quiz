import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../interfaces/user";

const initialState: User = {
  _id: "",
  username: "",
  createdAt: "",
  loading: false,
  error: "",
};

// Action Types

const CLEAR_USER_STORE = "CLEAR_USER_STORE";
const SET_USERNAME = "SET_USERNAME";

// Action Creators

export const clearUserStore = () => ({
  type: CLEAR_USER_STORE,
});

export const setUsername = (username: string) => ({
  type: SET_USERNAME,
  payload: username,
});

const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    clearUserStoreAction: (state) => {
      return initialState;
    },
    setUsernameAction: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        username: action.payload,
      };
    },
    updateUserAction: (state, action: PayloadAction<User>) => {
      return action.payload;
    },
  },
});

export const {
  clearUserStoreAction,
  updateUserAction,
  setUsernameAction,
} = userSlice.actions;

export default userSlice.reducer;
