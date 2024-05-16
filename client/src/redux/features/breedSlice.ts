import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Breed } from "../../interfaces/breed";

const initialState: Breed[] = [
  {
    name: "American Pit Bull Terrier",
    selected: false,
  },
  {
    name: "American Staffordshire Terrier",
    selected: false,
  },
  {
    name: "Staffordshire Bull Terrier",
    selected: false,
  },
  {
    name: "American Bully",
    selected: false,
  },
];

// Action Types

const CLEAR_BREED_STORE = "CLEAR_BREED_STORE";
const ADD_BREED = "ADD_BREED";
const REMOVE_BREED = "REMOVE_BREED";

export const clearBreedStore = () => ({
  type: CLEAR_BREED_STORE,
});

export const addBreed = (value: string) => ({
  type: ADD_BREED,
  payload: value,
});

export const removeBreed = (value: string) => ({
  type: REMOVE_BREED,
  payload: value,
});

const breedSlice = createSlice({
  name: "breedData",
  initialState,
  reducers: {
    clearBreedsAction: () => initialState,
    addBreedAction: (state, action: PayloadAction<string>) => {
      return state.map(breed =>
        breed.name === action.payload ? { ...breed, selected: true } : breed
      );
    },
    removeBreedAction: (state, action: PayloadAction<string>) => {
      return state.map(breed =>
        breed.name === action.payload ? { ...breed, selected: false } : breed
      );
    },
  },
});

export const { clearBreedsAction, addBreedAction, removeBreedAction } = breedSlice.actions;

export default breedSlice.reducer;