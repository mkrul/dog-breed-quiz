import { combineReducers } from "@reduxjs/toolkit";
import { User } from "../interfaces/user";
import { Breed } from "../interfaces/breed";
import { Settings } from "../interfaces/settings";
import userSlice from "./features/userSlice";
import breedSlice from "./features/breedSlice";
import settingsSlice from "./features/settingsSlice";
export interface RootState {
  user: User;
  breeds: Breed[];
  settings: Settings;
}

export type RootReducer = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  user: userSlice,
  breeds: breedSlice,
  settings: settingsSlice,
});