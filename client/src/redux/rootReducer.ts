import { combineReducers } from "@reduxjs/toolkit";
import { IUserState } from "../interfaces/user";
import userSlice from "./features/userSlice";

export interface RootState {
  user: IUserState;
}

const rootReducer = combineReducers({
  user: userSlice.reducer,
});

export default rootReducer;