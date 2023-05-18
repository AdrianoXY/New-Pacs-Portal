import React, { useState } from "react";
import axios from "../../axios/axios";
import * as AiIcons from "react-icons/ai";

const Add = (props) => {
  const { PID } = props;
  const [files, setFiles] = useState([]);

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(selectedFiles);
  };


  const createSample = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const External = formData.get("External");
    const Accession = formData.get("Accession");
    const type = formData.get("type");
    const Received = formData.get("Received");
    const Collection = formData.get("Collection");
    const Duration = formData.get("Duration");
    const Quantity = formData.get("Quantity");
    const Method = formData.get("Method");
    const Bodysite = formData.get("Bodysite");
    const FastingStatus = formData.get("FastingStatus");
    const Procedure = formData.get("Procedure");
    const ProcedureTime = formData.get("ProcedureTime");
    const Description = formData.get("Description");
    const identifier = formData.get("identifier");
    const Ctype = formData.get("Ctype");
    const Capacity = formData.get("Capacity");
    const SpecimenQuantity = formData.get("SpecimenQuantity");
    const CDescription = formData.get("CDescription");

    console.log(
      files,
      External,
      Accession,
      type,
      Received,
      Collection,
      Duration,
      Quantity,
      Method,
      Bodysite,
      FastingStatus,
      Procedure,
      ProcedureTime,
      Description,
      identifier,
      Ctype,
      Capacity,
      SpecimenQuantity,
      CDescription
    );

    axios
      .post(
        "/api/Sample",
        JSON.stringify({
          files,
          PID,
          External,
          Accession,
          type,
          Received,
          Collection,
          Duration,
          Quantity,
          Method,
          Bodysite,
          FastingStatus,
          Procedure,
          ProcedureTime,
          Description,
          identifier,
          Ctype,
          Capacity,
          SpecimenQuantity,
          CDescription,
        })
      )
      .then((response) => {
        if (response.status === 200) {
          alert("Sample added successfully");
          console.log(files);
          // props.setAdd(false);
          // window.location.reload();
        }
      })
      .catch((err) => {
        if (!err.response) {
          console.log(err);
          alert("Network Error");
        } else if (err.response.status === 400) {
          alert("Invalid Request");
        }
      });
  };

  return props.trigger ? (
    <div class="fixed z-10 grid h-screen w-screen grid-cols-9 grid-rows-6 overflow-auto bg-gray-600 bg-opacity-70">
      <form
        class="col-span-5 col-start-3 row-span-4 row-start-2 grid h-[95%] w-[95%] animate-fadein grid-cols-7 grid-rows-6 place-self-center rounded-md bg-white drop-shadow-lg"
        onSubmit={createSample}
      >
        <div class="col-span-2 flex items-center justify-center">
          <h1 class="text-4xl font-bold text-green-600">Add Sample</h1>
        </div>

        <div class="col-start-7 flex justify-end">
          <AiIcons.AiOutlineClose
            class="cursor-pointer text-7xl"
            onClick={() => props.setAdd(false)}
          />
        </div>

        <div class="scrollbar col-span-7 row-span-4 grid h-[93%] grid-cols-9 overflow-y-auto border-t-2">
          <div class="col-span-8 col-start-2 row-span-2 row-start-1 grid h-full grid-cols-3 grid-rows-3">
            <h1 class="col-span-3 flex items-center text-2xl font-semibold">
              Sample Info
            </h1>
            <div class="flex flex-col">
              <label>PID</label>
              <input class="w-52" type="text" defaultValue={PID} id="PID" name="PID" />
            </div>
            <div class="flex flex-col">
              <label>External Identifier</label>
              <input class="w-52" type="text" id="External" name="External" />
            </div>
            <div class="flex flex-col">
              <label>Accession Identifier</label>
              <input class="w-52" type="text" id="Accession" name="Accession" />
            </div>
            <div class="flex flex-col">
              <label>Type</label>
              <input class="w-52" type="text" id="type" name="type" />
            </div>
            <div class="flex flex-col">
              <label>Received Time</label>
              <input class="w-52" type="text" id="Received" name="Received" />
            </div>
          </div>

          <div class="col-span-8 col-start-2 row-span-2 row-start-3 grid h-full grid-cols-3 grid-rows-3">
            <h1 class="col-span-3 flex items-center text-2xl font-semibold">
              Collection Details
            </h1>
            <div class="flex flex-col">
              <label>Collection Time</label>
              <input
                class="w-52"
                type="text"
                id="Collection"
                name="Collection"
              />
            </div>
            <div class="flex flex-col">
              <label>Duration</label>
              <input class="w-52" type="text" id="Duration" name="Duration" />
            </div>
            <div class="flex flex-col">
              <label>Quantity</label>
              <input class="w-52" type="text" id="Quantity" name="Quantity" />
            </div>
            <div class="flex flex-col">
              <label>Method</label>
              <input class="w-52" type="text" id="Method" name="Method" />
            </div>
            <div class="flex flex-col">
              <label>Body Site</label>
              <input class="w-52" type="text" id="Bodysite" name="Bodysite" />
            </div>
            <div class="flex flex-col">
              <label>Fasting Status</label>
              <input
                class="w-52"
                type="text"
                id="FastingStatus"
                name="FastingStatus"
              />
            </div>
          </div>

          <div class="col-span-8 col-start-2 row-span-1 row-start-5 grid h-full grid-cols-3 grid-rows-2">
            <h1 class="col-span-3 flex items-center text-2xl font-semibold">
              Processing Details
            </h1>
            <div class="flex flex-col">
              <label>Procedure</label>
              <input class="w-52" type="text" id="Procedure" name="Procedure" />
            </div>
            <div class="flex flex-col">
              <label>Processing Time</label>
              <input
                class="w-52"
                type="text"
                id="ProcedureTime"
                name="ProcedureTime"
              />
            </div>
            <div class="flex flex-col">
              <label>Description</label>
              <input
                class="w-52"
                type="text"
                id="Description"
                name="Description"
              />
            </div>
          </div>
          <div class="col-span-8 col-start-2 row-span-2 row-start-7 grid h-full grid-cols-3 grid-rows-3">
            <h1 class="col-span-3 flex items-center text-2xl font-semibold">
              Container
            </h1>
            <div class="flex flex-col">
              <label>Identifier</label>
              <input
                class="w-52"
                type="text"
                id="identifier"
                name="identifier"
              />
            </div>
            <div class="flex flex-col">
              <label>Type</label>
              <input class="w-52" type="text" id="Ctype" name="Ctype" />
            </div>
            <div class="flex flex-col">
              <label>Capacity</label>
              <input class="w-52" type="text" id="Capacity" name="Capacity" />
            </div>
            <div class="flex flex-col">
              <label>Specimen Quantity</label>
              <input
                class="w-52"
                type="text"
                id="SpecimenQuantity"
                name="SpecimenQuantity"
              />
            </div>
            <div class="flex flex-col">
              <label>Description</label>
              <input
                class="w-52"
                type="text"
                id="CDescription"
                name="CDescription"
              />
            </div>
          </div>

          <div class="col-span-7 col-start-2 row-span-2 row-start-9 mt-7 h-full">
            <label
              for="dropzone-file"
              class="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100"
            >
              <div class="flex h-[100%] flex-wrap items-start justify-start overflow-y-auto">
                {files.length > 0 ? (
                  <>
                    {files.map((file, index) => (
                      <div class="m-2" key={index}>
                        <AiIcons.AiFillFileText />
                        <p className="mb-2 text-lg text-gray-500">
                          {file.name}
                        </p>
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    <AiIcons.AiOutlineCloudUpload class="mb-3 h-10 w-10 text-gray-400" />
                    <p class="mb-2 text-sm text-gray-500">
                      <span class="font-semibold">Click to upload</span> or drag
                      and drop
                    </p>
                  </>
                )}
              </div>
              <input
                id="dropzone-file"
                type="file"
                class="hidden"
                multiple
                onChange={handleFileSelect}
              />
            </label>
          </div>
        </div>
        <div class="col-span-3 col-start-3 flex items-center justify-center">
          <button
            class="h-12 w-28 bg-lightgreen text-2xl font-semibold"
            type="submit"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  ) : (
    ""
  );
};

export default Add;
