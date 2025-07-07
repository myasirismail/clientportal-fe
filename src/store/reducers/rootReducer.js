import { combineReducers } from "@reduxjs/toolkit";
import userReducer from "./user";
import engagementReducer from "./engagement";
import clientReducer from "./client";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  user: userReducer,
  engagement: engagementReducer,
  client: clientReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user", "engagement", "client"],
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);
