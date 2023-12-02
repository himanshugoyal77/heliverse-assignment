import React from "react";
import Search from "../icons/Search";

const Searchbar = ({ status, setStatus }) => {
  return (
    <div className="flex items-center justify-between bg-transparent ">
      <input
        className="bg-transparent rounded-full my-5 w-[40%] h-10  py-2 pl-4 pr-2 border border-gray-100 border-opacity-10 
    focus:outline-none focus:ring-2 focus:ring-opacity-50 text-white placeholder-gray-400
  "
        type="text"
        placeholder="Enter name or email"
      />
      <input
        className="bg-transparent rounded-full my-5  h-10  py-2 pl-4 pr-2 border border-gray-100 border-opacity-10 
    focus:outline-none focus:ring-2 focus:ring-opacity-50 text-white placeholder-gray-400
  "
        type="text"
        placeholder="Enter Domain"
      />
      <select
        name=""
        id=""
        onChange={(e) => setStatus(e.target.value)}
        className="
    rounded-md  py-1 pl-4 border border-gray-100 border-opacity-10 pr-2
    focus:outline-none focus:ring-2 focus:ring-opacity-50 text-black placeholder-gray-400
  "
      >
        <option value="">Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="gender">other</option>
      </select>
      <select
        name=""
        id=""
        onChange={(e) => setStatus(e.target.value)}
        className="
    rounded-md  py-1 pl-4 border border-gray-100 border-opacity-10
    focus:outline-none focus:ring-2 focus:ring-opacity-50 text-black placeholder-gray-400
  "
      >
        <option value="all">Status</option>
        <option value="true">Available</option>
        <option value="false">Not Available</option>
      </select>
      <button
        className="
  text-black flex items-center justify-center
  bg-slate-100  rounded-full h-[30px] w-[30px] focus:outline-none focus:ring-0 focus:ring-opacity-50 placeholder-gray-400"
      >
        <Search />
      </button>
    </div>
  );
};

export default Searchbar;
