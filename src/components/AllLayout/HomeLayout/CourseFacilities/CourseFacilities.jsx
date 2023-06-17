import React from "react";
import { motion } from "framer-motion";
import useAxiosLoadData from "../../../CustomHook/useAxiosLoadData";
import Loader from "../../ShareLayout/Loader/Loader";
import SectionTitel from "../../ShareLayout/SectionTitel/SectionTitel";

const CourseFacilities = () => {
  const { data, isLoading, error } = useAxiosLoadData(
    "https://bongo-sports-acadamy-server.vercel.app/facilities"
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
      <SectionTitel titel="Our Facilities" subTitel="" />

      <div className="grid grid-cols-1 gap-7 md:grid-cols-3 mb-16">
        {data?.map((facilities) => (
          <motion.div
            key={facilities._id}
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
              <img src={facilities?.image} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title mx-auto font-bold">
                {facilities?.name}
              </h2>
              <p className="pl-4 pr-4 text-center">{facilities?.about}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default CourseFacilities;
