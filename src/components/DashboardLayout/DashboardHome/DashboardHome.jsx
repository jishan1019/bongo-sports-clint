import React from "react";
import { Outlet } from "react-router-dom";
import DashboardHeader from "./DashboardHeader/DashboardHeader";

const DashboardHome = () => {
  return (
    <div className="ml-4 mr-4">
      <DashboardHeader />
      <Outlet />
    </div>
  );
};

export default DashboardHome;
