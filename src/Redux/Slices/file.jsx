import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios/axios";

export const fileSlice = createAsyncThunk("file/fileSlice", async ({ SID }) => {
  const res = await axios.get("/api/file", { params: { SID } });
  return res.data;
});

const File = createSlice({
  name: "file",
  initialState: {
    data: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fileSlice.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fileSlice.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(fileSlice.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default File.reducer;
