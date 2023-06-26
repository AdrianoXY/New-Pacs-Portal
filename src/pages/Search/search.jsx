import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { csvSlice } from "../../Redux/Slices/csv";
import { allSample } from "../../Redux/Slices/sample";
import { allFile } from "../../Redux/Slices/file";
import View from "./variation";
import * as AiIcons from "react-icons/ai";

const Search = () => {
  const dispatch = useDispatch();
  const [PID, setPID] = useState("");
  const [SID, setSID] = useState("");
  const [dsid, setDsid] = useState("");
  const [view, setView] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const agen = useSelector((state) => state.CSV.data);
  const agenStatus = useSelector((state) => state.CSV.status);
  const agenError = useSelector((state) => state.CSV.error);
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
    if (currentPage < Math.ceil(agen.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    dispatch(csvSlice({ PID, SID }));
  }, [dispatch, PID, SID]);

  if (agenStatus === "loading") {
    console.log("loading");
  }

  if (agenStatus === "failed") {
    console.log(agenError);
  }

  useEffect(() => {
    dispatch(allSample());
  }, []);

  if (sampleStatus === "loading") {
    console.log("loading");
  }

  if (sampleStatus === "failed") {
    console.log(sampleError);
  }

  useEffect(() => {
    dispatch(allFile());
  }, []);

  if (fileStatus === "loading") {
    console.log("loading");
  }

  if (fileStatus === "failed") {
    console.log(fileError);
  }

  return (
    <div class="grid h-screen w-screen grid-cols-9 grid-rows-6 overflow-auto">
      <div class="col-span-2 col-start-2 place-self-center">
        <input
          class="h-12 w-52  rounded-lg border-2"
          onChange={(e) => setPID(e.target.value)}
          placeholder="PID"
        />
      </div>

      <div class="col-span-2 place-self-center">
        <input
          class="h-12 w-52 rounded-lg border-2"
          onChange={(e) => setSID(e.target.value)}
          placeholder="SID"
        />
      </div>

      <div class="col-span-4 flex -translate-y-3 flex-col place-self-center">
        <div>
          <span>Window Range</span>
        </div>
        <div class="flex-rows flex items-center">
          <input
            type="number"
            class="h-12 rounded-lg border-2 "
            placeholder="Min"
          />
          <div class="text-4xl ">-</div>
          <input
            type="number"
            class="h-12 rounded-lg border-2"
            placeholder="Max"
          />
        </div>
      </div>

      <div class="col-span-full col-start-1 row-span-6 row-start-2 flex h-[95%] w-[95%] flex-col place-self-center rounded-2xl bg-white drop-shadow-xl ">
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
                            setDsid(item.SID)
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
      <View trigger={view} setView={setView} SID={dsid} />
    </div>
  );
};

export default Search;
