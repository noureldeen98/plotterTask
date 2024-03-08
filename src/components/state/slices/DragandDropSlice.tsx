import { createSlice } from "@reduxjs/toolkit";

const initialState = {droppedItems:[{}],draggedItemData:{} };
const dragAndDropSlice = createSlice({
  name: "dragAndDropSlice",
  initialState,
  reducers: {
    handleDrop: (state, action) => {
      // Check if the dropped position is within the droppable area
      state.droppedItems.push(action.payload)
      const droppableArea = document.getElementById("droppable-area");
      const rect = droppableArea?.getBoundingClientRect();
      if (
        action.payload.x >= rect.left &&
        action.payload.x <= rect.right &&
        action.payload.y >= rect.top &&
        action.payload.y <= rect.bottom
      ) {
        // Item dropped inside the droppable area
        // setDroppedItems((prevItems) => [...prevItems, { id, position }]);
      }
    },
    handleDraggingItem:(state,action)=>{
      state.draggedItemData = action.payload
    }
  },
});

export const { handleDrop,handleDraggingItem } = dragAndDropSlice.actions;
export default dragAndDropSlice.reducer;
