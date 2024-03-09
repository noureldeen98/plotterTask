import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  droppedDimensionItem: undefined,
  droppedMeasureItems: [],
  draggedItemData: {},
  dimensionCanBeDragged: true,
};
const dragAndDropSlice = createSlice({
  name: "dragAndDropSlice",
  initialState,
  reducers: {
    handleDropInDimension: (state, action) => {
      state.droppedDimensionItem = action.payload;
    },
    handleDropInMeasure: (state, action) => {
      state.droppedMeasureItems = [
        ...state.droppedMeasureItems,
        action.payload,
      ];
    },
    handleDraggingItem: (state, action) => {
      state.draggedItemData = action.payload;
    },
    handleClearDimension: (state, action) => {
      window.location.reload();
      state.draggedItemData = { ...state.draggedItemData, ...action.payload };
      state.droppedDimensionItem = undefined;
    },
    handleClearMesures: (state, action) => {
      window.location.reload();
      state.draggedItemData = { ...state.draggedItemData, ...action.payload };
      state.droppedMeasureItems = [];
    },
  },
});

export const {
  handleDropInDimension,
  handleDropInMeasure,
  handleDraggingItem,
  handleClearDimension,
  handleClearMesures,
} = dragAndDropSlice.actions;
export default dragAndDropSlice.reducer;
