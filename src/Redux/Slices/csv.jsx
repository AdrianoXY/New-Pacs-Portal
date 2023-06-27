import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios/axios";

export const csvSlice = createAsyncThunk(
  "csv/csvSlice",
  async ({ PID, SID, GID }) => {
    const res = await axios.get("/api/csv", { params: { PID, SID, GID } });
    return res.data;
  }
);

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
      .addCase(csvSlice.pending, (state) => {
        state.status = "loading";
      })
      .addCase(csvSlice.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(csvSlice.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default Csv.reducer;
