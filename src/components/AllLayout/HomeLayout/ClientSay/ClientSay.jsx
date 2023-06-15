import React from "react";
import { SiGooglehangouts } from "react-icons/si";
import SectionTitel from "../../ShareLayout/SectionTitel/SectionTitel";

const ClientSay = () => {
  return (
    <section className="mb-10">
      <SectionTitel
        titel="Our Client Say"
        subTitel="Dynamic, well-structured, expert-led sports course with comprehensive
        training and facilities."
      ></SectionTitel>

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
