import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { persistedReducer } from "./reducers/rootReducer";
import { persistStore } from "redux-persist";

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    })
      .concat(logger)
});

export const persistor = persistStore(store);
