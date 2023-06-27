import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { allPatient } from "../../Redux/Slices/patient";
import Create from "./create";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";

const All = () => {
  const dispatch = useDispatch();
  const [name, setname] = useState("");
  const [PID, setPID] = useState("");
  const patientData = useSelector((state) => state.Patient.data);
  const patientStatus = useSelector((state) => state.Patient.status);
  const patientError = useSelector((state) => state.Patient.error);
  const [create, setCreate] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const itemsPerPage = 12;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToNextPage = () => {
    if (currentPage < Math.ceil(patientData.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    dispatch(allPatient({ name, PID }));
  }, [dispatch, name, PID]);

  if (patientStatus === "loading") {
    console.log("loading");
  }

  if (patientStatus === "failed") {
    console.log(patientError);
  }

  return (
    <div class="grid h-screen w-screen grid-cols-9 grid-rows-6 overflow-auto">
      <div class="flex-rows col-start-3 flex w-full items-center justify-center">
        <input
          class="h-[35%] w-[100%] border-2 "
          type="number"
          placeholder="PID"
          onChange={(e) => setPID(e.target.value)}
        />
      </div>
      <div class="flex-rows col-start-5 flex w-full items-center justify-center">
        <input
          class="h-[35%] w-[100%] border-2"
          type="text"
          placeholder="Patient Name"
          onChange={(e) => setname(e.target.value)}
        />
      </div>

      <div class="col-start-7 flex h-full w-full items-center justify-center">
        <button
          class=" flex h-[40%] w-[100%] flex-row items-center justify-center"
          onClick={() => setCreate(true)}
        >
          <BsIcons.BsPersonFillAdd class="text-5xl" />
          <h2 class="text-4xl">Create</h2>
        </button>
      </div>

      <div class="col-span-full row-span-5 flex h-[95%] w-[85%] flex-col place-self-center rounded-2xl bg-white drop-shadow-xl ">
        <div class="flex h-[95%] justify-center">
          <div class="scrollbar mt-5 w-[90%] overflow-y-auto">
            <table class="w-full table-auto">
              <thead class="sticky top-0 bg-white">
                <tr>
                  <th class=" border-b-4 px-6 py-3">No.</th>
                  <th class=" border-b-4 px-6 py-3">PID</th>
                  <th class=" border-b-4 px-6 py-3">Patient Name</th>
                  <th class=" border-b-4 px-6 py-3">Gender</th>
                  <th class=" border-b-4 px-6 py-3">Birth</th>
                  <th class=" border-b-4 px-6 py-3">Sample</th>
                </tr>
              </thead>
              <tbody class=" divide-y">
                {patientData.length > 0 &&
                  patientData.slice(startIndex, endIndex).map((item, index) => {
                    return (
                      <tr key={index}>
                        <th>{item.URID}</th>
                        <th>{item.PID}</th>
                        <th>{item.name}</th>
                        <th>{item.gender}</th>
                        <th>{item.birthday}</th>
                        <th>
                          <button
                            class="h-10 w-32"
                            onClick={() => navigate(`/patient/${item.PID}`)}
                          >
                            Sample
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

      <Create trigger={create} setCreate={setCreate} />
    </div>
  );
};

export default All;
