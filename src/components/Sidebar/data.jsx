import React from "react";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as GoIcons from "react-icons/go";

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Patient",
    path: "/patient",
    icon: <MdIcons.MdSwitchAccount />,
    cName: "nav-text",
  },
  {
    title: "Search",
    path: "/search",
    icon: <AiIcons.AiOutlineSearch />,
    cName: "nav-text",
  },
  {
    title: "CSV2JSON",
    path: "/csvtojson",
    icon: <GoIcons.GoFileDirectory />,
    cName: "nav-text",
  },
];
