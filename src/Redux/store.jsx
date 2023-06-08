import { configureStore } from "@reduxjs/toolkit";
import patient from "./Slices/patient";
import sample from "./Slices/sample";
import file from "./Slices/file";
import csv from "./Slices/csv";
import gid from "./Slices/gid"

export default configureStore({
  reducer: {
    Patient: patient,
    Sample: sample,
    File: file,
    CSV: csv,
    GID: gid,
  },
});
