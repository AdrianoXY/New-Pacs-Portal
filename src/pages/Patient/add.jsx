import React from "react";
import * as AiIcons from "react-icons/ai";

const Add = (props) => {
  return props.trigger ? (
    <div class="fixed z-10 grid h-screen w-screen grid-cols-9 grid-rows-6 overflow-auto bg-gray-600 bg-opacity-70">
      <form class="col-span-5 col-start-3 row-span-4 row-start-2 grid h-[95%] w-[95%] animate-fadein grid-cols-7 grid-rows-6 place-self-center rounded-md bg-white drop-shadow-lg">
        <div class="col-span-2 flex items-center justify-center">
          <h1 class="text-4xl font-bold text-green-600">Add Sample</h1>
        </div>

        <div class="col-start-7 flex justify-end">
          <AiIcons.AiOutlineClose
            class="cursor-pointer text-7xl"
            onClick={() => props.setAdd(false)}
          />
        </div>

        <div class="scrollbar col-span-7 row-span-4 grid h-[93%] grid-cols-9 overflow-y-auto border-t-2">
          <div class="col-span-8 col-start-2 row-span-2 row-start-1 grid h-full grid-cols-3 grid-rows-3">
            <h1 class="col-span-3 flex items-center text-2xl font-semibold">
              Sample Info
            </h1>
            <div class="flex flex-col">
              <label class="">PID</label>
              <input class="w-52" type="text" />
            </div>
            <div class="flex flex-col">
              <label class="">External Identifier</label>
              <input class="w-52" type="text" />
            </div>
            <div class="flex flex-col">
              <label class="">Accession Identifier</label>
              <input class="w-52" type="text" />
            </div>
            <div class="flex flex-col">
              <label class="">Type</label>
              <input class="w-52" type="text" />
            </div>
            <div class="flex flex-col">
              <label class="">Received Time</label>
              <input class="w-52" type="text" />
            </div>
          </div>

          <div class="col-span-8 col-start-2 row-span-2 row-start-3 grid h-full grid-cols-3 grid-rows-3">
            <h1 class="col-span-3 flex items-center text-2xl font-semibold">
              Collection Details
            </h1>
            <div class="flex flex-col">
              <label class="">Collection Time</label>
              <input class="w-52" type="text" />
            </div>
            <div class="flex flex-col">
              <label class="">Duration</label>
              <input class="w-52" type="text" />
            </div>
            <div class="flex flex-col">
              <label class="">Quantity</label>
              <input class="w-52" type="text" />
            </div>
            <div class="flex flex-col">
              <label class="">Method</label>
              <input class="w-52" type="text" />
            </div>
            <div class="flex flex-col">
              <label class="">Body Site</label>
              <input class="w-52" type="text" />
            </div>
            <div class="flex flex-col">
              <label class="">Fasting Status</label>
              <input class="w-52" type="text" />
            </div>
          </div>

          <div class="col-span-8 col-start-2 row-span-2 row-start-5 grid h-full grid-cols-3 grid-rows-3">
            <h1 class="col-span-3 flex items-center text-2xl font-semibold">
              Collection Details
            </h1>
            <div class="flex flex-col">
              <label class="">Collection Time</label>
              <input class="w-52" type="text" />
            </div>
            <div class="flex flex-col">
              <label class="">Duration</label>
              <input class="w-52" type="text" />
            </div>
            <div class="flex flex-col">
              <label class="">Quantity</label>
              <input class="w-52" type="text" />
            </div>
            <div class="flex flex-col">
              <label class="">Method</label>
              <input class="w-52" type="text" />
            </div>
            <div class="flex flex-col">
              <label class="">Body Site</label>
              <input class="w-52" type="text" />
            </div>
            <div class="flex flex-col">
              <label class="">Fasting Status</label>
              <input class="w-52" type="text" />
            </div>
          </div>
          <div class="col-span-8 col-start-2 row-span-2 row-start-7 grid h-full grid-cols-3 grid-rows-3">
            <h1 class="col-span-3 flex items-center text-2xl font-semibold">
              Collection Details
            </h1>
            <div class="flex flex-col">
              <label class="">Collection Time</label>
              <input class="w-52" type="text" />
            </div>
            <div class="flex flex-col">
              <label class="">Duration</label>
              <input class="w-52" type="text" />
            </div>
            <div class="flex flex-col">
              <label class="">Quantity</label>
              <input class="w-52" type="text" />
            </div>
            <div class="flex flex-col">
              <label class="">Method</label>
              <input class="w-52" type="text" />
            </div>
            <div class="flex flex-col">
              <label class="">Body Site</label>
              <input class="w-52" type="text" />
            </div>
            <div class="flex flex-col">
              <label class="">Fasting Status</label>
              <input class="w-52" type="text" />
            </div>
          </div>

          <div class="col-span-7 col-start-2 row-span-2 row-start-9 mt-7 h-full">
            <label
              for="dropzone-file"
              class="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100"
            >
              <div class="flex flex-col items-center justify-center pb-6 pt-5">
                <AiIcons.AiOutlineCloudUpload class="mb-3 h-10 w-10 text-gray-400" />
                <p class="mb-2 text-sm text-gray-500">
                  <span class="font-semibold">Click to upload</span> or drag and
                  drop
                </p>
              </div>
              <input id="dropzone-file" type="file" class="hidden" multiple />
            </label>
          </div>
        </div>
        <div class="col-span-3 col-start-3 flex items-center justify-center">
          <button class="h-12 w-28 text-2xl font-semibold">Add</button>
        </div>
      </form>
    </div>
  ) : (
    ""
  );
};

export default Add;
