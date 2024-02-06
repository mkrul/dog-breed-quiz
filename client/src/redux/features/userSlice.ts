import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/user";
import type { RootState } from "../store";

interface IState {
  user: IUser;
}

const initialState: IState = {
  user: {
    _id: "",
    ipAddress: "",
  },
};

export const getUser = createAsyncThunk(
  "user/getUser",
  async (data, thunkApi) => {
    try {
      const response = await fetch("/api/user");
      console.log(data)
      return response.json();
    } catch (error) {
      throw thunkApi.rejectWithValue({ error: "nope" });
    }
  },
  {
    condition: (_, { getState }) => {
      const { user } = getState() as RootState;
      return !user;
    },
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getUser.fulfilled,
      (state, action: PayloadAction<IUser>) => {
        state.user = action.payload;
      }
    );
  },
});

const { reducer } = userSlice;

export default reducer;
