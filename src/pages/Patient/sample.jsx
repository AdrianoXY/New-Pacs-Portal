import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "../../axios/axios";
import File from "./file";

const Sample = () => {
  const { PID, SID } = useParams();
  const [addf, setAddf] = useState(false);
  const [info, setInfo] = useState([]);
  const navigate = useNavigate();

  const Del = (SID) => {
    axios
      .delete(`/api/Sample/${SID}`, { params: { SID } })
      .then((response) => {
        if (response.status === 200) {
          alert("Delete Successfully!");
          navigate(`/patient/${PID}`);
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
    axios
      .get("/api/Sample", { params: { SID } })
      .then((res) => {
        setInfo(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [SID]);

  return (
    <div class="grid h-screen w-screen grid-cols-10 grid-rows-9 overflow-auto">
      {info.map((item, index) => {
        return (
          <div
            class="col-span-3 row-span-full flex h-[90%] w-[75%] flex-col items-center justify-center place-self-center rounded-md bg-white drop-shadow-md"
            key={index}
          >
            <div class="grid h-[90%] w-[90%] grid-cols-3 grid-rows-6">
              <h1 class="col-span-3 flex text-2xl font-semibold">Infomation</h1>

              <label class="col-span-2 col-start-1 text-center">SID:</label>
              <label>{item.SID}</label>

              <label class="col-span-2 col-start-1 text-center">
                External Identifier:
              </label>
              <label>{item.External}</label>

              <label class="col-span-2 col-start-1 text-center">
                Accession Identifier:
              </label>
              <label>{item.Accession}</label>

              <label class="col-span-2 col-start-1 text-center">Type:</label>
              <label>{item.type}</label>

              <label class="col-span-2 col-start-1 text-center">
                Received Time:
              </label>
              <label>{item.Receivedtime}</label>
            </div>

            <div class="grid h-[90%] w-[90%] grid-cols-3 grid-rows-7 border-t-2">
              <h1 class="col-span-3 flex text-2xl font-semibold">
                Collection Details
              </h1>

              <label class="col-span-2 col-start-1 text-center">
                Collection Time:
              </label>
              <label>{item.collectionTime}</label>

              <label class="col-span-2 col-start-1 text-center">
                Duration:
              </label>
              <label>{item.Duration}</label>

              <label class="col-span-2 col-start-1 text-center">
                Quantity:
              </label>
              <label>{item.Quantity}</label>

              <label class="col-span-2 col-start-1 text-center">Method:</label>
              <label>{item.Method}</label>

              <label class="col-span-2 col-start-1 text-center">
                Body Site:
              </label>
              <label>{item.Bodysite}</label>

              <label class="col-span-2 col-start-1 text-center">
                Fasting Status:
              </label>
              <label>{item.FastingStatus}</label>
            </div>

            <div class=" grid h-[90%] w-[90%] grid-cols-3 grid-rows-4 border-t-2">
              <h1 class="col-span-3 flex text-2xl font-semibold">
                Processing Details
              </h1>

              <label class="col-span-2 col-start-1 text-center">
                Procedure:
              </label>
              <label>{item.Procedure}</label>

              <label class="col-span-2 col-start-1 text-center">
                Processing Time:
              </label>
              <label>{item.ProcedureTime}</label>

              <label class="col-span-2 col-start-1 text-center">
                Description:
              </label>
              <label>{item.Description}</label>
            </div>

            <div class="grid h-[90%] w-[90%] grid-cols-3 grid-rows-6 border-t-2">
              <h1 class="col-span-3 flex text-2xl font-semibold">Container</h1>

              <label class="col-span-2 col-start-1 text-center">
                Identifier:
              </label>
              <label>{item.identifier}</label>

              <label class="col-span-2 col-start-1 text-center">Type:</label>
              <label>{item.Ctype}</label>

              <label class="col-span-2 col-start-1 text-center">
                Capacity:
              </label>
              <label>{item.Capacity}</label>

              <label class="col-span-2 col-start-1 text-center">
                Specimen Quantity:
              </label>
              <label>{item.SpecimenQuantity}</label>

              <label class="col-span-2 col-start-1 text-center">
                Description:
              </label>
              <label>{item.CDescription}</label>
            </div>
          </div>
        );
      })}

      <div class="col-span-7 w-[95%]">
        <div class="flex w-full items-center justify-between ">
          <label class="ml-5 mt-5 text-5xl font-black">File</label>
          <div class="flex flex-row">
            <button
              class="mr-10 h-10 w-28 rounded-md bg-red-600 text-xl"
              onClick={() =>
                window.confirm("Are you sure to delete?") && Del(SID)
              }
            >
              Delete
            </button>
            <button
              class="mr-10 h-10 w-28 rounded-md text-xl"
              onClick={() => setAddf(true)}
            >
              Upload File
            </button>
          </div>
        </div>
      </div>

      <div class="col-span-7 col-start-4 row-span-2">
        <table class="w-[95%] table-auto rounded-md bg-white drop-shadow-md">
          <caption class="text-left text-2xl font-semibold">
            Sequencing raw data(.fastq)
          </caption>
          <thead>
            <tr>
              <th class="border-b-2">No.</th>
              <th class="border-b-2">File Name</th>
              <th class="border-b-2">File Size</th>
              <th class="border-b-2">State</th>
              <th class="border-b-2">Processing Progress</th>
              <th class="border-b-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th class="border-t-2">1</th>
              <th class="border-t-2">1234</th>
              <th class="border-t-2">A123456789</th>
              <th class="border-t-2">A123456777</th>
              <th class="border-t-2">Blood</th>
              <th class="border-t-2">
                <button class="h-10 w-20 rounded-md bg-red-600">Delete</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-span-7 col-start-4 row-span-2">
        <table class="w-[95%] table-auto rounded-md bg-white drop-shadow-md">
          <caption class="text-left text-2xl font-semibold">
            Alignment(.bam,.bai)
          </caption>
          <thead>
            <tr>
              <th class="border-b-2">No.</th>
              <th class="border-b-2">File Name</th>
              <th class="border-b-2">File Size</th>
              <th class="border-b-2">State</th>
              <th class="border-b-2">Processing Progress</th>
              <th class="border-b-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th class="border-t-2">1</th>
              <th class="border-t-2">1234</th>
              <th class="border-t-2">A123456789</th>
              <th class="border-t-2">A123456777</th>
              <th class="border-t-2">Blood</th>
              <th class="border-t-2">
                <button class="h-10 w-20 rounded-md bg-red-600">Delete</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-span-7 col-start-4 row-span-2">
        <table class="w-[95%] table-auto rounded-md bg-white drop-shadow-md">
          <caption class="text-left text-2xl font-semibold">
            Variant calling (.vcf, .tbi, .idx)
          </caption>
          <thead>
            <tr>
              <th class="border-b-2">No.</th>
              <th class="border-b-2">File Name</th>
              <th class="border-b-2">File Size</th>
              <th class="border-b-2">State</th>
              <th class="border-b-2">Processing Progress</th>
              <th class="border-b-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th class="border-t-2">1</th>
              <th class="border-t-2">1234</th>
              <th class="border-t-2">A123456789</th>
              <th class="border-t-2">A123456777</th>
              <th class="border-t-2">Blood</th>
              <th class="border-t-2">
                <button class="h-10 w-20 rounded-md bg-red-600">Delete</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-span-7 col-start-4 row-span-2">
        <table class="w-[95%] table-auto rounded-md bg-white drop-shadow-md">
          <caption class="text-left text-2xl font-semibold">
            Annotation (.csv, .xlsx)
          </caption>
          <thead>
            <tr>
              <th class="border-b-2">No.</th>
              <th class="border-b-2">File Name</th>
              <th class="border-b-2">File Size</th>
              <th class="border-b-2">State</th>
              <th class="border-b-2">Processing Progress</th>
              <th class="border-b-2">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th class="border-t-2">1</th>
              <th class="border-t-2">1234</th>
              <th class="border-t-2">A123456789</th>
              <th class="border-t-2">A123456777</th>
              <th class="border-t-2">Blood</th>
              <th class="border-t-2">
                <button class="h-10 w-20 rounded-md bg-red-600">Delete</button>
              </th>
            </tr>
          </tbody>
        </table>
      </div>

      <File trigger={addf} setAddf={setAddf} PID={PID} SID={SID} />
    </div>
  );
};

export default Sample;
