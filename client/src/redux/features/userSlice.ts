import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "../../interfaces/user";
import userApi from "../../apis/user";

export const getUser = createAsyncThunk("user/getUser", async (_, thunkApi) => {
  try {
    const response = await userApi.getUser();
    return response;
  } catch (error) {
    throw thunkApi.rejectWithValue({ error: "user not initialized" });
  }
});

const initialState: UserState = {
  profile: {
    user: {
      _id: "",
      ipAddress: "",
      createdAt: "",
    },
    loading: false,
    error: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUser: (state, action: PayloadAction<UserState>) => {
      state.profile = action.payload.profile;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.profile = action.payload.user;
    });
    builder.addCase(getUser.pending, (state) => {
      state.profile.loading = true;
    });
    builder.addCase(getUser.rejected, (state, action) => {
      state.profile.error = action.error.message || "user not initialized";
    });
  },
});

export const { getUser: getUserAction } = userSlice.actions;
export default userSlice.reducer;
