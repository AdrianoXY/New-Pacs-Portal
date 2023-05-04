import React from "react";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";

const Create = () => {
  return (
    <div class="flex h-screen w-full flex-col items-center justify-center overflow-auto">
      <div class="flex h-screen w-full flex-col items-center justify-center">
        <form class="h-[88%] w-3/4 overflow-y-auto rounded-lg bg-white drop-shadow-lg">
          <h1 class="border-b-4 py-3 text-center text-6xl font-bold">
            Create Patient
          </h1>
          <h2 class="ml-5 mt-2 text-4xl font-semibold">Patient Info</h2>

          <div class="mt-3 grid w-full grid-cols-3">
            <div class="col-span-2 col-start-1">
              <section class="ml-20 grid grid-cols-2 grid-rows-2">
                <label>First Name:</label>
                <label>Last Name:</label>
                <input />
                <input />
              </section>

              <section class="ml-20 mt-3 grid grid-cols-4 grid-rows-2">
                <label>Gender:</label>
                <label>Birth:</label>
                <label>ID:</label>
                <select class="row-start-2 ml-1 w-20 rounded-md border">
                  <option>Male</option>
                  <option>Female</option>
                </select>
                <input class="row-start-2 w-40" type="date" />
                <input class="row-start-2" />
              </section>

              <section class="ml-20 mt-3 grid grid-cols-2 grid-rows-2">
                <label>Phone:</label>
                <label>Email:</label>
                <input />
                <input />
              </section>

              <section class="ml-20 mt-3 grid grid-cols-2 grid-rows-2">
                <label>Address:</label>
                <input class="col-span-2 row-start-2 w-[85.5%]" />
              </section>
            </div>
            <BsIcons.BsFillPersonBadgeFill class="text-[15rem] text-graygreen" />
          </div>

          <hr class="mx-10 mt-5 border" />
          <h2 class="ml-5 mt-2 text-4xl font-semibold">Emergency Contact</h2>

          <div class="mt-3 grid w-full grid-cols-3">
            <MdIcons.MdContactEmergency class="place-self-center text-[15rem] text-red-600" />

            <div class="col-span-2 col-start-2">
              <section class=" ml-20 grid grid-cols-2 grid-rows-2">
                <label>First Name:</label>
                <label>Last Name:</label>
                <input />
                <input />
              </section>

              <section class=" ml-20 mt-3 grid grid-cols-2 grid-rows-2">
                <label>Gender:</label>
                <label>Relation:</label>
                <select class="ml-1 w-20 rounded-md border">
                  <option>Male</option>
                  <option>Female</option>
                </select>
                <input />
              </section>

              <section class=" ml-20 mt-3 grid grid-cols-2 grid-rows-2">
                <label>Phone:</label>
                <label>Email:</label>
                <input />
                <input />
              </section>

              <section class=" ml-20 mt-3 grid grid-cols-2 grid-rows-2">
                <label>Address:</label>
                <input class="col-span-2 row-start-2 w-[85.5%]" />
              </section>
            </div>
          </div>
        </form>

        <button class="mt-4 h-16 w-40 rounded-lg text-3xl font-bold text-white">
          Create
        </button>
      </div>
    </div>
  );
};

export default Create;
