import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserState } from "../../interfaces/user";
import { useSelector } from "react-redux";
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

export const updateUser = createAsyncThunk<IUserState, any, { state: RootState }>(
  "user/updateUser",
  async (data: any, thunkApi) => {
    console.log("document", data);
    try {
      const user = useSelector((state: RootState) => state.user);
      const response = await userApi.updateUser(user, data);
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
    getUser: (state, action: PayloadAction<IUserState>) => {
      state = Object.assign(state, action.payload);

      return state;
    },
    updateUser: (state, action: PayloadAction<IUserState>) => {
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

export default userSlice;
