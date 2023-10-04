import React from "react";
import Bucle from "../Images/bucle.jfif";
import Athlyst from "../Images/athlyst.jfif";
import Pinch from "../Images/pinch.jfif";
import CN from "../Images/codingninjas.webp";
import Deloitte from "../Images/deloitte.webp";
import WorkTwoToneIcon from "@mui/icons-material/WorkTwoTone";
import SchoolIcon from "@mui/icons-material/School";

const About = () => {
  const Education = [
    {
      schoolName: "Odisha University of Technology and Research",
    },
  ];
  const experience = [
    {
      Company: "Coding Ninjas",
      Role: "Web Testing intern",
      Image: CN,
      startDate: "Oct 2023",
      endDate: "Present",
    },
    {
      Company: "Deloitte",
      Role: "Smartinternz",
      Image: Deloitte,
      startDate: "Mar 2023",
      endDate: "Jul 2023",
    },
    {
      Company: "Bucle",
      Role: "React/Next.js Intern",
      Image: Bucle,
      startDate: "Jul 2022",
      endDate: "Oct 2022",
    },
    {
      Company: "Athlyst",
      Role: "Frontend Developer Intern",
      Image: Athlyst,
      startDate: "Jun 2022",
      endDate: "Sep 2022",
    },
    {
      Company: "Equiseed Wealth",
      Role: "Full Stack Devloper",
      Image: Pinch,
      startDate: "Jan 2022",
      endDate: "Mar 2022",
    },
  ];
  return (
    <div className="lg:px-20 px-8 py-12 text-gray-300 font-semibold">
      <p className="text-5xl font-bold mb-16">About</p>
      <div className="flex justify-around">
        <div className="w-1/3 border border-slate-800 rounded-xl">
          <div className="flex px-4 py-4 border-b border-slate-800 items-center">
            <div className="w-10 h-10 rounded-full bg-gray-800">
              <WorkTwoToneIcon className="ml-2 mt-2" />
            </div>
            <p className="ml-4 text-md">Work Experience</p>
          </div>
          <div className="my-8">
            {experience.map((data) => (
              <div className="px-4 py-2">
                <div className="flex w-full">
                  <img
                    src={data.Image}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-4 w-4/5">
                    <p className="text-sm mb-1">{data.Role}</p>
                    <div className="text-xs flex justify-between">
                      <p>{data.Company}</p>
                      <p className="text-gray-600">
                        {data.startDate} - {data.endDate}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-1/3 border border-slate-800 rounded-xl">
          <div className="flex px-4 py-4 border-b border-slate-800 items-center">
            <div className="w-10 h-10 rounded-full bg-gray-800">
              <SchoolIcon className="ml-2 mt-2" />
            </div>
            <p className="ml-4 text-md">Education</p>
          </div>
          <div className="my-8">
            {experience.map((data) => (
              <div className="px-4 py-2">
                <div className="flex w-full">
                  <img
                    src={data.Image}
                    alt=""
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-4 w-4/5">
                    <p className="text-sm mb-1">{data.Role}</p>
                    <div className="text-xs flex justify-between">
                      <p>{data.Company}</p>
                      <p className="text-gray-600">
                        {data.startDate} - {data.endDate}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
