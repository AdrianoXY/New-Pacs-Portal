import React from "react";
import axios from "../../axios/axios";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";
import * as AiIcons from "react-icons/ai";

const Create = (props) => {
  const createPatient = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const gender = formData.get("gender");
    const birthday = formData.get("birthday");
    const identifier = formData.get("identifier");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const city = formData.get("city");
    const area = formData.get("area");
    const address = formData.get("address");
    const postalcode = formData.get("postalcode");
    const ufirstName = formData.get("ufirstName");
    const ulastName = formData.get("ulastName");
    const ugender = formData.get("ugender");
    const relation = formData.get("relation");
    const uphone = formData.get("uphone");
    const uemail = formData.get("uemail");
    const ucity = formData.get("ucity");
    const uarea = formData.get("uarea");
    const uaddress = formData.get("uaddress");
    const upostalcode = formData.get("upostalcode");

    console.log(
      firstName,
      lastName,
      gender,
      birthday,
      identifier,
      phone,
      email,
      city,
      area,
      address,
      postalcode,
      ufirstName,
      ulastName,
      ugender,
      relation,
      uphone,
      uemail,
      ucity,
      uarea,
      uaddress,
      upostalcode
    );
  };

  return props.trigger ? (
    <div class="fixed z-10 h-screen w-full flex-col items-center justify-center overflow-auto bg-gray-600 bg-opacity-70">
      <form onSubmit={createPatient}>
        <div class="duration-50 flex h-screen w-full animate-fadein flex-col items-center justify-center">
          <div class="flex w-screen justify-around">
            <h1 class="py-3 text-center text-6xl font-bold text-white">
              Create Patient
            </h1>
            <AiIcons.AiOutlineClose
              class="ml-[45%] cursor-pointer text-7xl text-white"
              onClick={() => props.setButtonPop(false)}
            />
          </div>
          <div class="h-[80%] w-[85%] overflow-y-auto rounded-lg bg-white drop-shadow-lg">
            <h2 class="ml-5 mt-2 text-4xl font-semibold">Patient Info</h2>

            <div class="mt-3 grid w-full grid-cols-3">
              <div class="col-span-2 col-start-1">
                <div class="ml-20 grid grid-cols-2 grid-rows-2">
                  <label>First Name:</label>
                  <label>Last Name:</label>
                  <input type="text" id="firstName" name="firstName" required />
                  <input type="text" id="lastName" name="lastName" required />
                </div>

                <div class="ml-20 mt-3 grid grid-cols-4 grid-rows-2">
                  <label>Gender:</label>
                  <label>Birth:</label>
                  <label>ID:</label>
                  <select
                    class="row-start-2 ml-1 w-20 rounded-md border"
                    id="gender"
                    name="gender"
                    type="text"
                    required
                  >
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                  <input
                    class="row-start-2 w-40"
                    type="date"
                    id="birthday"
                    name="birthday"
                    required
                  />
                  <input
                    class="row-start-2"
                    type="text"
                    id="identifier"
                    name="identifier"
                    required
                  />
                </div>

                <div class="ml-20 mt-3 grid grid-cols-2 grid-rows-2">
                  <label>Phone:</label>
                  <label>Email:</label>
                  <input type="text" id="phone" name="phone" required />
                  <input type="email" id="email" name="email" required />
                </div>

                <div class="ml-20 mt-3 grid grid-cols-4 grid-rows-2">
                  <label>City:</label>
                  <label>Province:</label>
                  <label>Address</label>
                  <label>Postal Code</label>
                  <input
                    class="w-56"
                    type="text"
                    id="city"
                    name="city"
                    required
                  />
                  <input
                    class="w-56"
                    type="text"
                    id="area"
                    name="area"
                    required
                  />
                  <input
                    class="w-56"
                    type="text"
                    id="address"
                    name="address"
                    required
                  />
                  <input
                    class="w-56"
                    type="text"
                    id="postalcode"
                    name="postcode"
                    required
                  />
                </div>
              </div>
              <BsIcons.BsFillPersonBadgeFill class="place-self-center text-[15rem] text-graygreen" />
            </div>

            <hr class="mx-10 mt-5 border" />
            <h2 class="ml-5 mt-5 text-4xl font-semibold">Emergency Contact</h2>

            <div class="mt-6 grid w-full grid-cols-3">
              <MdIcons.MdContactEmergency class="place-self-center text-[15rem] text-red-600" />

              <div class="col-span-2 col-start-2">
                <div class=" ml-20 grid grid-cols-2 grid-rows-2">
                  <label>First Name:</label>
                  <label>Last Name:</label>
                  <input
                    type="text"
                    id="ufirstName"
                    name="ufirstName"
                    required
                  />
                  <input type="text" id="ulastName" name="ulastName" required />
                </div>

                <div class=" ml-20 mt-3 grid grid-cols-2 grid-rows-2">
                  <label>Gender:</label>
                  <label>Relation:</label>
                  <select
                    class="ml-1 w-20 rounded-md border"
                    type="text"
                    id="ugender"
                    name="ugender"
                    required
                  >
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                  <input type="text" id="relation" name="relation" required />
                </div>

                <div class=" ml-20 mt-3 grid grid-cols-2 grid-rows-2">
                  <label>Phone:</label>
                  <label>Email:</label>
                  <input type="text" id="uphone" name="uphone" required />
                  <input type="email" id="uemail" name="uemail" required />
                </div>

                <div class=" ml-20 mt-3 grid grid-cols-4 grid-rows-2">
                  <label>City:</label>
                  <label>Province:</label>
                  <label>Address</label>
                  <label>Postal Code</label>
                  <input
                    class="w-56"
                    type="text"
                    id="ucity"
                    name="ucity"
                    required
                  />
                  <input
                    class="w-56"
                    type="text"
                    id="uarea"
                    name="uarea"
                    required
                  />
                  <input
                    class="w-56"
                    type="text"
                    id="uaddress"
                    name="uaddress"
                    required
                  />
                  <input
                    class="w-56"
                    type="text"
                    id="upostalcode"
                    name="upostcode"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          <button
            class="mt-4 h-16 w-40 bg-lightgreen text-3xl font-bold"
            type="submit"
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
