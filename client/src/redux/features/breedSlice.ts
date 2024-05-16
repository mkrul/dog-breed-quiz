import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Breed } from "../../interfaces/breed";

const initialState: Breed[] = [
  {
    name: "American Pit Bull Terrier",
    label: "apbt",
    selected: false,
  },
  {
    name: "American Staffordshire Terrier",
    label: "ast",
    selected: false,
  },
  {
    name: "Staffordshire Bull Terrier",
    label: "sbt",
    selected: false,
  },
  {
    name: "American Bully",
    label: "ab",
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
        breed.label === action.payload ? { ...breed, selected: true } : breed
      );
    },
    removeBreedAction: (state, action: PayloadAction<string>) => {
      return state.map(breed =>
        breed.label === action.payload ? { ...breed, selected: false } : breed
      );
    },
  },
});

export const { clearBreedsAction, addBreedAction, removeBreedAction } = breedSlice.actions;

export default breedSlice.reducer;