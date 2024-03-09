import { useRef, useState } from "react";
import Draggable from "react-draggable";
import { useDispatch, useSelector } from "react-redux";
import {
  handleDraggingItem,
  handleDropInDimension,
  handleDropInMeasure,
} from "../state/slices/DragandDropSlice";
import { Column } from "../utils/models/column";

const DraggableComponent: React.FC<{ columnData: Column }> = ({
  columnData,
}) => {
  const dispatch = useDispatch();
  const liRef = useRef(undefined);
  const [item, setItemType] = useState<Column>({ name: "", function: "" });
  const dimesnsionElement = useSelector(
    (state) => state.dragAndDropSlice.droppedDimensionItem
  );

  const handleDragStop = (event: React.DragEvent, data) => {
    const { clientX, clientY } = event;
    if (item.function === "dimension") {
      const droppableDimensionArea = document.getElementById(
        "droppable-dimension-area"
      );
      const rectDimension = droppableDimensionArea?.getBoundingClientRect();
      if (rectDimension) {
        if (
          clientX >= rectDimension.left &&
          clientX <= rectDimension.right &&
          clientY >= rectDimension.top &&
          clientY <= rectDimension.bottom
        ) {
          if (dimesnsionElement === undefined) {
            dispatch(handleDropInDimension(columnData));
          } else {
            //ToDo show a message to inform the user by using by one dimension
          }
        }
      }
    } else {
      const droppableMeasureArea = document.getElementById(
        "droppable-measure-area"
      );

      const rect = droppableMeasureArea?.getBoundingClientRect();
      if (rect) {
        if (
          clientX >= rect.left &&
          clientX <= rect.right &&
          clientY >= rect.top &&
          clientY <= rect.bottom
        ) {
          dispatch(handleDropInMeasure(columnData));
        }
      }
    }
  };

  const handleStart = () => {
    setItemType(columnData);
    const allTheColumndata = {
      ...columnData,
      positionTop: liRef?.current?.getBoundingClientRect().top,
      positionLeft: liRef?.current?.getBoundingClientRect().left,
    };
    dispatch(handleDraggingItem(allTheColumndata));
  };

  return (
    <Draggable onStop={handleDragStop} onStart={handleStart}>
      <li
        ref={liRef}
        style={{ cursor: "move", padding: "8px", border: "1px solid #ccc" }}
      >
        {columnData.name}
      </li>
    </Draggable>
  );
};

export default DraggableComponent;
