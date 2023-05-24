import React, { useState, useEffect } from "react";
import * as AiIcons from "react-icons/ai";
import axios from "../../axios/axios";

const File = (props) => {
    const { PID, SID } = props;
    const [file, setFile] = useState([]);

<<<<<<< HEAD
    const handleFileSelect = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setFile(selectedFiles);
    };

    const formData = new FormData();
=======
  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFile(selectedFiles);
  };
  
>>>>>>> 02e1b317c8b4a98a938bb430f29588d51f98be24

    const addfile = async (e) => {
        let filename = []


        for (let i = 0; i < file.length; i++) {
            formData.append('file', file[i]);
            if (file[i] && file[i].name) {
                filename.push(file[i].name);
            }
        }

        axios.post("/api/file", JSON.stringify({ PID, SID, filename }), formData, {
            headers: {
                'Content-Type': 'multipart/form-data' // 設定正確的 Content-Type
            }
        })
            .then((response) => {
                if (response.status === 200) {
                    alert("Files Add successfully!");
                    props.setAddf(false);
                    window.location.reload();
                }
            })
            .catch((err) => {
                if (!err.response) {
                    alert(formData.file);
                } else if (err.response.status === 403) {
                    alert("Create Fail!");
                }
            })
    }

<<<<<<< HEAD
    return props.trigger ? (
        <div class="fixed z-10 grid h-screen w-screen grid-cols-9 grid-rows-6 overflow-auto bg-gray-600 bg-opacity-70">
            <form class="col-span-5 col-start-3 row-span-4 row-start-2 grid h-[95%] w-[95%] animate-fadein grid-cols-7 grid-rows-6 place-self-center rounded-md bg-white drop-shadow-lg" onSubmit={addfile}>
                <div class="col-span-2 flex items-center justify-center">
                    <h1 class="text-4xl font-bold text-green-600">Upload File</h1>
                </div>

                <div class="col-start-7 flex justify-end">
                    <AiIcons.AiOutlineClose
                        class="cursor-pointer text-7xl"
                        onClick={() => props.setAddf(false)}
                    />
                </div>

                <div class="col-span-7 row-span-4 grid h-[93%] grid-cols-9 border-t-2">
                    <div class="col-span-7 col-start-2 row-span-2 h-full">
                        <label
                            for="dropzone-file"
                            class="flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100"
                        >
                            {file.length > 0 ? (
                                <div class="grid h-[100%]  grid-cols-5">
                                    {file.map((file, index) => (
                                        <div class="m-2 break-words" key={index}>
                                            <AiIcons.AiFillFileText />
                                            <p className="mb-2 text-lg text-gray-500">{file.name}</p>
                                        </div>
                                    ))}
                                </div>
                            ) : (
                                <div class="flex h-[100%] flex-wrap items-center justify-center">
                                    <AiIcons.AiOutlineCloudUpload class="mb-3 h-10 w-10 text-gray-400" />
                                    <p class="mb-2 text-sm text-gray-500">
                                        <span class="font-semibold">Click to upload</span> or drag
                                        and drop
                                    </p>
                                </div>
                            )}
                            <input
                                id="dropzone-file"
                                type="file"
                                class="hidden"
                                multiple
                                onChange={handleFileSelect}
                            />
                        </label>
=======
    const data = {
      PID: PID,
      SID: SID,
      filename: filename,
    };
  
    e.preventDefault();
  
    const formData = new FormData();
    for (let i = 0; i < file.length; i++) {
      formData.append('files', file[i]);
    }
  
    formData.append('data', JSON.stringify(data));
  
    

    axios.post("/api/file",formData,
    {headers : {
      'Content-Type': 'multipart/form-data'
    }})
    .then((response) => {
      if (response.status === 200) {
        alert("Files Add successfully!");
        props.setAddf(false);
        window.location.reload();
      }
    })
    .catch((err) => {
      if (!err.response) {
        alert("Network Error!");
      } else if (err.response.status === 403) {
        alert("Add Fail!");
      }
    })
  }
  
  return props.trigger ? (
    <div class="fixed z-10 grid h-screen w-screen grid-cols-9 grid-rows-6 overflow-auto bg-gray-600 bg-opacity-70">
      <form class="col-span-5 col-start-3 row-span-4 row-start-2 grid h-[95%] w-[95%] animate-fadein grid-cols-7 grid-rows-6 place-self-center rounded-md bg-white drop-shadow-lg" onSubmit={addfile}>
        <div class="col-span-2 flex items-center justify-center">
          <h1 class="text-4xl font-bold text-green-600">Upload File</h1>
        </div>

        <div class="col-start-7 flex justify-end">
          <AiIcons.AiOutlineClose
            class="cursor-pointer text-7xl"
            onClick={() => props.setAddf(false)}
          />
        </div>

        <div class="col-span-7 row-span-4 grid h-[93%] grid-cols-9 border-t-2">
          <div class="col-span-7 col-start-2 row-span-2 h-full">
            <label
              for="dropzone-file"
              class="flex h-full w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100"
            >
              {file.length > 0 ? (
                <div class="grid h-[100%]  grid-cols-5">
                  {file.map((file, index) => (
                    <div class="m-2 break-words" key={index}>
                      <AiIcons.AiFillFileText />
                      <p className="mb-2 text-lg text-gray-500">{file.name}</p>
>>>>>>> 02e1b317c8b4a98a938bb430f29588d51f98be24
                    </div>
                </div>
                <div class="col-span-3 col-start-3 flex items-center justify-center">
                    <button
                        class="h-12 w-28 bg-lightgreen text-2xl font-semibold"
                        type="submit"
                    >
                        Add
                    </button>
                </div>
            </form>
        </div>
    ) : (
        ""
    );
};

export default File;