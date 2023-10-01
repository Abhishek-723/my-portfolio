import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import DescriptionIcon from "@mui/icons-material/Description";
import BannerImage from "../Images/Banner.jpeg";

const Banner = () => {
  return (
    <div className="text-white lg:px-20 px-8 py-12 w-full flex md:flex-row flex-col justify-between md:items-center items-start">
      <div className="md:w-[55%] w-full">
        <div className="lg:text-5xl text-3xl font-bold md:text-left text-center">
          Hi there👋!!!
        </div>
        <div className="lg:text-md text-sm text-gray-300 md:my-12 my-6 leading-7 md:text-left text-center">
          My name is Abhishek Pradhan, I'm currently pursuing my undergarduate
          B.Tech degree in Computer Science and engineering at Odisha University
          of Technology and Research. An aspiring software developer/engineer
          expertise in Web Development, DSA, Data Science, & Cloud Deployment.
          Detail-oriented, responsible, and have a proven track record of
          delivering high-quality software products on time. Passionate about
          solving complex problems and collaborating with cross-functional teams
          to develop innovative solutions.
        </div>
        <div className="flex md:w-max w-full justify-evenly md:mb-0 mb-8">
          <button className="lg:px-12 px-8 py-3 border-4 border-white hover:bg-blue-700 rounded-xl text-lg font-semibold flex items-center">
            <LinkedInIcon className="mr-2" />
            Linkedin
          </button>
          <button className="ml-6 lg:px-12 px-8 py-3 border-4 border-white hover:bg-amber-500 rounded-xl text-lg font-semibold flex items-center">
            <DescriptionIcon className="mr-2" />
            Resume
          </button>
        </div>
      </div>
      <img
        src={BannerImage}
        alt=""
        className="md:w-[30%] w-4/5 min-w-[300px] md:m-0 m-auto rounded-xl"
      />
    </div>
  );
};

export default Banner;
