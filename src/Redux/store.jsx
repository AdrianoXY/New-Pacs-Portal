import { configureStore } from "@reduxjs/toolkit";
import patient from "./Slices/patient";
import sample from "./Slices/sample"


export default configureStore({
  reducer: {
    Patient: patient,
    Sample: sample,
  },
});
