import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const Slider = () => {
  return (
    <div className="mb-16">
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="relative">
          <div>
            <img
              src="https://sportradar.com/wp-content/uploads/2022/02/AV-EDITORIAL-SERVICES_Header.jpg"
              alt=""
            />
          </div>
          <div className="top-1/2 absolute text-white">
            <h3 className="md:text-lg text-[12px] ml-16 -mt-8 md:-mt-16 mb-2">
              Wellcome to sports acadamy.
            </h3>
            <h3 className="md:text-3xl ml-16 -mt-1">
              Keep Refresh && Strong Health
            </h3>
            <h3 className="hidden md:block ml-16 mt-2">
              Bongo Sports Academy: Excellence in sports training, <br />
              nurturing athletes, and fostering a passion for sports.
            </h3>
            <button className="btn btn-outline ml-16 md:mt-5 hidden md:block border-white text-white">
              Read More
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div>
            <img
              src="https://sportradar.com/wp-content/uploads/2022/02/SS_Header.jpg"
              alt=""
            />
          </div>
          <div className="top-1/2 absolute text-white">
            <h3 className="md:text-lg text-[12px] ml-16 -mt-8 md:-mt-16 mb-2">
              Wellcome to sports acadamy.
            </h3>
            <h3 className="md:text-3xl ml-16 -mt-1">
              Keep Refresh && Strong Health
            </h3>
            <h3 className="hidden md:block ml-16 mt-2">
              Bongo Sports Academy: Excellence in sports training, <br />{" "}
              nurturing athletes, and fostering a passion for sports.
            </h3>
            <button className="btn btn-outline ml-16 md:mt-5 hidden md:block border-white text-white">
              Read More
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <div>
            <img
              src="https://sportradar.com/wp-content/uploads/2022/02/INTERACTSPORT_Header.jpg"
              alt=""
            />
          </div>
          <div className="top-1/2 absolute text-white">
            <h3 className="md:text-lg text-[12px] ml-16 -mt-8 md:-mt-16 mb-2">
              Wellcome to sports acadamy.
            </h3>
            <h3 className="md:text-3xl ml-16 -mt-1">
              Keep Refresh && Strong Health
            </h3>
            <h3 className="hidden md:block ml-16 mt-2">
              Bongo Sports Academy: Excellence in sports training, <br />{" "}
              nurturing athletes, and fostering a passion for sports.
            </h3>
            <button className="btn btn-outline ml-16 md:mt-5 hidden md:block border-white text-white">
              Read More
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
