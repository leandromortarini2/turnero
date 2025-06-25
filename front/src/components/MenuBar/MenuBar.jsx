import React from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";
import { IoMdMedical } from "react-icons/io";
import { date } from "../../utils/date";

const MenuBar = () => {
  return (
    <div className="w-full  ">
      <div className="w-full bg-cyan-800 h-20 flex justify-between px-16 items-center uppercase ">
        <p className="text-lg font-bold tracking-widest w-1/4 flex gap-2 items-center">
          <IoMdMedical size={25} />
          Clínica Medica
        </p>
        <div className="w-1/2  flex justify-center">
          <Menu />
        </div>
        <p className="w-1/4">{date}</p>
      </div>
    </div>
  );
};

export default MenuBar;
