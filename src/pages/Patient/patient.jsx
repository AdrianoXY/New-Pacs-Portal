import React, { useState } from "react";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io5";

const Dashboard = () => {
  const [isOnClick, setIsOnClick] = useState(false);


  return (
    <div class="overflow-auto h-[977px] grid w-full grid-cols-7 grid-rows-6">
      <div
        class={`${
          isOnClick
            ? "col-span-3 col-start-3 flex w-full items-center transition-transform ease-in"
            : "col-start-4 place-self-center ease-out"
        }`}
      >
        <input
          class={`${
            isOnClick ? "h-12 rounded-lg border border-black " : "hidden"
          }`}
          placeholder="PID"
        />
        <input
          class={`${
            isOnClick ? "ml-28 h-12 rounded-lg border border-black" : "hidden"
          }`}
          placeholder="Patient Name"
        />
        <button
          class={`${
            isOnClick ? "h-16 w-16 rounded-lg bg-stone-600 ml-24" : "h-16 w-16 rounded-lg bg-stone-600"
          }`}
          onClick={() => setIsOnClick(!isOnClick)}
        >
          <BiIcons.BiSearchAlt class={`${isOnClick ? 'hidden' : 'ml-2 text-5xl text-white'}`} />
          <IoIcons.IoCloseSharp class={`${isOnClick ? 'ml-2 text-5xl text-white' :'hidden' }`} />
        </button>
      </div>

      <div class="col-start-6 place-self-center">
        <button class=" flex h-16 w-48 flex-row items-center justify-center rounded-lg bg-stone-600">
          <BsIcons.BsPersonFillAdd class="text-5xl text-white" />
          <h2 class="text-4xl text-white">Create</h2>
        </button>
      </div>

      <div class="col-span-5 col-start-2 row-span-5 row-start-2">
        <div class="flex justify-center">
          <table class="w-full table-auto">
            <thead>
              <tr class="h-[50px]">
                <th class="rounded-tl-lg bg-stone-500">No.</th>
                <th class="border-l-2 bg-stone-500">PID</th>
                <th class="border-l-2 bg-stone-500">Patient Name</th>
                <th class="border-l-2 bg-stone-500">Gender</th>
                <th class="border-x-2 bg-stone-500">Birth</th>
                <th class="rounded-tr-lg bg-stone-500">Sample</th>
              </tr>
            </thead>
            <tbody class="overflow-y-auto">
              <tr class="h-[50px]">
                <th class="bg-stone-200">1</th>
                <th class="bg-stone-200">1</th>
                <th class="bg-stone-200">1</th>
                <th class="bg-stone-200">1</th>
                <th class="bg-stone-200">1</th>
                <th class="bg-stone-200">1</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
