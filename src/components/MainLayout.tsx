import Header from "./layout/Header";
import SideMenu from "./layout/Columns";
import PlotterChart from "./PlotterChart";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="flex flex-row">
        <div className="w-[25%]">
          <SideMenu />
        </div>
        <div>
          <PlotterChart />
        </div>
      </div>
    </>
  );
};

export default MainLayout;
