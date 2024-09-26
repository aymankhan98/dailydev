import React from "react";
import { Search, Bell, Grid, Flame, Zap } from "lucide-react";
import Image from "next/image";

const NavBar = () => {
  return (
    <div className=" text-white border-b border-[#444343]  flex justify-between items-center px-6 py-2">
      {/* Logo Section */}
      <div className="flex items-center space-x-2">
        <Image src="/devlogo.png" alt="Logo" width={130} height={35} />
      </div>

      <div className="flex items-center justify-between w-[35%] h-12 bg-gray-800 px-3 py-1 rounded-xl">
        <div className="flex">
          <Search className="text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-gray-300 pl-2"
          />
        </div>

        <div className="flex items-center space-x-1 ml-2">
          <span className="bg-gray-700 text-sm px-1 rounded-md">Ctrl</span>
          <span className="bg-gray-700 text-sm px-1 rounded-md">K</span>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <button className="bg-white text-black px-4 py-2 rounded-xl font-[600]">
          New post
        </button>
        <button className=" bg-slate-800 p-2 rounded-xl">
          <Grid className="text-gray-400" />
        </button>
        <button className=" bg-slate-800 p-2 rounded-xl">
          {" "}
          <Bell className="text-gray-400" />
        </button>
        <div className="flex gap-4 bg-slate-800 py-1 px-[10px] rounded-xl items-center justify-center">
          <button className="flex">
            <Flame className="text-red-500" />
            <span>36</span>
          </button>

          <button className="flex">
            <Zap className="text-purple-500" />
            <span>10</span>
          </button>

          <div className="bg-pink-500 w-8 h-8 rounded-full flex items-center justify-center">
            <span className="text-white font-semibold">M</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
