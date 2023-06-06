import React, { useState } from "react";
import axios from "../../axios/axios";
import * as AiIcons from "react-icons/ai";

const Create = (props) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [ufirstName, setufirstName] = useState("");
  const [ulastName, setulastName] = useState("");

  const createPatient = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = firstName + " " + lastName;
    const gender = formData.get("gender");
    const birthday = formData.get("birthday");
    const identifier = formData.get("identifier");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const city = formData.get("city");
    const area = formData.get("area");
    const address = formData.get("address");
    const postcode = formData.get("postcode");
    const uname = ufirstName + " " + ulastName;
    const ugender = formData.get("ugender");
    const relation = formData.get("relation");
    const uphone = formData.get("uphone");
    const uemail = formData.get("uemail");
    const ucity = formData.get("ucity");
    const uarea = formData.get("uarea");
    const uaddress = formData.get("uaddress");
    const upostcode = formData.get("upostcode");

    axios
      .post(
        "/api/patient",
        JSON.stringify({
          name,
          gender,
          birthday,
          identifier,
          phone,
          email,
          city,
          area,
          address,
          postcode,
          uname,
          ugender,
          relation,
          uphone,
          uemail,
          ucity,
          uarea,
          uaddress,
          upostcode,
        })
      )
      .then((response) => {
        if (response.status === 200) {
          alert("Patient created successfully!");
          props.setCreate(false);
          window.location.reload();
        }
      })
      .catch((err) => {
        if (!err.response) {
          alert("Network Error!");
        } else if (err.response.status === 403) {
          alert("Create Fail!");
        }
      });
  };

  return props.trigger ? (
    <div class="fixed z-10 grid h-screen w-screen grid-cols-9 grid-rows-6 overflow-auto bg-gray-600 bg-opacity-70">
      <form
        class="col-span-5 col-start-3 row-span-4 row-start-2 grid h-[95%] w-full animate-fadein grid-cols-7 grid-rows-6 place-self-center rounded-md bg-white drop-shadow-lg"
        onSubmit={createPatient}
      >
        <div class="col-span-2 flex items-center justify-center">
          <h1 class="text-4xl font-bold text-green-600">Create Patient</h1>
        </div>

        <div class="col-start-7 flex justify-end">
          <AiIcons.AiOutlineClose
            class="cursor-pointer text-7xl"
            onClick={() => props.setCreate(false)}
          />
        </div>

        <div class="scrollbar col-span-7 row-span-4 grid h-[93%] grid-cols-9 overflow-y-auto border-t-2">
          <div class="col-span-8 col-start-2 row-span-2 row-start-1 grid h-full grid-cols-4 grid-rows-5">
            <h1 class="col-span-5 flex items-center text-2xl font-semibold">
              Patient Info
            </h1>
            <div class="flex flex-col">
              <label class="">First Name</label>
              <input
                type="text"
                onChange={(e) => setfirstName(e.target.value)}
              />
            </div>
            <div class="col-start-3 flex flex-col">
              <label class="">Last Name</label>
              <input
                type="text"
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div class="row-start-3 flex flex-col">
              <label class="">Gender</label>
              <select
                class="h-8 w-40 rounded-md border-2"
                id="gender"
                name="gender"
                type="text"
                
              >
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div class="row-start-3 flex flex-col">
              <label class="">Birth</label>
              <input type="date" id="birthday" name="birthday"  />
            </div>
            <div class="row-start-3 flex flex-col">
              <label class="">ID</label>
              <input type="text" id="identifier" name="identifier"  />
            </div>
            <div class="row-start-4 flex flex-col">
              <label class="">Phone</label>
              <input type="text" id="phone" name="phone"  />
            </div>
            <div class="col-start-3 row-start-4 flex flex-col">
              <label class="">Email</label>
              <input type="email" id="email" name="email"  />
            </div>
            <div class="row-start-5 flex flex-col">
              <label class="">City</label>
              <input type="text" id="city" name="city"  />
            </div>
            <div class="row-start-5 flex flex-col">
              <label class="">Province</label>
              <input type="text" id="area" name="area"  />
            </div>
            <div class="row-start-5 flex flex-col">
              <label class="">Address</label>
              <input type="text" id="address" name="address"  />
            </div>
            <div class="row-start-5 flex flex-col">
              <label class="">Postal Code</label>
              <input type="text" id="postalcode" name="postcode"  />
            </div>
          </div>

          <div class="col-span-8 col-start-2 row-span-2 row-start-3 grid h-full grid-cols-4 grid-rows-5">
            <h1 class="col-span-4 flex items-center text-2xl font-semibold">
              Emergency Contact
            </h1>
            <div class="flex flex-col">
              <label class="">First Name</label>
              <input
                type="text"
                onChange={(e) => setufirstName(e.target.value)}
              />
            </div>
            <div class="col-start-3 flex flex-col">
              <label class="">Last Name</label>
              <input
                type="text"
                onChange={(e) => setulastName(e.target.value)}
              />
            </div>
            <div class="row-start-3 flex flex-col">
              <label class="">Gender</label>
              <select
                class="h-8 w-40 rounded-md border-2"
                type="text"
                id="ugender"
                name="ugender"
                
              >
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div class="col-start-3 row-start-3 flex flex-col">
              <label class="">Relation</label>
              <input type="text" id="relation" name="relation"  />
            </div>
            <div class="row-start-4 flex flex-col">
              <label class="">Phone</label>
              <input type="text" id="uphone" name="uphone"  />
            </div>
            <div class="col-start-3 row-start-4 flex flex-col">
              <label class="">Email</label>
              <input type="email" id="uemail" name="uemail"  />
            </div>
            <div class="row-start-5 flex flex-col">
              <label class="">City</label>
              <input type="text" id="ucity" name="ucity"  />
            </div>
            <div class="row-start-5 flex flex-col">
              <label class="">Province</label>
              <input type="text" id="uarea" name="uarea"  />
            </div>
            <div class="row-start-5 flex flex-col">
              <label class="">Address</label>
              <input type="text" id="uaddress" name="uaddress"  />
            </div>
            <div class="row-start-5 flex flex-col">
              <label class="">Postal Code</label>
              <input
                class="w-44"
                type="text"
                id="upostalcode"
                name="upostcode"
                
              />
            </div>
          </div>
        </div>
        <div class="col-span-3 col-start-3 flex items-center justify-center">
          <button
            type="submit"
            class="h-12 w-28 bg-lightgreen text-2xl font-semibold"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  ) : (
    ""
  );
};

export default Create;
