import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { Result } from "../../interfaces/result";

const initialState: Result[] = [];

// Action Types

const CLEAR_RESULTS = "CLEAR_RESULTS";
const ADD_RESULT = "ADD_RESULT";

// Action Creators

export const addResultAsync = createAsyncThunk(
  ADD_RESULT,
  async (result: Result, { dispatch }) => {
    dispatch(addResultAction(result));
  }
);

export const clearResults = () => ({
  type: CLEAR_RESULTS,
});

const resultSlice = createSlice({
  name: "resultData",
  initialState,
  reducers: {
    clearResultsAction: (state) => {
      return initialState;
    },
    addResultAction: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addResultAction, clearResultsAction } = resultSlice.actions;

export default resultSlice.reducer;
