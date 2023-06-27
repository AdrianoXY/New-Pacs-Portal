import React, { useEffect, useState } from "react";
import { SidebarData } from "./data";
import { Link, useNavigate } from "react-router-dom";
import * as RiIcons from "react-icons/ri";
import myImage from "./Logo.jpg";
import axios from "../../axios/axios";

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
    axios
      .post("/user/Logout")
      .then((response) => {
        if (response.status === 150) {
          alert("登出成功");
          navigate("/");
        }
      })
      .catch((err) => {
        if (!err.response) {
          alert("error");
        }
      });
  };

  // useEffect(() => {
  //   axios
  //     .post('/auth/verify')
  //     .then((response) => {
  //       console.log(response.data);
  //     })
  //     .catch((error) => {
  //       navigate('/')
  //     })
  // })

  return (
    <div
      class="grid h-screen w-[80px] bg-gren transition-all delay-75 duration-500 "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseOut}
    >
      <div>
        <img src={myImage} class="rounded-full p-2" />
      </div>

      {SidebarData.map((item, index) => {
        return (
          <div key={index} class="flex space-x-4">
            <Link to={item.path} class="grid grid-cols-2 items-start">
              <span class="p-6 pt-5 text-3xl text-white hover:p-4 hover:text-5xl hover:transition-all hover:duration-200">
                {item.icon}
              </span>
            </Link>
          </div>
        );
      })}

      <div class="flex p-6 text-white" onClick={Logout}>
        <span class="cursor-pointer items-start text-3xl ">
          <RiIcons.RiLogoutCircleLine />
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
