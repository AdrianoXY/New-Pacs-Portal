import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Create from "./create";
import * as BiIcons from "react-icons/bi";
import * as BsIcons from "react-icons/bs";
import * as IoIcons from "react-icons/io5";

const Patient = () => {
  const [isOnClick, setIsOnClick] = useState(false);
  const [ButtonPop, setButtonPop] = useState(false);
  const navigate = useNavigate();

  return (
    <div class="grid h-screen w-screen grid-cols-7 grid-rows-6 overflow-auto">
      <div class="flex-rows col-start-2 flex w-full items-center justify-center">
        <input class="h-12 border-2 " placeholder="PID" />
      </div>
      <div class="flex-rows col-start-4 flex w-full items-center justify-center">
        <input class="h-12 border-2" placeholder="Patient Name" />
      </div>

      <div class="col-start-6 place-self-center">
        <button
          class=" flex h-16 w-48 flex-row items-center justify-center"
          onClick={() => setButtonPop(true)}
        >
          <BsIcons.BsPersonFillAdd class="text-5xl" />
          <h2 class="text-4xl">Create</h2>
        </button>
      </div>

      <Create trigger={ButtonPop} setButtonPop={setButtonPop} />

      <div class="col-span-7 col-start-1 row-span-5 row-start-2 flex h-[95%] w-[85%] flex-col place-self-center rounded-2xl bg-white drop-shadow-xl ">
        <div class="flex justify-center">
          <table class="mt-5 w-[90%] table-auto">
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
                  <button class="h-10 w-32" onClick={() => navigate("/sample")}>
                    Sample
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

export default Patient;
