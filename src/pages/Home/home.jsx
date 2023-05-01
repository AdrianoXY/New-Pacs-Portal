import React from "react";
// import { useNavigate } from "react-router-dom";
import * as BsIcons from "react-icons/bs";

const Home = () => {
  // const navigate = useNavigate()

  return (
    <div class="grid h-screen w-screen grid-cols-8 grid-rows-6 overflow-auto">
      <div class="col-span-4 row-span-3 flex items-center justify-center drop-shadow-lg">
        <div class="h-3/5 w-3/5 rounded-xl bg-white">
          <h1 class="ml-3 mt-5 text-5xl text-black">Patient</h1>
          <hr class="mx-3 mt-3 border-2 border-black " />
          <BsIcons.BsPeopleFill class="ml-2 mt-5 text-9xl" />
        </div>
      </div>

      <div class="col-span-4 row-span-3 flex items-center justify-center drop-shadow-lg">
        <div class="h-3/5 w-3/5 rounded-xl bg-white">
          <h1 class="ml-3 mt-5 text-5xl text-black">Sample</h1>
          <hr class="mx-3 mt-3 border-2 border-black " />
          <BsIcons.BsClipboardData class="ml-2 mt-5 text-9xl" />
        </div>
      </div>

      <div class="col-span-8 row-span-3 flex flex-col items-center bg-white w-5/6 h-[450px] place-self-center rounded-2xl drop-shadow-lg ">
        <div class="flex h-5/6 w-full flex-col items-center">
          <table class="mt-5 w-[90%] table-auto">
            <caption class="mb-4 text-left text-5xl font-semibold">
              Variation Point
            </caption>
            <thead>
              <tr class="h-[50px]">
                <th class=" text-slate-600 border-b-2">No.</th>
                <th class=" text-slate-600 border-b-2">File Name</th>
                <th class=" text-slate-600 border-b-2">Status</th>
                <th class=" text-slate-600 border-b-2">Process Rate</th>
                <th class=" text-slate-600 border-b-2">Operation</th>
              </tr>
            </thead>
            <tbody>
              <tr class="h-[50px]">
                <td class="border-t-2 text-center text-slate-700">1</td>
                <td class="border-t-2 text-center text-slate-700">70146</td>
                <td class="border-t-2 text-center text-slate-700">77701</td>
                <td class="border-t-2 text-center text-slate-700">72212</td>
                <td class="border-t-2 text-center text-slate-700">
                  AAAGAATACTTTTAC
                </td>
              </tr>
              <tr class="h-[50px]">
                <td class="border-t-2 text-center text-slate-700">2</td>
                <td class="border-t-2 text-center text-slate-700">70146</td>
                <td class="border-t-2 text-center text-slate-700">77701</td>
                <td class="border-t-2 text-center text-slate-700">72212</td>
                <td class="border-t-2 text-center text-slate-700">
                  AAAGAATACTTTTAC
                </td>
              </tr>
              <tr class="h-[50px]">
                <td class="border-t-2 text-center text-slate-700">3</td>
                <td class="border-t-2 text-center text-slate-700">70146</td>
                <td class="border-t-2 text-center text-slate-700">77701</td>
                <td class="border-t-2 text-center text-slate-700">72212</td>
                <td class="border-t-2 text-center text-slate-700">
                  AAAGAATACTTTTAC
                </td>
              </tr>
              <tr class="h-[50px]">
                <td class="border-t-2 text-center text-slate-700">4</td>
                <td class="border-t-2 text-center text-slate-700">70146</td>
                <td class="border-t-2 text-center text-slate-700">77701</td>
                <td class="border-t-2 text-center text-slate-700">72212</td>
                <td class="border-t-2 text-center text-slate-700">
                  AAAGAATACTTTTAC
                </td>
              </tr>
              <tr class="h-[50px]">
                <td class="border-t-2 text-center text-slate-700">5</td>
                <td class="border-t-2 text-center text-slate-700">70146</td>
                <td class="border-t-2 text-center text-slate-700">77701</td>
                <td class="border-t-2 text-center text-slate-700">72212</td>
                <td class="border-t-2 text-center text-slate-700">
                  AAAGAATACTTTTAC
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
