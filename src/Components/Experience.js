import React from "react";
import Bucle from "../Images/bucle.jfif";
import Athlyst from "../Images/athlyst.jfif";
import Pinch from "../Images/pinch.jfif";
import CN from "../Images/codingninjas.webp";
import Deloitte from "../Images/deloitte.webp";

const Experience = () => {
  return (
    <div className="text-white lg:px-16 px-8 py-12 w-full flex flex-wrap flex-row lg:justify-between justify-center items-center">
      <div className="md:py-8 py-4 px-8 md:px-16 bg-gray-900 bg-opacity-60 hover:bg-opacity-80 rounded-xl m-4">
        <img src={Bucle} alt="" className="md:w-20 w-12 min-w-[32px] rounded" />
      </div>
      <div className="md:py-8 md:px-16 py-4 px-8 bg-gray-900 bg-opacity-60 hover:bg-opacity-80 rounded-xl m-4">
        <img
          src={Athlyst}
          alt=""
          className="md:w-20 w-12 min-w-[32px] rounded"
        />
      </div>
      <div className="md:py-8 md:px-16 py-4 px-8 bg-gray-900 bg-opacity-60 hover:bg-opacity-80 rounded-xl m-4">
        <img src={Pinch} alt="" className="md:w-20 w-12 min-w-[32px] rounded" />
      </div>
      <div className="md:py-8 md:px-16 py-4 px-8 bg-gray-900 bg-opacity-60 hover:bg-opacity-80 rounded-xl m-4">
        <img src={CN} alt="" className="md:w-20 w-12 min-w-[32px] rounded" />
      </div>
      <div className="md:py-8 md:px-16 py-4 px-8 bg-gray-900 bg-opacity-60 hover:bg-opacity-80 rounded-xl m-4">
        <img
          src={Deloitte}
          alt=""
          className="md:w-20 w-12 min-w-[32px] rounded"
        />
      </div>
    </div>
  );
};

export default Experience;
