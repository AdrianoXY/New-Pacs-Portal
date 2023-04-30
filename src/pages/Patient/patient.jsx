import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io5";

const Dashboard = () => {
  const [isOnClick, setIsOnClick] = useState(false);
  const navigate = useNavigate();

  return (
    <div class="grid h-screen w-full grid-cols-7 grid-rows-6 overflow-auto">
      <div
        class={`${
          isOnClick
            ? "flex-rows col-start-4 flex items-center place-self-center"
            : "col-start-4 flex place-self-center"
        }`}
      >
        <input
          class={`${
            isOnClick
              ? "h-12 -translate-x-40 rounded-lg border border-black opacity-100 transition-opacity delay-100 duration-500 "
              : "opacity-0"
          }`}
          placeholder="PID"
        />
        <input
          class={`${
            isOnClick
              ? "h-12 -translate-x-10 rounded-lg border border-black opacity-100 transition-opacity delay-150 duration-700"
              : "opacity-0"
          }`}
          placeholder="Patient Name"
        />
        <button
          class={`${
            isOnClick
              ? "h-16 w-16 translate-x-24 rounded-lg bg-graygreen transition duration-500"
              : "h-16 w-16 -translate-x-40 rounded-lg bg-graygreen transition duration-500"
          }`}
          onClick={() => setIsOnClick(!isOnClick)}
        >
          <BiIcons.BiSearchAlt
            class={`${isOnClick ? "hidden" : "ml-2 text-5xl text-white"}`}
          />
          <IoIcons.IoCloseSharp
            class={`${isOnClick ? "ml-2 text-5xl text-white" : "hidden"}`}
          />
        </button>
      </div>

      <div class="col-start-6 place-self-center">
        <button
          class=" flex h-16 w-48 flex-row items-center justify-center rounded-lg bg-lightgreen"
          onClick={() => navigate("/create")}
        >
          <BsIcons.BsPersonFillAdd class="text-5xl text-white" />
          <h2 class="text-4xl text-white">Create</h2>
        </button>
      </div>

      <div class="col-span-5 col-start-2 row-span-5 row-start-2">
        <div class="flex justify-center">
          <table class="w-full table-auto">
            <thead>
              <tr class="h-[50px]">
                <th class="rounded-tl-lg bg-graygreen text-white">No.</th>
                <th class="border-l-2 bg-graygreen text-white">PID</th>
                <th class="border-l-2 bg-graygreen text-white">Patient Name</th>
                <th class="border-l-2 bg-graygreen text-white">Gender</th>
                <th class="border-x-2 bg-graygreen text-white">Birth</th>
                <th class="rounded-tr-lg bg-graygreen text-white">Sample</th>
              </tr>
            </thead>
            <tbody class="overflow-y-auto">
              <tr class="h-[50px]">
                <th class="border border-black bg-white">1</th>
                <th class="border border-black bg-white">1</th>
                <th class="border border-black bg-white">1</th>
                <th class="border border-black bg-white">1</th>
                <th class="border border-black bg-white">1</th>
                <th class="border border-black bg-white">1</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
