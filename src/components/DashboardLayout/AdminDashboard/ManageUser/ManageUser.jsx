import React from "react";
import useAxiosLoadData from "../../../CustomHook/useAxiosLoadData";
import Loader from "../../../AllLayout/ShareLayout/Loader/Loader";
import Swal from "sweetalert2";
import { useState } from "react";

const ManageUser = () => {
  const [desable, setDesable] = useState(false);

  const { data, isLoading, error } = useAxiosLoadData(
    "http://localhost:4000/users"
  );

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        Error: {error.message}
      </div>
    );
  }

  const handelMakeInstractor = (singleUser) => {
    const newData = {
      email: singleUser?.email,
      image: singleUser?.image,
      name: singleUser?.name,
      role: "instractor",
    };

    fetch(`http://localhost:4000/users/${singleUser?.email}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((result) => {
        setDesable(true);
        Swal.fire("Make Instractor Success!", "Go Back", "success");
      });
  };

  const handelMakeAdmin = (singleUser) => {
    console.log(singleUser.email);

    const newData = {
      email: singleUser?.email,
      image: singleUser?.image,
      name: singleUser?.name,
      role: "admin",
    };

    fetch(`http://localhost:4000/users/${singleUser?.email}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((result) => {
        setDesable(true);
        Swal.fire("Make Admin Success!", "Go Back", "success");
      });
  };

  return (
    <section className="mt-16 mb-16 overflow-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>index</th>
              <th>User Image</th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Make Admin</th>
              <th>Make Instractor</th>
            </tr>
          </thead>
          {data?.map((user, index) => (
            <tbody key={user._id}>
              <tr>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={user?.image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{user?.name}</td>
                <td>{user?.email}</td>

                <th>
                  <button
                    onClick={() => handelMakeAdmin(user)}
                    className="btn btn-sm bg_secondary"
                  >
                    Make Admin
                  </button>
                </th>

                <th>
                  <button
                    onClick={() => handelMakeInstractor(user)}
                    className="btn btn-sm bg_secondary"
                    desable={desable}
                  >
                    Make Instractor
                  </button>
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </section>
  );
};

export default ManageUser;
