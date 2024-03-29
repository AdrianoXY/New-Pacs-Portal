import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sampleSlice } from "../../Redux/Slices/sample";
import { fileSlice } from "../../Redux/Slices/file";
import * as AiIcons from "react-icons/ai";
import axios from "../../axios/axios";

const Manage = () => {
  const dispatch = useDispatch();
  const [PID, setPID] = useState("");
  const [SID, setSID] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const fileData = useSelector((state) => {
    const data = state.File.data;
    const filteredData = data.filter((item) => item.filename.endsWith(".csv"));
    return filteredData;
  });
  const sampleData = useSelector((state) => {
    const data = state.Sample.data;
    const filteredData = data.filter((sample) =>
      fileData.some((fileItem) => fileItem.SID === sample.SID)
    );
    return filteredData;
  });
  const sampleStatus = useSelector((state) => state.Sample.status);
  const sampleError = useSelector((state) => state.Sample.error);
  const fileStatus = useSelector((state) => state.File.status);
  const fileError = useSelector((state) => state.File.error);

  const itemsPerPage = 12;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < Math.ceil(sampleData.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const Conversion = (PID, SID, fileID, index) => {
    axios
      .post("/api/csv", JSON.stringify({ PID, SID, fileID }))
      .then((res) => {
        if (res.status === 200) {
          alert("Conversion Successfully!");
          window.location.reload();
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
    <div class="grid h-screen w-screen grid-cols-9 grid-rows-6 overflow-auto">
      <div class="col-start-3 place-self-center">
        <input
          class="h-12 w-52 rounded-lg border-2"
          onChange={(e) => setPID(e.target.value)}
          type="number"
          placeholder="PID"
        />
      </div>

      <div class="col-start-6 place-self-center">
        <input
          class="h-12 w-52 rounded-lg border-2"
          onChange={(e) => setSID(e.target.value)}
          type="number"
          placeholder="SID"
        />
      </div>

      <div class="col-span-9 col-start-1 row-span-5 row-start-2 flex h-[95%] w-[95%] flex-col place-self-center rounded-2xl bg-white drop-shadow-xl ">
        <div class="flex h-[95%] justify-center">
          <div class="scrollbar mt-5 w-[95%] overflow-y-auto">
            <table class="w-full table-auto">
              <thead class="sticky top-0 bg-white">
                <tr>
                  <th class=" border-b-4">PID</th>
                  <th class=" border-b-4">SID</th>
                  <th class=" border-b-4">FileName</th>
                  <th class=" border-b-4">Process Rate(undone/complete)</th>
                  <th class=" border-b-4">Operation</th>
                </tr>
              </thead>
              <tbody class="divide-y">
                {sampleData.slice(startIndex, endIndex).map((sample) => {
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
                        <th>
                          {file.state !== "done" && (
                            <button
                              className="h-10 w-36 rounded-md"
                              onClick={() =>
                                Conversion(
                                  sample.PID,
                                  file.SID,
                                  file._id,
                                  fileIndex
                                )
                              }
                            >
                              conversion
                            </button>
                          )}
                        </th>
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
