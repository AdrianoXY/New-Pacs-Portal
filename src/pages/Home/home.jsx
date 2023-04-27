import React from "react";
// import { useNavigate } from "react-router-dom";
import * as BsIcons from "react-icons/bs";

const Home = () => {
  // const navigate = useNavigate()

  return (
    <div class="grid h-[977px] w-full grid-cols-8 grid-rows-6 overflow-auto">
      <div class="col-span-3 row-span-3 flex items-center justify-center drop-shadow-lg">
        <div class="ml-52 h-3/5 w-full rounded-xl bg-stone-300">
          <h1 class="ml-3 mt-5 text-5xl text-black">Patient</h1>
          <hr class="mx-3 mt-3 border-2 border-black "></hr>
          <BsIcons.BsPeopleFill class="ml-2 mt-5 text-9xl" />
        </div>
      </div>

      <div class="col-span-5 row-span-3 flex justify-center">
        <div class="mr-20 flex h-auto w-full justify-end self-start">
          <table class="mt-24 w-4/5 table-auto drop-shadow-lg">
            <thead>
              <tr class="h-[50px]">
                <th class="rounded-tl-lg bg-stone-500">No.</th>
                <th class="border-l-2 bg-stone-500 ">ID</th>
                <th class="border-l-2 bg-stone-500 ">PID</th>
                <th class="border-x-2 bg-stone-500 ">Specimen</th>
                <th class="rounded-tr-lg bg-stone-500">Obserbed</th>
              </tr>
            </thead>
            <tbody>
              <tr class="h-[50px]">
                <td class="border border-black bg-stone-200 text-center">1</td>
                <td class="border border-black bg-stone-200 text-center">
                  70146
                </td>
                <td class="border border-black bg-stone-200 text-center">
                  77701
                </td>
                <td class="border border-black bg-stone-200 text-center">
                  72212
                </td>
                <td class="border border-black bg-stone-200 text-center">
                  AAAGAATACTTTTAC
                </td>
              </tr>
              <tr class="h-[50px]">
                <td class="border border-black bg-stone-200 text-center">1</td>
                <td class="border border-black bg-stone-200 text-center">
                  70146
                </td>
                <td class="border border-black bg-stone-200 text-center">
                  77701
                </td>
                <td class="border border-black bg-stone-200 text-center">
                  72212
                </td>
                <td class="border border-black bg-stone-200 text-center">
                  AAAGAATACTTTTAC
                </td>
              </tr>
              <tr class="h-[50px]">
                <td class="border border-black bg-stone-200 text-center">1</td>
                <td class="border border-black bg-stone-200 text-center">
                  70146
                </td>
                <td class="border border-black bg-stone-200 text-center">
                  77701
                </td>
                <td class="border border-black bg-stone-200 text-center">
                  72212
                </td>
                <td class="border border-black bg-stone-200 text-center">
                  AAAGAATACTTTTAC
                </td>
              </tr>
              <tr class="h-[50px]">
                <td class="border border-black bg-stone-200 text-center">1</td>
                <td class="border border-black bg-stone-200 text-center">
                  70146
                </td>
                <td class="border border-black bg-stone-200 text-center">
                  77701
                </td>
                <td class="border border-black bg-stone-200 text-center">
                  72212
                </td>
                <td class="border border-black bg-stone-200 text-center">
                  AAAGAATACTTTTAC
                </td>
              </tr>
              <tr class="h-[50px]">
                <td class="border border-black bg-stone-200 text-center">1</td>
                <td class="border border-black bg-stone-200 text-center">
                  70146
                </td>
                <td class="border border-black bg-stone-200 text-center">
                  77701
                </td>
                <td class="border border-black bg-stone-200 text-center">
                  72212
                </td>
                <td class="border border-black bg-stone-200 text-center">
                  AAAGAATACTTTTAC
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div class="col-span-8 row-span-3 flex flex-col items-center">
        <h1 class="text-3xl font-bold">CSVtoJSON</h1>
        <div class="flex h-5/6 w-full flex-col items-center">
          <table class="mt-5 w-4/5 table-auto">
            <thead>
              <tr class="h-[50px]">
                <th class="rounded-tl-lg bg-stone-500">No.</th>
                <th class="border-l-2 bg-stone-500">File Name</th>
                <th class="border-l-2 bg-stone-500">Status</th>
                <th class="border-x-2 bg-stone-500">Process Rate</th>
                <th class="rounded-tr-lg bg-stone-500">Operation</th>
              </tr>
            </thead>
            <tbody>
              <tr class="h-[50px]">
                <td class="border border-black bg-stone-200 text-center">1</td>
                <td class="border border-black bg-stone-200 text-center">
                  70146
                </td>
                <td class="border border-black bg-stone-200 text-center">
                  77701
                </td>
                <td class="border border-black bg-stone-200 text-center">
                  72212
                </td>
                <td class="border border-black bg-stone-200 text-center">
                  AAAGAATACTTTTAC
                </td>
              </tr>
              <tr class="h-[50px]">
                <td class="border border-black bg-stone-200 text-center">1</td>
                <td class="border border-black bg-stone-200 text-center">
                  70146
                </td>
                <td class="border border-black bg-stone-200 text-center">
                  77701
                </td>
                <td class="border border-black bg-stone-200 text-center">
                  72212
                </td>
                <td class="border border-black bg-stone-200 text-center">
                  AAAGAATACTTTTAC
                </td>
              </tr>
              <tr class="h-[50px]">
                <td class="border border-black bg-stone-200 text-center">1</td>
                <td class="border border-black bg-stone-200 text-center">
                  70146
                </td>
                <td class="border border-black bg-stone-200 text-center">
                  77701
                </td>
                <td class="border border-black bg-stone-200 text-center">
                  72212
                </td>
                <td class="border border-black bg-stone-200 text-center">
                  AAAGAATACTTTTAC
                </td>
              </tr>
              <tr class="h-[50px]">
                <td class="border border-black bg-stone-200 text-center">1</td>
                <td class="border border-black bg-stone-200 text-center">
                  70146
                </td>
                <td class="border border-black bg-stone-200 text-center">
                  77701
                </td>
                <td class="border border-black bg-stone-200 text-center">
                  72212
                </td>
                <td class="border border-black bg-stone-200 text-center">
                  AAAGAATACTTTTAC
                </td>
              </tr>
              <tr class="h-[50px]">
                <td class="border border-black bg-stone-200 text-center">1</td>
                <td class="border border-black bg-stone-200 text-center">
                  70146
                </td>
                <td class="border border-black bg-stone-200 text-center">
                  77701
                </td>
                <td class="border border-black bg-stone-200 text-center">
                  72212
                </td>
                <td class="border border-black bg-stone-200 text-center">
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
