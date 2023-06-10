import React from "react";
import { Helmet } from "react-helmet-async";

const HelmetTitle = ({ title }) => {
  return (
    <>
      <Helmet>
        <title>{`Bongo Sports | ${title}`}</title>
      </Helmet>
    </>
  );
};

export default HelmetTitle;
