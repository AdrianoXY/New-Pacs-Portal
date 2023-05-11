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

    console.log(name, uname, birthday);

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
          props.setButtonPop(false);
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
    <div class="fixed z-10 h-screen w-full flex-col items-center justify-center overflow-auto bg-gray-600 bg-opacity-70">
      <form onSubmit={createPatient}>
        <div class="duration-50 flex h-screen w-full animate-fadein flex-col items-center justify-center">
          <div class="flex w-[60%] justify-around">
            <h1 class="py-3 text-center text-6xl font-bold text-white">
              Create Patient
            </h1>
            <AiIcons.AiOutlineClose
              class="ml-[45%] cursor-pointer text-7xl text-white"
              onClick={() => props.setButtonPop(false)}
            />
          </div>

          <div class="scrollbar h-[78%] w-[60%] overflow-y-auto rounded-md bg-bgcol drop-shadow-lg">
            <h2 class="text ml-5 mt-2 text-4xl font-semibold text-deepgreen">
              Patient Info
            </h2>

            <div class="ml-20 mt-3 grid grid-cols-2 grid-rows-2">
              <label>First Name:</label>
              <label>Last Name:</label>
              <input
                type="text"
                onChange={(e) => setfirstName(e.target.value)}
              />
              <input
                type="text"
                onChange={(e) => setLastName(e.target.value)}
              />
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
              <input class="w-44" type="text" id="city" name="city" required />
              <input class="w-44" type="text" id="area" name="area" required />
              <input
                class="w-44"
                type="text"
                id="address"
                name="address"
                required
              />
              <input
                class="w-44"
                type="text"
                id="postalcode"
                name="postcode"
                required
              />
            </div>

            <hr class="mx-10 mt-5 border" />

            <h2 class="ml-5 text-4xl font-semibold text-red-500">
              Emergency Contact
            </h2>

            <div class=" ml-20 mt-3 grid grid-cols-2 grid-rows-2">
              <label>First Name:</label>
              <label>Last Name:</label>
              <input
                type="text"
                onChange={(e) => setufirstName(e.target.value)}
              />
              <input
                type="text"
                onChange={(e) => setulastName(e.target.value)}
              />
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
                class="w-44"
                type="text"
                id="ucity"
                name="ucity"
                required
              />
              <input
                class="w-44"
                type="text"
                id="uarea"
                name="uarea"
                required
              />
              <input
                class="w-44"
                type="text"
                id="uaddress"
                name="uaddress"
                required
              />
              <input
                class="w-44"
                type="text"
                id="upostalcode"
                name="upostcode"
                required
              />
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
