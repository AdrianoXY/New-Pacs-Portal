import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as BiIcons from "react-icons/bi";
import * as IoIcons from "react-icons/io5";

const Search = () => {
  const [isOnClick, setIsOnClick] = useState(false);

  return (
    <div class="grid h-screen w-screen grid-cols-9 grid-rows-6 overflow-auto">
      <div class="col-span-2 col-start-2 flex items-center">
        <input
          class={`${
            isOnClick
              ? "h-12  rounded-lg border-2 opacity-100 transition-opacity delay-100 duration-500 "
              : "opacity-0"
          }`}
          placeholder="PID"
        />
      </div>

      <div class="col-span-2 flex items-center">
        <input
          class={`${
            isOnClick
              ? "h-12 rounded-lg border-2 opacity-100 transition-opacity delay-150 duration-700"
              : "opacity-0"
          }`}
          placeholder="Chromosome"
        />
      </div>

      <div class="col-span-2 flex items-center">
        <span
          class={`${
            isOnClick
              ? "opacity-100 transition-opacity delay-200 duration-700"
              : "opacity-0"
          }`}
        >
          Window Range
        </span>
        <input
          type="number"
          class={`${
            isOnClick
              ? "h-12 rounded-lg border-2 opacity-100 transition-opacity delay-200 duration-700"
              : "opacity-0"
          }`}
          placeholder="Min"
        />
        <div
          class={`${
            isOnClick
              ? "text-4xl opacity-100 transition-opacity delay-200 duration-700"
              : "opacity-0"
          }`}
        >
          -
        </div>
        <input
          type="number"
          class={`${
            isOnClick
              ? "h-12 rounded-lg border-2 opacity-100 transition-opacity delay-200 duration-700"
              : "opacity-0"
          }`}
          placeholder="Max"
        />
      </div>

      <div class="flex items-center justify-end">
        <button
          class={`${
            isOnClick
              ? "h-16 w-16 rounded-lg bg-graygreen transition duration-500 hover:bg-logbg"
              : "h-16 w-16 -translate-x-[40rem] rounded-lg bg-graygreen transition duration-500 hover:bg-logbg"
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

      <div class="col-span-9 col-start-1 row-span-5 row-start-2 flex h-[95%] w-[95%] flex-col place-self-center rounded-2xl bg-white drop-shadow-xl ">
        <div class="flex justify-center">
          <table class="mt-5 w-[95%] table-auto">
            <thead>
              <tr>
                <th class=" border-b-4">No.</th>
                <th class=" border-b-4">PID</th>
                <th class=" border-b-4">Specimen</th>
                <th class=" border-b-4">Coordinate System</th>
                <th class=" border-b-4">Sequence</th>
                <th class=" border-b-4">Genome Build</th>
                <th class=" border-b-4">Window Range</th>
                <th class=" border-b-4">Observed</th>
                <th class=" border-b-4">Sequence Data</th>
                <th class=" border-b-4">Detail</th>
              </tr>
            </thead>
            <tbody class="overflow-y-auto">
              <tr>
                <th class="border-t-2 ">1</th>
                <th class="border-t-2 ">123456</th>
                <th class="border-t-2 ">72212</th>
                <th class="border-t-2 ">1</th>
                <th class="border-t-2 ">DNA</th>
                <th class="border-t-2 ">hg19</th>
                <th class="border-t-2 ">
                  chromosome1:
                  <br />
                  129275~129295
                </th>
                <th class="border-t-2 ">AAAAGAATACACTTTT</th>
                <th class="border-t-2 ">
                  <button class="h-8 w-20 rounded-md">View</button>
                </th>
                <th class="border-t-2 ">
                  <button class="h-8 w-10 rounded-md">
                    <IoIcons.IoShareOutline class="ml-2 text-2xl font-bold" />
                  </button>
                </th>
              </tr>
              <tr>
                <th class="border-t-2 ">1</th>
                <th class="border-t-2 ">123456</th>
                <th class="border-t-2 ">72212</th>
                <th class="border-t-2 ">1</th>
                <th class="border-t-2 ">DNA</th>
                <th class="border-t-2 ">hg19</th>
                <th class="border-t-2 ">
                  chromosome1:
                  <br />
                  129275~129295
                </th>
                <th class="border-t-2 ">AAAAGAATACACTTTT</th>
                <th class="border-t-2 ">
                  <button class="h-8 w-20 rounded-md">View</button>
                </th>
                <th class="border-t-2 ">
                  <button class="h-8 w-10 rounded-md">
                    <IoIcons.IoShareOutline class="ml-2 text-2xl font-bold" />
                  </button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Search;
