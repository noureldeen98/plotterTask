import { useRef, useState } from "react";
import Draggable from "react-draggable";
import { useDispatch, useSelector } from "react-redux";
import {
  handleDraggingItem,
  handleDropInDimension,
  handleDropInMeasure,
} from "../state/slices/DragandDropSlice";
import { Column } from "../utils/models/column";
import WarningMessage from "../sharedComponents/WarningMessage";

const DraggableComponent: React.FC<{ columnData: Column }> = ({
  columnData,
}) => {
  const dispatch = useDispatch();
  const liRef = useRef(undefined);
  const [item, setItemType] = useState<Column>({ name: "", function: "" });
  const [showWarningMessage,setShowWarningMessage] = useState(false)
  const [warningMessage,setWarningMessage] = useState("")
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
          }else{
          setShowWarningMessage(true)
          setWarningMessage("Please, don't use more than 1 dimension value")
          } 
        }else {
          setShowWarningMessage(true)
          setWarningMessage("Please, drag it in its dimension field!")

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
        }else{
          setShowWarningMessage(true)
          setWarningMessage("Please, drag it in its measure field!")
         
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
    <>
    {showWarningMessage && <WarningMessage messages={warningMessage}/>}
    <Draggable onStop={handleDragStop} onStart={handleStart}>
      <li
        ref={liRef}
        style={{ cursor: "move", padding: "3px", }}
      >
        {columnData.name}
      </li>
    </Draggable>
    </>
  );
};

export default DraggableComponent;
