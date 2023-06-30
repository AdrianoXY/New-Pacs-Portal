import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allCSV } from "../../Redux/Slices/allcsv";
import { sampleSlice } from "../../Redux/Slices/sample";
import { fileSlice } from "../../Redux/Slices/file";
import View from "./variation";
import * as AiIcons from "react-icons/ai";

const Search = () => {
  const dispatch = useDispatch();
  const [PID, setPID] = useState("");
  const [SID, setSID] = useState("");
  const [dsid, setDsid] = useState("");
  const [view, setView] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const agen = useSelector((state) => state.ACSV.data);
  const agenStatus = useSelector((state) => state.ACSV.status);
  const agenError = useSelector((state) => state.ACSV.error);
  const fileData = useSelector((state) => {
    const data = state.File.data;
    const filteredData = data.filter((item) => item.state === "done");
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
    if (currentPage < Math.ceil(fileData.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    dispatch(allCSV());
  }, []);

  if (agenStatus === "loading") {
    console.log("loading");
  }

  if (agenStatus === "failed") {
    console.log(agenError);
  }

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
      <div class="col-span-2 col-start-3 flex h-full w-full items-center justify-center">
        <input
          class="h-[35%] w-[55%]  rounded-lg border-2"
          type="number"
          onChange={(e) => setPID(e.target.value)}
          placeholder="PID"
        />
      </div>

      <div class="col-span-2 col-start-6 flex h-full w-full items-center justify-center">
        <input
          class="h-[35%] w-[55%] rounded-lg border-2"
          type="number"
          onChange={(e) => setSID(e.target.value)}
          placeholder="SID"
        />
      </div>

      <div class="col-span-full col-start-1 row-span-6 row-start-2 flex h-[95%] w-[85%] flex-col place-self-center rounded-2xl bg-white drop-shadow-xl ">
        <div class="flex h-[95%] justify-center">
          <div class="scrollbar mt-5 w-[95%] overflow-y-auto">
            <table class="w-full table-auto">
              <thead class="sticky top-0 bg-white">
                <tr>
                  <th class=" border-b-4">PID</th>
                  <th class=" border-b-4">SID</th>
                  <th class=" border-b-4">Total Variation</th>
                  <th class=" border-b-4">Active</th>
                </tr>
              </thead>
              <tbody class=" divide-y">
                {sampleData.slice(startIndex, endIndex).map((item, index) => {
                  const total = agen.filter((count) => count.SID === item.SID);
                  const tal = total.length;
                  console.log(tal);
                  return (
                    <tr key={index}>
                      <th>{item.PID}</th>
                      <th>{item.SID}</th>
                      <th>{tal}</th>
                      <th>
                        <button
                          class="h-8 w-20 rounded-md"
                          onClick={() => {
                            setView(true);
                            setDsid(item.SID);
                          }}
                        >
                          View
                        </button>
                      </th>
                    </tr>
                  );
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
      <View trigger={view} setView={setView} dsid={dsid} />
    </div>
  );
};

export default Search;
