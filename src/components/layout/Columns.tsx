import axios, { AxiosError, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Column } from "../utils/models/column";
import NotificationComponent from "../sharedComponents/ErrorNotification";
import DraggableComponent from "../chartComponents/DraggableComponent";
import Loader from "../sharedComponents/loader/Loader";

const Columns = () => {
  const baseURL = "https://plotter-task-8019e13a60ac.herokuapp.com/columns";
  const [columns, setColumns] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const [notificationData, setNotificationData] = useState({
    type: "",
    message: "",
    description: "",
  });
  //Side effect : Getting the columns
  useEffect(() => {
    setShowSpinner(true);
    const fetchingColumns = async () => {
      await axios
        .get(`${baseURL}`)
        .then((response: AxiosResponse) => {
          setColumns(response.data.columns);
          setShowSpinner(false);
        })
        .catch((error: AxiosError) => {
          setShowSpinner(false);
          setShowNotification(true);
          setNotificationData({
            type: "error",
            message: `${error.message}`,
            description: `Something went wrong! ... Please check your internet connection!`,
          });
        });
    };
    fetchingColumns();
  }, []);

  return (
    <>
      {showNotification && (
        <NotificationComponent notificationData={notificationData} />
      )}
      {showSpinner && <Loader />}
      <div className="w-[100%] text-start h-[690px]">
        <p className="mt-5">Columns</p>
        <hr className="border-[2px] border-[lightGray]" />
        <ul className="gap-4 flex flex-col items-start mt-4">
          {columns.map((column: Column) => (
            <DraggableComponent key={column.name} columnData={column} />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Columns;
