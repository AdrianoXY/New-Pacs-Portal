import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "../../axios/axios";
import { csvSlice } from "../../Redux/Slices/csv";
import * as AiIcons from "react-icons/ai";

const Variation = (props) => {
    const { SID } = props
    const dispatch = useDispatch();
    const agen = useSelector((state) => state.CSV.data);
  const agenStatus = useSelector((state) => state.CSV.status);
  const agenError = useSelector((state) => state.CSV.error);

  useEffect(() => {
    dispatch(csvSlice({ SID }));
  }, [SID]);

  if (agenStatus === "loading") {
    console.log("loading");
  }

  if (agenStatus === "failed") {
    console.log(agenError);
  }

  return props.trigger ? (
    <div class="fixed z-10 grid h-screen w-screen grid-cols-9 grid-rows-6 overflow-auto bg-gray-600 bg-opacity-70">
      <div class="col-span-5 col-start-3 row-span-4 row-start-2 grid h-full w-full animate-fadein grid-cols-7 grid-rows-6 place-self-center rounded-md bg-white drop-shadow-lg ">
        <div class="col-span-2 flex items-center justify-center">
          <h1 class="text-4xl font-bold text-green-600">Variation</h1>
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
                {agen.map((item, index) => {
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
                        //   onClick={() => {
                        //     setView(true);
                        //     setGID(item.GID);
                        //   }}
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
    </div>
  ) : (
    ""
  );
};

export default Variation;
