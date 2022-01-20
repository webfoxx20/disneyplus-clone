import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import userReducer from "../features/UserSlice";

export default configureStore({
  reducer: {
    user: userReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false,
  }),
});
