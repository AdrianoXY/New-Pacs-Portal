import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import axios from "../../axios/axios";

const Login = () => {
  const errRef = useRef();

  const [page, setPage] = useState("login");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const pass = formData.get("password");
    console.log(email, pass);

    axios
      .post("/user/Login", JSON.stringify({ email, pass }))
      .then((response) => {
        if (response.status === 200) {
          navigate("/home");
        }
      })
      .catch((err) => {
        if (!err.response) {
          setErrMsg("NoServer Response");
        } else if (err.response.status === 401) {
          setErrMsg("Account does not exist");
        } else if (err.response.status === 402) {
          setErrMsg("Wrong Password");
        } else {
          setErrMsg("Login Failed");
        }
        errRef.current.focus();
      });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const username = formData.get("name");
    const email = formData.get("email");
    const pass = formData.get("password");

    axios
      .post("/user/creatuser", JSON.stringify({ username, email, pass }))
      .then((response) => {
        if (response.status === 401) {
          setErrMsg("Account already exists");
        } else if (response.status === 402) {
          setErrMsg("Incomplete data entry");
        } else if (response.status === 200) {
          alert("註冊成功");
          setPage("login");
        } else {
          setErrMsg("Sign up Failed");
        }
      })
      .catch((err) => {
        if (!err.response) {
          setErrMsg("NoServer Response");
        } else {
          setErrMsg("Sing up Failed");
        }
      });
  };

  const LoginSection = () => {
    return (
      <div class="flex h-screen content-center items-center justify-evenly">
        <div class="inset-0 hidden xl:flex">
          <BsIcons.BsPersonAdd
            class="h-[300px] w-[300px] rounded-full bg-yellow-600 transition-all duration-500 hover:h-[400px] hover:w-[400px] hover:transition-all hover:duration-500 "
            onClick={() => {
              setPage("signup");
              setErrMsg("");
            }}
          />
        </div>
        <div class="inset-0 flex">
          <div class="flex h-[550px] w-1/4 min-w-[400px] items-center rounded-3xl bg-stone-500">
            <section class="w-full px-10">
              <p
                class={`${
                  errMsg
                    ? "mb-5 rounded-lg bg-red-700 p-4 font-bold text-white"
                    : "sr-only"
                }`}
                ref={errRef}
                aria-live="assertive"
              >
                {errMsg}
              </p>
              <h1 class="text-center text-4xl font-bold text-white">Login</h1>
              <form class="flex flex-col py-6" onSubmit={handleSubmit}>
                <div class="mt-5 flex flex-col py-2">
                  <label class="text-white">Email</label>
                  <input
                    class="h-8 rounded-lg"
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div class="mt-5 flex flex-col py-2">
                  <label class="text-white">Password</label>
                  <input
                    class="h-8 rounded-lg"
                    type="password"
                    id="password"
                    name="password"
                    required
                  />
                </div>
                <button
                  class="mt-10 h-10 rounded-md bg-slate-500 font-bold text-white ring-4 ring-antiquewhite"
                  type="submit"
                >
                  Sing In
                </button>
              </form>
              <p class="text-white">
                Need An Account?
                <Link to="#">
                  <span
                    class="text-blue-700 underline"
                    onClick={() => {
                      setPage("signup");
                      setErrMsg("");
                    }}
                  >
                    Sign up
                  </span>
                </Link>
              </p>
            </section>
          </div>
        </div>

        <div class="inset-0 hidden xl:flex">
          <BiIcons.BiLogInCircle
            class="h-[300px] w-[300px] rounded-full bg-yellow-600 transition-all duration-300 hover:h-[400px] hover:w-[400px] hover:transition-all hover:duration-300 "
            onClick={() => {
              setPage("login");
              setErrMsg("");
            }}
          />
        </div>
      </div>
    );
  };

  const Signup = () => {
    return (
      <div class="flex h-screen flex-row-reverse content-center items-center justify-evenly">
        <div class="inset-0 hidden xl:flex">
          <BiIcons.BiLogInCircle
            class="h-[300px] w-[300px] rounded-full bg-yellow-600 transition-all duration-300 hover:h-[400px] hover:w-[400px] hover:transition-all hover:duration-300 "
            onClick={() => {
              setPage("login");
              setErrMsg("");
            }}
          />
        </div>

        <div class="inset-0 flex">
          <div class="flex h-[550px] w-1/4 min-w-[400px] items-center rounded-3xl bg-stone-500">
            <section class="w-full px-10">
              <p>{errMsg}</p>
              <h1 class="text-center text-4xl font-bold text-white">Login</h1>
              <form class="flex flex-col py-6" onSubmit={handleSignup}>
                <div class="mt-5 flex flex-col py-2">
                  <label class="text-white">Name</label>
                  <input
                    class="h-8 rounded-lg"
                    type="name"
                    id="name"
                    name="name"
                    required
                  />
                </div>
                <div class="mt-5 flex flex-col py-2">
                  <label class="text-white">Email</label>
                  <input
                    class="h-8 rounded-lg"
                    type="email"
                    id="email"
                    name="email"
                    required
                  />
                </div>
                <div class="mt-5 flex flex-col py-2">
                  <label class="text-white">Password</label>
                  <input
                    class="h-8 rounded-lg"
                    type="password"
                    id="password"
                    name="password"
                    required
                  />
                </div>
                <button
                  class="mt-10 h-10 rounded-md bg-slate-500 font-bold text-white ring-4 ring-antiquewhite"
                  type="submit"
                >
                  Sing Up
                </button>
              </form>
              <p class="text-white">
                Already Have Account?
                <Link to="#">
                  <span
                    class="text-blue-700 underline"
                    onClick={() => {
                      setPage("login");
                      setErrMsg("");
                    }}
                  >
                    Sign In
                  </span>
                </Link>
              </p>
            </section>
          </div>
        </div>

        <div class="inset-0 hidden xl:flex">
          <BsIcons.BsPersonAdd
            class="h-[300px] w-[300px] rounded-full bg-yellow-600 transition-all duration-300 hover:h-[400px] hover:w-[400px] hover:transition-all hover:duration-300 "
            onClick={() => {
              setPage("signup");
              setErrMsg("");
            }}
          />
        </div>
      </div>
    );
  };

  return (
    <div>
      {page === "login" && <LoginSection />}
      {page === "signup" && <Signup />}
    </div>
  );
};

export default Login;
