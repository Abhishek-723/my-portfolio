import { Avatar } from "@mui/material";
import React, { useState } from "react";
import classnames from "classnames";
import profilePhoto from "../Images/Profile1.jpg";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const [viewNav, setViewNav] = useState(false);
  const navItems = ["Home", "About", "Projects", "Coding", "Skills", "Contact"];
  const handleNav = () => {
    setViewNav(!viewNav);
  };
  return (
    <div className="w-full relative">
      <div className="w-full flex lg:px-20 px-8 lg:py-8 py-4 justify-between md:items-center items-start">
        <div className="flex w-max items-center">
          <Avatar alt="" src={profilePhoto} />
          <p className="text-zinc-300 lg:text-2xl text-xl font-bold ml-2">
            ABHISHEK
          </p>
          <div className="w-[6px] h-[6px] bg-green-600 mt-[18px] ml-[4px] rounded-full"></div>
        </div>
        <div
          className={classnames(
            "hidden lg:w-[46%] md:w-3/5 min-width-[300px] rounded-xl border border-slate-600 px-2 py-1 md:flex justify-between items-center text-white bg-gray-900"
          )}
        >
          {navItems.map((item, index) => (
            <div
              className={classnames(
                "lg:text-md text-sm font-semibold hover:bg-blue-600 rounded-md py-2 px-3 cursor-pointer",
                {
                  "bg-blue-600": index === selectedItem,
                }
              )}
              key={index}
            >
              {item}
            </div>
          ))}
        </div>
        <div
          className="md:hidden w-full flex flex-col items-end"
          onClick={(e) => e.preventDefault()}
        >
          <div
            className="md:hidden border border-slate-600 px-2 pt-1 pb-2 text-white bg-gray-900 rounded-md w-max"
            onClick={handleNav}
          >
            {viewNav ? <CloseIcon /> : <MenuIcon />}
          </div>
        </div>
      </div>
      <div
        className={classnames(
          " w-1/2 md:hidden absolute right-8 top-16 min-w-[200px] rounded-xl border border-slate-600 px-2 py-1 text-white bg-gray-900 flex flex-col float-right",
          {
            hidden: viewNav === false,
            block: viewNav === true,
          }
        )}
      >
        {navItems.map((item, index) => (
          <div
            className={classnames(
              "lg:text-md text-sm font-semibold hover:bg-blue-600 rounded-md py-2 px-3 cursor-pointer",
              {
                "bg-blue-600": index === selectedItem,
              }
            )}
            key={index}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
