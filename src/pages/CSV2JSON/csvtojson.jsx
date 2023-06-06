import React, { useState, useEffect } from "react";
import * as AiIcons from "react-icons/ai";
import axios from "../../axios/axios";

const Manage = () => {
  const [progressPercentage, setProgressPercentage] = useState([]);
  const [sample, setSample] = useState([]);
  const [file, setFile] = useState([]);
  const [currentPage, setCurrentPage] = useState(1)

  
  const itemsPerPage = 12

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

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
          const uploadProgress = (e) => {
            const percentComplete = (e.loaded / e.total) * 100;
            console.log(percentComplete);

            setProgressPercentage((prevProgressPercentages) => {
              const updatedProgressPercentages = [...prevProgressPercentages];
              updatedProgressPercentages[index] = percentComplete;
              return updatedProgressPercentages;
            });
          };

          const config = {
            onUploadProgress: uploadProgress,
          };

          axios
            .post("/api/csv", JSON.stringify({ PID, SID, fileID }), config)
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
      .get(`/api/sample`)
      .then((res) => {
        setSample(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`/api/file`)
      .then((res) => {
        setFile(res.data);
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
                <th class=" border-b-4">Process Rate(complete/total)</th>
                <th class=" border-b-4">Operation</th>
              </tr>
            </thead>
            <tbody>
              {file.map((file, index) => {
                const extension = file.filename.split(".").pop().toLowerCase();

                if (extension !== "csv") {
                  return null;
                }

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
                            style={{ width: `${progressPercentage}%` }}
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

      <div class='col-span-1 col-start-4 bg-white place-self-end mb-10'>
      <button className="h-10 w-10 flex justify-center items-center" onClick={goToPreviousPage}>
            <AiIcons.AiOutlineCaretLeft />
          </button>
      </div>

      <div class='col-span-1 col-start-5 place-self-center mb-10'>
        {currentPage}
      </div>

      <div class='col-span-1 col-start-6 bg-white place-self-start mb-10'>
      <button className="h-10 w-10 flex justify-center items-center" onClick={goToNextPage}>
            <AiIcons.AiOutlineCaretRight />
          </button>
      </div>
    </div>
  );
};

export default Manage;
