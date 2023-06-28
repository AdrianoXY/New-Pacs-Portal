import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { csvSlice } from "../../Redux/Slices/csv";
import View from "./detail";
import * as AiIcons from "react-icons/ai";

const Variation = (props) => {
  const { dsid } = props;
  const [GID, setGID] = useState("");
  const [dgid, setDgid] = useState("");
  const [max, setMax] = useState("");
  const [min, setMin] = useState("");
  const [view, setView] = useState(false);
  const dispatch = useDispatch();
  const vari = useSelector((state) => state.CSV.data);
  const variStatus = useSelector((state) => state.CSV.status);
  const variError = useSelector((state) => state.CSV.error);

  useEffect(() => {
    dispatch(csvSlice({ SID: dsid, GID, max, min }));
  }, [dsid, GID, max, min]);

  if (variStatus === "loading") {
    console.log("loading");
  }

  if (variStatus === "failed") {
    console.log(variError);
  }

  return props.trigger ? (
    <div class="fixed z-10 grid h-screen w-screen grid-cols-9 grid-rows-6 overflow-auto bg-gray-600 bg-opacity-70">
      <div class="col-span-7 col-start-2 row-span-6 grid h-[90%] w-[95%] animate-fadein grid-cols-7 grid-rows-7 place-self-center rounded-md bg-white drop-shadow-lg ">
        <div class="col-span-2 flex items-center justify-center">
          <h1 class="text-4xl font-bold text-green-600">Variation</h1>
        </div>

        <div class="col-span-2 flex h-full w-full items-center justify-center">
          <input
            class="h-[35%] w-[50%] rounded-lg border-2"
            onChange={(e) => setGID(e.target.value)}
            placeholder="GID"
          />
        </div>

        <div class="col-span-2 flex h-full w-full flex-col place-self-center">
          <div>
            <span>Window Range</span>
          </div>
          <div class="flex-rows flex h-full w-full -translate-y-3 items-center">
            <input
              type="number"
              class="h-[45%] w-[40%] rounded-lg border-2 "
              placeholder="Min"
              onChange={(e) => setMin(e.target.value)}
            />
            <div class="text-4xl ">-</div>
            <input
              type="number"
              class="h-[45%] w-[40%] rounded-lg border-2"
              placeholder="Max"
              onChange={(e) => setMax(e.target.value)}
            />
          </div>
        </div>

        <div class="col-start-7 flex justify-end">
          <AiIcons.AiOutlineClose
            class="cursor-pointer text-7xl"
            onClick={() => props.setView(false)}
          />
        </div>

        <div class="col-span-full col-start-1 row-span-6 row-start-2 flex h-full w-full flex-col place-self-center rounded-2xl bg-white ">
          <div class="flex h-[95%] justify-center">
            <div class="scrollbar mt-5 w-[95%] overflow-y-auto">
              <table class="w-full table-auto">
                <thead class="sticky top-0 bg-white">
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
                <tbody class=" divide-y">
                  {vari.map((item, index) => {
                    return (
                      <tr key={index}>
                        <th>{item.PID}</th>
                        <th>{item.SID}</th>
                        <th>{item.GID}</th>
                        <th>{item.Chr}</th>
                        <th>{item.Start}</th>
                        <th>{item.End}</th>
                        <th>
                          <button
                            class="h-8 w-20 rounded-md"
                            onClick={() => {
                              setView(true);
                              setDgid(item.GID);
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
      </div>
      <View trigger={view} setView={setView} GID={dgid} />
    </div>
  ) : (
    ""
  );
};

export default Variation;
