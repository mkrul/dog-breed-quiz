import { createSelector } from "@reduxjs/toolkit";

export const selectSlice = (state: any) => state.coreApi;

export const selectSelectedUser = createSelector(
  selectSlice,
  (state: any) => state.user
);
