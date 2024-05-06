import { combineReducers } from "@reduxjs/toolkit";
import { User } from "../interfaces/user";
import { Breed } from "../interfaces/breed";
import { Settings } from "../interfaces/settings";
import { Result } from "../interfaces/result";
import { Score } from "../interfaces/score";
import userSlice from "./features/userSlice";
import breedSlice from "./features/breedSlice";
import settingSlice from "./features/settingSlice";
import resultSlice from "./features/resultSlice";
import scoreSlice from "./features/scoreSlice";
export interface RootState {
  user: User;
  breeds: Breed[];
  settings: Settings;
  result: Result[];
  score: Score;
}

export type RootReducer = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  user: userSlice,
  breeds: breedSlice,
  settings: settingSlice,
  result: resultSlice,
  score: scoreSlice,
});