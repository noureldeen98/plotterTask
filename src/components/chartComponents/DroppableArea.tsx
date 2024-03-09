import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Column } from "../utils/models/column";
import LineChart from "./LinearChart";
import {
  handleClearDimension,
  handleClearMesures,
} from "../state/slices/DragandDropSlice";
import NotificationComponent from "../sharedComponents/ErrorNotification";
import Loader from "../sharedComponents/loader/Loader";

const DroppableArea = () => {
  const baseURL = "https://plotter-task-8019e13a60ac.herokuapp.com/data";
  const dispatch = useDispatch();
  const [chartData, setChartData] = useState([{ name: "", values: [] }]);
  const [showNotification, setShowNotification] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [notificationData, setNotificationData] = useState({
    type: "",
    message: "",
    description: "",
  });
  const measureAreaRef = useRef(undefined);
  const dimensionAreaRef = useRef(undefined);
  const dimesnsionElement = useSelector(
    (state) => state.dragAndDropSlice.droppedDimensionItem
  );
  const measuresArray = useSelector(
    (state) => state.dragAndDropSlice.droppedMeasureItems
  );

  const fetchingData = async (bodyRequest) => {
    setShowSpinner(true);
    await axios
      .post(baseURL, bodyRequest)
      .then((response: AxiosResponse) => {
        setChartData(response.data.data);
      })
      .catch((error: AxiosError) => {
        setShowNotification(true);
        setNotificationData({
          type: "error",
          message: `${error.message}`,
          description: `Something went wrong! ... Please check your internet connection!`,
        });
      })
      .finally(() => setShowSpinner(false));
  };

  useEffect(() => {
    if (dimesnsionElement !== undefined && measuresArray.length !== 0) {
      //Calling the endpoint to det data
      const measures = measuresArray.map((item: Column) => item.name);
      const dimension = dimesnsionElement.name;
      const bodyRequest = {
        measures,
        dimension,
      };
      fetchingData(bodyRequest);
    }
  }, [dimesnsionElement, measuresArray]);

  //Clearing the Dimension field
  const handleDimensionClear = () => {
    dispatch(handleClearDimension({ positionLeft: 0, positionTop: 0 }));
  };
  //Clearing the Measure field
  const handleMesuresClear = () => {
    dispatch(handleClearMesures({ positionLeft: 0, positionTop: 0 }));
  };

  return (
    <>
      {showNotification && (
        <NotificationComponent notificationData={notificationData} />
      )}
      {showSpinner && <Loader />}
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
          <button onClick={handleMesuresClear}>Clear</button>
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
