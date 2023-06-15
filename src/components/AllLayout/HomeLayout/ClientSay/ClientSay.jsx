import React from "react";
import { SiGooglehangouts } from "react-icons/si";

const ClientSay = () => {
  return (
    <section className="mb-10">
      <h1 className="text-center text-3xl font-bold ">Our Client Say</h1>
      <div className="flex flex-col  mb-2 border-opacity-50 w-1/2 md:w-[20%] mx-auto">
        <div className="divider">
          <button className="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </button>
        </div>
      </div>

      <p className="mb-16 w-1/2 text-center mx-auto">
        Dynamic, well-structured, expert-led sports course with comprehensive
        training and facilities.
      </p>

      <div>
        <div className="bg_secondary relative p-8 md:p-16 w-[80%] mx-auto mt-4">
          <div className="p-6 text-3xl bg_secondary -top-10 -left-9 rounded-full absolute">
            <SiGooglehangouts />
          </div>
          <h1 className="text-[20px]">
            Consider the course's flexibility and schedule, taking into account
            your own availability and commitments. A course that offers options
            for different time slots or flexible attendance policies can
            accommodate various schedules.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default ClientSay;
