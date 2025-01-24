import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: greatReducer,
});

export default store;
