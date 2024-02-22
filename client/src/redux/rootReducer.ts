import { combineReducers } from "@reduxjs/toolkit";
import { IUserState } from "../interfaces/user";
import userSlice from "./features/userSlice";

export interface RootState {
  userState: IUserState;
}

export type RootReducer = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  userState: userSlice.reducer,
});