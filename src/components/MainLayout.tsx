import Header from "./layout/Header";
import Columns from "./layout/Columns";
import PlotterChart from "./PlotterChart";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="flex flex-row">
        <div className="w-[25%]">
          <Columns />
        </div>
        <div>
          <PlotterChart />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
