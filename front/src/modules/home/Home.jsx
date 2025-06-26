import React from "react";
import { Outlet } from "react-router-dom";
import Portada from "../../assets/portada.jpeg";
import { IoMdMedical } from "react-icons/io";

const Home = () => {
  return (
    <div className="w-full  text-cyan-700 h-screen flex flex-col items-center ">
      <div className="w-full p-5 bg-white flex items-center gap-10 justify-center ">
        <IoMdMedical className="text-[150px]" />
        <div>
          <h1 className="text-6xl font-bold capitalize tracking-wider">
            Clínica Medica
          </h1>
          <h2 className="text-4xl text-gray-700 ">
            Conciencia, salud y bienestar
          </h2>
        </div>
      </div>
      {/* <hr className="w-[90%] h-[1px] " /> */}
      <Outlet />
    </div>
  );
};

export default Home;
