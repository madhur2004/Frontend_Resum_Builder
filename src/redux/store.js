import { configureStore } from "@reduxjs/toolkit";
import resumeReducer from "./resumeSlice";
import useReducer from "./userSlice"; // Assuming you have a userSlice.js for user-related state

const store = configureStore({
  reducer: {
    user:useReducer,
    resume: resumeReducer,
  },
});

export default store;
