import React from "react";
// import { useNavigate } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div class="grid h-screen w-screen grid-cols-8 grid-rows-6 overflow-auto">
      <div class="col-span-4 row-span-3 flex items-center justify-center drop-shadow-lg">
        <div
          class="h-3/5 w-3/5 cursor-pointer rounded-xl bg-white transition-all duration-300 ease-in-out hover:h-[65%] hover:w-[65%] hover:transition-all hover:duration-300 hover:ease-in-out"
          onClick={() => navigate("/patient")}
        >
          <h1 class="ml-3 mt-5 text-5xl text-black">Patient</h1>
          <hr class="mx-3 mt-3 border-2 border-black " />
          <BsIcons.BsPeopleFill class="ml-2 mt-5 text-6xl xl:text-9xl" />
        </div>
      </div>

      <div class="col-span-4 row-span-3 flex items-center justify-center drop-shadow-lg">
        <div class="h-3/5 w-3/5 cursor-pointer rounded-xl bg-white transition-all duration-300 ease-in-out hover:h-[65%] hover:w-[65%] hover:transition-all hover:duration-300 hover:ease-in-out">
          <h1 class="ml-3 mt-5 text-5xl text-black">Sample</h1>
          <hr class="mx-3 mt-3 border-2 border-black " />
          <BsIcons.BsClipboardData class="ml-2 mt-5 text-6xl xl:text-9xl" />
        </div>
      </div>

      <div
        class="col-span-8 row-span-3 flex h-[88%] w-5/6 cursor-pointer flex-col items-center place-self-center rounded-2xl bg-white drop-shadow-lg transition-all duration-300 ease-in-out hover:h-[90%] hover:w-[85%] hover:transition-all hover:duration-300 hover:ease-in-out "
        onClick={() => navigate("/search")}
      >
        <div class="flex h-5/6 w-full flex-col items-center">
          <table class="mt-5 w-[90%] table-auto">
            <caption class="mb-4 text-left text-5xl font-black">
              Variation Point
            </caption>
            <thead>
              <tr>
                <th class="border-b-2">No.</th>
                <th class="border-b-2">File Name</th>
                <th class="border-b-2">Status</th>
                <th class="border-b-2">Process Rate</th>
                <th class="border-b-2">Operation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border-t-2 text-center">1</td>
                <td class="border-t-2 text-center">70146</td>
                <td class="border-t-2 text-center">77701</td>
                <td class="border-t-2 text-center">72212</td>
                <td class="border-t-2 text-center">AAAGAATACTTTTAC</td>
              </tr>
              <tr>
                <td class="border-t-2 text-center">2</td>
                <td class="border-t-2 text-center">70146</td>
                <td class="border-t-2 text-center">77701</td>
                <td class="border-t-2 text-center">72212</td>
                <td class="border-t-2 text-center">AAAGAATACTTTTAC</td>
              </tr>
              <tr>
                <td class="border-t-2 text-center">3</td>
                <td class="border-t-2 text-center">70146</td>
                <td class="border-t-2 text-center">77701</td>
                <td class="border-t-2 text-center">72212</td>
                <td class="border-t-2 text-center">AAAGAATACTTTTAC</td>
              </tr>
              <tr>
                <td class="border-t-2 text-center">4</td>
                <td class="border-t-2 text-center">70146</td>
                <td class="border-t-2 text-center">77701</td>
                <td class="border-t-2 text-center">72212</td>
                <td class="border-t-2 text-center">AAAGAATACTTTTAC</td>
              </tr>
              <tr>
                <td class="border-t-2 text-center">5</td>
                <td class="border-t-2 text-center">70146</td>
                <td class="border-t-2 text-center">77701</td>
                <td class="border-t-2 text-center">72212</td>
                <td class="border-t-2 text-center">AAAGAATACTTTTAC</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
