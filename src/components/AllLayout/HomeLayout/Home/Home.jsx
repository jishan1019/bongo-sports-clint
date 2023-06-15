import React from "react";
import HelmetTitle from "../../ShareLayout/Helmet/HelmetTitel";
import Slider from "../SliderLayout/Slider";
import ClientSay from "../ClientSay/ClientSay";
import CourseFacilities from "../CourseFacilities/CourseFacilities";
import Appointment from "../Appointment/Appointment";

const Home = () => {
  return (
    <section>
      {/* Titel */}
      <HelmetTitle title="Home" />
      <Slider />
      <CourseFacilities />
      <ClientSay />
      <Appointment />
    </section>
  );
};

export default Home;
