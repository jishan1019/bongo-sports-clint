import React from "react";

const SectionTitel = ({ titel, subTitel }) => {
  return (
    <>
      <h1 className="text-center mt-4 text-3xl font-bold ">{titel}</h1>
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

      <p className="mb-16 w-[80%] md:w-1/2 text-center mx-auto">{subTitel}</p>
    </>
  );
};

export default SectionTitel;
