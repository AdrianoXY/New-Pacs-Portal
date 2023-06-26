import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { sampleSlice } from "../../Redux/Slices/sample";
import { fileSlice } from "../../Redux/Slices/file";
import axios from "../../axios/axios";
import File from "./file";

const Sample = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { PID, SID } = useParams();
  const [addf, setAddf] = useState(false);
  const [file, setFile] = useState([]);
  const sampleInfo = useSelector((state) => state.Sample.data);
  const sampleStatus = useSelector((state) => state.Sample.status);
  const sampleError = useSelector((state) => state.Sample.error);
  const fileInfo = useSelector((state) => state.File.data);
  const fileStatus = useSelector((state) => state.File.status);
  const fileError = useSelector((state) => state.File.error);

  const Del = (SID) => {
    axios
      .delete(`/api/Sample/${SID}`, JSON.stringify(PID))
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

  const Delf = (FID) => {
    axios
      .delete(`/api/file/${FID}`)
      .then((response) => {
        if (response.status === 200) {
          alert("Delete Successfully!");
          console.log(FID);
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

  useEffect(() => {
    dispatch(sampleSlice({ SID }));
  }, [SID]);

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

  const formatFileSize = (size) => {
    const units = ["B", "KB", "MB", "GB", "TB"];
    let fileSize = size;
    let unitIndex = 0;

    while (fileSize >= 1024 && unitIndex < units.length - 1) {
      fileSize /= 1024;
      unitIndex++;
    }

    const formattedSize = fileSize.toFixed(1);
    const unit = units[unitIndex];

    return `${formattedSize} ${unit}`;
  };

  return (
    <div class="grid h-screen w-screen grid-cols-10 grid-rows-9 overflow-auto">
      {sampleInfo.map((item, index) => {
        return (
          <div
            class="col-span-3 row-span-full flex h-[90%] w-[75%] flex-col items-center justify-center place-self-center rounded-md bg-white drop-shadow-sm"
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
        <h1 class="text-left text-2xl font-semibold">
          Sequencing raw data(.fastq)
        </h1>
        <div class="scrollbar h-[80%] w-[95%] overflow-y-auto">
          <table class="w-full table-fixed rounded-md bg-white drop-shadow-sm">
            <thead class="sticky top-0 bg-white">
              <tr>
                <th class="border-b-2">File Name</th>
                <th class="border-b-2">File Size</th>
                <th class="border-b-2">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y">
              {fileInfo.map((file) => {
                const extension = file.filename.split(".").pop().toLowerCase();

                if (extension !== "fastq") {
                  return null;
                }

                const fileSize = formatFileSize(file.size);

                return (
                  <tr key={file._id}>
                    <th class='break-words'>{file.filename}</th>
                    <th>{fileSize}</th>
                    <th>
                      <button
                        class="h-10 w-20 rounded-md bg-red-600"
                        onClick={() =>
                          window.confirm("Are you sure to delete?") &&
                          Delf(file.FID)
                        }
                      >
                        Delete
                      </button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-span-7 col-start-4 row-span-2">
        <h1 class="text-left text-2xl font-semibold">Alignment(.bam,.bai)</h1>
        <div class="scrollbar h-[80%] w-[95%] overflow-y-auto">
          <table class="w-full table-fixed rounded-md bg-white drop-shadow-sm">
            <thead class="sticky top-0 bg-white">
              <tr>
                <th class="border-b-2">File Name</th>
                <th class="border-b-2">File Size</th>
                <th class="border-b-2">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y">
              {fileInfo.map((file) => {
                const extension = file.filename.split(".").pop().toLowerCase();

                if (extension !== "bam" && extension !== "bai") {
                  return null;
                }

                const fileSize = formatFileSize(file.size);

                return (
                  <tr key={file._id}>
                    <th class='break-words'>{file.filename}</th>
                    <th>{fileSize}</th>
                    <th>
                      <button
                        class="h-10 w-20 rounded-md bg-red-600"
                        onClick={() =>
                          window.confirm("Are you sure to delete?") &&
                          Delf(file.FID)
                        }
                      >
                        Delete
                      </button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-span-7 col-start-4 row-span-2">
        <h1 class="text-left text-2xl font-semibold">
          Variant calling (.vcf, .tbi, .idx)
        </h1>
        <div class="scrollbar h-[80%] w-[95%] overflow-y-auto">
          <table class="w-full table-fixed rounded-md bg-white drop-shadow-sm">
            <thead class="sticky top-0 bg-white">
              <tr>
                <th class="border-b-2">File Name</th>
                <th class="border-b-2">File Size</th>
                <th class="border-b-2">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y">
              {fileInfo.map((file) => {
                const extension = file.filename.split(".").pop().toLowerCase();

                if (
                  extension !== "vcf" &&
                  extension !== "tbi" &&
                  extension !== "idx"
                ) {
                  return null;
                }

                const fileSize = formatFileSize(file.size);

                return (
                  <tr key={file._id}>
                    <th class='break-words'>{file.filename}</th>
                    <th>{fileSize}</th>
                    <th>
                      <button
                        class="h-10 w-20 rounded-md bg-red-600"
                        onClick={() =>
                          window.confirm("Are you sure to delete?") &&
                          Delf(file.FID)
                        }
                      >
                        Delete
                      </button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div class="col-span-7 col-start-4 row-span-2">
        <h1 class="text-left text-2xl font-semibold">
          Annotation (.csv, .xlsx)
        </h1>
        <div class="scrollbar h-[80%] w-[95%] overflow-y-auto">
          <table class="w-full table-fixed rounded-md bg-white drop-shadow-sm">
            <thead class="sticky top-0 bg-white">
              <tr>
                <th class="border-b-2">File Name</th>
                <th class="border-b-2">File Size</th>
                <th class="border-b-2">Action</th>
              </tr>
            </thead>
            <tbody class="divide-y">
              {fileInfo.map((file) => {
                const extension = file.filename.split(".").pop().toLowerCase();

                if (extension !== "csv" && extension !== "xlsx") {
                  return null;
                }

                const fileSize = formatFileSize(file.size);

                return (
                  <tr key={file._id}>
                    <th class='break-words'>{file.filename}</th>
                    <th>{fileSize}</th>
                    <th>
                      <button
                        class="h-10 w-20 rounded-md bg-red-600"
                        onClick={() =>
                          window.confirm("Are you sure to delete?") &&
                          Delf(file.FID)
                        }
                      >
                        Delete
                      </button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <File trigger={addf} setAddf={setAddf} PID={PID} SID={SID} />
    </div>
  );
};

export default Sample;
