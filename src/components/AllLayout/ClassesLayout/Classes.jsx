import React from "react";
import useAxiosLoadData from "../../CustomHook/useAxiosLoadData";
import Loader from "../ShareLayout/Loader/Loader";
import { key } from "localforage";
import HelmetTitle from "../ShareLayout/Helmet/HelmetTitel";
import {
  AiOutlineApartment,
  AiOutlineTeam,
  AiOutlineContacts,
  AiFillHeart,
} from "react-icons/ai";

const Classes = () => {
  const { data, isLoading, error } = useAxiosLoadData(
    "http://localhost:4000/classes"
  );

  const approveClasses = data.filter((approve) => approve.status === "approve");

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
        <h1 className="text-3xl font-bold">Classes</h1>
        <p>Home - Classes</p>
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
                Instructor Name: {singleClass?.instructorName}
              </p>
              <p className="inline-flex gap-2 items-center">
                <span className="text-lg">
                  <AiOutlineContacts />
                </span>
                Available Seats: {singleClass?.availableSeats}
              </p>
              <p className="inline-flex gap-2 items-center">
                <span className="text-lg ">
                  <AiFillHeart />
                </span>
                Course Price: ${singleClass?.price}
              </p>

              <div className="card-actions justify-end">
                <button
                  className="bg_primary p-4 rounded-lg font-semibold"
                  disabled={singleClass?.availableSeats === 0}
                >
                  {singleClass?.availableSeats === 0
                    ? "Not Available"
                    : "Buy Now"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Classes;
