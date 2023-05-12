import React, { useState } from "react";
import axios from "../../axios/axios";
import * as AiIcons from "react-icons/ai";

const Edit = (props) => {
  const { PID, acc } = props;
  const urgent = acc[0].Urgent;
  const [firstName, setfirstName] = useState(acc[0].name.split(" ")[0]);
  const [lastName, setLastName] = useState(acc[0].name.split(" ")[1]);
  const [gender, setGender] = useState(acc[0].gender);
  const [birthday, setBirthday] = useState(acc[0].birthday);
  const [Identifier, setIdentifier] = useState(acc[0].Identifier);
  const [phone, setPhone] = useState(acc[0].phone);
  const [email, setEmail] = useState(acc[0].email);
  const [city, setCity] = useState(acc[0].city);
  const [area, setArea] = useState(acc[0].area);
  const [address, setAddress] = useState(acc[0].address);
  const [ufirstName, setufirstName] = useState(urgent.name.split(" ")[0]);
  const [ulastName, setulastName] = useState(urgent.name.split(" ")[1]);
  const [ugender, setugender] = useState(urgent.gender);
  const [relation, setRelation] = useState(urgent.relation);
  const [uphone, setUphone] = useState(urgent.phone);
  const [uemail, setUemail] = useState(urgent.email);
  const [ucity, setUcity] = useState(urgent.city);
  const [uarea, setUarea] = useState(urgent.area);
  const [uaddress, setUaddress] = useState(urgent.address);

  const handleInputChange = (e) => {
    const {name, value} = e.target;

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
      case 'Identifier':
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

  const updatedUrgent = {
    ...urgent,
    name:ufirstName + " " + ulastName,
    gender:ugender,
    relation:relation,
    phone:uphone,
    email:uemail,
    city:ucity,
    area:uarea,
    address:uaddress
  }


  const editPatient = async (e) => {
    e.preventDefault();

    const name = firstName + " " + lastName;
    const uname = ufirstName + " " + ulastName;

    const updatedPatientData = {
      name,gender,birthday,Identifier,phone,email,city,area,address,Urgent:updatedUrgent
    }
    console.log(updatedUrgent);

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
                name="Identifier"
                defaultValue={Identifier}
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
                defaultValue={city}
                onChange={handleInputChange}
                required
              />
              <input
                class="w-44 row-start-2"
                type="text"
                name="area"
                defaultValue={area}
                onChange={handleInputChange}
                required
              />
              <input
                class="row-start-2"
                type="text"
                name="address"
                defaultValue={address}
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
                defaultValue={ucity}
                onChange={handleInputChange}
                required
              />
              <input
                class="w-44 row-start-2"
                type="text"
                name="uarea"
                defaultValue={uarea}
                onChange={handleInputChange}
                required
              />
              <input
                class="row-start-2 "
                type="text"
                name="uaddress"
                defaultValue={uaddress}
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
