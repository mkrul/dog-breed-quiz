import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit';

interface UserState {
  id: string;
  ipAddress: string;
  alignment: string;
}

const initialState: UserState = {
  id: '',
  ipAddress: '',
  alignment: '',
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserAction: (_state, action: PayloadAction) => {
      return action.payload;
    },
    updateUserAction: (_state, action: PayloadAction) => {
      return action.payload;
    },
    setAlignment: (_state, action: PayloadAction) => {
      return action.payload;
    }

  },
});

export const { setAlignment } = userSlice.actions;
export default userSlice;