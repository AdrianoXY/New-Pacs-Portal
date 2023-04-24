import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import { HashRouter, Routes, Route, Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/sidebar";
import Login from "./pages/Loging/login";
import Home from "./pages/Home/home";
import Patient from "./pages/Patient/patient";
import Search from "./pages/Search/search";
import Recently from "./pages/Recently/recently";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

const AppLayout = () => (
  <div class="flex">
    <Sidebar />
    <Outlet />
  </div>
);

root.render(
  <HashRouter>
    <Routes>
      <Route index element={<Login />} />
      <Route path="/" element={<AppLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/search" element={<Search />} />
        <Route path="/recently" element={<Recently />} />
      </Route>
    </Routes>
  </HashRouter>
);
