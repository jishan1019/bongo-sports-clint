import React from "react";
import SectionTitel from "../../ShareLayout/SectionTitel/SectionTitel";

const Appointment = () => {
  return (
    <section className="bg-[url('http://webdesign-finder.com/equestria/wp-content/uploads/2017/10/parallax.jpg')] h-[100%] mt-16 mb-16 p-6 bg-fixed">
      <SectionTitel titel="Appointment" subTitel=""></SectionTitel>

      <div className=" flex justify-evenly items-center gap-6 flex-col md:flex-row ">
        <input
          className="p-3 rounded-md w-full"
          type="text"
          name=""
          id=""
          placeholder="Enter Your Name"
        />

        <input
          className="p-3 rounded-md w-full"
          type="number"
          name=""
          id=""
          placeholder="Enter Your Number"
        />

        <input
          className="p-3 rounded-md w-full"
          type="date"
          name=""
          id=""
          placeholder="Enter Date"
        />

        <input
          className="p-3 rounded-md w-full"
          type="time"
          name=""
          id=""
          placeholder="Enter Your Time"
        />
      </div>

      <div className="mt-8 mb-8">
        <textarea
          className="w-full p-3 rounded-md"
          name=""
          id=""
          placeholder="Enter Your Massage"
          cols="30"
          rows="10"
        ></textarea>
      </div>
    </section>
  );
};

export default Appointment;
