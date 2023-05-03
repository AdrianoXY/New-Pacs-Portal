import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io5";

const Patient = () => {
  const [isOnClick, setIsOnClick] = useState(false);
  const navigate = useNavigate();

  return (
    <div class="grid h-screen w-screen grid-cols-7 grid-rows-6 overflow-auto">
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
              ? "h-16 w-16 translate-x-16 rounded-lg bg-graygreen transition duration-500"
              : "h-16 w-16 -translate-x-72 rounded-lg bg-graygreen transition duration-500"
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

      <div class="col-span-7 col-start-1 row-span-5 row-start-2 flex h-[95%] w-[85%] flex-col place-self-center rounded-2xl bg-white drop-shadow-xl ">
        <div class="flex justify-center">
          <table class="mt-5 w-[1400px] table-auto">
            <thead>
              <tr>
                <th class=" border-b-4">No.</th>
                <th class=" border-b-4">PID</th>
                <th class=" border-b-4">Patient Name</th>
                <th class=" border-b-4">Gender</th>
                <th class=" border-b-4">Birth</th>
                <th class=" border-b-4">Sample</th>
              </tr>
            </thead>
            <tbody class="overflow-y-auto">
              <tr>
                <th class="border-t-2 ">1</th>
                <th class="border-t-2 ">123456</th>
                <th class="border-t-2 ">Apollo</th>
                <th class="border-t-2 ">M</th>
                <th class="border-t-2 ">2023/1/1</th>
                <th class="border-t-2 ">
                  <button>123</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Patient;
