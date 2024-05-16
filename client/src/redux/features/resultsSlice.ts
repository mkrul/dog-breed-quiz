import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Result } from '../../interfaces/result';
import { Selection } from '../../interfaces/selection';
import { RootState } from '../store';

const initialState: Result = {
  totalDogs: 0,
  totalSelected: 0,
  totalCorrectGuesses: 0,
  totalIncorrectGuesses: 0,
  totalSkipped: 0,
  userAccuracy: 0,
  selections: [],
  completed: 0
};

// Actions

export const updateUserAccuracy = (accuracy: number) => {
  return {
    type: 'results/updateUserAccuracy',
    payload: accuracy
  };
};



// Thunks
export const incrementFieldAsync = createAsyncThunk(
  'results/incrementField',
  async ({ field, increment }: { field: keyof Omit<Result, 'selections'>; increment: number }, { dispatch }) => {
    dispatch(resultsSlice.actions.incrementField({ field, increment }));
  }
);

export const updateSelectionsAsync = createAsyncThunk(
  'results/updateSelections',
  async (selection: Selection, { dispatch }) => {
    dispatch(resultsSlice.actions.addSelection(selection));
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

    dispatch(updateUserAccuracy(roundedAccuracy));
  }
);

// Slice
const resultsSlice = createSlice({
  name: 'results',
  initialState,
  reducers: {
    incrementField: (state, action: { payload: { field: keyof Omit<Result, 'selections'>, increment: number }}) => {
      const { field, increment } = action.payload;
      state[field] += increment;
    },
    addSelection: (state, action: { payload: Selection }) => {
      state.selections.push(action.payload);
    },
    updateUserAccuracy: (state, action: { payload: number }) => {
      state.userAccuracy = action.payload;
    },
    clearResultAction: () => initialState
  }
});

export const {
  incrementField,
  addSelection,
  clearResultAction
} = resultsSlice.actions;

export default resultsSlice.reducer;
