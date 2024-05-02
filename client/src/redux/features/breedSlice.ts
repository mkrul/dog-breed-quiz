import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Breed } from "../../interfaces/breed";
import { RootState } from "../store";

const initialState: Breed[] = [
  {
    name: "American Pit Bull Terrier",
    selected: false,
    imageAuthor: "Unknown",
    imageSource: "Pinterest",
    imageLinkPrimary: "https://www.pinterest.com/pin/34973334599054212/",
    imageLinkSecondary: "https://i.pinimg.com/originals/93/08/c8/9308c8aed4571ccd7a1ae0efaacd6fd4.jpg"
  },
  {
    name: "American Staffordshire Terrier",
    selected: false,
    imageAuthor: "Raya",
    imageSource: "Pinterest",
    imageLinkPrimary: "https://www.pinterest.com/4th3American Staffordshire Terrier/",
    imageLinkSecondary: "https://www.pinterest.com/pin/1040120476434643492/"
  },
  {
    name: "Staffordshire Bull Terrier",
    selected: false,
    imageAuthor: "Rohan",
    imageSource: "Unsplash",
    imageLinkPrimary: "https://unsplash.com/@rohanphoto?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    imageLinkSecondary: "https://unsplash.com/photos/black-short-coated-dog-on-green-grass-field-during-daytime-UxyBUbmBXIU?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
  },
  {
    name: "American Bully",
    selected: false,
    imageAuthor: "Attitude Boy",
    imageSource: "Pinterest",
    imageLinkPrimary: "https://www.pinterest.com/aamirsohailkrk/",
    imageLinkSecondary: "https://i.pinimg.com/originals/ff/5b/69/ff5b694c23003aa14aea8b166b2c96d7.jpg"
  },
];

// Action Types

const CLEAR_BREED_STORE = "CLEAR_BREED_STORE";
const ADD_BREED = "ADD_BREED";
const REMOVE_BREED = "REMOVE_BREED";

// Action Creators

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
    clearBreedStoreAction: (state) => {
      return initialState;
    },
    addBreedAction: (state, action: PayloadAction<string>) => {
      const breed = state.find((breed: Breed) => breed.name === action.payload);
      if (breed) {
        breed.selected = true;
      }
    },
    removeBreedAction: (state, action: PayloadAction<string>) => {
      const breed = state.find((breed: Breed) => breed.name === action.payload);
      if (breed) {
        breed.selected = false;
      }
    },
  },
});

export const { clearBreedStoreAction, addBreedAction, removeBreedAction } = breedSlice.actions;

export default breedSlice.reducer;