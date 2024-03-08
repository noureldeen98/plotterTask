import React from 'react';
import Draggable from 'react-draggable';
import { useDispatch } from 'react-redux';
import { handleDrop } from '../state/slices/DragandDropSlice';

const DraggableComponent = ({ columnData }) => {
    const dispatch = useDispatch()
  const handleDragStop = (event, data) => {
    // Handle drag stop event here if needed
    dispatch(handleDrop(data))
    console.log('Drag stopped at:', data.x, data.y);
  };

  return (
    <Draggable onStop={handleDragStop}>
      <div style={{ cursor: 'move', padding: '8px', border: '1px solid #ccc' }}>
        {columnData.name}
      </div>
    </Draggable>
  );
};

export default DraggableComponent;
