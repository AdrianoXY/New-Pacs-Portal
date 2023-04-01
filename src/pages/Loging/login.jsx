import React, { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

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

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex h-3/6 w-1/4 min-w-[400px] items-center rounded-3xl bg-amber-900">
        <section className="w-full px-10">
          <p>{errMsg}</p>
          <h1 className="text-center text-4xl font-bold text-white">Login</h1>
          <form className="flex flex-col py-6">
            <div className="flex flex-col py-2">
              <label className="text-white">Account</label>
              <input
              className="rounded-lg h-8"
                type="email"
                id="email"
                ref={userRef}
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                required
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="text-white">Password</label>
              <input
                className="rounded-lg h-8"
                type="password"
                id="password"
                onChange={(e) => setPass(e.target.value)}
                value={pass}
                required
              />
            </div>
            <button className="bg-blue-500 rounded-md h-9 mt-5">Sing In</button>
          </form>
          <p className="text-white">
            Need an account?
            <Link to="#">
              <span className="text-blue-500 underline">Sign up</span>
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
};

export default Login;
