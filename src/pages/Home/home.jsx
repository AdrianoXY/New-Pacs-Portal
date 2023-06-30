import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sampleSlice } from "../../Redux/Slices/sample";
import { fileSlice } from "../../Redux/Slices/file";
import axios from "../../axios/axios";
import * as BsIcons from "react-icons/bs";
import Add from "../Patient/add";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [patient, setPatient] = useState(0);
  const [sample, setSample] = useState(0);
  const [PID, setPID] = useState("");
  const [SID, setSID] = useState("");
  const [add, setAdd] = useState(false);
  const fileData = useSelector((state) => {
    const data = state.File.data;
    const filteredData = data.filter((item) => item.filename.endsWith(".csv"));
    const lastTenValues = filteredData.slice(-13);
    return lastTenValues;
  });
  const sampleData = useSelector((state) => {
    const data = state.Sample.data;
    const filteredData = data.filter((sample) =>
      fileData.some((fileItem) => fileItem.SID === sample.SID)
    );
    const lastTenValues = filteredData.slice(-13);
    return lastTenValues;
  });
  const sampleStatus = useSelector((state) => state.Sample.status);
  const sampleError = useSelector((state) => state.Sample.error);
  const fileStatus = useSelector((state) => state.File.status);
  const fileError = useSelector((state) => state.File.error);

  useEffect(() => {
    axios.get("/api/count/patient").then((res) => {
      setPatient(res.data);
    });
    axios.get("/api/count/sample").then((res) => {
      setSample(res.data);
    });
  }, []);

  useEffect(() => {
    dispatch(sampleSlice({ PID, SID }));
  }, [PID, SID]);

  if (sampleStatus === "loading") {
    console.log("loading");
  }

  if (sampleStatus === "failed") {
    console.log(sampleError);
  }

  useEffect(() => {
    dispatch(fileSlice({ SID }));
  }, [SID]);

  if (fileStatus === "loading") {
    console.log("loading");
  }

  if (fileStatus === "failed") {
    console.log(fileError);
  }

  return (
    <div class="grid h-screen w-screen grid-cols-8 grid-rows-6 overflow-auto">
      <div class="col-span-4 row-span-3 flex items-center justify-center drop-shadow-lg">
        <div
          class="h-[55%] w-1/2 cursor-pointer rounded-xl bg-white transition-all duration-300 ease-in-out hover:h-[58%] hover:w-[55%] hover:transition-all hover:duration-300 hover:ease-in-out"
          onClick={() => navigate("/patient")}
        >
          <div class="grid h-full w-full grid-cols-2 place-items-center">
            <div class="w-1/2">
              <BsIcons.BsPeopleFill class="ml-2 mt-5 text-8xl text-blue-900" />
            </div>

            <div>
              <h1 class="text-center text-8xl text-slate-400">
                {JSON.stringify(patient)}
              </h1>
            </div>
            <div class="col-span-2">
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
          <div class="grid h-full w-full grid-cols-2 place-items-center ">
            <div>
              <BsIcons.BsClipboardData class="ml-2 mt-5 text-8xl text-green-900" />
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
        class="col-span-4 col-start-5 row-span-6 flex h-[85%] w-5/6 cursor-pointer flex-col items-center place-self-center rounded-2xl bg-white drop-shadow-lg"
        onClick={() => navigate("/csvtojson")}
      >
        <div class="flex h-[95%] w-full flex-col items-center">
          <h1 class="mt-4 text-5xl font-black text-blue-400">CSV to JSON</h1>
          <div class="mt-5 w-[90%] overflow-y-hidden">
            <table class="w-full table-auto">
              <thead class="sticky top-0 bg-white">
                <tr>
                  <th class=" border-b-4">PID</th>
                  <th class=" border-b-4">SID</th>
                  <th class=" border-b-4">FileName</th>
                  <th class=" border-b-4">Process Rate(undone/done)</th>
                </tr>
              </thead>
              <tbody class="h-[100%] divide-y">
              {sampleData.map((sample) => {
                  const filterFile = fileData.filter(
                    (item) => item.SID === sample.SID
                  );
                  const filemap = filterFile.map((file, fileIndex) => {
                    return (
                      <tr key={fileIndex}>
                        <th>{sample.PID}</th>
                        <th>{sample.SID}</th>
                        <th>{file.filename}</th>
                        <th>{file.state}</th>
                      </tr>
                    );
                  });

                  return filemap;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Add trigger={add} setAdd={setAdd} />
    </div>
  );
};

export default Home;
