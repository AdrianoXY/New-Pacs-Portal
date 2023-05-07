import React, { useState, useEffect  } from "react";
import { useNavigate } from "react-router-dom";
import Create from "./create";
import axios from "../../axios/axios"
import * as BsIcons from "react-icons/bs";

const Patient = () => {
  const [name,setname] = useState("");
  const [PID ,setPID] = useState("");
  const [acc, setAcc] = useState([]);
  const [ButtonPop, setButtonPop] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if(name || PID){
      axios.get("/api/patient", {params:{name,PID}})
      .then((res) => {
        console.log(res.data);
        setAcc(res.data);
      })
      .catch((err) => {
        if(err.response.status === 402){
          console.log("fail");
        }else if (err.response.status === 403){
          console.log("Fail");
        } else{
          console.log("No server response");
        }
      })
    } else{
      axios.get("/api/patient")
      .then((res) =>{
        setAcc(res.data);
      })
      .catch((err) => {
        console.log(err);
      })
    }
  },[name,PID])

  return (
    <div class="grid h-screen w-screen grid-cols-7 grid-rows-6 overflow-auto">
      <div class="flex-rows col-start-2 flex w-full items-center justify-center">
        <input class="h-12 border-2 " type='number' placeholder="PID" onChange={(e) => setPID(e.target.value)}/>
      </div>
      <div class="flex-rows col-start-4 flex w-full items-center justify-center">
        <input class="h-12 border-2" type='text' placeholder="Patient Name" onChange={(e) => setname(e.target.value)}/>
      </div>

      <div class="col-start-6 place-self-center">
        <button
          class=" flex h-16 w-48 flex-row items-center justify-center"
          onClick={() => setButtonPop(true)}
        >
          <BsIcons.BsPersonFillAdd class="text-5xl" />
          <h2 class="text-4xl">Create</h2>
        </button>
      </div>

      <Create trigger={ButtonPop} setButtonPop={setButtonPop} />

      <div class="col-span-7 col-start-1 row-span-5 row-start-2 flex h-[95%] w-[85%] flex-col place-self-center rounded-2xl bg-white drop-shadow-xl ">
        <div class="flex justify-center">
          <table class="mt-5 w-[90%] table-auto">
            <thead>
              <tr>
                <th class=" border-b-4">No.</th>
                <th class=" border-b-4">PID</th>
                <th class=" border-b-4">Patient Name</th>
                <th class=" border-b-4">Gender</th>
                <th class=" border-b-4">Birth</th>
                <th class=" border-b-4">Sample</th>
              </tr>
            </thead>
            <tbody class="overflow-y-auto">
              {acc.length > 0 && acc.map((item,index) => {
                return(
                  <tr key={index}>
                <th class="border-t-2 ">{item.URID}</th>
                <th class="border-t-2 ">{item.PID}</th>
                <th class="border-t-2 ">{item.name}</th>
                <th class="border-t-2 ">{item.gender}</th>
                <th class="border-t-2 ">{item.birthday}</th>
                <th class="border-t-2 ">
                  <button class="h-10 w-32" onClick={() => navigate("/sample")}>
                    Sample
                  </button>
                </th>
              </tr>
                )
              })}
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Patient;
