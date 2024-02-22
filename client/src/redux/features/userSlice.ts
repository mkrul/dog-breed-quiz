import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserState } from "../../interfaces/user";
import userApi from "../../apis/user";
import { RootState } from "../store";

const initialState: IUserState = {
  _id: "",
  ipAddress: "",
  createdAt: "",
  alignment: "",
  loading: false,
  error: "",
};

export const getUser = createAsyncThunk("user/getUser", async (_, thunkApi) => {
  try {
    const response = await userApi.getUser();
    return response;
  } catch (error) {
    throw thunkApi.rejectWithValue({ error: "user not initialized" });
  }
});

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (data: any, thunkApi) => {
    try {
      // get persisted user state
      const userState = (thunkApi.getState() as RootState).userState as any;
      return await userApi.updateUser(userState.user, data);
    } catch (error) {
      return thunkApi.rejectWithValue({ error: "user not updated" });
    }
  }
);

const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    getUserAction: (_state, action: PayloadAction<IUserState>) => {
      return action.payload;
    },
    updateUserAction: (_state, action: PayloadAction<IUserState>) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      Object.assign(state, action.payload);
      state.loading = false;
      state.error = "";
    });
    builder.addCase(getUser.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "user not initialized";
    });
  },
});

export const { getUserAction, updateUserAction } =
  userSlice.actions;

export default userSlice;
