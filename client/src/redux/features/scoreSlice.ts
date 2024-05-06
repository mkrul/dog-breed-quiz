import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Score } from "../../interfaces/score";
import { RootState } from "../store";

// Action Types

const CLEAR_SCORE = "CLEAR_SCORE";
const ADD_TOTAL_DOGS = "ADD_TOTAL_DOGS";
const ADD_TOTAL_DOGS_SELECTED = "ADD_TOTAL_DOGS_SELECTED";
const ADD_TOTAL_CORRECT_GUESSES = "ADD_TOTAL_CORRECT_GUESSES";
const ADD_TOTAL_CORRECT_WITH_BUFFER = "ADD_TOTAL_CORRECT_WITH_BUFFER";
const ADD_TOTAL_INCORRECT_GUESSES = "ADD_TOTAL_INCORRECT_GUESSES";
const ADD_TOTAL_INCORRECT_WITH_BUFFER = "ADD_TOTAL_INCORRECTED_WITH_BUFFER";
const ADD_TOTAL_SKIPPED = "ADD_TOTAL_SKIPPED";
const ADD_USER_ACCURACY = "ADD_USER_ACCURACY";

// Action Creators

export const clearScore = () => ({
  type: CLEAR_SCORE,
});

export const addTotalDogs = (totalDogs: number) => ({
  type: ADD_TOTAL_DOGS,
  payload: totalDogs,
});

export const addTotalDogsSelected = (totalDogsSelected: number) => ({
  type: ADD_TOTAL_DOGS_SELECTED,
  payload: totalDogsSelected,
});

export const addTotalCorrectGuesses = (totalCorrectGuesses: number) => ({
  type: ADD_TOTAL_CORRECT_GUESSES,
  payload: totalCorrectGuesses,
});

export const addtotalCorrectWithBuffer = (totalCorrectWithBuffer: number) => ({
  type: ADD_TOTAL_CORRECT_WITH_BUFFER,
  payload: totalCorrectWithBuffer,
});

export const addTotalIncorrectGuesses = (totalIncorrectGuesses: number) => ({
  type: ADD_TOTAL_INCORRECT_GUESSES,
  payload: totalIncorrectGuesses,
});

export const addTotalIncorrectWithBuffer = (totalIncorrectWithBuffer: number) => ({
  type: ADD_TOTAL_INCORRECT_WITH_BUFFER,
  payload: totalIncorrectWithBuffer,
});

export const addTotalSkipped = (totalSkipped: number) => ({
  type: ADD_TOTAL_SKIPPED,
  payload: totalSkipped,
});

export const updateUserAccuracy = (userAccuracy: number) => ({
  type: ADD_USER_ACCURACY,
  payload: userAccuracy,
});

const scoreSlice = createSlice({
  name: "scoreData",
  initialState: {
    totalDogs: 0,
    totalDogsSelected: 0,
    totalCorrectGuesses: 0,
    totalCorrectWithBuffer: 0,
    totalIncorrectGuesses: 0,
    totalIncorrectWithBuffer: 0,
    totalSkipped: 0,
    userAccuracy: 0,
  },
  reducers: {
    clearScoreAction: (state) => {
      state.totalDogs = 0;
      state.totalDogsSelected = 0;
      state.totalCorrectGuesses = 0;
      state.totalCorrectWithBuffer = 0;
      state.totalIncorrectGuesses = 0;
      state.totalIncorrectWithBuffer = 0;
      state.totalSkipped = 0;
      state.userAccuracy = 0;
    },
    addTotalDogsAction: (state, action: PayloadAction<number>) => {
      state.totalDogs = action.payload;
    },
    addTotalDogsSelectedAction: (state, action: PayloadAction<number>) => {
      state.totalDogsSelected = action.payload;
    },
    addTotalCorrectGuessesAction: (state, action: PayloadAction<number>) => {
      state.totalCorrectGuesses = action.payload;
    },
    addtotalCorrectWithBufferAction: (state, action: PayloadAction<number>) => {
      state.totalCorrectWithBuffer = action.payload;
    },
    addTotalIncorrectGuessesAction: (state, action: PayloadAction<number>) => {
      state.totalIncorrectGuesses = action.payload;
    },
    addTotalIncorrectWithBufferAction: (state, action: PayloadAction<number>) => {
      state.totalIncorrectWithBuffer = action.payload;
    },
    addTotalSkippedAction: (state, action: PayloadAction<number>) => {
      state.totalSkipped = action.payload;
    },
    updateUserAccuracyAction: (state, action: PayloadAction<number>) => {
      state.userAccuracy = action.payload;
    },
  },
});

export const { clearScoreAction, addTotalDogsAction, addTotalDogsSelectedAction, addTotalCorrectGuessesAction, addtotalCorrectWithBufferAction, addTotalIncorrectGuessesAction, addTotalIncorrectWithBufferAction, addTotalSkippedAction, updateUserAccuracyAction } = scoreSlice.actions;

export default scoreSlice.reducer;