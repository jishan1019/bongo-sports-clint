import React from "react";
import { Outlet } from "react-router-dom";

const DashboardHome = () => {
  return (
    <div className="ml-4 mr-4">
      <Outlet />
    </div>
  );
};

export default DashboardHome;
