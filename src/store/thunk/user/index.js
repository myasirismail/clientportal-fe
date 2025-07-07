import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserProfileApi } from "../../../apis/userApis";

export const getUserProfile = createAsyncThunk(
  "user/getProfile",
  async () => {
    const res = await getUserProfileApi();
    return res.data;
  }
);

export const extraReducer = (builder) => {
  builder
    .addCase(getUserProfile.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(getUserProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      return {
        ...state,
        ...action.payload,
      };
    })
    .addCase(getUserProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
}; 