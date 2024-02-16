import { combineReducers } from "@reduxjs/toolkit";
import { IUserState } from "../interfaces/user";
import userSlice from "./features/userSlice";

export interface RootState {
  user: IUserState;
}

export type RootReducer = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  user: userSlice.reducer,
});