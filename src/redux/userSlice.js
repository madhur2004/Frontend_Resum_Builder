// src/redux/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

// Initialize user state from localStorage if available
const initialState = {
  userId: localStorage.getItem("userId") || null, // Load userId from localStorage
  token: localStorage.getItem("token") || null, // Load token from localStorage
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserId: (state, action) => {
      // Store userId and token in Redux and localStorage
      state.userId = action.payload.userId;
      state.token = action.payload.token;
      localStorage.setItem("userId", action.payload.userId);
      localStorage.setItem("token", action.payload.token);
    },
    clearUserId: (state) => {
      // Clear user data from Redux and localStorage
      state.userId = null;
      state.token = null;
      localStorage.removeItem("userId");
      localStorage.removeItem("token");
    },
  },
});

// Export actions
export const { setUserId, clearUserId } = userSlice.actions;
export default userSlice.reducer;
