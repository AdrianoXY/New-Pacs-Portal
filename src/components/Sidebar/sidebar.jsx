import React, { useState } from "react";
import { SidebarData } from "./data";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div
      class="grid h-screen w-[80px] bg-stone-600 transition-all delay-150 duration-500 hover:w-[250px] hover:transition-all hover:duration-500"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseOut}
    >
      {SidebarData.map((item) => {
        return (
          <div class="flex space-x-4">
            <Link to={item.path} class="grid grid-cols-2 items-start">
          <span class="text-white p-6 pt-9 text-3xl">{item.icon}</span>
          <div class={`${isHovered ? "text-white delay-200 duration-500 pt-10" : "opacity-0 delay-200 duration-500"}`}>
            {item.title}
          </div>
        </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
