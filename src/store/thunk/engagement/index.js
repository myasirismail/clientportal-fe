import { createAsyncThunk } from "@reduxjs/toolkit";
import { getEnagegementAcrhiveValidationApi, getEnagegementByIdApi, getNotificationsApi } from "../../../apis/engagementApis";

export const getEnagegmentById = createAsyncThunk(
	"engagement/getById",
	async (id) => {
		const res = await getEnagegementByIdApi(id);
		return res.data;
	},
);

export const getNotifications = createAsyncThunk(
	"notification/getList",
	async (payload) => {
		const res = await getNotificationsApi(payload);
		return res;
	},
);
export const getNotificationsFive = createAsyncThunk(
	"notification/getListFive",
	async (payload) => {
		const res = await getNotificationsApi(payload);
		return res;
	},
);

export const getEnagegementAcrhiveValidation = createAsyncThunk(
	"engagment/getArchiveValidations",
	async (payload) => {
		const res = await getEnagegementAcrhiveValidationApi(payload);
		return res.data;
	},
);
export const extraReducer = (builder) => {
	builder
		.addCase(getEnagegmentById.pending, (state) => {
			state.loading = true;
		})
		.addCase(getEnagegmentById.fulfilled, (state, action) => {
			state.enagementDetails = action.payload;
			state.loading = false;
		})
		.addCase(getEnagegmentById.rejected, (state) => {
			state.loading = false;
		});
		builder
		.addCase(getNotifications.pending, (state) => {
			state.loading = true;
		})
		.addCase(getNotifications.fulfilled, (state, action) => {
			state.notificationList = action.payload;
			state.loading = false;
		})
		.addCase(getNotifications.rejected, (state) => {
			state.loading = false;
		});
		builder
		.addCase(getNotificationsFive.pending, (state) => {
			state.loading = true;
		})
		.addCase(getNotificationsFive.fulfilled, (state, action) => {
			state.firstFiveNotificationList = action.payload;
			state.loading = false;
		})
		.addCase(getNotificationsFive.rejected, (state) => {
			state.loading = false;
		});
		builder
		.addCase(getEnagegementAcrhiveValidation.pending, (state) => {
			state.loading = true;
		})
		.addCase(getEnagegementAcrhiveValidation.fulfilled, (state, action) => {
			state.archiveValidations = action.payload;
			state.loading = false;
		})
		.addCase(getEnagegementAcrhiveValidation.rejected, (state) => {
			state.loading = false;
		});
};
