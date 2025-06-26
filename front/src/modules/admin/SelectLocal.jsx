import React from "react";

const SelectLocal = () => {
  return (
    <div className="w-1/2 h-full bg-white flex flex-col justify-center rounded-2xl items-center gap-4 ">
      <label htmlFor="" className="font-bold uppercase">
        Selecciona un puesto
      </label>
      <select className="w-64 py-2 px-3 rounded-xl border-2 border-cyan-800  tracking-wider cursor-pointer">
        <option value="1">Puesto 1</option>
        <option value="2">Puesto 2</option>
        <option value="3">Puesto 3</option>
      </select>
      <button
        type="submit"
        className="text-cyan-800 cursor-pointer uppercase text-sm mb-3  hover:text-cyan-500 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg px-5 py-2.5 tracking-wider"
      >
        guardar puesto
      </button>
    </div>
  );
};

export default SelectLocal;
