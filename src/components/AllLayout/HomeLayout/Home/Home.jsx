import React from "react";
import HelmetTitle from "../../ShareLayout/Helmet/HelmetTitel";
import Slider from "../SliderLayout/Slider";
import ClientSay from "../ClientSay/ClientSay";

const Home = () => {
  return (
    <section>
      {/* Titel */}
      <HelmetTitle title="Home" />
      <Slider />
      <ClientSay />
    </section>
  );
};

export default Home;
