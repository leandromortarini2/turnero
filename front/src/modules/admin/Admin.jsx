import React from "react";
import { date } from "../../utils/date";
import CountPerson from "./CountPerson";
import SelectLocal from "./SelectLocal";
import PanelButton from "./PanelButton";
import UserData from "./UserData";

const Admin = () => {
  return (
    <section className="w-full min-h-screen  bg-[#f1f1f1]  flex flex-col items-center">
      <article className="w-full flex  items-center gap-5 px-10 mt-10">
        {/* datos del paciente */}
        <UserData />
        {/*Acciones del turno */}
        <article className="w-1/2 gap-2 flex flex-col justify-center  h-72   rounded-2xl text-lg">
          {/* Box 1 */}
          {/* Box 1 */}
          <div className="w-full gap-2 flex items-center justify-between h-64  text-gray-700   text-lg">
            <SelectLocal />
            <CountPerson />
          </div>{" "}
          {/* Box 2 */}
          {/* Box 2 */}
          <PanelButton />
        </article>
      </article>
      <div className="w-[90%] my-5 h-24 flex flex-col items-end gap-5  text-xl text-gray-700 font-bold tracking-wider uppercase">
        <p className="text-cyan-700">Dr. Leandro Mortarini</p>
        <p>{date}</p>
      </div>
    </section>
  );
};

export default Admin;
