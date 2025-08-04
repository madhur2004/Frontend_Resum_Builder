import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://resume-builder-server-six.vercel.app/api/resumes";

export const saveResume = createAsyncThunk(
  "resume/saveResume",
  async ({ resumeData, userId }, thunkAPI) => {
    try {
      const response = await axios.post(`${BASE_URL}/${userId}`, resumeData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchAllResumes = createAsyncThunk(
  "resume/fetchAllResumes",
  async (userId, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/user/${userId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const fetchSingleResume = createAsyncThunk(
  "resume/fetchSingleResume",
  async (resumeId, thunkAPI) => {
    try {
      const response = await axios.get(`${BASE_URL}/${resumeId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const updateResume = createAsyncThunk(
  "resume/updateResume",
  async ({ resumeId, updatedData }, thunkAPI) => {
    try {
      const response = await axios.put(`${BASE_URL}/${resumeId}`, updatedData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

const resumeSlice = createSlice({
  name: "resume",
  initialState: {
    data: null,
    allResumes: [],
    status: "idle",
    error: null,
  },
  reducers: {
    setResumeData: (state, action) => {
      state.data = action.payload;
    },
    clearResumeData: (state) => {
      state.data = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveResume.fulfilled, (state, action) => {
        state.allResumes.push(action.payload);
      })
      .addCase(fetchAllResumes.fulfilled, (state, action) => {
        state.allResumes = action.payload;
      })
      .addCase(fetchSingleResume.fulfilled, (state, action) => {
        const existing = state.allResumes.find(
          (res) => res._id === action.payload._id
        );
        if (!existing) {
          state.allResumes.push(action.payload);
        }
      })
      .addCase(updateResume.fulfilled, (state, action) => {
        const index = state.allResumes.findIndex(
          (res) => res._id === action.payload._id
        );
        if (index !== -1) {
          state.allResumes[index] = action.payload;
        }
      });
  },
});

export const { setResumeData, clearResumeData } = resumeSlice.actions;
export default resumeSlice.reducer;
