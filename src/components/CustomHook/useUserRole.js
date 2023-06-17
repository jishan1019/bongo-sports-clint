import { useContext } from "react";
import { AuthContext } from "../SecurityLayout/AuthProvider/AuthProvider";
import useAxiosLoadData from "./useAxiosLoadData";

const useUserRole = () => {
  const { user } = useContext(AuthContext);

  const { data, isLoading, error } = useAxiosLoadData(
    `https://bongo-sports-acadamy-server.vercel.app/users/${user?.email}`
  );
  const userRole = data?.role;

  return { userRole, isLoading, error, data };
};

export default useUserRole;
