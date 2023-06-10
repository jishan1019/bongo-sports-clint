import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <img
        className="mx-auto"
        src="https://img.freepik.com/free-vector/404-error-with-landscape-concept-illustration_114360-7898.jpg"
        alt=""
      />

      <div className="text-center p-4 md:p-0 md:max-w-[35%] space-y-4 mx-auto">
        <h1 className="text-2xl font-bold">Oppse! Somthing's missing...</h1>
        <p className="text-lg ">
          It seems like we donut find what you searched. The page you were
          looking for doesn't exist, isn't available or was loading incorrectly.
        </p>

        <button className="py-2 px-4 bg-[#5FC7AE] rounded-md">
          <Link to="/">Back To Home</Link>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
