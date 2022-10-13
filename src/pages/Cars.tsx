import { Outlet } from "react-router-dom";

import Sort from "components/Sidebar/Sort";

const Cars = () => {
  

  return (
    <div className="flex h-full flex-1">
      <Sort />
      <div className="flex-[4] p-4 lg:p-8">
        <Outlet />
      </div>
    </div>
  );
};

export default Cars;
