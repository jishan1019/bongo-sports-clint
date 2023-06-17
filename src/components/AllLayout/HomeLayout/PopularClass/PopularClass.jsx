import React from "react";
import SectionTitel from "../../ShareLayout/SectionTitel/SectionTitel";
import Loader from "../../ShareLayout/Loader/Loader";
import useAxiosLoadData from "../../../CustomHook/useAxiosLoadData";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const PopularClass = () => {
  const { data, isLoading, error } = useAxiosLoadData(
    "http://localhost:4000/classes"
  );

  const sliceData = data.slice(0, 6);

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
    <section className="mb-16 mt-16 p-3">
      <SectionTitel
        titel="Popular Classes "
        // subTitel="Explore the Most Popular Choices!"
      ></SectionTitel>

      <div className="grid grid-cols-1 gap-7 md:grid-cols-3 mb-16">
        {sliceData?.map((classes) => (
          <motion.div
            key={classes._id}
            className="card w-full bg-base-100 shadow rounded-sm"
            initial={{ scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 100, // Adjust this value to make the animation less stiff
              damping: 10, // Adjust this value to reduce the damping effect
            }}
          >
            <figure>
              <img src={classes?.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title  font-bold"> {classes?.name}</h2>
              <p className=" text-left">
                <strong>Instractor</strong>: {classes?.instructorName}
              </p>
              <p className=" text-left">
                <strong>Most Enroll</strong>: {classes?.enrollStudents}
              </p>
              <p className=" text-left">
                <strong>Prise: </strong>: ${classes?.price}
              </p>

              <div className="card-actions justify-start mt-4">
                <Link to="/classes">
                  <button
                    className="bg_primary p-3 rounded-lg font-semibold"
                    disabled={sliceData?.availableSeats === 0}
                  >
                    {sliceData?.availableSeats === 0
                      ? "Not Available"
                      : "Enroll Now"}
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default PopularClass;
