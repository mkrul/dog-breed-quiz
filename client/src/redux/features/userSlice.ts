import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/user";
import userApi from "../../apis/user";
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
  "/user/:ipAddress",
  async (data, thunkApi) => {
    try {
      const response: any = await userApi.getUser();
      console.log("in userSlice", response)
      return response.user
    } catch (error) {
      throw thunkApi.rejectWithValue({ error: "user not initialized" });
    }
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
