import React from "react";
import useUserRole from "../../../CustomHook/useUserRole";
import useAxiosLoadData from "../../../CustomHook/useAxiosLoadData";

const MyAddClass = () => {
  const userRole = useUserRole();
  const userEmail = userRole?.data?.email;

  const { data, isLoading, error } = useAxiosLoadData(
    `http://localhost:4000/classes/${userEmail}`
  );

  console.log(userEmail, data);

  return (
    <section className="mt-16 mb-16 overflow-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>index</th>
              <th>Class Image</th>
              <th>Class Name</th>
              <th>Status</th>
              <th>Feedback</th>
              <th>Action</th>
            </tr>
          </thead>
          {data?.map((myAddClass, index) => (
            <tbody key={myAddClass._id}>
              <tr>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={myAddClass?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{myAddClass?.name}</td>
                <td>{myAddClass?.status}</td>
                <td>{myAddClass?.feedback}</td>

                <th>
                  <button className="btn btn-sm bg_secondary">Update</button>
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </section>
  );
};

export default MyAddClass;
