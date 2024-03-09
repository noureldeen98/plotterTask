import Header from "./layout/Header";
import Columns from "./layout/Columns";
import PlotterChart from "./chartComponents/PlotterChart";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="flex flex-row">
        <div className="w-[25%]">
          <DndProvider backend={HTML5Backend}>
            <Columns />
          </DndProvider>
        </div>
        <div className="w-full">
          <PlotterChart />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
