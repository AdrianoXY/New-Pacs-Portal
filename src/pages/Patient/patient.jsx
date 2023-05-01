import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io5";

const Patient = () => {
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
              ? "h-12 -translate-x-40 rounded-lg border-2 opacity-100 transition-opacity delay-100 duration-500 "
              : "opacity-0"
          }`}
          placeholder="PID"
        />
        <input
          class={`${
            isOnClick
              ? "h-12 -translate-x-10 rounded-lg border-2 opacity-100 transition-opacity delay-150 duration-700"
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
            class={`${isOnClick ? "hidden" : "ml-2 text-5xl "}`}
          />
          <IoIcons.IoCloseSharp
            class={`${isOnClick ? "ml-2 text-5xl" : "hidden"}`}
          />
        </button>
      </div>

      <div class="col-start-6 place-self-center">
        <button
          class=" flex h-16 w-48 flex-row items-center justify-center rounded-lg bg-lightgreen"
          onClick={() => navigate("/create")}
        >
          <BsIcons.BsPersonFillAdd class="text-5xl" />
          <h2 class="text-4xl">Create</h2>
        </button>
      </div>

      <div class="col-span-5 col-start-2 row-span-5 row-start-2 flex flex-col bg-white place-self-center w-[1500px] h-[750px] rounded-2xl drop-shadow-xl overflow-y-auto ">
        <div class="flex justify-center">
          <table class="w-[1400px] table-auto mt-5 overflow-y-scroll">
            <thead>
              <tr class="h-[50px]">
                <th class="text-slate-600 border-b-4">No.</th>
                <th class="text-slate-600 border-b-4">PID</th>
                <th class="text-slate-600 border-b-4">Patient Name</th>
                <th class="text-slate-600 border-b-4">Gender</th>
                <th class="text-slate-600 border-b-4">Birth</th>
                <th class="text-slate-600 border-b-4">Sample</th>
              </tr>
            </thead>
            <tbody class="overflow-y-auto">
              <tr class="h-[50px]">
                <th class="border-t-2 text-slate-600">1</th>
                <th class="border-t-2 text-slate-600">123456</th>
                <th class="border-t-2 text-slate-600">Apollo</th>
                <th class="border-t-2 text-slate-600">M</th>
                <th class="border-t-2 text-slate-600">2023/1/1</th>
                <th class="border-t-2 text-slate-600"><button>123</button></th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Patient;
