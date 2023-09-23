import { Avatar } from "@mui/material";
import React, { useState } from "react";
import classnames from "classnames";

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState(0);
  const navItems = ["Home", "About", "Projects", "Coding", "Skills", "Contact"];
  return (
    <div className="w-full flex px-20 py-8 justify-between items-center">
      <div className="flex w-max items-center">
        <Avatar alt="" src="/static/images/avatar/1.jpg" />
        <p className="text-zinc-300 text-2xl font-bold ml-2">ABHISHEK</p>
        <div className="w-[6px] h-[6px] bg-green-600 mt-[18px] ml-[4px] rounded-full"></div>
      </div>
      <div className="w-[46%] rounded-xl border border-slate-600 px-2 py-1 flex w-full justify-between items-center text-white bg-gray-900">
        {navItems.map((item, index) => (
          <div
            className={classnames(
              "text-md font-semibold hover:bg-blue-600 rounded-md py-2 px-3 cursor-pointer",
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
