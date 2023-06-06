import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import View from "./detail"
import * as AiIcons from "react-icons/ai";
import axios from "../../axios/axios";

const Search = () => {
  const [agen, setAgen] = useState([])
  const [view, setView] = useState(false)
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
    if (currentPage < Math.ceil(agen.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    axios
      .get("/api/csv")
      .then((res) => {
        {
          setAgen(res.data);
          console.log(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div class="grid h-screen w-screen grid-cols-9 grid-rows-6 overflow-auto">
      <div class="col-span-2 col-start-2 place-self-center">
        <input class="h-12 w-52  rounded-lg border-2" placeholder="PID" />
      </div>

      <div class="col-span-2 place-self-center">
        <input class="h-12 w-52 rounded-lg border-2" placeholder="SID" />
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
        <div class="flex justify-center">
          <table class="mt-5 w-[95%] table-auto">
            <thead>
              <tr>
                <th class=" border-b-4">PID</th>
                <th class=" border-b-4">SID</th>
                <th class=" border-b-4">GID</th>
                <th class=" border-b-4">Ref</th>
                <th class=" border-b-4">Start</th>
                <th class=" border-b-4">End</th>
                <th class=" border-b-4">Active</th>
              </tr>
            </thead>
            <tbody class="overflow-y-auto">
              {agen.slice(startIndex, endIndex).map((item, index) => {
                return(
                  <tr key={index}>
                <th class="border-t-2 ">{item.PID}</th>
                <th class="border-t-2 ">{item.SID}</th>
                <th class="border-t-2 ">{item.GID}</th>
                <th class="border-t-2 ">{item.Chr}</th>
                <th class="border-t-2 ">{item.Start}</th>
                <th class="border-t-2 ">{item.End}</th>
                <th class="border-t-2 ">
                  <button class="h-8 w-20 rounded-md" onClick={() => setView(true)}>View</button>
                </th>
              </tr>
                )
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

      <View trigger={view} setView={setView} />
    </div>
  );
};

export default Search;
