import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserState } from "../../interfaces/user";
import userApi from "../../apis/user";
import { RootState } from "../store";

const initialState: IUserState = {
  _id: "",
  username: "",
  createdAt: "",
  alignment: "",
  percentage: 0,
  useBuffer: false,
  breeds: [],
  loading: false,
  error: "",
};

// Action Types

const CLEAR_USER_STORE = "CLEAR_USER_STORE";
const SET_USERNAME = "SET_USERNAME";
const SET_ALIGNMENT = "SET_ALIGNMENT";
const ADD_BREED = "ADD_BREED";
const REMOVE_BREED = "REMOVE_BREED";
const SET_PERCENTAGE = "SET_PERCENTAGE";
const SET_BUFFER = "SET_BUFFER";

// Action Creators

export const clearUserStore = () => ({
  type: CLEAR_USER_STORE,
});

export const setUsername = (username: string) => ({
  type: SET_USERNAME,
  payload: username,
});

export const setAlignment = (alignment: string) => ({
  type: SET_ALIGNMENT,
  payload: alignment,
});

export const addBreed = (value: string) => ({
  type: ADD_BREED,
  payload: value,
});

export const removeBreed = (value: string) => ({
  type: REMOVE_BREED,
  payload: value,
});

export const setPercentage = (value: number) => ({
  type: SET_PERCENTAGE,
  payload: value,
});

export const setBuffer = (value: boolean) => ({
  type: SET_BUFFER,
  payload: value,
});

// Thunks

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (data: any, thunkApi) => {
    try {
      // get persisted user state
      const user = (thunkApi.getState() as RootState).user as any;
      return await userApi.updateUser(user.user, data);
    } catch (error) {
      return thunkApi.rejectWithValue({ error: "user not updated" });
    }
  }
);

const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    clearUserStoreAction: (state) => {
      return initialState;
    },
    setUsernameAction: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        username: action.payload,
      };
    },
    setAlignmentAction: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        alignment: action.payload,
      };
    },
    addBreedAction: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        breeds: [...state.breeds, action.payload],
      };
    },
    removeBreedAction: (state, action: PayloadAction<string>) => {
      return {
        ...state,
        breeds: state.breeds.filter((breed) => breed !== action.payload),
      }
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
        useBuffer: action.payload,
      };
    },
    updateUserAction: (state, action: PayloadAction<IUserState>) => {
      return action.payload;
    },
  },
});

export const {
  clearUserStoreAction,
  updateUserAction,
  setUsernameAction,
  setAlignmentAction,
  addBreedAction,
  removeBreedAction,
  setPercentageAction,
  setBufferAction,
} = userSlice.actions;

export default userSlice.reducer;
