import React from "react";

const FormRegister = () => {
  return (
    <form className="w-[1200px] h-[600px] flex flex-col justify-center shadow-2xl  gap-2 bg-white p-10 rounded-2xl">
      <h1 className="text-2xl font-bold capitalize tracking-wider text-gray-700 text-center mb-6">
        Rellena los datos del paciente
      </h1>

      {/* Gravedad */}
      <section className="flex justify-center items-center gap-4 mb-6">
        {[
          { value: "leve", label: "Puede esperar", color: "text-green-500" },
          {
            value: "media",
            label: "Atención pronto",
            color: "text-orange-500",
          },
          { value: "alta", label: "Atención urgente", color: "text-red-500" },
        ].map(({ value, label, color }) => (
          <div key={value} className="flex items-center gap-2">
            <input
              type="radio"
              name="gravedad"
              value={value}
              className="w-4 h-4"
            />
            <label className={`ml-2 font-medium ${color} text-lg`}>
              {label}
            </label>
          </div>
        ))}
      </section>

      {/* Datos personales */}
      <section className="flex justify-between gap-4 mb-6">
        <div className="w-1/3">
          <label
            htmlFor="name"
            className="block mb-2 font-medium text-gray-900"
          >
            Nombre y apellido
          </label>
          <input
            type="text"
            id="name"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Nombre completo"
            required
          />
        </div>
        <div className="w-1/3">
          <label
            htmlFor="year"
            className="block mb-2 font-medium text-gray-900"
          >
            Edad
          </label>
          <input
            type="number"
            id="year"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Edad"
            required
          />
        </div>
        <div className="w-1/3">
          <label htmlFor="dni" className="block mb-2 font-medium text-gray-900">
            DNI
          </label>
          <input
            type="text"
            id="dni"
            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="DNI"
            required
          />
        </div>
      </section>

      {/* Descripción */}
      <div className="mb-6">
        <label
          htmlFor="description"
          className="block mb-2 font-medium text-gray-900"
        >
          Descripción
        </label>
        <textarea
          id="description"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 h-20"
          placeholder="Escriba los síntomas o motivo de consulta"
          required
        />
      </div>

      {/* Especialidad */}
      <div className="flex justify-center mb-6">
        <select className="w-64 py-2 px-3 rounded-xl border-2 border-gray-600 tracking-wider cursor-pointer">
          <option value="">Seleccione una especialidad</option>
          <option value="clinico">Clínico</option>
          <option value="pediatra">Pediatra</option>
          <option value="cardiologo">Cardiólogo</option>
          <option value="otorrino">Otorrinolaringólogo</option>
        </select>
      </div>

      {/* Botón */}
      <div className="flex justify-center">
        <button
          type="submit"
          className="text-white bg-cyan-800 hover:bg-cyan-800/80 focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg px-5 py-2.5 tracking-wider"
        >
          Confirmar turno
        </button>
      </div>
    </form>
  );
};

export default FormRegister;
