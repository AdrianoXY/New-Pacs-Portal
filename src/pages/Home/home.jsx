import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { csvSlice } from "../../Redux/Slices/csv";
import * as BsIcons from "react-icons/bs";
import Add from "../Patient/add";
import axios from "../../axios/axios";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [patient, setPatient] = useState(0);
  const [sample, setSample] = useState(0);
  const [add, setAdd] = useState(false);
  const agen = useSelector((state) => {
    const data = state.CSV.data;
    const lastTenValues = data.slice(-14);
    return lastTenValues;
  });
  const agenStatus = useSelector((state) => state.CSV.status);
  const agenError = useSelector((state) => state.CSV.error);

  useEffect(() => {
    axios.get("/api/count/patient").then((res) => {
      setPatient(res.data);
    });
    axios.get("/api/count/sample").then((res) => {
      setSample(res.data);
    });
  }, []);

  useEffect(() => {
    dispatch(csvSlice({}));
  }, []);

  if (agenStatus === "loading") {
    console.log("loading");
  }

  if (agenStatus === "failed") {
    console.log(agenError);
  }

  return (
    <div class="grid h-screen w-screen grid-cols-8 grid-rows-6 overflow-auto">
      <div class="col-span-4 row-span-3 flex items-center justify-center drop-shadow-lg">
        <div
          class="h-[55%] w-1/2 cursor-pointer rounded-xl bg-white transition-all duration-300 ease-in-out hover:h-[58%] hover:w-[55%] hover:transition-all hover:duration-300 hover:ease-in-out"
          onClick={() => navigate("/patient")}
        >
          <div class="grid w-full h-full grid-cols-2 place-items-center">
            <div class="w-1/2">
              <BsIcons.BsPeopleFill class="ml-2 mt-5 text-6xl text-blue-900 2xl:text-9xl" />
            </div>

            <div>
              <h1 class="text-center text-8xl text-slate-400">
                {JSON.stringify(patient)}
              </h1>
            </div>
            <div class='col-span-2'>
              <h1 class="ml-3 mt-5 text-5xl text-blue-900">Patient</h1>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-4 row-span-3 row-start-4 flex items-center justify-center drop-shadow-lg">
        <div
          class="h-[55%] w-1/2 cursor-pointer rounded-xl bg-white transition-all duration-300 ease-in-out hover:h-[58%] hover:w-[55%] hover:transition-all hover:duration-300 hover:ease-in-out"
          onClick={() => setAdd(true)}
        >
          <div class="grid w-full h-full grid-cols-2 place-items-center ">
            <div>
              <BsIcons.BsClipboardData class="ml-2 mt-5 text-6xl text-green-900 2xl:text-9xl" />
            </div>

            <div>
              <h1 class="text-center text-8xl text-slate-400">
                {JSON.stringify(sample)}
              </h1>
            </div>
            <div class="col-span-2">
              <h1 class="ml-3 mt-5 text-5xl text-green-900">Sample</h1>
            </div>
          </div>
        </div>
      </div>

      <div
        class="col-span-4 col-start-5 row-span-6 flex h-[88%] w-5/6 cursor-pointer flex-col items-center place-self-center rounded-2xl bg-white drop-shadow-lg transition-all duration-300 ease-in-out hover:h-[90%] hover:w-[85%] hover:transition-all hover:duration-300 hover:ease-in-out "
        onClick={() => navigate("/search")}
      >
        <div class="flex h-5/6 w-full flex-col items-center">
          <table class="mt-5 w-[90%] table-auto">
            <caption class="mb-4 text-left text-5xl font-black text-blue-400">
              Variation Point
            </caption>
            <thead class="sticky">
              <tr>
                <th class="border-b-2">GID</th>
                <th class="border-b-2">Chr</th>
                <th class="border-b-2">Ref</th>
                <th class="border-b-2">Alt</th>
                <th class="border-b-2">Start</th>
                <th class="border-b-2">End</th>
              </tr>
            </thead>
            <tbody class="overflow-y-scroll">
              {agen.map((item,index) => {
                return(
                  <tr key={index}>
                <td class="border-t-2 text-center">{item.GID}</td>
                <td class="border-t-2 text-center">{item.Chr}</td>
                <td class="border-t-2 text-center">{item.Ref}</td>
                <td class="border-t-2 text-center">{item.Alt}</td>
                <td class="border-t-2 text-center">{item.Start}</td>
                <td class="border-t-2 text-center">{item.End}</td>
              </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      <Add trigger={add} setAdd={setAdd} />
    </div>
  );
};

export default Home;
