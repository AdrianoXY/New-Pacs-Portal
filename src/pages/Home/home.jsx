import React from "react";
import { useNavigate } from "react-router-dom";
import * as BsIcons from "react-icons/bs"

const Home = () => {
  const navigate = useNavigate()

  return (
    <div class="grid grid-rows-6 grid-cols-8 w-full">
      <div class='flex col-span-3 row-span-3 justify-center items-center'>
        <div class='h-3/5 w-3/5 min-w-fit rounded-xl bg-stone-400 ml-64'>
          <h1 class='text-5xl mt-5 text-black ml-3'>Patient</h1>
          <hr class='border-2 border-black mx-3 mt-3'></hr>
            <BsIcons.BsPeopleFill class='text-9xl mt-5 ml-2' />
        </div>
      </div>
      <div class='flex col-span-5 row-span-3 justify-center items-center'>2</div>
      <div class='flex col-span-8 row-span-3 justify-center items-center'>3</div>
    </div>
  );
};

export default Home;
