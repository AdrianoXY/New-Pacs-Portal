import React from "react";
// import { useNavigate } from "react-router-dom";
import * as BsIcons from "react-icons/bs";

const Home = () => {
  // const navigate = useNavigate()

  return (
    <div class="grid w-full grid-cols-8 grid-rows-6 overflow-atuo h-screen">

      <div class="col-span-3 row-span-3 flex items-center justify-center drop-shadow-lg">
        <div class="ml-52 h-3/5 w-full rounded-xl bg-stone-300">
          <h1 class="ml-3 mt-5 text-5xl text-black">Patient</h1>
          <hr class="mx-3 mt-3 border-2 border-black "></hr>
          <BsIcons.BsPeopleFill class="ml-2 mt-5 text-9xl" />
        </div>
      </div>

      <div class="col-span-5 row-span-3 flex justify-center">
        <div class="flex h-auto w-full mr-20 justify-end self-start">
          <table class="mt-24 w-4/5 table-auto drop-shadow-lg">
            <thead>
              <tr class='h-[50px]'>
                <th class="rounded-tl-lg bg-stone-500">No.</th>
                <th class="bg-stone-500 border-l-2 ">ID</th>
                <th class="bg-stone-500 border-l-2 ">PID</th>
                <th class="bg-stone-500 border-x-2 ">Specimen</th>
                <th class="rounded-tr-lg bg-stone-500">Obserbed</th>
              </tr>
            </thead>
            <tbody>
              <tr class='h-[50px]'>
                <td class='border border-black bg-stone-200 text-center'>1</td>
                <td class='border border-black bg-stone-200 text-center'>70146</td>
                <td class='border border-black bg-stone-200 text-center'>77701</td>
                <td class='border border-black bg-stone-200 text-center'>72212</td>
                <td class='border border-black bg-stone-200 text-center'>AAAGAATACTTTTAC</td>
              </tr>
              <tr class='h-[50px]'>
                <td class='border border-black bg-stone-200 text-center'>1</td>
                <td class='border border-black bg-stone-200 text-center'>70146</td>
                <td class='border border-black bg-stone-200 text-center'>77701</td>
                <td class='border border-black bg-stone-200 text-center'>72212</td>
                <td class='border border-black bg-stone-200 text-center'>AAAGAATACTTTTAC</td>
              </tr>
              <tr class='h-[50px]'>
                <td class='border border-black bg-stone-200 text-center'>1</td>
                <td class='border border-black bg-stone-200 text-center'>70146</td>
                <td class='border border-black bg-stone-200 text-center'>77701</td>
                <td class='border border-black bg-stone-200 text-center'>72212</td>
                <td class='border border-black bg-stone-200 text-center'>AAAGAATACTTTTAC</td>
              </tr>
              <tr class='h-[50px]'>
                <td class='border border-black bg-stone-200 text-center'>1</td>
                <td class='border border-black bg-stone-200 text-center'>70146</td>
                <td class='border border-black bg-stone-200 text-center'>77701</td>
                <td class='border border-black bg-stone-200 text-center'>72212</td>
                <td class='border border-black bg-stone-200 text-center'>AAAGAATACTTTTAC</td>
              </tr>
              <tr class='h-[50px]'>
                <td class='border border-black bg-stone-200 text-center'>1</td>
                <td class='border border-black bg-stone-200 text-center'>70146</td>
                <td class='border border-black bg-stone-200 text-center'>77701</td>
                <td class='border border-black bg-stone-200 text-center'>72212</td>
                <td class='border border-black bg-stone-200 text-center'>AAAGAATACTTTTAC</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div class="col-span-8 row-span-3 flex items-center flex-col">
        <h1 class='text-3xl font-bold'>Recently Upload</h1>
        <div class='flex h-5/6 w-full flex-col items-center overflow-y-scroll'>
          <table class='w-4/5 table-auto mt-5 overflow-y-scroll'>
            <caption class='text-left text-xl font-bold'>Sequencing raw data (.fastQ)</caption>
            <thead>
              <tr class='h-[35px]'>
                <th class='bg-stone-500 rounded-tl-lg'>No.</th>
                <th class='bg-stone-500 border-l-2'>File Name</th>
                <th class='bg-stone-500 border-l-2'>File Size</th>
                <th class='bg-stone-500 border-x-2'>Loading%</th>
                <th class='bg-stone-500 rounded-tr-lg'>State</th>
              </tr>
            </thead>
          </table>
          <table class='w-4/5 table-auto mt-20 overflow-y-scroll'>
          <caption class='text-left text-xl font-bold'>Alignment(.bam/ .bai)</caption>
            <thead>
              <tr class='h-[35px]'>
                <th class='bg-stone-500 rounded-tl-lg'>No.</th>
                <th class='bg-stone-500 border-l-2'>File Name</th>
                <th class='bg-stone-500 border-l-2'>File Size</th>
                <th class='bg-stone-500 border-x-2'>Loading%</th>
                <th class='bg-stone-500 rounded-tr-lg'>State</th>
              </tr>
            </thead>
          </table>
          <table class='w-4/5 table-auto mt-20 overflow-y-scroll'>
          <caption class='text-left text-xl font-bold'>Variant calling(.vcf/ .tbi/ .idx)</caption>
            <thead>
              <tr class='h-[35px]'>
                <th class='bg-stone-500 rounded-tl-lg'>No.</th>
                <th class='bg-stone-500 border-l-2'>File Name</th>
                <th class='bg-stone-500 border-l-2'>File Size</th>
                <th class='bg-stone-500 border-x-2'>Loading%</th>
                <th class='bg-stone-500 rounded-tr-lg'>State</th>
              </tr>
            </thead>
          </table>
          <table class='w-4/5 table-auto mt-20 overflow-y-scroll'>
          <caption class='text-left text-xl font-bold'>Annotation(.csv /.xlsx)</caption>
            <thead>
              <tr class='h-[35px]'>
                <th class='bg-stone-500 rounded-tl-lg'>No.</th>
                <th class='bg-stone-500 border-l-2'>File Name</th>
                <th class='bg-stone-500 border-l-2'>File Size</th>
                <th class='bg-stone-500 border-x-2'>Loading%</th>
                <th class='bg-stone-500 rounded-tr-lg'>State</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
