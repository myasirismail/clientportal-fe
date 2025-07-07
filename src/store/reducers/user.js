import { createSlice } from "@reduxjs/toolkit";
import { extraReducer } from "../thunk/user";

const initialState = {
  loading: false,
  error: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserProfile: (state, action) => {
      const { type, payload } = action.payload;
      return {
        ...state,
        ...payload,
      };
    },
    clearUserProfile: (state) => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    extraReducer(builder);
  },
});

export const { setUserProfile, clearUserProfile } = userSlice.actions;

export default userSlice.reducer;
