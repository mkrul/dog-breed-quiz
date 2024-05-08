import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Score } from "../../interfaces/score";
import { RootState } from "../store";

const initialState: Score = {
  totalDogs: 0,
  totalDogsSelected: 0,
  totalCorrectGuesses: 0,
  totalCorrectWithBuffer: 0,
  totalIncorrectGuesses: 0,
  totalIncorrectWithBuffer: 0,
  totalSkipped: 0,
  userAccuracy: 0,
};

// Action Types

const CLEAR_SCORE = "CLEAR_SCORE";
const UPDATE_TOTAL_DOGS = "UPDATE_TOTAL_DOGS";
const UPDATE_TOTAL_DOGS_SELECTED = "UPDATE_TOTAL_DOGS_SELECTED";
const UPDATE_TOTAL_CORRECT_GUESSES = "UPDATE_TOTAL_CORRECT_GUESSES";
const UPDATE_TOTAL_CORRECT_WITH_BUFFER = "UPDATE_TOTAL_CORRECT_WITH_BUFFER";
const UPDATE_TOTAL_INCORRECT_GUESSES = "UPDATE_TOTAL_INCORRECT_GUESSES";
const UPDATE_TOTAL_INCORRECT_WITH_BUFFER =
  "UPDATE_TOTAL_INCORRECT_WITH_BUFFER";
const UPDATE_TOTAL_SKIPPED = "UPDATE_TOTAL_SKIPPED";
const UPDATE_USER_ACCURACY = "UPDATE_USER_ACCURACY";

// Action Creators

export const clearScore = () => ({
  type: CLEAR_SCORE,
});

export const addTotalDogs = (totalDogs: number) => ({
  type: UPDATE_TOTAL_DOGS,
  payload: totalDogs,
});

export const addTotalDogsSelected = (totalDogsSelected: number) => ({
  type: UPDATE_TOTAL_DOGS_SELECTED,
  payload: totalDogsSelected,
});

export const addTotalCorrectGuesses = (totalCorrectGuesses: number) => ({
  type: UPDATE_TOTAL_CORRECT_GUESSES,
  payload: totalCorrectGuesses,
});

export const addtotalCorrectWithBuffer = (totalCorrectWithBuffer: number) => ({
  type: UPDATE_TOTAL_CORRECT_WITH_BUFFER,
  payload: totalCorrectWithBuffer,
});

export const addTotalIncorrectGuesses = (totalIncorrectGuesses: number) => ({
  type: UPDATE_TOTAL_INCORRECT_GUESSES,
  payload: totalIncorrectGuesses,
});

export const addTotalIncorrectWithBuffer = (
  totalIncorrectWithBuffer: number
) => ({
  type: UPDATE_TOTAL_INCORRECT_WITH_BUFFER,
  payload: totalIncorrectWithBuffer,
});

export const addTotalSkipped = (totalSkipped: number) => ({
  type: UPDATE_TOTAL_SKIPPED,
  payload: totalSkipped,
});

export const updateUserAccuracy = (userAccuracy: number) => ({
  type: UPDATE_USER_ACCURACY,
  payload: userAccuracy,
});

// Async Thunks

export const updateTotalDogsAsync = createAsyncThunk(
  "score/updateTotalDogs",
  async (totalDogs: number, { dispatch }) => {
    dispatch(addTotalDogsAction(totalDogs));

    return totalDogs;
  }
);

export const updateTotalCorrectGuessesAsync = createAsyncThunk(
  "score/updateTotalCorrectGuesses",
  async (totalCorrectGuesses: number, { dispatch }) => {
    dispatch(addTotalCorrectGuessesAction(totalCorrectGuesses));

    return totalCorrectGuesses;
  }
);

export const updateTotalIncorrectGuessesAsync = createAsyncThunk(
  "score/updateTotalIncorrectGuesses",
  async (totalIncorrectGuesses: number, { dispatch }) => {
    dispatch(addTotalIncorrectGuessesAction(totalIncorrectGuesses));

    return totalIncorrectGuesses;
  }
);

export const updateTotalCorrectWithBufferAsync = createAsyncThunk(
  "score/updateTotalCorrectWithBuffer",
  async (totalCorrectWithBuffer: number, { dispatch }) => {
    dispatch(addtotalCorrectWithBufferAction(totalCorrectWithBuffer));

    return totalCorrectWithBuffer;
  }
);

export const updateTotalIncorrectWithBufferAsync = createAsyncThunk(
  "score/updateTotalIncorrectWithBuffer",
  async (totalIncorrectWithBuffer: number, { dispatch }) => {
    dispatch(addTotalIncorrectWithBufferAction(totalIncorrectWithBuffer));

    return totalIncorrectWithBuffer;
  }
);

export const updateTotalSkippedAsync = createAsyncThunk(
  "score/updateTotalSkipped",
  async (totalSkipped: number, { dispatch }) => {
    dispatch(addTotalSkippedAction(totalSkipped));

    return totalSkipped;
  }
);

export const updateUserAccuracyAsync = createAsyncThunk(
  "score/updateUserAccuracy",
  async (_, { dispatch, getState }) => {
    const state = getState() as RootState;
    const totalDogs = state.score.totalDogs;
    const totalCorrectGuesses = state.score.totalCorrectGuesses;

    const userAccuracy = (totalCorrectGuesses / totalDogs) * 100;
    const roundedAccuracy = Math.round(userAccuracy * 100) / 100;

    dispatch(updateUserAccuracyAction(roundedAccuracy));

    return roundedAccuracy;
  }
);

// Reducer

const scoreSlice = createSlice({
  name: "scoreData",
  initialState,
  reducers: {
    clearScoreAction(state) {
      return initialState;
    },
    addTotalDogsAction(state, action: PayloadAction<number>) {
      state.totalDogs = action.payload;
    },
    updateUserAccuracyAction(state, action: PayloadAction<number>) {
      state.userAccuracy = action.payload;
    },
    addTotalDogsSelectedAction(state, action: PayloadAction<number>) {
      state.totalDogsSelected = action.payload;
    },
    addTotalCorrectGuessesAction(state, action: PayloadAction<number>) {
      state.totalCorrectGuesses = action.payload;
    },
    addtotalCorrectWithBufferAction(state, action: PayloadAction<number>) {
      state.totalCorrectWithBuffer = action.payload;
    },
    addTotalIncorrectGuessesAction(state, action: PayloadAction<number>) {
      state.totalIncorrectGuesses = action.payload;
    },
    addTotalIncorrectWithBufferAction(state, action: PayloadAction<number>) {
      state.totalIncorrectWithBuffer = action.payload;
    },
    addTotalSkippedAction(state, action: PayloadAction<number>) {
      state.totalSkipped = action.payload;
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
        updateTotalCorrectWithBufferAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.totalCorrectWithBuffer = action.payload;
        }
      )
      .addCase(
        updateTotalIncorrectWithBufferAsync.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.totalIncorrectWithBuffer = action.payload;
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
      );
  },
});

export const {
  clearScoreAction,
  addTotalDogsAction,
  addTotalDogsSelectedAction,
  addTotalCorrectGuessesAction,
  addtotalCorrectWithBufferAction,
  addTotalIncorrectGuessesAction,
  addTotalIncorrectWithBufferAction,
  addTotalSkippedAction,
  updateUserAccuracyAction,
} = scoreSlice.actions;

export default scoreSlice.reducer;
