import React from "react";
import * as AiIcons from "react-icons/ai"

const Sample = () => {
  return (
    <div class="grid grid-rows-2 w-screen">
      <div class='flex justify-center items-center'>
        <div class="bg-white drop-shadow-md rounded-md w-3/4 h-4/5">
          <h1 class='text-5xl mt-2 ml-2 font-black'>Information</h1>
          <div class='grid grid-cols-2 h-3/4'>
            <div class='flex flex-col justify-center items-center'>
              <AiIcons.AiOutlineUser class='text-[12rem] border-2 rounded-full p-2' />
              <label class='mt-2'>Name:Apollo</label>
            </div>
            <div class='grid grid-cols-2'>
              <label>ID:</label>
              <label class='text-slate-600 font-normal'>F123456789</label>
              <label>Gender:</label>
              <label class='text-slate-600 font-normal'>Male</label>
              <label>Age:</label>
              <label class='text-slate-600 font-normal'>20</label>
              <label>Birth:</label>
              <label class='text-slate-600 font-normal'>2020-01-01</label>
              <label>Phone:</label>
              <label class='text-slate-600 font-normal'>0912345678</label>
              <label>Address:</label>
              <label class='text-slate-600 font-normal'>Taipei</label>
            </div>
            <button class='col-start-2 place-self-end mt-2 mr-10 rounded-md w-28 h-10 text-2xl'>Edit</button>
          </div>
        </div>
      </div>


      <div class='flex h-[440px] w-5/6 place-self-center overflow-y-auto rounded-2xl bg-white drop-shadow-xl'>
        <div class='flex w-full h-5/6 flex-col items-center'>
          <table class='table-auto w-[95%]'>
            <caption class='mb-4 text-left text-5xl font-black mt-2 ml-2'>
              Sample
            </caption>
            <thead>
              <tr>
                <th class='border-b-2'>No.</th>
                <th class='border-b-2'>SID</th>
                <th class='border-b-2'>Extermal Identifier</th>
                <th class='border-b-2'>Accession Identifier</th>
                <th class='border-b-2'>Type</th>
                <th class='border-b-2'>Received Time</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Sample;
