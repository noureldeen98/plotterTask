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
      console.log(action.payload);
      state.draggedItemData = action.payload;
    },
    handleClearDimension: (state) => {
      window.location.reload()
      state.droppedDimensionItem = undefined;
    },
  },
});

export const {
  handleDropInDimension,
  handleDropInMeasure,
  handleDraggingItem,
  handleClearDimension,
} = dragAndDropSlice.actions;
export default dragAndDropSlice.reducer;
