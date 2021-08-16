import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Redux/users/userReducer";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
