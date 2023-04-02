import React from "react";
import * as AiIcons from "react-icons/ai";
import * as GiIcons from "react-icons/gi";
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: "Home",
    path: "/home",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <GiIcons.GiMatterStates />,
    cName: "nav-text",
  },
  {
    title: "Search",
    path: "/search",
    icon: <AiIcons.AiOutlineSearch />,
    cName: "nav-text",
  },
  {
    title: "Manage",
    path: "/manage",
    icon: <MdIcons.MdManageAccounts />,
    cName: "nav-text",
  },
  {
    title: "Payment",
    path: "/payment",
    icon: <MdIcons.MdPayment />,
    cName: "nav-text",
  },
];
