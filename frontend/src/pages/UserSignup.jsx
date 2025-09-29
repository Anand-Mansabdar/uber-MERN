import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastname, setLastname] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    setUserData({
      fullName: { firstName: firstName, lastname: lastname },
      email: email,
      password: password,
    });
    console.log(userData);
    setEmail("");
    setPassword("");
    setFirstName("");
    setLastname("");
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        {/* <img className="" src={UberImage} alt="" /> */}
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
          action=""
        >
          <h3 className="text-xl font-medium mb-2">Full Name:</h3>
          <div className="flex gap-3 mb-3">
            <input
              className="bg-[#eeeeee] rounded-md px-4 py-2 border text-lg w-1/2 placeholder:text-base"
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              required
              placeholder="Firstname"
            />
            <input
              className="bg-[#eeeeee] rounded-md w-1/2 px-4 py-2 border  text-lg placeholder:text-base"
              type="text"
              value={lastname}
              onChange={(e) => {
                setLastname(e.target.value);
              }}
              required
              placeholder="Lastname"
            />
          </div>

          <h3 className="text-xl font-medium mb-2">Email Address:</h3>
          <input
            className="bg-[#eeeeee] mb-3 rounded-md px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Create with email"
          />
          <h3 className="text-xl font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded-md px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Create password"
          />
          <button className="bg-[#111] text-white mb-3 font-semibold rounded-md px-4 py-2 w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>
        <Link
          className="flex items-center justify-center text-center mb-3"
          to="/login"
        >
          Existing User? Click to Login
        </Link>
      </div>

      <div>
        <p className="text-xs leading-tight tracking-tight font-semibold">
          This site is protected by reCAPTCHA and the <span className="underline">Google Privacy Policy</span> and <span className="underline">Terms of Service apply</span>.
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
