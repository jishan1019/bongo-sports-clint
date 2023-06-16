import React from "react";
import HelmetTitle from "../../ShareLayout/Helmet/HelmetTitel";
import Slider from "../SliderLayout/Slider";
import ClientSay from "../ClientSay/ClientSay";
import CourseFacilities from "../CourseFacilities/CourseFacilities";
import Appointment from "../Appointment/Appointment";
import PopularClass from "../PopularClass/PopularClass";

const Home = () => {
  return (
    <section>
      {/* Titel */}
      <HelmetTitle title="Home" />
      <Slider />
      <PopularClass />
      <CourseFacilities />
      <ClientSay />
      <Appointment />
    </section>
  );
};

export default Home;
