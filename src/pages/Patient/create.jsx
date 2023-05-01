import React from "react";

const Create = () => {
  return (
    <div class="flex h-screen w-full flex-col items-center justify-center">
      <div class="flex h-screen w-full flex-col items-center justify-center">
        <form class="h-[90%] w-3/4 overflow-y-auto rounded-lg bg-white drop-shadow-lg">

          <h1 class="py-3 text-center text-6xl font-bold border-b-4">Create Patient</h1>
          <h2 class="ml-5 mt-2 text-4xl font-semibold">Patient Info</h2>

          <section class="mt-5 flex w-5/6 flex-col">
            <section class="grid grid-cols-2 grid-rows-2 ml-20">
              <label>First Name:</label>
              <label>Last Name:</label>
              <input />
              <input  />
            </section>

            <section class="grid grid-cols-3 grid-rows-2 mt-3 ml-20">
              <label>Gender:</label>
              <label class='-translate-x-14'>Birth:</label>
              <label class='-translate-x-[10.8rem]'>ID:</label>
              <select class="ml-1 border w-20 rounded-md">
                <option>Male</option>
                <option>Female</option>
              </select>
              <input class='w-40 -translate-x-14'  type="date" />
              <input class='-translate-x-[10.8rem]' />
            </section>

            <section class="grid grid-cols-2 grid-rows-2 mt-3 ml-20">
              <label>Phone:</label>
              <label>Email:</label>
              <input  />
              <input  />
            </section>

            <section class="grid grid-cols-2 grid-rows-2 mt-3 ml-20">
              <label>Address:</label>
              <input class="w-[795px] row-start-2 col-span-2" />
            </section>
          </section>

          <hr class="mx-10 mt-10 border" />
          <h2 class="ml-5 mt-2 text-4xl font-semibold">Emergency Contact</h2>

          <section class="mt-5 flex w-5/6 flex-col">
            <section class="grid grid-cols-2 grid-rows-2 ml-20">
              <label>First Name:</label>
              <label>Last Name:</label>
              <input />
              <input  />
            </section>

            <section class="grid grid-cols-2 grid-rows-2 mt-3 ml-20">
              <label>Gender:</label>
              <label>Relation:</label>
              <select class="ml-1 border w-20 rounded-md">
                <option>Male</option>
                <option>Female</option>
              </select>
              <input  />
            </section>

            <section class="grid grid-cols-2 grid-rows-2 mt-3 ml-20">
              <label>Phone:</label>
              <label>Email:</label>
              <input  />
              <input  />
            </section>

            <section class="grid grid-cols-2 grid-rows-2 mt-3 ml-20">
              <label>Address:</label>
              <input class="w-[795px] row-start-2 col-span-2" />
            </section>

          </section>

        </form>

        <button class="mt-4 h-16 w-40 rounded-lg text-3xl font-bold text-white">
          Create
        </button>

      </div>
    </div>
  );
};

export default Create;
