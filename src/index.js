import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import { HashRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Loging/login";
import Home from "./pages/Home/home";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

root.render(
  <HashRouter>
    <Routes>
      <Route index element={<Login />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </HashRouter>
);
