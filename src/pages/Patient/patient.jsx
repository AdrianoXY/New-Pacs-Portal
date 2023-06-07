import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allPatient } from "../../Redux/Slices/patient";
import { sampleSlice } from "../../Redux/Slices/sample";
import Edit from "./edit";
import Add from "./add";
import axios from "../../axios/axios";
import * as AiIcons from "react-icons/ai";

const Patient = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { PID } = useParams();
  const [edited, setEdit] = useState(false);
  const [add, setAdd] = useState(false);
  const acc = useSelector((state) => state.Patient.data);
  const patientStatus = useSelector((state) => state.Patient.status);
  const patientError = useSelector((state) => state.Patient.error);
  const sampleData = useSelector((state) => state.Sample.data);
  const sampleStatus = useSelector((state) => state.Sample.status);
  const sampleError = useSelector((state) => state.Sample.error);

  const sDel = (SID) => {
    axios
      .delete(`/api/Sample/${SID}`, { params: { SID } })
      .then((response) => {
        if (response.status === 200) {
          alert("Delete Successfully!");
          window.location.reload();
        }
      })
      .catch((err) => {
        if (err.response.status === 403) {
          console.log("Fail");
        } else {
          alert("Delete Fail");
        }
      });
  };

  const Del = (PID) => {
    axios
      .delete(`/api/patient/${PID}`, { params: { PID } })
      .then((response) => {
        if (response.status === 200) {
          alert("Delete Successfully");
          navigate("/patient");
        }
      })
      .catch((err) => {
        if (err.response.status === 403) {
          console.log("Fail");
        } else {
          alert("Delete Fail");
        }
      });
  };

  useEffect(() => {
    dispatch(allPatient({ PID }));
  }, [PID]);

  if (patientStatus === "loading") {
    console.log("loading");
  }

  if (patientStatus === "failed") {
    console.log(patientError);
  }

  useEffect(() => {
    dispatch(sampleSlice({ PID }));
  }, [PID]);

  if (sampleStatus === "loading") {
    console.log("loading");
  }

  if (sampleStatus === "failed") {
    console.log(sampleError);
  }

  return (
    <div class="grid h-screen w-screen grid-cols-10 grid-rows-6 overflow-auto">
      <div class="col-span-3 row-span-2 flex h-full w-full items-center justify-center ">
        <div class="flex h-[90%] w-[90%] flex-col items-center justify-center rounded-lg bg-white drop-shadow-md ">
          <AiIcons.AiOutlineUser class="rounded-full border-2 p-2 text-[12rem]" />
          {acc.map((item) => {
            return (
              <label class="mt-5">
                Name:
                <span class="ml-2 text-xl font-normal text-graygreen">
                  {item.name}
                </span>
              </label>
            );
          })}
        </div>
      </div>

      <div class="row-star-3 col-span-3 col-start-1 row-span-4 flex h-full w-full flex-col items-center justify-center ">
        <div class="grid h-[80%] w-[90%] grid-cols-2 grid-rows-6 rounded-lg bg-white drop-shadow-md">
          <h1 class="col-span-2 ml-5 mt-5 text-4xl font-black">Information:</h1>
          {acc.map((item, index) => {
            return (
              <div
                class="col-span-2 row-span-4 row-start-2 grid grid-cols-2"
                key={index}
              >
                <label class="text-center">ID:</label>
                <label class="text-lg font-normal text-slate-600">
                  {item.Identifier}
                </label>
                <label class="text-center">Gender:</label>
                <label class="text-lg font-normal text-slate-600">
                  {item.gender}
                </label>
                <label class="text-center">Birth:</label>
                <label class="text-lg font-normal text-slate-600">
                  {item.birthday}
                </label>
                <label class="text-center">Email:</label>
                <label class="break-words text-lg font-normal text-slate-600">
                  {item.email}
                </label>
                <label class="text-center">Phone:</label>
                <label class="text-lg font-normal text-slate-600">
                  {item.phone}
                </label>
                <label class="text-center">Address:</label>
                <label class="text-lg font-normal text-slate-600">
                  {item.city}
                  {item.area}
                  {item.address}
                </label>
              </div>
            );
          })}

          <div class="col-span-2 row-start-6 mt-4 flex w-full justify-center">
            <button
              class="mr-10 mt-2 h-10 w-28 rounded-md text-xl"
              onClick={() => setEdit(true)}
            >
              Edit
            </button>
            <button
              class="mr-10 mt-2 h-10 w-28 rounded-md bg-red-600 text-xl"
              onClick={() =>
                window.confirm("Are you sure to delete?") && Del(PID)
              }
            >
              Delete
            </button>
          </div>
        </div>
      </div>

      <div class="col-span-7 col-start-4 row-span-6 row-start-1 flex h-full w-full items-center justify-center">
        <div class="flex h-[96.5%] w-[95%] flex-col items-center rounded-lg bg-white drop-shadow-md">
          <div class="flex w-full items-center justify-between">
            <label class="ml-5 mt-5 text-5xl font-black">Sample</label>
            <button class="mr-10 mt-5 flex h-12 w-52 flex-row items-center justify-center rounded-md">
              <AiIcons.AiFillFolderAdd class="text-4xl" />
              <h2 class="text-2xl" onClick={() => setAdd(true)}>
                Add Sample
              </h2>
            </button>
          </div>

          <table class="w-[95%] table-auto">
            <thead>
              <tr>
                <th class="border-b-2">SID</th>
                <th class="border-b-2">External Identifier</th>
                <th class="border-b-2">Accession Identifier</th>
                <th class="border-b-2">Type</th>
                <th class="border-b-2">Received Time</th>
                <th class="border-b-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {sampleData.length > 0 &&
                sampleData.map((item, index) => {
                  return (
                    <tr key={index}>
                      <th class="border-t-2">{item.SID}</th>
                      <th class="border-t-2">{item.External}</th>
                      <th class="border-t-2">{item.Accession}</th>
                      <th class="border-t-2">{item.type}</th>
                      <th class="border-t-2">{item.Receivedtime}</th>
                      <th class="border-t-2">
                        <div class="flex flex-row items-center justify-around">
                          <button
                            class="h-10 w-20"
                            onClick={() =>
                              navigate(`/patient/${PID}/${item.SID}`)
                            }
                          >
                            View
                          </button>
                          <button
                            class="h-10 w-10 bg-red-600"
                            onClick={() =>
                              window.confirm("Are you sure to delete?") &&
                              sDel(item.SID)
                            }
                          >
                            <AiIcons.AiFillDelete class="ml-2 text-2xl" />
                          </button>
                        </div>
                      </th>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </div>

      <Add trigger={add} setAdd={setAdd} PID={PID} />
      {edited && (
        <Edit trigger={edited} setEdit={setEdit} PID={PID} acc={acc} />
      )}
    </div>
  );
};

export default Patient;
