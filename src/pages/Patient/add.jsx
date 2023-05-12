import React from "react";
import * as AiIcons from "react-icons/ai";

const Add = (props) => {
  return props.trigger ? (
    <div class="fixed z-10 grid h-screen w-screen grid-cols-9 grid-rows-6 overflow-auto bg-gray-600 bg-opacity-70">
      <form class="col-span-5 col-start-3 row-span-4 row-start-2 grid h-[95%] w-[95%] grid-cols-7 grid-rows-6 place-self-center rounded-md bg-white drop-shadow-lg animate-fadein">
        <div class="col-span-2 flex items-center justify-center">
          <h1 class="text-4xl font-bold text-green-600">Add Sample</h1>
        </div>

        <div class="col-start-7 flex justify-end">
          <AiIcons.AiOutlineClose
            class="cursor-pointer text-7xl"
            onClick={() => props.setAdd(false)}
          />
        </div>

        <div class="grid-rows-9 scrollbar col-span-7 row-span-4 grid h-[93%] grid-cols-9 overflow-y-auto border-t-2">
          <div class="col-span-8 col-start-2 row-span-2 row-start-1 grid h-full grid-cols-3 grid-rows-3">
            <h1 class="col-span-3 flex items-center text-2xl font-semibold">
              Sample Info
            </h1>
            <div class="flex flex-col">
              <label class="">PID</label>
              <input type="text" />
            </div>
            <div class="flex flex-col">
              <label class="">External Identifier</label>
              <input type="text" />
            </div>
            <div class="flex flex-col">
              <label class="">Accession Identifier</label>
              <input type="text" />
            </div>
            <div class="flex flex-col">
              <label class="">Type</label>
              <input type="text" />
            </div>
            <div class="flex flex-col">
              <label class="">Received Time</label>
              <input type="text" />
            </div>
          </div>

          <div class="col-span-8 col-start-2 row-span-2 row-start-3 grid h-full grid-cols-3 grid-rows-3">
            <h1 class="col-span-3 flex items-center text-2xl font-semibold">
              Collection Details
            </h1>
            <div class="flex flex-col">
              <label class="">Collection Time</label>
              <input type="text" />
            </div>
            <div class="flex flex-col">
              <label class="">Duration</label>
              <input type="text" />
            </div>
            <div class="flex flex-col">
              <label class="">Quantity</label>
              <input type="text" />
            </div>
            <div class="flex flex-col">
              <label class="">Method</label>
              <input type="text" />
            </div>
            <div class="flex flex-col">
              <label class="">Body Site</label>
              <input type="text" />
            </div>
            <div class="flex flex-col">
              <label class="">Fasting Status</label>
              <input type="text" />
            </div>
          </div>

          <div class="col-span-8 col-start-2 row-span-2 row-start-5 grid h-full grid-cols-3 grid-rows-3">
            <h1 class="col-span-3 flex items-center text-2xl font-semibold">
              Collection Details
            </h1>
            <div class="flex flex-col">
              <label class="">Collection Time</label>
              <input type="text" />
            </div>
            <div class="flex flex-col">
              <label class="">Duration</label>
              <input type="text" />
            </div>
            <div class="flex flex-col">
              <label class="">Quantity</label>
              <input type="text" />
            </div>
            <div class="flex flex-col">
              <label class="">Method</label>
              <input type="text" />
            </div>
            <div class="flex flex-col">
              <label class="">Body Site</label>
              <input type="text" />
            </div>
            <div class="flex flex-col">
              <label class="">Fasting Status</label>
              <input type="text" />
            </div>
          </div>
          <div class="col-span-8 col-start-2 row-span-2 row-start-7 grid h-full grid-cols-3 grid-rows-3">
            <h1 class="col-span-3 flex items-center text-2xl font-semibold">
              Collection Details
            </h1>
            <div class="flex flex-col">
              <label class="">Collection Time</label>
              <input type="text" />
            </div>
            <div class="flex flex-col">
              <label class="">Duration</label>
              <input type="text" />
            </div>
            <div class="flex flex-col">
              <label class="">Quantity</label>
              <input type="text" />
            </div>
            <div class="flex flex-col">
              <label class="">Method</label>
              <input type="text" />
            </div>
            <div class="flex flex-col">
              <label class="">Body Site</label>
              <input type="text" />
            </div>
            <div class="flex flex-col">
              <label class="">Fasting Status</label>
              <input type="text" />
            </div>
          </div>

          <div class="row-start-9 col-span-7 col-start-2 row-span-2 mt-7 h-full">
            <input type="file" multiple />
          </div>
        </div>
        <div class='col-start-3 col-span-3 flex justify-center items-center'><button class='h-12 w-28 text-2xl font-semibold'>Add</button></div>
      </form>
    </div>
  ) : (
    ""
  );
};

export default Add;
