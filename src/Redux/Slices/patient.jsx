import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios/axios";

export const allPatient = createAsyncThunk(
  "patient/allPatient",
  async ({ name, PID }) => {
    const res = await axios.get("/api/patient", { params: { name, PID } });
    return res.data;
  }
);

const Patient = createSlice({
  name: "patient",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(allPatient.pending, (state) => {
        state.status = "loading";
      })
      .addCase(allPatient.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(allPatient.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default Patient.reducer;
