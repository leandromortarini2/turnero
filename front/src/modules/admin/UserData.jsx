import React from "react";

const UserData = () => {
  return (
    <div className="w-1/2 gap-5 flex flex-col text-gray-700 p-10 h-72 bg-white rounded-2xl text-xl">
      <h2 className="text-3xl font-bold text-cyan-700">Datos del paciente</h2>
      <div className="w-full flex gap-5 mt-5">
        <p>
          {" "}
          <strong className="text-cyan-800"> Nombre:</strong> Juan Perez
        </p>
        <p>
          {" "}
          <strong className="text-cyan-800"> Edad:</strong> 26
        </p>
        <p>
          {" "}
          <strong className="text-cyan-800"> DNI:</strong> 34.009.998{" "}
        </p>
      </div>
      <p>
        {" "}
        <strong className="text-cyan-800">Descripción:</strong> Fiebre alta
        durante 3 días, dolor de garganta y tos.
      </p>
    </div>
  );
};

export default UserData;
