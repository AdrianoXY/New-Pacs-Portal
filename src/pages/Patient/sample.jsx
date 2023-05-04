import React from "react";
import * as AiIcons from "react-icons/ai";

const Sample = () => {
  return (
    <div class="grid h-screen w-screen grid-rows-2 overflow-auto">
      <div class="flex items-center justify-center">
        <div class="h-4/5 w-3/4 rounded-md bg-white drop-shadow-md">
          <h1 class="ml-2 mt-2 text-5xl font-black">Information</h1>
          <div class="grid h-3/4 grid-cols-2">
            <div class="flex flex-col items-center justify-center">
              <AiIcons.AiOutlineUser class="rounded-full border-2 p-2 text-[12rem]" />
              <label class="mt-2">Name:Apollo</label>
            </div>
            <div class="grid grid-cols-2">
              <label>ID:</label>
              <label class="font-normal text-slate-600">F123456789</label>
              <label>Gender:</label>
              <label class="font-normal text-slate-600">Male</label>
              <label>Age:</label>
              <label class="font-normal text-slate-600">20</label>
              <label>Birth:</label>
              <label class="font-normal text-slate-600">2020-01-01</label>
              <label>Phone:</label>
              <label class="font-normal text-slate-600">0912345678</label>
              <label>Address:</label>
              <label class="font-normal text-slate-600">Taipei</label>
            </div> 
            <button class="col-start-2 mr-10 mt-2 h-10 w-28 place-self-end rounded-md text-2xl">
              Edit
            </button>
          </div>
        </div>
      </div>

      <div class="flex h-[93%] w-[90%] place-self-center overflow-y-auto rounded-2xl bg-white drop-shadow-xl">
        <div class="flex h-5/6 w-full flex-col items-center">
        <div class='w-full flex items-center justify-between'>
              <label class='ml-5 mt-5 text-5xl font-black'>Sample</label>
              <button class='flex flex-row items-center justify-center mr-10 mt-5 h-12 w-52 rounded-md'><AiIcons.AiFillFolderAdd class='text-4xl' /><h2 class='text-2xl'>Add Sample</h2></button>
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
                  <button class='h-10 w-20 rounded-md'>View</button>
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
