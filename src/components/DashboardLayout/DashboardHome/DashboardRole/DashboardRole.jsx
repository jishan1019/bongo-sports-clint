import React from "react";
import { useContext } from "react";
import { AuthContext } from "../../../SecurityLayout/AuthProvider/AuthProvider";
import useAxiosLoadData from "../../../CustomHook/useAxiosLoadData";
import AdminHome from "../../AdminDashboard/AdminHome/AdminHome";
import StudentHome from "../../SudentDashboard/StudentHome/StudentHome";
import InstractorHome from "../../InstractorDashboard/InstractorHome/InstractorHome";
import useUserRole from "../../../CustomHook/useUserRole";

const DashboardRole = () => {
  //   const { user } = useContext(AuthContext);
  //   const { data, isLoading, error } = useAxiosLoadData(
  //     `http://localhost:4000/users/${user?.email}`
  //   );
  //   const userRole = data?.role;

  const userRole = useUserRole();
  console.log(userRole.userRole);

  return (
    <>
      {userRole === "admin" && <AdminHome />}
      {userRole === "student" && <StudentHome />}
      {userRole === "instractor" && <InstractorHome />}
    </>
  );
};

export default DashboardRole;
