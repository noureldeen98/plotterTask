import { combineSlices } from "@reduxjs/toolkit";
import dragAndDropSlice from "./slices/DragandDropSlice";

const rootReducer = combineSlices({
  dragAndDropSlice,
});

export default rootReducer;
