import { configureStore } from "@reduxjs/toolkit";
import patient from "./Slices/patient";
import sample from "./Slices/sample";
import file from "./Slices/file";

export default configureStore({
  reducer: {
    Patient: patient,
    Sample: sample,
    File: file,
  },
});
