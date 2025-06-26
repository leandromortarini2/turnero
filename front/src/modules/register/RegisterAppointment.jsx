import React from "react";
import FormRegister from "./FormRegister";

const RegisterAppointment = () => {
  return (
    <section className="w-full  bg-[#f1f1f1] min-h-screen flex  justify-center py-10 ">
      {/* <div className="w-1/2 flex flex-col items-center justify-center gap-2">
        <h1 className="text-5xl  font-bold capitalize tracking-wider text-gray-700">
          Solicitar turno
        </h1>
        <p className="text-2xl">Por favor ingrese los datos del paciente</p>

        <br />
        <p className="text-2xl"></p>
      </div> */}

      <FormRegister />
    </section>
  );
};

export default RegisterAppointment;
