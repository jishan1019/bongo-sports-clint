import React from "react";
import useAxiosLoadData from "../../../CustomHook/useAxiosLoadData";
import { useContext } from "react";
import { AuthContext } from "../../../SecurityLayout/AuthProvider/AuthProvider";

const MySelectClass = () => {
  const { user } = useContext(AuthContext);
  const { data, isLoading, error } = useAxiosLoadData(
    `http://localhost:4000/cart/${user?.email}`
  );

  console.log(data);

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
              <th>Instractor Name</th>
              <th>Prise</th>
              <th>Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          {data?.map((cart_item, index) => (
            <tbody key={cart_item._id}>
              <tr>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={cart_item?.item_image}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{cart_item?.class_name}</td>
                <td>{cart_item?.instructorName}</td>
                <td>{cart_item?.price}</td>

                <th>
                  <button className="btn btn-sm bg_secondary">Pay Now</button>
                </th>
                <th>
                  <button className="btn btn-sm bg-red-500">Delete</button>
                </th>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </section>
  );
};

export default MySelectClass;
