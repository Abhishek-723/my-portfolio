import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";
import BannerImage from "../Images/Banner.jpeg";

const Banner = () => {
  return (
    <div className="text-white lg:px-20 px-8 py-12 w-full flex justify-between md:items-center items-start">
      <div className="w-[55%]">
        <div className="text-5xl font-bold">Hi there👋!!!</div>
        <div className="text-md text-gray-300 my-12 leading-7">
          My name is Abhishek Pradhan, I'm currently pursuing my undergarduate
          B.Tech degree in Computer Science and engineering at Odisha University
          of Technology and Research. An aspiring software developer/engineer
          expertise in Web Development, DSA, Data Science, & Cloud Deployment..
          Detail-oriented, responsible, and have a proven track record of
          delivering high-quality software products on time. Passionate about
          solving complex problems and collaborating with cross-functional teams
          to develop innovative solutions.
        </div>
        <div className="flex">
          <button className="px-12 py-3 border-4 border-white hover:bg-blue-700 rounded-xl text-lg font-semibold flex items-center">
            <LinkedInIcon className="mr-2" />
            Linkedin
          </button>
          <button className=" ml-6 px-12 py-3 border-4 border-white hover:bg-amber-500 rounded-xl text-lg font-semibold flex items-center">
            <DescriptionIcon className="mr-2" />
            Resume
          </button>
        </div>
      </div>
      <img src={BannerImage} alt="" className="w-[30%] rounded-xl" />
    </div>
  );
};

export default Banner;
