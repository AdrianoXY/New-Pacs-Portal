import React, { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as BsIcons from "react-icons/bs";
import * as BiIcons from "react-icons/bi";
import axios from "../../axios/axios";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [page, setPage] = useState("login");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    userRef.current.focus();
  },[]);

  useEffect(() => {
    setErrMsg("");
  }, [email, pass]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("/user/Login", JSON.stringify({ email, pass }))
      .then((response) => {
        if (response.status === 200) {
          alert("登入成功");
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
    axios
      .post("/user/creatuser", JSON.stringify({ email, pass, name }))
      .then((response) => {
        if (response.status === 401) {
          setErrMsg("Account already exists");
        } else if (response.status === 402) {
          setErrMsg("Incomplete data entry");
        } else if (response.status === 200) {
          alert("註冊成功");
          navigate("/");
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
            class="h-[300px] w-[300px] rounded-full bg-yellow-600 hover:h-[400px] hover:w-[400px] hover:transition-all "
            onClick={() => setPage("Signup")}
          />
        </div>

        <div class="inset-0 flex">
          <div class="flex h-[550px] w-1/4 min-w-[400px] items-center rounded-3xl bg-stone-500">
            <section class="w-full px-10">
              <p ref={errRef} aria-live="assertive">
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
                    ref={userRef}
                    onChange={(e) => {setEmail(e.target.value)}}
                    value={email}
                    required
                  />
                </div>
                <div class="mt-5 flex flex-col py-2">
                  <label class="text-white">Password</label>
                  <input
                    class="h-8 rounded-lg"
                    type="password"
                    id="password"
                    onChange={(e) => setPass(e.target.value)}
                    value={pass}
                    required
                  />
                </div>
                <button
                  class="mt-10 h-10 rounded-md bg-slate-500 font-bold text-white ring-4 ring-antiquewhite"
                  onClick={handleSubmit}
                >
                  Sing In
                </button>
              </form>
              <p class="text-white">
                Need An Account?
                <Link to="#">
                  <span
                    class="text-blue-700 underline"
                    onClick={() => setPage("Signup")}
                  >
                    Sign up
                  </span>
                </Link>
              </p>
            </section>
          </div>
        </div>
      </div>
    );
  };

  const Signup = () => {
    return (
      <div class="flex h-screen flex-row-reverse content-center items-center justify-evenly">
        <div class="inset-0 hidden xl:flex">
          <BiIcons.BiLogInCircle
            class="h-[300px] w-[300px] rounded-full bg-yellow-600 hover:h-[400px] hover:w-[400px] hover:transition-all "
            onClick={() => setPage("login")}
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
                    ref={userRef}
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required
                  />
                </div>
                <div class="mt-5 flex flex-col py-2">
                  <label class="text-white">Email</label>
                  <input
                    class="h-8 rounded-lg"
                    type="email"
                    id="email"
                    ref={userRef}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete="off"
                    value={email}
                    required
                  />
                </div>
                <div class="mt-5 flex flex-col py-2">
                  <label class="text-white">Password</label>
                  <input
                    class="h-8 rounded-lg"
                    type="password"
                    id="password"
                    onChange={(e) => setPass(e.target.value)}
                    value={pass}
                    required
                  />
                </div>
                <button
                  class="mt-10 h-10 rounded-md bg-slate-500 font-bold text-white ring-4 ring-antiquewhite"
                  onClick={handleSignup}
                >
                  Sing Up
                </button>
              </form>
              <p class="text-white">
                Already Have Account?
                <Link to="#">
                  <span
                    class="text-blue-700 underline"
                    onClick={() => setPage("login")}
                  >
                    Sign In
                  </span>
                </Link>
              </p>
            </section>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      {page === "login" && <LoginSection />}
      {page === "Signup" && <Signup />}
    </div>
  );
};

export default Login;
