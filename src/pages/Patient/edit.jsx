import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../axios/axios";
import * as AiIcons from "react-icons/ai";

const Edit = (props) => {
  const { PID, acc } = props;
  const urgent = Object.values(acc[0].Urgent);
  const addressArr = acc[0].address;
  const uaddressArr = urgent[6];
  const [firstName, setfirstName] = useState(acc[0].name.split(" ")[0]);
  const [lastName, setLastName] = useState(acc[0].name.split(" ")[1]);
  const [gender, setGender] = useState(acc[0].gender);
  const [birthday, setBirthday] = useState(acc[0].birthday);
  const [identifier, setIdentifier] = useState(acc[0].Identifier);
  const [phone, setPhone] = useState(acc[0].phone);
  const [email, setEmail] = useState(acc[0].email);
  const [city, setCity] = useState("");
  const [area, setArea] = useState("");
  const [address, setAddress] = useState("");
  const [ufirstName, setufirstName] = useState(urgent[2].split(" ")[0]);
  const [ulastName, setulastName] = useState(urgent[2].split(" ")[1]);
  const [ugender, setugender] = useState(urgent[3]);
  const [relation, setRelation] = useState(urgent[4]);
  const [uphone, setUphone] = useState(urgent[7]);
  const [uemail, setUemail] = useState(urgent[5]);
  const [ucity, setUcity] = useState("");
  const [uarea, setUarea] = useState("");
  const [uaddress, setUaddress] = useState("");
  const navigate = useNavigate();

  const cityIndex = addressArr.indexOf("市");
  const districtIndex = addressArr.indexOf("區");
  if (cityIndex !== -1 && districtIndex !== -1 && districtIndex > cityIndex) {
    var dcity = addressArr.slice(0, cityIndex + 1);
    var darea = addressArr.slice(cityIndex + 1, districtIndex + 1);
    var daddress = addressArr.slice(districtIndex + 1);
  }

  const ucityIndex = uaddressArr.indexOf("市");
  const udistrictIndex = uaddressArr.indexOf("區");
  if (
    ucityIndex !== -1 &&
    udistrictIndex !== -1 &&
    udistrictIndex > ucityIndex
  ) {
    var ducity = uaddressArr.slice(0, ucityIndex + 1);
    var duarea = uaddressArr.slice(ucityIndex + 1, udistrictIndex + 1);
    var duaddress = uaddressArr.slice(udistrictIndex + 1);
  }

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    console.log("in");

    switch(name){
      case 'firstName':
        setfirstName(value);
        break;
      case 'lastName':
        setLastName(value);
        break;
      case 'gender':
        setGender(value);
        break;
      case 'birthday':
        setBirthday(value);
        break;
      case 'identifier':
        setIdentifier(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'city':
        setCity(value);
        break;
      case  'area':
        setArea(value);
        break;
      case 'address':
        setAddress(value);
        break;
      case 'ufirstName':
        setufirstName(value);
        break;
      case 'ulastName':
        setulastName(value);
        break;
      case 'ugender':
        setugender(value);
        break;
      case 'relation':
        setRelation(value);
        break;
      case 'uphone':
        setUphone(value);
        break;
      case 'uemail':
        setUemail(value);
        break;
      case 'ucity':
        setUcity(value);
        break;
      case 'uarea':
        setUarea(value);
        break;
      case 'uaddress':
        setUaddress(value);
        break;

      default:
      break;
    }
  }


  const editPatient = async (e) => {
    e.preventDefault();

    const name = firstName + " " + lastName;
    const uname = ufirstName + " " + ulastName;

    const updatedPatientData = {
      name,gender,birthday,identifier,phone,email
    }

    axios
      .put(
        `/api/patient/${PID}`,
        updatedPatientData
      )
      .then((response) => {
        if (response.status === 200) {
          alert("Patient Update successfully!");
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
      <form onSubmit={editPatient}>
        <div class="duration-50 flex h-screen w-full animate-fadein flex-col items-center justify-center">
          <div class="flex w-[60%] justify-around">
            <h1 class="py-3 text-center text-6xl font-bold text-white">
              Edit Patient
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
                name="firstName"
                defaultValue={firstName}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="lastName"
                defaultValue={lastName}
                onChange={handleInputChange}
              />
            </div>

            <div class="ml-20 mt-3 grid grid-cols-4 grid-rows-2">
              <label>Gender:</label>
              <label>Birth:</label>
              <label>ID:</label>
              <select
                class="row-start-2 ml-1 w-20 rounded-md border"
                type="text"
                name="gender"
                defaultValue={gender}
                onChange={handleInputChange}
                required
              >
                <option>Male</option>
                <option>Female</option>
              </select>
              <input
                class="row-start-2 w-40"
                type="date"
                name="birthday"
                defaultValue={birthday}
                onChange={handleInputChange}
                required
              />
              <input
                class="row-start-2"
                type="text"
                name="identifier"
                defaultValue={identifier}
                onChange={handleInputChange}
                required
              />
            </div>

            <div class="ml-20 mt-3 grid grid-cols-2 grid-rows-2">
              <label>Phone:</label>
              <label>Email:</label>
              <input
                type="text"
                name="phone"
                defaultValue={phone}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="email"
                defaultValue={email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div class="ml-20 mt-3 grid grid-cols-4 grid-rows-2">
              <label>City:</label>
              <label>Province:</label>
              <label>Address</label>
              <input
                class="w-44 row-start-2"
                type="text"
                name="city"
                defaultValue={dcity}
                onChange={handleInputChange}
                required
              />
              <input
                class="w-44 row-start-2"
                type="text"
                name="area"
                defaultValue={darea}
                onChange={handleInputChange}
                required
              />
              <input
                class="row-start-2"
                type="text"
                name="address"
                defaultValue={daddress}
                onChange={handleInputChange}
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
                name="ufirstName"
                defaultValue={ufirstName}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="ulastName"
                defaultValue={ulastName}
                onChange={handleInputChange}
              />
            </div>

            <div class=" ml-20 mt-3 grid grid-cols-2 grid-rows-2">
              <label>Gender:</label>
              <label>Relation:</label>
              <select
                class="ml-1 w-20 rounded-md border"
                type="text"
                name="ugender"
                defaultValue={ugender}
                onChange={handleInputChange}
                required
              >
                <option>Male</option>
                <option>Female</option>
              </select>
              <input
                type="text"
                name="relation"
                defaultValue={relation}
                onChange={handleInputChange}
                required
              />
            </div>

            <div class=" ml-20 mt-3 grid grid-cols-2 grid-rows-2">
              <label>Phone:</label>
              <label>Email:</label>
              <input
                type="text"
                name="uphone"
                defaultValue={uphone}
                onChange={handleInputChange}
                required
              />
              <input
                type="email"
                name="uemail"
                defaultValue={uemail}
                onChange={handleInputChange}
                required
              />
            </div>

            <div class=" ml-20 mt-3 grid grid-cols-4 grid-rows-2">
              <label>City:</label>
              <label>Province:</label>
              <label>Address</label>
              <input
                class="w-44 row-start-2"
                type="text"
                name="ucity"
                defaultValue={ducity}
                onChange={handleInputChange}
                required
              />
              <input
                class="w-44 row-start-2"
                type="text"
                name="uarea"
                defaultValue={duarea}
                onChange={handleInputChange}
                required
              />
              <input
                class="row-start-2 "
                type="text"
                name="uaddress"
                defaultValue={duaddress}
                onChange={handleInputChange}
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
      </form>
    </div>
  ) : (
    ""
  );
};

export default Edit;
