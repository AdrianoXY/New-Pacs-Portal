import React, { useState, useEffect } from "react";
import * as BsIcons from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import axios from "../../axios/axios";

const Home = () => {
  const navigate = useNavigate();
  const [patient, setPatient] = useState(0);
  const [sample, setSample] = useState(0);

  useEffect(() => {
    axios.get("/api/count/patient").then((res) => {
      setPatient(res.data);
    });
  }, []);

  useEffect(() => {
    axios.get("/api/count/sample").then((res) => {
      setSample(res.data);
    });
  }, []);

  return (
    <div class="grid h-screen w-screen grid-cols-8 grid-rows-6 overflow-auto">
      <div class="col-span-4 row-span-3 flex items-center justify-center drop-shadow-lg">
        <div
          class="h-[50%] w-1/2 cursor-pointer rounded-xl bg-white transition-all duration-300 ease-in-out hover:h-[55%] hover:w-[55%] hover:transition-all hover:duration-300 hover:ease-in-out"
          onClick={() => navigate("/patient")}
        >
          <div class="grid w-full grid-cols-2 items-center">
            <div class="w-1/2">
              <BsIcons.BsPeopleFill class="ml-2 mt-5 text-6xl xl:text-9xl" />
            </div>

            <div class="row-start-2">
              <h1 class="ml-3 mt-5 text-5xl text-black">Patient</h1>
            </div>

            <div class="row-span-2">
              <h1 class="text-center text-8xl text-graygreen">
                {JSON.stringify(patient)}
              </h1>
            </div>
          </div>
        </div>
      </div>

      <div class="col-span-4 row-span-3 row-start-4 flex items-center justify-center drop-shadow-lg">
        <div class="h-[50%] w-1/2 cursor-pointer rounded-xl bg-white transition-all duration-300 ease-in-out hover:h-[55%] hover:w-[55%] hover:transition-all hover:duration-300 hover:ease-in-out">
          <div class="grid w-full grid-cols-2 items-center">
            <div class="w-1/2">
              <BsIcons.BsClipboardData class="ml-2 mt-5 text-6xl xl:text-9xl" />
            </div>

            <div class="row-start-2">
              <h1 class="ml-3 mt-5 text-5xl text-black">Sample</h1>
            </div>

            <div class="row-span-2">
              <h1 class="text-center text-8xl text-graygreen">
                {JSON.stringify(sample)}
              </h1>
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
            <caption class="mb-4 text-left text-5xl font-black">
              Variation Point
            </caption>
            <thead>
              <tr>
                <th class="border-b-2">No.</th>
                <th class="border-b-2">File Name</th>
                <th class="border-b-2">Status</th>
                <th class="border-b-2">Process Rate</th>
                <th class="border-b-2">Operation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="border-t-2 text-center">1</td>
                <td class="border-t-2 text-center">70146</td>
                <td class="border-t-2 text-center">77701</td>
                <td class="border-t-2 text-center">72212</td>
                <td class="border-t-2 text-center">AAAGAATACTTTTAC</td>
              </tr>
              <tr>
                <td class="border-t-2 text-center">2</td>
                <td class="border-t-2 text-center">70146</td>
                <td class="border-t-2 text-center">77701</td>
                <td class="border-t-2 text-center">72212</td>
                <td class="border-t-2 text-center">AAAGAATACTTTTAC</td>
              </tr>
              <tr>
                <td class="border-t-2 text-center">3</td>
                <td class="border-t-2 text-center">70146</td>
                <td class="border-t-2 text-center">77701</td>
                <td class="border-t-2 text-center">72212</td>
                <td class="border-t-2 text-center">AAAGAATACTTTTAC</td>
              </tr>
              <tr>
                <td class="border-t-2 text-center">4</td>
                <td class="border-t-2 text-center">70146</td>
                <td class="border-t-2 text-center">77701</td>
                <td class="border-t-2 text-center">72212</td>
                <td class="border-t-2 text-center">AAAGAATACTTTTAC</td>
              </tr>
              <tr>
                <td class="border-t-2 text-center">5</td>
                <td class="border-t-2 text-center">70146</td>
                <td class="border-t-2 text-center">77701</td>
                <td class="border-t-2 text-center">72212</td>
                <td class="border-t-2 text-center">AAAGAATACTTTTAC</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
