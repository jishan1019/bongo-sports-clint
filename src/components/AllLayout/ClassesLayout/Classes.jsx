import React from "react";
import useAxiosLoadData from "../../CustomHook/useAxiosLoadData";
import Loader from "../ShareLayout/Loader/Loader";
import MovingText from "react-moving-text";
import { key } from "localforage";
import HelmetTitle from "../ShareLayout/Helmet/HelmetTitel";
import {
  AiOutlineApartment,
  AiOutlineTeam,
  AiOutlineContacts,
  AiFillHeart,
  AiOutlineCluster,
} from "react-icons/ai";
import useUserRole from "../../CustomHook/useUserRole";
import PrivateRoute from "../../SecurityLayout/PrivateRoute/PrivateRoute";
import { Result } from "postcss";
import { useContext } from "react";
import { AuthContext } from "../../SecurityLayout/AuthProvider/AuthProvider";
import Swal from "sweetalert2";

const Classes = () => {
  const role = useUserRole();
  const userRole = role?.userRole;
  const { user } = useContext(AuthContext);

  const { data, isLoading, error } = useAxiosLoadData(
    "http://localhost:4000/classes"
  );

  const approveClasses = data.filter((approve) => approve.status === "approve");

  const hanelAddToCart = (item) => {
    const saveItem = {
      price: item?.price,
      item_image: item?.image,
      class_name: item?.name,
      email: user?.email,
      instructorName: item?.instructorName,
    };

    fetch("http://localhost:4000/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(saveItem),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        Swal.fire("Item Added Success!", "Go Back", "success");
      });
  };

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

  return (
    <section>
      <HelmetTitle title="Classes" />

      <div className="pt-12 pb-12 space-y-2 bg_primary text-center  ">
        <h1 className="text-3xl font-bold">
          <MovingText
            type="slideInFromBottom"
            duration="900ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
          >
            Classes
          </MovingText>
        </h1>
        <h1>
          <MovingText
            type="slideInFromTop"
            duration="900ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none"
          >
            Home - Classes
          </MovingText>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 mb-8 md:ml-0 md:mr-0 ml-2 mr-2">
        {approveClasses?.map((singleClass) => (
          <div
            key={singleClass._id}
            className={`card card-compact w-full bg-base-100 shadow rounded-none ${
              singleClass?.availableSeats === 0 ? "bg-red-400" : ""
            }`}
          >
            <figure>
              <img src={singleClass?.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                <AiOutlineApartment /> {singleClass?.name}
              </h2>
              <p className="inline-flex gap-2 items-center">
                <span className="text-lg">
                  <AiOutlineTeam />
                </span>
                <strong> Instructor Name</strong>: {singleClass?.instructorName}
              </p>
              <p className="inline-flex gap-2 items-center">
                <span className="text-lg">
                  <AiOutlineContacts />
                </span>
                <strong>Available Seats</strong>: {singleClass?.availableSeats}
              </p>
              <p className="inline-flex gap-2 items-center">
                <span className="text-lg">
                  <AiOutlineCluster />
                </span>
                <strong>Enroll Student</strong>: {singleClass?.enrollStudents}
              </p>
              <p className="inline-flex gap-2 items-center">
                <span className="text-lg ">
                  <AiFillHeart />
                </span>
                <strong>Course Price</strong>: ${singleClass?.price}
              </p>

              <div className="card-actions justify-end">
                <PrivateRoute>
                  <button
                    onClick={() => hanelAddToCart(singleClass)}
                    className="bg_primary p-4 rounded-lg font-semibold"
                    disabled={
                      singleClass?.availableSeats === 0 ||
                      userRole == "admin" ||
                      userRole == "instractor"
                    }
                  >
                    {singleClass?.availableSeats === 0
                      ? "Not Available"
                      : "Buy Now"}
                  </button>
                </PrivateRoute>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Classes;
