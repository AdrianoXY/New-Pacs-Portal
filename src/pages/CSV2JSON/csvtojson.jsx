import React, { useState, useEffect } from "react";
import * as AiIcons from "react-icons/ai";
import axios from "../../axios/axios";

const Manage = () => {
  const [progressPercentage, setProgressPercentage] = useState([]);
  const [sample, setSample] = useState([]);
  const [file, setFile] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 12;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < Math.ceil(sample.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const Conversion = (PID, SID, fileID, index) => {
    console.log(PID, SID, fileID);
    axios
      .post("/api/csv", JSON.stringify({ PID, SID, fileID }))
      .then((res) => {
        if (res.status === 200) {
          alert("Conversion Successfully!");
        }
      })
      .catch((err) => {
        if (err.response.status === 403) {
          console.log("Fail");
        } else {
          alert("Fail");
        }
      });
  };

  useEffect(() => {
    axios
      .get(`/api/file`)
      .then((res) => {
        setFile(res.data.filter((item) => item.filename.endsWith(".csv")));
        console.log(file);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`/api/sample`)
      .then((res) => {
        setSample(
          res.data.filter((sample) =>
            file.some((fileItem) => fileItem.SID === sample.SID)
          )
        );
        console.log(sample);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div class="grid h-screen w-screen grid-cols-9 grid-rows-6 overflow-auto">
      <div class="col-start-2 place-self-center">
        <input class="h-12 w-52 rounded-lg border-2" placeholder="PID" />
      </div>

      <div class="col-start-4 place-self-center">
        <input class="h-12 w-52 rounded-lg border-2" placeholder="SID" />
      </div>

      <div class="col-start-6 place-self-center">
        <input
          class="h-12 w-52 rounded-lg border-2"
          placeholder="Sequence Type"
        />
      </div>

      <div class="col-start-8 place-self-center">
        <input
          class="h-12 w-52 rounded-lg border-2"
          placeholder="Analysis Type"
        />
      </div>

      <div class="col-span-9 col-start-1 row-span-5 row-start-2 flex h-[95%] w-[95%] flex-col place-self-center rounded-2xl bg-white drop-shadow-xl ">
        <div class="flex justify-center">
          <table class="mt-5 w-[95%] table-auto">
            <thead>
              <tr>
                <th class=" border-b-4">PID</th>
                <th class=" border-b-4">SID</th>
                <th class=" border-b-4">FileName</th>
                <th class=" border-b-4">Process Rate(undone/complete)</th>
                <th class=" border-b-4">Operation</th>
              </tr>
            </thead>
            <tbody>
              {file.map((file, index) => {
                const pidArray = sample.map((item) => item.PID);
                return (
                  <tr key={index}>
                    <th class="border-t-2 ">{pidArray[index]}</th>
                    <th class="border-t-2 ">{file.SID}</th>
                    <th class="border-t-2 ">{file.filename}</th>
                    <th class="border-t-2 ">
                      <div class="flex w-full items-center justify-center">
                        <div class="h-3 w-52 rounded-md bg-gray-300 ">
                          <div
                            style={{ width: `${progressPercentage[index]}%` }}
                            class={`h-full rounded-md ${
                              progressPercentage < 70
                                ? "bg-red-600"
                                : "bg-green-600"
                            }`}
                          />
                        </div>
                      </div>
                    </th>
                    <th class="border-t-2">
                      <button
                        class="h-10 w-36 rounded-md"
                        onClick={() =>
                          Conversion(pidArray[index], file.SID, file._id, index)
                        }
                      >
                        conversion
                      </button>
                    </th>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div class="col-span-1 col-start-4 mb-10 place-self-end bg-white">
        <button
          className="flex h-10 w-10 items-center justify-center"
          onClick={goToPreviousPage}
        >
          <AiIcons.AiOutlineCaretLeft />
        </button>
      </div>

      <div class="col-span-1 col-start-5 mb-10 place-self-center">
        {currentPage}
      </div>

      <div class="col-span-1 col-start-6 mb-10 place-self-start bg-white">
        <button
          className="flex h-10 w-10 items-center justify-center"
          onClick={goToNextPage}
        >
          <AiIcons.AiOutlineCaretRight />
        </button>
      </div>
    </div>
  );
};

export default Manage;
