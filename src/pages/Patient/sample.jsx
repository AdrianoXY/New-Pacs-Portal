import React, { useState } from "react";
import { useParams } from "react-router-dom";
import * as AiIcons from "react-icons/ai";

const Sample = () => {
  const { PID, SID } = useParams();

  return (
    <div class="grid h-screen w-screen grid-cols-10 grid-rows-9 overflow-auto">
      <div class="col-span-3 row-span-2 flex h-[90%] w-[90%] items-center justify-center place-self-center rounded-md bg-white drop-shadow-md">
        <div class="col-span-2 row-span-3 grid h-[90%] w-[90%] grid-cols-3 grid-rows-6">
          <h1 class="col-span-3 flex text-2xl font-semibold">Infomation</h1>

          <label class="col-span-2 col-start-1 text-center">SID:</label>
          <label>123</label>

          <label class="col-span-2 col-start-1 text-center">
            External Identifier:
          </label>
          <label>456</label>

          <label class="col-span-2 col-start-1 text-center">
            Accession Identifier:
          </label>
          <label>789</label>

          <label class="col-span-2 col-start-1 text-center">Type:</label>
          <label>012</label>

          <label class="col-span-2 col-start-1 text-center">
            Received Time:
          </label>
          <label>345</label>
        </div>
      </div>

      <div class="col-span-3 row-span-3 row-start-3 flex h-[90%] w-[90%] items-center justify-center place-self-center rounded-md bg-white drop-shadow-md">
        <div class="col-span-2 row-span-3 grid h-[90%] w-[90%] grid-cols-3 grid-rows-7">
          <h1 class="col-span-3 flex text-2xl font-semibold">
            Collection Details
          </h1>

          <label class="col-span-2 col-start-1 text-center">
            Collection Time:
          </label>
          <label>123</label>

          <label class="col-span-2 col-start-1 text-center">Duration:</label>
          <label>456</label>

          <label class="col-span-2 col-start-1 text-center">Quantity:</label>
          <label>789</label>

          <label class="col-span-2 col-start-1 text-center">Method:</label>
          <label>012</label>

          <label class="col-span-2 col-start-1 text-center">Body Site:</label>
          <label>345</label>

          <label class="col-span-2 col-start-1 text-center">
            Fasting Status:
          </label>
          <label>345</label>
        </div>
      </div>

      <div class="col-span-3 row-span-2 row-start-6 flex h-[90%] w-[90%] items-center justify-center place-self-center rounded-md bg-white drop-shadow-md">
        <div class="col-span-2 row-span-2 grid h-[90%] w-[90%] grid-cols-3 grid-rows-4">
          <h1 class="col-span-3 flex text-2xl font-semibold">
            Processing Details
          </h1>

          <label class="col-span-2 col-start-1 text-center">Procedure:</label>
          <label>123</label>

          <label class="col-span-2 col-start-1 text-center">
            Processing Time:
          </label>
          <label>456</label>

          <label class="col-span-2 col-start-1 text-center">Description:</label>
          <label>789</label>
        </div>
      </div>

      <div class="col-span-3 row-span-2 row-start-8 flex h-[90%] w-[90%] items-center justify-center place-self-center rounded-md bg-white drop-shadow-md">
        <div class="col-span-2 row-span-3 grid h-[90%] w-[90%] grid-cols-3 grid-rows-6">
          <h1 class="col-span-3 flex text-2xl font-semibold">Container</h1>

          <label class="col-span-2 col-start-1 text-center">Identifier:</label>
          <label>123</label>

          <label class="col-span-2 col-start-1 text-center">Type:</label>
          <label>456</label>

          <label class="col-span-2 col-start-1 text-center">Capacity:</label>
          <label>789</label>

          <label class="col-span-2 col-start-1 text-center">
            Specimen Quantity:
          </label>
          <label>012</label>

          <label class="col-span-2 col-start-1 text-center">Description:</label>
          <label>345</label>
        </div>
      </div>

      {/* <div class="col-span-3 row-start-9 col-start-1 mt-10 flex w-full justify-center">
        <button class="mr-10 mt-2 h-10 w-28 rounded-md bg-red-600 text-xl">
          Delete
        </button>
      </div> */}

      <div class="col-span-7 w-[95%]">
        <div class="flex w-full items-center justify-between">
          <label class="ml-5 mt-5 text-5xl font-black">File</label>
          <div class="flex flex-row">
        <button class="mr-10 h-10 w-28 rounded-md bg-red-600 text-xl">
          Delete
        </button>
        <button class="flex flex-row h-10 w-40 items-center justify-center rounded-md">
            <AiIcons.AiFillFolderAdd class="text-4xl" />
            <h2 class="text-2xl">Edit File</h2>
          </button>
      </div>
        </div>
      </div>

      <div class="col-span-7 col-start-4 row-span-2">
        <table class="w-[98%] table-auto rounded-md bg-white drop-shadow-md">
          <caption class="text-left text-2xl">
            Sequencing raw data(.fastq)
          </caption>
          <thead>
            <tr>
              <th class="border-b-2">No.</th>
              <th class="border-b-2">File Name</th>
              <th class="border-b-2">File Size</th>
              <th class="border-b-2">State</th>
              <th class="border-b-2">Processing Progress</th>
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
              <th class="border-t-2">
                <button class="h-10 w-20 rounded-md">View</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-span-7 col-start-4 row-span-2">
        <table class="w-[98%] table-auto rounded-md bg-white drop-shadow-md">
          <caption class="text-left text-2xl">Alignment(.bam,.bai)</caption>
          <thead>
            <tr>
              <th class="border-b-2">No.</th>
              <th class="border-b-2">File Name</th>
              <th class="border-b-2">File Size</th>
              <th class="border-b-2">State</th>
              <th class="border-b-2">Processing Progress</th>
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
              <th class="border-t-2">
                <button class="h-10 w-20 rounded-md">View</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-span-7 col-start-4 row-span-2">
        <table class="w-[98%] table-auto rounded-md bg-white drop-shadow-md">
          <caption class="text-left text-2xl">
            Variant calling (.vcf, .tbi, .idx)
          </caption>
          <thead>
            <tr>
              <th class="border-b-2">No.</th>
              <th class="border-b-2">File Name</th>
              <th class="border-b-2">File Size</th>
              <th class="border-b-2">State</th>
              <th class="border-b-2">Processing Progress</th>
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
              <th class="border-t-2">
                <button class="h-10 w-20 rounded-md">View</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-span-7 col-start-4 row-span-2">
        <table class="w-[98%] table-auto rounded-md bg-white drop-shadow-md">
          <caption class="text-left text-2xl">
            Annotation (.csvv, .xlsx)
          </caption>
          <thead>
            <tr>
              <th class="border-b-2">No.</th>
              <th class="border-b-2">File Name</th>
              <th class="border-b-2">File Size</th>
              <th class="border-b-2">State</th>
              <th class="border-b-2">Processing Progress</th>
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
              <th class="border-t-2">
                <button class="h-10 w-20 rounded-md">View</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sample;