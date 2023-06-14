import React from "react";
import HelmetTitle from "../../ShareLayout/Helmet/HelmetTitel";
import MovingText from "react-moving-text";
import useAxiosLoadData from "../../../CustomHook/useAxiosLoadData";
import Loader from "../../ShareLayout/Loader/Loader";
import {
  AiFillMail,
  AiFillSafetyCertificate,
  AiOutlineCheckCircle,
  AiOutlineFork,
} from "react-icons/ai";

const Instractor = () => {
  // Axios Code Here
  const { data, isLoading, error } = useAxiosLoadData(
    "http://localhost:4000/instractor"
  );

  console.log(data);

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
    <section className="mb-16">
      <HelmetTitle title="Instractor" />

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
            Instractors
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
            Home - Our Instractors
          </MovingText>
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10 mb-10 ml-4 mr-4">
        {data?.map((instractor) => (
          <div
            key={instractor._id}
            className="card w-full bg-gradient-to-t from-white to-[#F1F1F1] shadow-md rounded-sm"
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
                <strong>Class</strong>: {instractor?.email}
              </p>
              <div className="card-actions justify-start mt-4">
                <button
                  className="btn bg_primary
"
                >
                  See Classes
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Instractor;
