import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios/axios";

export const csvGID = createAsyncThunk("csv/csvGID", async ({ GID }) => {
  const res = await axios.get("/api/csv", { params: { GID } });
  return res.data;
});

const Csv = createSlice({
  name: "csv",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(csvGID.pending, (state) => {
        state.status = "loading";
      })
      .addCase(csvGID.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(csvGID.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default Csv.reducer;
