import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import { HashRouter, Routes, Route, Outlet } from "react-router-dom";
import Login from "./pages/Loging/login";
import Home from "./pages/Home/home";
import Sidebar from "./components/Nav/nav";
import Manage from "./pages/Manage/manage";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

const AppLayout = () => {
  <>
    <Sidebar />
    <Outlet />
  </>;
};

root.render(
  <HashRouter>
    <Routes>
      <Route index element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/manage" element={<Manage />} />
    </Routes>
  </HashRouter>
);
