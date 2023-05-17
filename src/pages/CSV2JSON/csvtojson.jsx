import React, { useState, useEffect } from "react";

const Manage = () => {
  const [progressPercentage, setProgressPercentage] = useState(71);

  return (
    <div class="grid h-screen w-screen grid-cols-9 grid-rows-6 overflow-auto">
      <div class="col-start-2 place-self-center">
        <input class="h-12 w-52 rounded-lg border-2" placeholder="PID" />
      </div>

      <div class="col-start-4 place-self-center">
        <input class="h-12 w-52 rounded-lg border-2" placeholder="SID" />
      </div>

      <div class="col-start-6 place-self-center">
        <input
          class="h-12 w-52 rounded-lg border-2"
          placeholder="Sequence Type"
        />
      </div>

      <div class="col-start-8 place-self-center">
        <input
          class="h-12 w-52 rounded-lg border-2"
          placeholder="Analysis Type"
        />
      </div>

      <div class="col-span-9 col-start-1 row-span-5 row-start-2 flex h-[95%] w-[95%] flex-col place-self-center rounded-2xl bg-white drop-shadow-xl ">
        <div class="flex justify-center">
          <table class="mt-5 w-[95%] table-auto">
            <thead>
              <tr>
                <th class=" border-b-4">No.</th>
                <th class=" border-b-4">FileName</th>
                <th class=" border-b-4">Status</th>
                <th class=" border-b-4">Process Rate(complete/total)</th>
                <th class=" border-b-4">Operation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th class="border-t-2 ">1</th>
                <th class="border-t-2 ">123456</th>
                <th class="border-t-2 ">72212</th>
                <th class="border-t-2 ">
                  <div class='w-full flex items-center justify-center'>
                  <div className="h-3 w-52 bg-gray-300 rounded-md ">
                    <div
                      style={{ width: `${progressPercentage}%` }}
                      className={`h-full rounded-md ${
                        progressPercentage < 70 ? "bg-red-600" : "bg-green-600"
                      }`}
                    />
                  </div>
                  </div>
                </th>
                <th class="border-t-2 ">DNA</th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Manage;
