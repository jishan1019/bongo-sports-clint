import React from "react";
import SectionTitel from "../../ShareLayout/SectionTitel/SectionTitel";
import useAxiosLoadData from "../../../CustomHook/useAxiosLoadData";
import Loader from "../../ShareLayout/Loader/Loader";
import {
  AiFillMail,
  AiFillSafetyCertificate,
  AiOutlineCheckCircle,
  AiOutlineFork,
} from "react-icons/ai";

const PopularInstractor = () => {
  // Axios Code Here
  const { data, isLoading, error } = useAxiosLoadData(
    "https://bongo-sports-acadamy-server.vercel.app/instractor"
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
    <section className="bg-[url('http://webdesign-finder.com/equestria/wp-content/uploads/2017/10/parallax.jpg')] h-[100%] p-4 mt-16 mb-16 bg-fixed">
      <SectionTitel
        titel="Popular Instractor "
        subTitel="Explore the Most Popular Choices!"
      ></SectionTitel>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-10 ml-4 mr-4">
        {data?.map((instractor) => (
          <div
            key={instractor._id}
            className="card w-full bg-white shadow-md rounded-sm"
          >
            <figure className=" mx-auto mt-8">
              <img
                className="rounded-full w-24 h-24"
                src={instractor?.image}
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title mx-auto">{instractor?.name}</h2>
              <p className="inline-flex items-center mt-2 gap-1 justify-start ">
                <AiFillSafetyCertificate />
                <strong>Instractors</strong>: {instractor?.class_name}
              </p>
              <p className="inline-flex items-center gap-1 justify-start ">
                <AiFillMail />
                <strong>Email</strong>: {instractor?.email}
              </p>
              <p className="inline-flex items-center gap-1 justify-start ">
                <AiOutlineFork />
                <strong>Class</strong>: {instractor?.number_of_classes}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularInstractor;
