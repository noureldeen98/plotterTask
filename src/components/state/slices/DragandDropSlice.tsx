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
  },
});

export const {
  handleDropInDimension,
  handleDropInMeasure,
  handleDraggingItem,
} = dragAndDropSlice.actions;
export default dragAndDropSlice.reducer;
