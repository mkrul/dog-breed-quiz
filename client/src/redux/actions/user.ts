import { createAsyncThunk } from '@reduxjs/toolkit';
import userApi from '../../apis/user';

export const findUser = createAsyncThunk("user/getUser", async (_, thunkApi) => {
  try {
    const response = await userApi.findUser();
    return response;
  } catch (error) {
    throw thunkApi.rejectWithValue({ error: "user not initialized" });
  }
});
