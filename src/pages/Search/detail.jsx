import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { csvGID } from "../../Redux/Slices/gid"
import * as AiIcons from "react-icons/ai";

const Detail = (props) => {
  const dispatch = useDispatch();
  const { GID } = props;
  const data = useSelector((state) => state.GID.data);
  const dataStatus = useSelector((state) => state.GID.status);
  const dataError = useSelector((state) => state.GID.error);

  useEffect(() => {
    dispatch(csvGID({ GID }));
  }, [GID]);

  if (dataStatus === "loading") {
    console.log("loading");
  }

  if (dataStatus === "failed") {
    console.log(dataError);
  }

  return props.trigger ? (
    <div class="fixed z-10 grid h-screen w-screen grid-cols-9 grid-rows-6 overflow-auto bg-gray-600 bg-opacity-70">
      <div class="col-span-5 col-start-3 row-span-full grid h-[75%] w-[50%] animate-fadein grid-cols-7 grid-rows-6 place-self-center rounded-md bg-white drop-shadow-lg">
        <div class="col-span-2 flex items-center justify-center">
          <h1 class="text-4xl font-bold text-green-600">Detail</h1>
        </div>

        <div class="col-start-7 flex justify-end">
          <AiIcons.AiOutlineClose
            class="cursor-pointer text-7xl"
            onClick={() => props.setView(false)}
          />
        </div>

        <div class="scrollbar col-span-7 row-span-5 grid h-[93%] grid-cols-9 overflow-y-auto border-t-2 place-items-center">
          {data.map((item,index) => {
            return(
              <div class='h-[93%] w-[90%] col-start-2 col-span-7 grid grid-cols-2 place-items-center rounded-lg ' key={index}>
            <label class='bg-slate-300 h-full w-full grid place-items-center rounded-tl-lg border-b-2'><span>PID:</span></label>
            <label class='bg-bgcol h-full w-full grid place-items-center rounded-tr-lg border-b-2'>{item.PID}</label>
            <label class='bg-slate-300 h-full w-full flex justify-center items-center border-b-2'><span>SID:</span></label>
            <label class='bg-bgcol h-full w-full grid place-items-center border-b-2'>{item.SID}</label>
            <label class='bg-slate-300 h-full w-full flex justify-center items-center border-b-2'><span>GID:</span></label>
            <label class='bg-bgcol h-full w-full grid place-items-center border-b-2'>{item.GID}</label>
            <label class='bg-slate-300 h-full w-full flex justify-center items-center border-b-2'><span>Chr:</span></label>
            <label class='bg-bgcol h-full w-full grid place-items-center border-b-2'>{item.Chr}</label>
            <label class='bg-slate-300 h-full w-full flex justify-center items-center border-b-2'><span>Ref:</span></label>
            <label class='bg-bgcol h-full w-full grid place-items-center border-b-2'>{item.Ref}</label>
            <label class='bg-slate-300 h-full w-full flex justify-center items-center border-b-2'><span>Alt:</span></label>
            <label class='bg-bgcol h-full w-full grid place-items-center border-b-2'>{item.Alt}</label>
            <label class='bg-slate-300 h-full w-full flex justify-center items-center border-b-2'><span>Start:</span></label>
            <label class='bg-bgcol h-full w-full grid place-items-center border-b-2'>{item.Start}</label>
            <label class='bg-slate-300 h-full w-full flex justify-center items-center rounded-bl-lg'><span>End:</span></label>
            <label class='bg-bgcol h-full w-full grid place-items-center rounded-br-lg '>{item.End}</label>
          </div>
            )
          })}
        </div>
      </div>
    </div>
  ) : (
    ""
  );
};

export default Detail;
