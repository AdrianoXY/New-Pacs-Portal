import React, { useState, useEffect } from "react";
import axios from "../../axios/axios";

const Manage = () => {
  const [qname, setQname] = useState("");
  const [acc, setAcc] = useState([]);

  const Del = (id) => {
    axios
      .delete(`/api/delete/${id}`, { params: { id } })
      .then((response) => {
        if (response.status === 200) {
          alert("Delete Success");
        }
      })
      .catch((err) => {
        if (err.response.status === 404) {
          console.log("No User");
          console.log(id);
        } else if (err.response.status === 403) {
          console.log("Error");
        } else {
          console.log("Delete Fail");
        }
      });
  };

  useEffect(() => {
    if (qname) {
      axios
        .get("/api/query", { params: { qname } })
        .then((response) => {
          setAcc(response.data);
        })
        .catch((err) => {
          if (err.response.status === 402) {
            console.log("No");
          } else if (err.response.status === 403) {
            console.log("NO");
          }
        });
    } else {
      axios
        .get("api/query")
        .then((response) => {
          setAcc(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [qname]);

  return (
    <div class="grid w-full grid-rows-6">
      <div class="flex w-full justify-center self-center">
        <input
          class="h-10 w-96 rounded-2xl border-2 border-black"
          placeholder="Search..."
          onChange={(e) => setQname(e.target.value)}
        ></input>
      </div>
      <div class="row-span-5 flex h-auto w-full justify-center self-start">
        <table class="w-3/5 table-fixed border-separate border-spacing-2">
          <thead>
            <tr>
              <th class="rounded-md border bg-stone-600 px-4 py-2 text-white ">
                Name
              </th>
              <th class="rounded-md border bg-stone-600 px-4 py-2 text-white ">
                Account
              </th>
              <th class="rounded-md border bg-stone-600 px-4 py-2 text-white ">
                Management
              </th>
              <th class="rounded-md border bg-stone-600 px-4 py-2 text-white ">
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {acc.length > 0 &&
              acc.map((item, index) => {
                return (
                  <tr key={index}>
                    <td class="border bg-slate-300 px-4 py-2 text-center font-bold ">
                      {item.name}
                    </td>
                    <td class="border bg-slate-300 px-4 py-2 text-center font-bold ">
                      {item.powd}
                    </td>
                    <td class="border bg-slate-300 px-4 py-2 text-center font-bold ">
                      {item.management}
                    </td>
                    <td class="border bg-slate-300 px-4 py-2 text-center font-bold ">
                      <button
                        class="rounded-lg border-2 border-slate-600 bg-slate-600 px-3 font-bold text-white"
                        onClick={() => Del(item._id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Manage;
