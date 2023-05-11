import React, { useState, useEffect } from "react";
import axios from "../../axios/axios";
import * as AiIcons from "react-icons/ai";

const Edit = (props) => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [uname, setUname] = useState("");
  const [ufirstName, setufirstName] = useState("");
  const [ulastName, setulastName] = useState("");
  const nameArray = name.split(" ");
  const unameArray = uname.split(" ");
  const { PID, name } = props;
  const [acc, setAcc] = useState([]);
  setfirstName(nameArray[0]);
  setLastName(nameArray[1]);
  setufirstName(unameArray[0]);
  setulastName(unameArray[1]);

  useEffect(() => {
    axios
      .get("/api/patient", { params: { PID, name } })
      .then((res) => {
        setAcc(res.data);
        setUname(res.data.uname);
      })
      .catch((err) => {
        if (err.response.status === 402) {
          console.log("fail");
        } else if (err.response.status === 403) {
          console.log("Fail");
        } else {
          console.log("No server response");
        }
      });
  });

  const createPatient = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = firstName + "" + lastName;
    const gender = formData.get("gender");
    const birthday = formData.get("birthday");
    const identifier = formData.get("identifier");
    const phone = formData.get("phone");
    const email = formData.get("email");
    const city = formData.get("city");
    const area = formData.get("area");
    const address = formData.get("address");
    const postcode = formData.get("postcode");
    const uname = ufirstName + "" + ulastName;
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
          alert("Patient Edited successfully!");
          props.setButtonPop(false);
          window.location.reload();
        }
      })
      .catch((err) => {
        if (!err.response) {
          alert("Network Error!");
        } else if (err.response.status === 403) {
          alert("Edited Fail!");
        }
      });
  };

  return props.trigger ? (
    <div class="fixed z-10 h-screen w-full flex-col items-center justify-center overflow-auto bg-gray-600 bg-opacity-70">
      <form onSubmit={createPatient}>
        {acc.map((item, index) => {
          return (
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
                    value={firstName}
                    onChange={(e) => setfirstName(e.target.value)}
                  />
                  <input
                    type="text"
                    value={lastName}
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
                    value={item.gender}
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
                    value={item.birthday}
                    required
                  />
                  <input
                    class="row-start-2"
                    type="text"
                    id="identifier"
                    name="identifier"
                    value={item.Identifier}
                    required
                  />
                </div>

                <div class="ml-20 mt-3 grid grid-cols-2 grid-rows-2">
                  <label>Phone:</label>
                  <label>Email:</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={item.phone}
                    required
                  />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={item.email}
                    required
                  />
                </div>

                <div class="ml-20 mt-3 grid grid-cols-4 grid-rows-2">
                  <label>City:</label>
                  <label>Province:</label>
                  <label>Address</label>
                  <label>Postal Code</label>
                  <input
                    class="w-44"
                    type="text"
                    id="city"
                    name="city"
                    value={item.city}
                    required
                  />
                  <input
                    class="w-44"
                    type="text"
                    id="area"
                    name="area"
                    value={item.area}
                    required
                  />
                  <input
                    class="w-44"
                    type="text"
                    id="address"
                    name="address"
                    value={item.address}
                    required
                  />
                  <input
                    class="w-44"
                    type="text"
                    id="postalcode"
                    name="postcode"
                    value={item.postcode}
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
                    value={ufirstName}
                    onChange={(e) => setufirstName(e.target.value)}
                  />
                  <input
                    type="text"
                    value={ulastName}
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
                    value={item.ugender}
                    required
                  >
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                  <input
                    type="text"
                    id="relation"
                    name="relation"
                    value={item.relation}
                    required
                  />
                </div>

                <div class=" ml-20 mt-3 grid grid-cols-2 grid-rows-2">
                  <label>Phone:</label>
                  <label>Email:</label>
                  <input
                    type="text"
                    id="uphone"
                    name="uphone"
                    value={item.uphone}
                    required
                  />
                  <input
                    type="email"
                    id="uemail"
                    name="uemail"
                    value={item.uemail}
                    required
                  />
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
                    value={item.ucity}
                    required
                  />
                  <input
                    class="w-44"
                    type="text"
                    id="uarea"
                    name="uarea"
                    value={item.uarea}
                    required
                  />
                  <input
                    class="w-44"
                    type="text"
                    id="uaddress"
                    name="uaddress"
                    value={item.uaddress}
                    required
                  />
                  <input
                    class="w-44"
                    type="text"
                    id="upostalcode"
                    name="upostcode"
                    value={item.upostcode}
                    required
                  />
                </div>
              </div>

              <button
                class="mt-4 h-16 w-40 bg-lightgreen text-3xl font-bold"
                type="submit"
              >
                Edit
              </button>
            </div>
          );
        })}
      </form>
    </div>
  ) : (
    ""
  );
};

export default Edit;
