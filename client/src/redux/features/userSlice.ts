import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../interfaces/user";
import userApi from "../../apis/user";

export const getUser = createAsyncThunk("user/getUser", async (_, thunkApi) => {
  try {
    const response = await userApi.getUser();
    return response;
  } catch (error) {
    throw thunkApi.rejectWithValue({ error: "user not initialized" });
  }
});

const userSlice = createSlice({
  name: "user",
  initialState: {
    profile: {
      ipAddress: "",
    },
  },
  reducers: {
    getUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
  },
});

export const { getUser: getUserAction } = userSlice.actions;
export default userSlice.reducer;
