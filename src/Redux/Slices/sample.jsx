import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios/axios";

export const sampleSlice = createAsyncThunk(
  "patient/sampleSlice",
  async ({ PID, SID }) => {
    const res = await axios.get("/api/sample", { params: { PID, SID } });
    return res.data;
  }
);

const Sample = createSlice({
  name: "sample",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(sampleSlice.pending, (state) => {
        state.status = "loading";
      })
      .addCase(sampleSlice.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(sampleSlice.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
  },
});

export default Sample.reducer;
