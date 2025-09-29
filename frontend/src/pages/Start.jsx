import React from "react";
import UberImage from "../assets/UberImage.png";
import { Link } from "react-router-dom";
const Start = () => {
  return (
    <div>
      <div className="h-screen bg-[url(https://images.unsplash.com/photo-1619059558110-c45be64b73ae?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-center  w-full bg-red-400 flex justify-between flex-col">
        <img src={UberImage} alt="" className="w-24"/>
        <div className="bg-white pb-7 px-4 py-4">
          <h2 className="text-2xl font-bold">Getting Started with Uber</h2>
          <Link to='/login' className="flex items-center justify-center w-full bg-black text-white py-3 rounded-sm mt-4">Continue</Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
 