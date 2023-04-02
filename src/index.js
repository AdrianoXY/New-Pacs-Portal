import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import { HashRouter, Routes, Route, Outlet } from "react-router-dom";
import Login from "./pages/Loging/login";
import Home from "./pages/Home/home";
import Sidebar from "./components/Sidebar/sidebar";
import Manage from "./pages/Manage/manage";
import Dashboard from "./pages/Dashboard/dashboard";
import Search from "./pages/Search/search";
import Payment from "./pages/Payment/payment";

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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/search" element={<Search />} />
        <Route path="/manage" element={<Manage />} />
        <Route path="/payment" element={<Payment />} />
      </Route>
    </Routes>
  </HashRouter>
);
