import React, { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import * as BsIcons from "react-icons/bs";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();

  // useEffect(() => {
  //     userRef.current.focus();
  // }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, pass]);

  const handleSignupClick = () => {
    console.log("change");
  }

  return (
    <div class="flex justify-evenly content-center h-screen items-center">

      <div class="hidden inset-0 xl:flex">
        <BsIcons.BsPersonAdd class="bg-yellow-600 rounded-full h-[300px] w-[300px] hover:h-[400px] hover:w-[400px] hover:transition-all " onClick={handleSignupClick}/>
      </div>

      <div class="flex inset-0">
        <div class="flex h-[550px] w-1/4 min-w-[400px] items-center rounded-3xl bg-stone-500">
          <section class="w-full px-10">
            <p>{errMsg}</p>
            <h1 class="text-center text-4xl font-bold text-white">Login</h1>
            <form class="flex flex-col py-6">
              <div class="mt-5 flex flex-col py-2">
                <label class="text-white">Account</label>
                <input
                  class="h-8 rounded-lg"
                  type="email"
                  id="email"
                  ref={userRef}
                  onChange={(e) => setEmail(e.target.value)}
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
              <button class="mt-10 h-10 rounded-md bg-slate-500 font-bold text-white ring-4 ring-antiquewhite">
                Sing In
              </button>
            </form>
            <p class="text-white">
              Need an account?
              <Link to='#'>
                <span class="underline text-blue-700">Sign up</span>
              </Link>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Login;
