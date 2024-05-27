import { Outlet } from "react-router-dom";
import BreadCrumps from "./BreadCrumps";

const Main = () => {
  return (
    <div className="flex-1 bg-light-2">
      <div className="container py-6 pb-12">
        <BreadCrumps />
        <Outlet/>
      </div>
    </div>
  );
};

export default Main;
