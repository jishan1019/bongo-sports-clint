import React from "react";
import AdminHome from "../../AdminDashboard/AdminHome/AdminHome";
import StudentHome from "../../SudentDashboard/StudentHome/StudentHome";
import InstractorHome from "../../InstractorDashboard/InstractorHome/InstractorHome";
import useUserRole from "../../../CustomHook/useUserRole";

const DashboardRole = () => {
  const userRole = useUserRole();

  return (
    <>
      {userRole?.userRole === "admin" && <AdminHome />}
      {userRole?.userRole === "student" && <StudentHome />}
      {userRole?.userRole === "instractor" && <InstractorHome />}
    </>
  );
};

export default DashboardRole;
