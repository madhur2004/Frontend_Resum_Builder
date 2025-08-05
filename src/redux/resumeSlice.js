// redux/resumeSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// ✅ Create Resume
export const saveResume = createAsyncThunk(
  "resume/saveResume",
  async ({ resumeData, userId }, thunkAPI) => {
    try {
      console.log("Resume data to save:", resumeData);
       console.log("User ID:", userId);
      const response = await axios.post("https://resume-backend-wu7w.onrender.com/api/resume/create", {
        ...resumeData,
        userId,
      });
     // // console..log("Response after saving:", response.data);
      //// console..log("Resume saved response:", response.data.resume);
      
      return response.data.resume;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

// ✅ Fetch all resumes by user
export const fetchUserResumes = createAsyncThunk(
  "resume/fetchUserResumes",
  async (userId, thunkAPI) => {
    try {
      const response = await axios.get(`https://resume-backend-wu7w.onrender.com/api/resume/user/${userId}`);
       console.log("Fetched resumes:", response.data);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

// ✅ Fetch single resume by ID
export const fetchSingleResume = createAsyncThunk(
  "resume/fetchSingleResume",
  async (resumeId, thunkAPI) => {
    try {
      const response = await axios.get(`https://resume-backend-wu7w.onrender.com/api/resume/${resumeId}`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

// ✅ Delete resume
export const deleteResume = createAsyncThunk(
  "resume/deleteResume",
  async (resumeId, thunkAPI) => {
    try {
      await axios.delete(`https://resume-backend-wu7w.onrender.com/api/resume/${resumeId}`);
      return resumeId;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

// ✅ Update resume
export const updateResume = createAsyncThunk(
  "resume/updateResume",
  async ({ resumeId, updatedData }, thunkAPI) => {
    try {
      const res = await axios.put(`https://resume-backend-wu7w.onrender.com/api/resume/${resumeId}`, updatedData);
      return res.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
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
      //// console..log("Resume data set:", action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(saveResume.pending, (state) => {
        state.status = "loading";
      })
      .addCase(saveResume.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(saveResume.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchUserResumes.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUserResumes.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.allResumes = action.payload;
       // // console..log("Fetched resumes:", action.payload);
      })
      .addCase(fetchUserResumes.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(fetchSingleResume.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSingleResume.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload; // This will store the single resume in state
      })
      .addCase(fetchSingleResume.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      })
      .addCase(deleteResume.fulfilled, (state, action) => {
        state.allResumes = state.allResumes.filter(
          (resume) => resume._id !== action.payload
        );
      })
      .addCase(updateResume.fulfilled, (state, action) => {
        state.allResumes = state.allResumes.map((resume) =>
          resume._id === action.payload._id ? action.payload : resume
        );
      });
  },
});

export const { setResumeData } = resumeSlice.actions;
export default resumeSlice.reducer;
