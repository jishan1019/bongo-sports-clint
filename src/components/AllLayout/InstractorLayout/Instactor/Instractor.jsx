import React from "react";
import HelmetTitle from "../../ShareLayout/Helmet/HelmetTitel";
import MovingText from "react-moving-text";
import useAxiosLoadData from "../../../CustomHook/useAxiosLoadData";

const Instractor = () => {
  // Axios Code Here
  const { data, isLoading, error } = useAxiosLoadData(
    "http://localhost:4000/instractor"
  );

  console.log(data);

  return (
    <div className="mb-16">
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
    </div>
  );
};

export default Instractor;
