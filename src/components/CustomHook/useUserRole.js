import { useContext } from "react";
import { AuthContext } from "../SecurityLayout/AuthProvider/AuthProvider";
import useAxiosLoadData from "./useAxiosLoadData";

const useUserRole = () => {
  const { user } = useContext(AuthContext);

  const { data, isLoading, error } = useAxiosLoadData(
    `http://localhost:4000/users/${user?.email}`
  );
  const userRole = data?.role;

  return { userRole, isLoading, error };
};

export default useUserRole;
