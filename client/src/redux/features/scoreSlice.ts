import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Score } from "../../interfaces/score";

const initialState: Score[] = [];

// Action Types

const ADD_SCORE = "ADD_SCORE";
const CLEAR_SCORES = "CLEAR_SCORES";

// Action Creators

export const addScore = (value: Score) => ({
  type: ADD_SCORE,
  payload: value,
});

export const clearScores = () => ({
  type: CLEAR_SCORES,
});

const scoreSlice = createSlice({
  name: "scoreData",
  initialState,
  reducers: {
    clearScoresAction: (state) => {
      return initialState;
    },
    addScoreAction: (state, action: PayloadAction<Score>) => {
      state.push(action.payload);
    },
  },
});

export const { addScoreAction, clearScoresAction } = scoreSlice.actions;

export default scoreSlice.reducer;
