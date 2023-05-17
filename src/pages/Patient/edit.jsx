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
  const [ufirstName, setufirstName] = useState(urgent.uname.split(" ")[0]);
  const [ulastName, setulastName] = useState(urgent.uname.split(" ")[1]);
  const [ugender, setugender] = useState(urgent.ugender);
  const [urelation, setuRelation] = useState(urgent.urelation);
  const [uphone, setUphone] = useState(urgent.uphone);
  const [uemail, setUemail] = useState(urgent.uemail);
  const [ucity, setUcity] = useState(urgent.ucity);
  const [uarea, setUarea] = useState(urgent.uarea);
  const [uaddress, setUaddress] = useState(urgent.uaddress);
  const [URID, setURID] = useState(acc[0].URID);
  console.log(URID);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "firstName":
        setfirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "gender":
        setGender(value);
        break;
      case "birthday":
        setBirthday(value);
        break;
      case "Identifier":
        setIdentifier(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "city":
        setCity(value);
        break;
      case "area":
        setArea(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "ufirstName":
        setufirstName(value);
        break;
      case "ulastName":
        setulastName(value);
        break;
      case "ugender":
        setugender(value);
        break;
      case "urelation":
        setuRelation(value);
        break;
      case "uphone":
        setUphone(value);
        break;
      case "uemail":
        setUemail(value);
        break;
      case "ucity":
        setUcity(value);
        break;
      case "uarea":
        setUarea(value);
        break;
      case "uaddress":
        setUaddress(value);
        break;

      default:
        break;
    }
  };

  const updatedUrgent = {
    ...urgent,
    URID,
    uname: ufirstName + " " + ulastName,
    ugender,
    urelation,
    uphone,
    uemail,
    ucity,
    uarea,
    uaddress,
  };

  const editPatient = async (e) => {
    e.preventDefault();

    const name = firstName + " " + lastName;

    const updatedPatientData = {
      URID,
      name,
      gender,
      birthday,
      Identifier,
      phone,
      email,
      city,
      area,
      address,
      Urgent: updatedUrgent,
    };

    axios
      .put(`/api/patient/${PID}`, updatedPatientData)
      .then((response) => {
        if (response.status === 200) {
          alert("Patient Update successfully!");
          props.setEdit(false);
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
        onSubmit={editPatient}
      >
        <div class="col-span-2 flex items-center justify-center">
          <h1 class="text-4xl font-bold text-green-600">Edit Patient</h1>
        </div>

        <div class="col-start-7 flex justify-end">
          <AiIcons.AiOutlineClose
            class="cursor-pointer text-7xl"
            onClick={() => props.setEdit(false)}
          />
        </div>

        <div class="scrollbar col-span-7 row-span-4 grid h-[93%] grid-cols-9 overflow-y-auto border-t-2">
          <div class="col-span-8 col-start-2 row-span-2 row-start-1 grid h-full grid-cols-3 grid-rows-5">
            <h1 class="col-span-5 flex items-center text-2xl font-semibold">
              Patient Info
            </h1>
            <div class="flex flex-col">
              <label class="">First Name</label>
              <input
                type="text"
                name="firstName"
                defaultValue={firstName}
                onChange={handleInputChange}
              />
            </div>
            <div class="col-start-3 flex flex-col">
              <label class="">Last Name</label>
              <input
                type="text"
                name="lastName"
                defaultValue={lastName}
                onChange={handleInputChange}
              />
            </div>
            <div class="row-start-3 flex flex-col">
              <label class="">Gender</label>
              <select
                class=" h-8 w-40 rounded-md border"
                type="text"
                name="gender"
                defaultValue={gender}
                onChange={handleInputChange}
                required
              >
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div class="row-start-3 flex flex-col">
              <label class="">Birth</label>
              <input
                class="row-start-2"
                type="date"
                name="birthday"
                defaultValue={birthday}
                onChange={handleInputChange}
                required
              />
            </div>
            <div class="row-start-3 flex flex-col">
              <label class="">ID</label>
              <input
                class="row-start-2"
                type="text"
                name="Identifier"
                defaultValue={Identifier}
                onChange={handleInputChange}
                required
              />
            </div>
            <div class="row-start-4 flex flex-col">
              <label class="">Phone</label>
              <input
                type="text"
                name="phone"
                defaultValue={phone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div class="col-start-3 row-start-4 flex flex-col">
              <label class="">Email</label>
              <input
                type="email"
                name="email"
                defaultValue={email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div class="row-start-5 flex flex-col">
              <label class="">City</label>
              <input
                class="row-start-2 w-44"
                type="text"
                name="city"
                defaultValue={city}
                onChange={handleInputChange}
                required
              />
            </div>
            <div class="row-start-5 flex flex-col">
              <label class="">Province</label>
              <input
                class="row-start-2 w-44"
                type="text"
                name="area"
                defaultValue={area}
                onChange={handleInputChange}
                required
              />
            </div>
            <div class="row-start-5 flex flex-col">
              <label class="">Address</label>
              <input
                class="row-start-2"
                type="text"
                name="address"
                defaultValue={address}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div class="col-span-8 col-start-2 row-span-2 row-start-3 grid h-full grid-cols-3 grid-rows-5">
            <h1 class="col-span-4 flex items-center text-2xl font-semibold">
              Emergency Contact
            </h1>
            <div class="flex flex-col">
              <label class="">First Name</label>
              <input
                type="text"
                name="ufirstName"
                defaultValue={ufirstName}
                onChange={handleInputChange}
              />
            </div>
            <div class="col-start-3 flex flex-col">
              <label class="">Last Name</label>
              <input
                type="text"
                name="ulastName"
                defaultValue={ulastName}
                onChange={handleInputChange}
              />
            </div>
            <div class="row-start-3 flex flex-col">
              <label class="">Gender</label>
              <select
                class="h-8 w-40 rounded-md border"
                type="text"
                name="ugender"
                defaultValue={ugender}
                onChange={handleInputChange}
                required
              >
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
            <div class="col-start-3 row-start-3 flex flex-col">
              <label class="">Relation</label>
              <input
                type="text"
                name="urelation"
                defaultValue={urelation}
                onChange={handleInputChange}
                required
              />
            </div>
            <div class="row-start-4 flex flex-col">
              <label class="">Phone</label>
              <input
                type="text"
                name="uphone"
                defaultValue={uphone}
                onChange={handleInputChange}
                required
              />
            </div>
            <div class="col-start-3 row-start-4 flex flex-col">
              <label class="">Email</label>
              <input
                type="email"
                name="uemail"
                defaultValue={uemail}
                onChange={handleInputChange}
                required
              />
            </div>
            <div class="row-start-5 flex flex-col">
              <label class="">City</label>
              <input
                type="text"
                name="ucity"
                defaultValue={ucity}
                onChange={handleInputChange}
                required
              />
            </div>
            <div class="row-start-5 flex flex-col">
              <label class="">Province</label>
              <input
                type="text"
                name="uarea"
                defaultValue={uarea}
                onChange={handleInputChange}
                required
              />
            </div>
            <div class="row-start-5 flex flex-col">
              <label class="">Address</label>
              <input
                type="text"
                name="uaddress"
                defaultValue={uaddress}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </div>
        <div class="col-span-3 col-start-3 flex items-center justify-center">
          <button
            type="submit"
            class="h-12 w-28 bg-lightgreen text-2xl font-semibold"
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
