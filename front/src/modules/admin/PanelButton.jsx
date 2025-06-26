import React from "react";
import { GiBugleCall } from "react-icons/gi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";

const PanelButton = () => {
  return (
    <div className="w-full  flex justify-evenly items-center  h-64 bg-white rounded-2xl text-lg">
      <button className="w-52 flex items-center gap-2 justify-center bg-teal-700 text-white py-2 rounded-xl uppercase tracking-wider font-bold cursor-pointer hover:bg-teal-700/80">
        <GiBugleCall />
        Llamar
      </button>
      <button className="w-52 flex items-center gap-2 justify-center bg-red-700 text-white py-2 rounded-xl uppercase tracking-wider font-bold cursor-pointer hover:bg-red-700/80">
        <IoMdCloseCircle /> finalizar
      </button>
      <button className="w-52 flex items-center gap-2 justify-center bg-gray-700 text-white py-2 rounded-xl uppercase tracking-wider font-bold cursor-pointer hover:bg-gray-700/80">
        <FaArrowTrendUp /> Derivar
      </button>
    </div>
  );
};

export default PanelButton;
