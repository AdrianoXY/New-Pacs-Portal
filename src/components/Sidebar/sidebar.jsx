import React, { useState } from "react";
import { SidebarData } from "./data";
import { Link, useNavigate } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import axios from "../../axios/axios"

const Sidebar = () => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  const Logout = () => {
    axios.post("/user/Logout")
    .then((response) => {
      if(response.status === 200){
        alert("登出成功");
        navigate("/");
      }
    })
    .catch((err) => {
      if(!err.response){
        alert("error");
      }
    })
  }

  return (
    <div
      class="grid h-screen w-[80px] bg-stone-600 transition-all delay-150 duration-500 hover:w-[250px] hover:transition-all hover:duration-500"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseOut}
    >
      <div class="p-6 text-3xl text-white">
        <span>
          <FaIcons.FaRegUserCircle />
        </span>
        <div
          class={`${
            isHovered
              ? "pt-5 text-white delay-200 duration-500"
              : "opacity-0 delay-200 duration-500"
          }`}
        >
          Username
        </div>
      </div>

      {SidebarData.map((item) => {
        return (
          <div class="flex space-x-4">
            <Link to={item.path} class="grid grid-cols-2 items-start">
              <span class="p-6 pt-5 text-3xl text-white">{item.icon}</span>
              <div
                class={`${
                  isHovered
                    ? "pt-6 text-white delay-200 duration-500"
                    : "opacity-0 delay-200 duration-500"
                }`}
              >
                {item.title}
              </div>
            </Link>
          </div>
        );
      })}

      <div class="flex p-6 text-white" onClick={Logout}>
        <span class="items-start text-3xl">
          <RiIcons.RiLogoutCircleLine />
        </span>
        <span
          class={`${
            isHovered
              ? "pt-1 text-white delay-200 duration-500"
              : "opacity-0 delay-200 duration-500"
          }`}
        >
          Logout
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
