import React from "react";
import { motion } from "framer-motion";
import useAxiosLoadData from "../../../CustomHook/useAxiosLoadData";
import Loader from "../../ShareLayout/Loader/Loader";
import SectionTitel from "../../ShareLayout/SectionTitel/SectionTitel";

const CourseFacilities = () => {
  const { data, isLoading, error } = useAxiosLoadData(
    "http://localhost:4000/facilities"
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

  return (
    <section className="bg_primary p-6">
      <motion.div
        className="container"
        initial={{ scale: 0 }}
        animate={{ rotate: 180, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
        }}
      />

      <SectionTitel titel="Our Facilities" subTitel=""></SectionTitel>

      <div className="grid grid-cols-1 gap-7 md:grid-cols-3 mb-16">
        {data?.map((facilities) => (
          <div
            key={facilities._id}
            className="card w-full bg-base-100 shadow rounded-sm"
          >
            <figure>
              <img src={facilities?.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title mx-auto font-bold">
                {facilities?.name}
              </h2>
              <p className="pl-4 pr-4 text-center">{facilities?.about}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseFacilities;
