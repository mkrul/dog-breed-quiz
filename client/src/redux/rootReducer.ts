import { combineReducers } from "@reduxjs/toolkit";
import { User } from "../interfaces/user";
import { Breed } from "../interfaces/breed";
import { Settings } from "../interfaces/settings";
import { Result } from "../interfaces/result";
import userSlice from "./features/userSlice";
import breedSlice from "./features/breedSlice";
import settingSlice from "./features/settingSlice";
import resultsSlice from "./features/resultsSlice";
export interface RootState {
  user: User;
  breeds: Breed[];
  settings: Settings;
  results: Result[];
}

export type RootReducer = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  user: userSlice,
  breeds: breedSlice,
  settings: settingSlice,
  results: resultsSlice,
});