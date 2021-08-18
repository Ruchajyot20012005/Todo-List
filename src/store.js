import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./Redux/users/rootReducer";

export const store = configureStore({
  reducer: {
    user: rootReducer,
  },
});
