import React, { useState } from "react";
import { useParams } from "react-router-dom";
import * as AiIcons from "react-icons/ai";

const Sample = () => {
  const { PID, SID } = useParams();

  return (
    <div class="grid h-screen w-screen grid-cols-10 grid-rows-8 overflow-auto">
      <div class="col-span-3 col-start-1 row-span-full row-start-1 flex h-full w-full flex-col items-center justify-center ">
        <div class=" flex h-[93%] w-[90%] items-center justify-center rounded-lg bg-white drop-shadow-md">
          <div class="grid h-[95%] w-[90%] grid-cols-2 grid-rows-11 ">
            <div class="col-span-2 row-span-2 grid grid-cols-3 grid-rows-6">
              <h1 class="col-span-3 flex text-2xl font-semibold">Infomation</h1>

              
                <label class='col-start-1 col-span-2 text-center'>SID:</label>
                <label>123</label>
              
              
                <label class='col-start-1 col-span-2 text-center'>External Identifier:</label>
                <label>456</label>
              
                <label class='col-start-1 col-span-2 text-center'>Accession Identifier:</label>
                <label>789</label>
              
                <label class='col-start-1 col-span-2 text-center'>Type:</label>
                <label>012</label>
              
                <label class='col-start-1 col-span-2 text-center'>Received Time:</label>
                <label>345</label>
              
            </div>
            <div class="col-span-2 row-span-3 grid grid-cols-3 grid-rows-7 border-t-2 h-[95%]">
              <h1 class="col-span-3 flex text-2xl font-semibold">Collection Details</h1>

              
                <label class='col-start-1 col-span-2 text-center'>Collection Time:</label>
                <label>123</label>
              
              
                <label class='col-start-1 col-span-2 text-center'>Duration:</label>
                <label>456</label>
              
                <label class='col-start-1 col-span-2 text-center'>Quantity:</label>
                <label>789</label>
              
                <label class='col-start-1 col-span-2 text-center'>Method:</label>
                <label>012</label>
              
                <label class='col-start-1 col-span-2 text-center'>Body Site:</label>
                <label>345</label>

                <label class='col-start-1 col-span-2 text-center'>Fasting Status:</label>
                <label>345</label>
              
            </div>
            <div class="col-span-2 row-span-2 grid grid-cols-3 grid-rows-4 border-t-2">
              <h1 class="col-span-3 flex text-2xl font-semibold">Processing Details</h1>

              
                <label class='col-start-1 col-span-2 text-center'>Procedure:</label>
                <label>123</label>
              
              
                <label class='col-start-1 col-span-2 text-center'>Processing Time:</label>
                <label>456</label>
              
                <label class='col-start-1 col-span-2 text-center'>Description:</label>
                <label>789</label>
              
            </div>
            <div class="col-span-2 row-span-2 grid grid-cols-3 grid-rows-6 border-t-2">
              <h1 class="col-span-3 flex text-2xl font-semibold">Container</h1>

              
                <label class='col-start-1 col-span-2 text-center'>Identifier:</label>
                <label>123</label>
              
              
                <label class='col-start-1 col-span-2 text-center'>Type:</label>
                <label>456</label>
              
                <label class='col-start-1 col-span-2 text-center'>Capacity:</label>
                <label>789</label>
              
                <label class='col-start-1 col-span-2 text-center'>Specimen Quantity:</label>
                <label>012</label>
              
                <label class='col-start-1 col-span-2 text-center'>Description:</label>
                <label>345</label>
              
            </div>
            <div class="col-span-2 mt-10 flex w-full justify-center">
              <button class="mr-10 mt-2 h-10 w-28 rounded-md bg-red-600 text-xl">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-7 col-start-4 row-span-6 row-start-1 flex h-full w-full items-center justify-center">
        <div class="flex h-[96.5%] w-[95%] flex-col items-center rounded-lg bg-white drop-shadow-md">
          <div class="flex w-full items-center justify-between">
            <label class="ml-5 mt-5 text-5xl font-black">File</label>
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
