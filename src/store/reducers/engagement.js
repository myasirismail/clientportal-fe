import { createSlice } from "@reduxjs/toolkit";
import { extraReducer } from "../thunk/engagement";

const initialState = {
  loading: false,
  enagementDetails: {},
  notificationList: {},
  firstFiveNotificationList: {},
  engagementPermission: false,
  canArchive: false,
  canChangeBuildTask: false,
  canInviteTeam: false,
  archiveValidations: {},
  taskDetails: {},
  rollForwardEngagement: false,
  isRestored: false,
};

const engagementSlice = createSlice({
  name: "engagement",
  initialState,
  reducers: {
    EngagementDetailEmpty: (state) => {
      return {
        ...state,
        enagementDetails: {},
      };
    },
    TaskDetails: (state, action) => {
      return {
        ...state,
        taskDetails: action.payload,
      };
    },
    RollForwardEngagement: (state) => {
      return {
        ...state,
        rollForwardEngagement: true,
      };
    },
    havePermission: (state, action) => {
      const { isRestored, permissionId, custom } = action.payload;
      if (isRestored && permissionId !== 1) {
        return {
          ...state,
          isRestored,
          engagementPermission: false,
        };
      } else {
        return {
          ...state,
          engagementPermission: permissionId === 1 || permissionId === 3,
          isRestored,
          ...custom,
        };
      }
    },
  },
  extraReducers: (builder) => {
    extraReducer(builder);
  },
});

export const { EngagementDetailEmpty, havePermission, TaskDetails, RollForwardEngagement } = engagementSlice.actions;

export default engagementSlice.reducer;
