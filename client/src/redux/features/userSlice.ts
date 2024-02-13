import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser } from "../../interfaces/user";
import userApi from "../../apis/user";

const initialState: IUser = {
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
  async (document: any, thunkApi) => {
    console.log("document", document)
    try {
      const response = await userApi.updateUser(document);
      return response;
    } catch (error) {
      throw thunkApi.rejectWithValue({ error: "user not updated" });
    }
  }
);

const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    getUser: (state, action: PayloadAction<IUser>) => {
      state = Object.assign(state, action.payload);

      return state;
    },
    updateUser: (state, action: PayloadAction<IUser>) => {
      state = Object.assign(state, action.payload);

      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state = Object.assign(state, action.payload);
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

export const { getUser: getUserAction, updateUser: updateUserAction } =
  userSlice.actions;

export default userSlice.reducer;
