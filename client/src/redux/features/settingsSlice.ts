import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Settings } from "../../interfaces/settings";
import { RootState } from "../store";

const initialState: Settings = {
  alignment: "",
  percentage: 25,
  buffer: false,
};

// Action Types

const CLEAR_SETTINGS_STORE = "CLEAR_SETTINGS_STORE";
const SET_ALIGNMENT = "SET_ALIGNMENT";
const SET_PERCENTAGE = "SET_PERCENTAGE";
const SET_BUFFER = "SET_BUFFER";

// Action Creators

export const clearSettingsStore = () => ({
  type: CLEAR_SETTINGS_STORE,
});

export const setAlignment = (alignment: string) => ({
  type: SET_ALIGNMENT,
  payload: alignment,
});

export const setPercentage = (value: number) => ({
  type: SET_PERCENTAGE,
  payload: value,
});

export const setBuffer = (value: boolean) => ({
  type: SET_BUFFER,
  payload: value,
});

// Reducers

const settingsSlice = createSlice({
  name: "settingsData",
  initialState,
  reducers: {
    clearSettingsStoreAction: (state) => {
      return initialState;
    },
    setAlignmentAction: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        alignment: action.payload,
      };
    },
    setPercentageAction: (state, action: PayloadAction<number>) => {
      return {
        ...state,
        percentage: action.payload,
      };
    },
    setBufferAction: (state, action: PayloadAction<boolean>) => {
      return {
        ...state,
        buffer: action.payload,
      };
    },
  },
});

export const { clearSettingsStoreAction, setAlignmentAction, setPercentageAction, setBufferAction } =
  settingsSlice.actions;

export default settingsSlice.reducer;