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

export const createUser = createAsyncThunk(
  "user/createUser",
  async (ipAddress: string, thunkApi) => {
    try {
      const response = await userApi.createUser(ipAddress);
      return response;
    } catch (error) {
      throw thunkApi.rejectWithValue({ error: "user not created" });
    }
  }
);

export const findUser = createAsyncThunk(
  "user/findUser",
  async (userId: string, thunkApi) => {
    try {
      const response = await userApi.findUser(userId);
      return response;
    } catch (error) {
      throw thunkApi.rejectWithValue({ error: "user not found" });
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUser",
  async (data: any, thunkApi) => {
    try {
      // get persisted user state
      const userState = (thunkApi.getState() as RootState).userState as any;
      console.log("userState", userState);
      return await userApi.updateUser(userState.user.id, data);
    } catch (error) {
      return thunkApi.rejectWithValue({ error: "user not updated" });
    }
  }
);

const userSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    createUserAction: (_state, action: PayloadAction<IUserState>) => {
      return action.payload;
    },
    findUserAction: (_state, action: PayloadAction<IUserState>) => {
      return action.payload;
    },
    updateUserAction: (_state, action: PayloadAction<IUserState>) => {
      return action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      Object.assign(state, action.payload);
      state.loading = false;
      state.error = "";
    });
    builder.addCase(findUser.fulfilled, (state, action) => {
      Object.assign(state, action.payload);
      state.loading = false;
      state.error = "";
    });
    builder.addCase(findUser.pending, (state) => {
      state.loading = true;
      state.error = "";
    });
    builder.addCase(findUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || "user not initialized";
    });
  },
});

export const { createUserAction, findUserAction, updateUserAction } =
  userSlice.actions;

export default userSlice;
