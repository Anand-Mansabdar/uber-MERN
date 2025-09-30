import React, { useState, useContext } from "react";
import UberImage from "../assets/UberImage.png";
import { Link, redirect, useNavigate } from "react-router-dom";
import { UserDataContext } from "../context/UserContext";
import { Navigate } from "react-router-dom";
import axios from "axios";

const UserLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const { user, setUser } = useContext(UserDataContext);

  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    // setUserData({ email: email, password: password });
    const userData = {
      email: email,
      password: password,
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/users/login`, userData
    );

    if (response.status === 200) {
      const data = response.data;
      setUser(data.user);
      localStorage.setItem('token', data.token);
      navigate("/home");
    }

    console.log(userData);
    setEmail("");
    setPassword("");
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
          <h3 className="text-xl font-medium mb-2">What's your email</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded-md px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
            placeholder="Enter your email"
          />
          <h3 className="text-xl font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded-md px-4 py-2 border w-full text-lg placeholder:text-base"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="Enter password"
          />
          <button className="bg-[#111] text-white mb-3 font-semibold rounded-md px-4 py-2 w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>
        <Link
          className="flex items-center justify-center text-center mb-3"
          to="/signup"
        >
          New to Uber? Create account.
        </Link>
      </div>

      <div>
        <Link
          to="/captain-login"
          className="bg-[#10b461] text-white mb-7 font-semibold rounded-md px-4 py-2 w-full text-lg flex justify-center items-center placeholder:text-base"
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  );
};

export default UserLogin;
