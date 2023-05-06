import React from "react";
import * as AiIcons from "react-icons/ai";

const Sample = () => {
  return (
    <div class="grid h-screen w-screen grid-cols-10 grid-rows-6 overflow-auto">
      <div class="col-span-3 row-span-2 flex h-full w-full items-center justify-center ">
        <div class="flex h-[90%] w-[90%] flex-col items-center justify-center rounded-lg bg-white drop-shadow-md ">
          <AiIcons.AiOutlineUser class="rounded-full border-2 p-2 text-[12rem]" />
          <label class="mt-2">Name:Apollo</label>
        </div>
      </div>

      <div class="row-star-3 col-span-3 col-start-1 row-span-4 flex h-full w-full flex-col items-center justify-center ">
        <div class="grid h-[80%] w-[90%] grid-cols-2 rounded-lg bg-white drop-shadow-md">
          <h1 class="col-span-2 ml-5 mt-5 text-4xl font-black">Information:</h1>
          <label class="text-center">ID:</label>
          <label class="font-normal text-slate-600">F123456789</label>
          <label class="text-center">Gender:</label>
          <label class="font-normal text-slate-600">Male</label>
          <label class="text-center">Age:</label>
          <label class="font-normal text-slate-600">20</label>
          <label class="text-center">Birth:</label>
          <label class="font-normal text-slate-600">2020-01-01</label>
          <label class="text-center">Phone:</label>
          <label class="font-normal text-slate-600">0912345678</label>
          <label class="text-center">Address:</label>
          <label class="font-normal text-slate-600">Taipei</label>

          <div class="col-start-2 flex w-full justify-end">
            <button class="mr-10 mt-2 h-10 w-28 rounded-md text-xl">
              Edit
            </button>
            <button class="mr-10 mt-2 h-10 w-28 rounded-md bg-red-600 text-xl">
              Delete
            </button>
          </div>
        </div>
      </div>

      <div class="col-span-7 col-start-4 row-span-6 row-start-1 flex h-full w-full items-center justify-center">
        <div class="flex h-[96.5%] w-[95%] flex-col items-center rounded-lg bg-white drop-shadow-md">
          <div class="flex w-full items-center justify-between">
            <label class="ml-5 mt-5 text-5xl font-black">Sample</label>
            <button class="mr-10 mt-5 flex h-12 w-52 flex-row items-center justify-center rounded-md">
              <AiIcons.AiFillFolderAdd class="text-4xl" />
              <h2 class="text-2xl">Add Sample</h2>
            </button>
          </div>
          <table class="w-[95%] table-auto">
            <thead>
              <tr>
                <th class="border-b-2">No.</th>
                <th class="border-b-2">SID</th>
                <th class="border-b-2">External Identifier</th>
                <th class="border-b-2">Accession Identifier</th>
                <th class="border-b-2">Type</th>
                <th class="border-b-2">Received Time</th>
                <th class="border-b-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th class="border-t-2">1</th>
                <th class="border-t-2">1234</th>
                <th class="border-t-2">A123456789</th>
                <th class="border-t-2">A123456777</th>
                <th class="border-t-2">Blood</th>
                <th class="border-t-2">2020-01-01</th>
                <th class="border-t-2">
                  <button class="h-10 w-20 rounded-md">View</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Sample;
