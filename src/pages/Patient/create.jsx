import React from "react";

const Create = () => {
  return (
    <div class="flex h-screen w-screen flex-col items-center justify-center">
      <div class="flex h-screen w-full flex-col items-center justify-center">
        <form class="h-5/6 w-3/4 overflow-y-auto rounded-lg bg-white drop-shadow-lg">
          <h1 class="py-3 text-center text-6xl font-bold bg-graygreen text-white">Create Patient</h1>
          <h2 class="ml-5 mt-2 text-4xl font-semibold">Patient Info</h2>
          <section class="ml-40 mt-5 flex h-60 w-3/4 flex-col rounded-lg border-2 border-black drop-shadow-lg">
            <section class="mt-5">
              <label>First Name:</label>
              <input class="ml-1 w-60 border border-black" />
              <label class="ml-10">Last Name:</label>
              <input class="ml-1 w-60 border border-black" />
            </section>
            <section class="mt-5">
              <label>Gender:</label>
              <select class="ml-1 border border-black">
                <option>Male</option>
                <option>Female</option>
              </select>
              <label class="ml-5">Birth:</label>
              <input class="ml-1 w-52 border border-black" type="date" />
              <label class="ml-5">ID:</label>
              <input class="ml-1 w-[259px] border border-black" />
            </section>
            <section class="mt-5">
              <label>Phone:</label>
              <input class="ml-1 w-72 border border-black" />
              <label class="ml-10">Email:</label>
              <input class="ml-1 w-[295px] border border-black" />
            </section>
            <section class="mt-5">
              <label>Address:</label>
              <input class="ml-1 w-[675px] border border-black" />
            </section>
          </section>
          <hr class="mx-10 mt-10 border border-black" />
          <h2 class="ml-5 mt-2 text-4xl font-semibold">Emergency Contact</h2>
          <section class="ml-40 mt-5 flex h-60 w-3/4 flex-col rounded-lg border-2 border-black drop-shadow-lg">
            <section class="mt-5">
              <label>First Name:</label>
              <input class="ml-1 w-60 border border-black" />
              <label class="ml-10">Last Name:</label>
              <input class="ml-1 w-[230px] border border-black" />
            </section>
            <section class="mt-5">
              <label>Gender:</label>
              <select class="ml-1 border border-black">
                <option>Male</option>
                <option>Female</option>
              </select>
              <label class='ml-60'>Relation:</label>
              <input class="ml-1 w-[255px] border border-black" />
            </section>
            <section class="mt-5">
              <label>Phone:</label>
              <input class="ml-1 w-72 border border-black" />
              <label class="ml-10">Email:</label>
              <input class="ml-1 w-72 border border-black" />
            </section>
            <section class="mt-5">
              <label>Address:</label>
              <input class="ml-1 w-[665px] border border-black" />
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
