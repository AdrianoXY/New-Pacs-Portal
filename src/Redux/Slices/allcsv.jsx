import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios/axios";

export const allCSV = createAsyncThunk("csv/allCSV", async () => {
  const res = await axios.get("/api/csv");
  return res.data;
});

const ACsv = createSlice({
  name: "acsv",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(allCSV.pending, (state) => {
        state.status = "loading";
      })
      .addCase(allCSV.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(allCSV.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default ACsv.reducer;
