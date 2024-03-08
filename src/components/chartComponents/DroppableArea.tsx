import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const DroppableArea = () => {
  const droppedItems = useSelector(
    (state) => state.dragAndDropSlice.droppedItems
  );
  useEffect(() => {
    console.log("sta", droppedItems);
  }, [droppedItems]);
  return (
    <div
      id="droppable-area"
      // style={{
      //   border: "2px dashed #000",
      //   minHeight: "200px",
      //   position: "relative",
      // }}
    >
      <p>Droppable Area</p>
      {/* {droppedItems?droppedItems.map((item) => ( 
         <div
          key={item.name}
          style={{
            position: "absolute",
            backgroundColor: "red",
            border:"1px solid green",
            top:item.x,
            left:item.y
          }}
        > 
          {item.name}
        </div>
       )):""
      }
    </div> */}

      <div className="flex flex-col gap-2 justify-center">
        <div className="flex flex-row gap-2">
          <label>Dimensions</label>

          <div className="border-solid w-[100px] h-[200px] border-black border-2"></div>
          <button>Clear</button>
        </div>
        {/* 
      <div className="flex flex-row gap-2">
        <label>Measures</label>
        {draggedMeasures.map((measure, index) => (
          <div key={index} className="border-solid border-black border-2">
            {measure}
          </div>
        ))}
        <button >Clear</button>
      </div> */}

        {/* Draggable input elements */}
        <div className="flex flex-row gap-2">
          {/* <DraggableInput label="Input 1" />
        <DraggableInput label="Input 2" /> */}
          {/* Add more draggable inputs as needed */}
        </div>
      </div>
    </div>
  );
};

export default DroppableArea;
