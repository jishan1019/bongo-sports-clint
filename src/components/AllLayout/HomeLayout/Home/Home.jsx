import React from "react";
import HelmetTitle from "../../ShareLayout/Helmet/HelmetTitel";
import Slider from "../SliderLayout/Slider";

const Home = () => {
  return (
    <section>
      {/* Titel */}
      <HelmetTitle title="Home" />

      <Slider />
    </section>
  );
};

export default Home;
