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

      <div class="col-span-8 row-span-3 flex flex-col items-center">
        <div class="flex h-5/6 w-full flex-col items-center">
          <table class="mt-5 w-4/5 table-auto">
            <caption class="mb-4 text-left text-5xl font-semibold">
              Variation Point
            </caption>
            <thead>
              <tr class="h-[50px]">
                <th class="rounded-tl-lg bg-graygreen text-white">No.</th>
                <th class="border-l-2 bg-graygreen text-white">File Name</th>
                <th class="border-l-2 bg-graygreen text-white">Status</th>
                <th class="border-x-2 bg-graygreen text-white">Process Rate</th>
                <th class="rounded-tr-lg bg-graygreen text-white">Operation</th>
              </tr>
            </thead>
            <tbody>
              <tr class="h-[50px]">
                <td class="border border-black bg-white text-center">1</td>
                <td class="border border-black bg-white text-center">70146</td>
                <td class="border border-black bg-white text-center">77701</td>
                <td class="border border-black bg-white text-center">72212</td>
                <td class="border border-black bg-white text-center">
                  AAAGAATACTTTTAC
                </td>
              </tr>
              <tr class="h-[50px]">
                <td class="border border-black bg-white text-center">1</td>
                <td class="border border-black bg-white text-center">70146</td>
                <td class="border border-black bg-white text-center">77701</td>
                <td class="border border-black bg-white text-center">72212</td>
                <td class="border border-black bg-white text-center">
                  AAAGAATACTTTTAC
                </td>
              </tr>
              <tr class="h-[50px]">
                <td class="border border-black bg-white text-center">1</td>
                <td class="border border-black bg-white text-center">70146</td>
                <td class="border border-black bg-white text-center">77701</td>
                <td class="border border-black bg-white text-center">72212</td>
                <td class="border border-black bg-white text-center">
                  AAAGAATACTTTTAC
                </td>
              </tr>
              <tr class="h-[50px]">
                <td class="border border-black bg-white text-center">1</td>
                <td class="border border-black bg-white text-center">70146</td>
                <td class="border border-black bg-white text-center">77701</td>
                <td class="border border-black bg-white text-center">72212</td>
                <td class="border border-black bg-white text-center">
                  AAAGAATACTTTTAC
                </td>
              </tr>
              <tr class="h-[50px]">
                <td class="border border-black bg-white text-center">1</td>
                <td class="border border-black bg-white text-center">70146</td>
                <td class="border border-black bg-white text-center">77701</td>
                <td class="border border-black bg-white text-center">72212</td>
                <td class="border border-black bg-white text-center">
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
