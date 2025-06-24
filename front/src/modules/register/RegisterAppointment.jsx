import React from "react";

const RegisterAppointment = () => {
  return (
    <section className="w-full  bg-[#f1f1f1] h-screen flex flex-col  items-center">
      <div className="w-full flex flex-col items-center gap-2">
        <h1 className="text-3xl mt-10 font-bold capitalize tracking-wider text-gray-700">
          Solicitar turno
        </h1>
        <p>Por favor ingrese los datos del paciente</p>
      </div>
      <form class="w-[450px] my-10">
        <div class="mb-5">
          <label
            for="Name"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Nombre y apellido
          </label>
          <input
            type="text"
            id="name"
            class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
            placeholder="name"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="dni"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            DNI
          </label>
          <input
            type="number"
            id="dni"
            class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
            placeholder="1010101010"
            required
          />
        </div>
        <div class="mb-5">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 "
          >
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            class="shadow-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5   "
            placeholder="name@flowbite.com"
            required
          />
        </div>
        <div class="flex justify-center">
          <button
            type="submit"
            class="text-white cursor-pointer bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center tracking-wider "
          >
            Solicitar turno
          </button>
        </div>
      </form>
    </section>
  );
};

export default RegisterAppointment;
