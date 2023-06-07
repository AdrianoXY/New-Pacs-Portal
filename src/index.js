import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import { HashRouter, Routes, Route, Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/sidebar";
import Login from "./pages/Loging/login";
import Home from "./pages/Home/home";
import All from "./pages/Patient/all";
import Patient from "./pages/Patient/patient";
import Sample from "./pages/Patient/sample";
import Search from "./pages/Search/search";
import CTJ from "./pages/CSV2JSON/csvtojson";
import store from "./Redux/store";
import { Provider } from "react-redux";

const container = document.getElementById("root");
const root = ReactDOMClient.createRoot(container);

const AppLayout = () => (
  <div class="flex">
    <Sidebar />
    <Outlet />
  </div>
);

root.render(
  <Provider store={store}>
    <HashRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/" element={<AppLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/patient" element={<All />} />
          <Route path="/patient/:PID" element={<Patient />} />
          <Route path="/patient/:PID/:SID" element={<Sample />} />
          <Route path="/search" element={<Search />} />
          <Route path="/csvtojson" element={<CTJ />} />
        </Route>
      </Routes>
    </HashRouter>
  </Provider>
);
