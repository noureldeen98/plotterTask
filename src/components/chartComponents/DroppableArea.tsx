import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Column } from "../utils/models/column";
import LineChart from "./LinearChart";
import { handleClearDimension } from "../state/slices/DragandDropSlice";

const DroppableArea = () => {
  const dispatch = useDispatch();
  const [chartData, setChartData] = useState([{ name: "", values: [] }]);
  const baseURL = "https://plotter-task-8019e13a60ac.herokuapp.com/data";
  const measureAreaRef = useRef(undefined);
  const dimensionAreaRef = useRef(undefined);
  const dimesnsionElement = useSelector(
    (state) => state.dragAndDropSlice.droppedDimensionItem
  );
  const measuresArray = useSelector(
    (state) => state.dragAndDropSlice.droppedMeasureItems
  );
  useEffect(() => {
    if (dimesnsionElement !== undefined && measuresArray.length !== 0) {
      //Calling the endpoint to det data
      const measures = measuresArray.map((item: Column) => item.name);
      const dimension = dimesnsionElement.name;
      const bodyRequest = {
        measures,
        dimension,
      };
      const fetchingData = async () => {
        await axios
          .post(baseURL, bodyRequest)
          .then((response: AxiosResponse) => {
            setChartData(response.data.data);
          })
          .catch((error: AxiosError) => {
            console.log(error.message);
          });
      };
      fetchingData();
    } else {
      //ToDO Show notification to inform user by using both dimension and measure values
    }
  }, [dimesnsionElement, measuresArray]);

  //Clearing the Dimension field
  const handleDimensionClear = () => {
    dispatch(handleClearDimension());
  };

  return (
    <>
      <div className="flex flex-col gap-2 justify-center items-center">
        <div className="flex flex-row gap-2 items-center justify-between">
          <label>Dimensions</label>
          <div
            ref={dimensionAreaRef}
            className="border-solid w-[500px] h-[50px] border-black border-2"
            id="droppable-dimension-area"
          ></div>
          <button onClick={handleDimensionClear}>Clear</button>
        </div>
        <div className="flex flex-row gap-2 items-center justify-between">
          <label className="pr-3">Measures</label>
          <div
            ref={measureAreaRef}
            className="border-solid w-[500px] h-[50px] border-black border-2"
            id="droppable-measure-area"
          ></div>
          <button>Clear</button>
        </div>
      </div>
      {chartData[0].name !== "" && (
        <div>
          <LineChart chartOptions={chartData} />
        </div>
      )}
    </>
  );
};

export default DroppableArea;
