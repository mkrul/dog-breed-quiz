import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Result } from "../../interfaces/result";
import { Selection } from "../../interfaces/selection";
import { RootState } from "../store";

const initialState: Result = {
  totalDogs: 0,
  totalSelected: 0,
  totalCorrectGuesses: 0,
  totalIncorrectGuesses: 0,
  totalSkipped: 0,
  userAccuracy: 0,
  selections: [],
};

// Action Types

const CLEAR_RESULT = "CLEAR_RESULT";
const UPDATE_TOTAL_DOGS = "UPDATE_TOTAL_DOGS";
const UPDATE_TOTAL_SELECTED = "UPDATE_TOTAL_SELECTED";
const UPDATE_TOTAL_CORRECT_GUESSES = "UPDATE_TOTAL_CORRECT_GUESSES";
const UPDATE_TOTAL_INCORRECT_GUESSES = "UPDATE_TOTAL_INCORRECT_GUESSES";
const UPDATE_TOTAL_SKIPPED = "UPDATE_TOTAL_SKIPPED";
const UPDATE_USER_ACCURACY = "UPDATE_USER_ACCURACY";
const UPDATE_SELECTIONS = "UPDATE_SELECTIONS";

// Action Creators

export const clearResult = () => ({
  type: CLEAR_RESULT,
});

export const addTotalDogs = (totalDogs: number) => ({
  type: UPDATE_TOTAL_DOGS,
  payload: totalDogs,
});

export const addTotalDogsSelected = (totalSelected: number) => ({
  type: UPDATE_TOTAL_SELECTED,
  payload: totalSelected,
});

export const addTotalCorrectGuesses = (totalCorrectGuesses: number) => ({
  type: UPDATE_TOTAL_CORRECT_GUESSES,
  payload: totalCorrectGuesses,
});

export const addTotalIncorrectGuesses = (totalIncorrectGuesses: number) => ({
  type: UPDATE_TOTAL_INCORRECT_GUESSES,
  payload: totalIncorrectGuesses,
});


export const addTotalSkipped = (totalSkipped: number) => ({
  type: UPDATE_TOTAL_SKIPPED,
  payload: totalSkipped,
});

export const updateUserAccuracy = (userAccuracy: number) => ({
  type: UPDATE_USER_ACCURACY,
  payload: userAccuracy,
});

export const updateSelections = (selection: Selection) => ({
  type: UPDATE_SELECTIONS,
  payload: selection,
});

// Async Thunks

export const updateTotalDogsAsync = createAsyncThunk(
  "result/updateTotalDogs",
  async (totalDogs: number, { dispatch }) => {
    dispatch(addTotalDogsAction(totalDogs));

    return totalDogs;
  }
);

export const updateTotalCorrectGuessesAsync = createAsyncThunk(
  "result/updateTotalCorrectGuesses",
  async (totalCorrectGuesses: number, { dispatch }) => {
    dispatch(addTotalCorrectGuessesAction(totalCorrectGuesses));

    return totalCorrectGuesses;
  }
);

export const updateTotalIncorrectGuessesAsync = createAsyncThunk(
  "result/updateTotalIncorrectGuesses",
  async (totalIncorrectGuesses: number, { dispatch }) => {
    dispatch(addTotalIncorrectGuessesAction(totalIncorrectGuesses));

    return totalIncorrectGuesses;
  }
);

export const updateTotalSkippedAsync = createAsyncThunk(
  "result/updateTotalSkipped",
  async (totalSkipped: number, { dispatch }) => {
    dispatch(addTotalSkippedAction(totalSkipped));

    return totalSkipped;
  }
);

export const updateUserAccuracyAsync = createAsyncThunk(
  "result/updateUserAccuracy",
  async (_, { dispatch, getState }) => {
    const state = getState() as RootState;
    const totalDogs = state.results.totalDogs;
    const totalCorrectGuesses = state.results.totalCorrectGuesses;

    const userAccuracy = (totalCorrectGuesses / totalDogs) * 100;
    const roundedAccuracy = Math.round(userAccuracy * 100) / 100;

    dispatch(updateUserAccuracyAction(roundedAccuracy));

    return roundedAccuracy;
  }
);

export const updateSelectionsAsync = createAsyncThunk(
  "result/updateSelections",
  async (selection: Selection, { dispatch }) => {
    dispatch(updateSelections(selection));

    return selection;
  }
);

// Reducer

const resultsSlice = createSlice({
  name: "resultData",
  initialState,
  reducers: {
    clearResultAction(state) {
      return initialState;
    },
    addTotalDogsAction(state, action: PayloadAction<number>) {
      state.totalDogs = action.payload;
    },
    updateUserAccuracyAction(state, action: PayloadAction<number>) {
      state.userAccuracy = action.payload;
    },
    addTotalDogsSelectedAction(state, action: PayloadAction<number>) {
      state.totalSelected = action.payload;
    },
    addTotalCorrectGuessesAction(state, action: PayloadAction<number>) {
      state.totalCorrectGuesses = action.payload;
    },
    addTotalIncorrectGuessesAction(state, action: PayloadAction<number>) {
      state.totalIncorrectGuesses = action.payload;
    },
    addTotalSkippedAction(state, action: PayloadAction<number>) {
      state.totalSkipped = action.payload;
    },
    updateSelectionsAction(state, action: PayloadAction<Selection>) {
      state.selections.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        updateTotalDogsAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.totalDogs = action.payload;
        }
      )
      .addCase(
        updateTotalCorrectGuessesAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.totalCorrectGuesses = action.payload;
        }
      )
      .addCase(
        updateTotalIncorrectGuessesAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.totalIncorrectGuesses = action.payload;
        }
      )
      .addCase(
        updateTotalSkippedAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.totalSkipped = action.payload;
        }
      )
      .addCase(
        updateUserAccuracyAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.userAccuracy = action.payload;
        }
      )
      .addCase(
        updateSelectionsAsync.fulfilled,
        (state, action: PayloadAction<Selection>) => {
          state.selections.push(action.payload);
        }
      );
  },
});

export const {
  clearResultAction,
  addTotalDogsAction,
  addTotalDogsSelectedAction,
  addTotalCorrectGuessesAction,
  addTotalIncorrectGuessesAction,
  addTotalSkippedAction,
  updateUserAccuracyAction,
  updateSelectionsAction,
} = resultsSlice.actions;

export default resultsSlice.reducer;
