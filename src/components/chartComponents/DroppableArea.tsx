import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

const DroppableArea = () => {
  const measureAreaRef = useRef(undefined);
  const dimensionAreaRef = useRef(undefined);
  const dimesnsionElement = useSelector(
    (state) => state.dragAndDropSlice.droppedDimensionItem
  );
  const measuresArray = useSelector(
    (state) => state.dragAndDropSlice.droppedMeasureItems
  );
  useEffect(() => {
    if (dimesnsionElement !== undefined && measuresArray.length !==0) {
       //Calling the endpoint to det data
    } else {
      //ToDO Show notification to inform user by using both dimension and measure values 
    }
  }, [dimesnsionElement, measuresArray]);

  useEffect(() => {}, []);

  return (
    <div>
      <div className="flex flex-col gap-2 justify-center">
        <div className="flex flex-row gap-2">
          <label>Dimensions</label>
          <div
            ref={dimensionAreaRef}
            className="border-solid w-[500px] h-[100px] border-black border-2"
            id="droppable-dimension-area"
          ></div>
          <button>Clear</button>
        </div>

        <div className="flex flex-row gap-2">
          <label>Measures</label>
          <div
            ref={measureAreaRef}
            className="border-solid w-[500px] h-[100px] border-black border-2"
            id="droppable-measure-area"
          >
            {/* <ul className="flex flex-row gap-2">
              {measuresArray
                ? measuresArray.map((measure) => (
                    <li key={measure.name}>{measure.name}</li>
                  ))
                : ""}
            </ul> */}
          </div>
        </div>
        <button>Clear</button>
      </div>
    </div>
  );
};

export default DroppableArea;
