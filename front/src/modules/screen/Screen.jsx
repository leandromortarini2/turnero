import React from "react";
import Carrousel from "../../components/Carrousel/Carrousel";
import { date } from "../../utils/date";
const Screen = () => {
  return (
    <div className="w-full bg-[#f1f1f1] py-10 flex justify-center ">
      {/* Carrousel */}
      {/* Carrousel */}
      <div className="w-1/2 h-[500px] flex gap-3 flex-col  items-end ">
        {/* <Carrousel /> */}
        <iframe
          width="90%"
          height="350"
          src="https://www.youtube.com/embed/8oczejZx5TM?si=ndAWYuDJC8YkcTkK"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div className="w-[90%]  h-14 flex justify-center items-center gap-5  ">
          <p className="  text-3xl text-gray-700 font-bold tracking-wider uppercase">
            {date}
          </p>
        </div>
      </div>

      {/* turnoS */}
      {/* turnoS */}
      <div className="w-1/2  flex flex-col gap-5  ">
        <div className="flex gap-5 px-20 h-14 uppercase font-bold tracking-wide text-3xl ">
          <div className="w-1/2 h-full flex justify-center items-center rounded-2xl bg-cyan-900 text-white">
            Turno
          </div>
          <div className="w-1/2 h-full flex justify-center items-center  bg-cyan-700 rounded-2xl text-white ">
            Puesto
          </div>
        </div>
        <div className="flex gap-5 px-20 h-14 uppercase font-bold tracking-wide text-4xl ">
          <div className="w-1/2 h-full flex justify-center items-center rounded-2xl bg-white text-gray-800">
            A002
          </div>
          <div className="w-1/2 h-full flex justify-center items-center rounded-2xl bg-white text-gray-800">
            3
          </div>
        </div>
        <div className="flex gap-5 px-20 h-14 uppercase font-bold tracking-wide text-4xl">
          <div className="w-1/2 h-full flex justify-center items-center rounded-2xl bg-white text-gray-800">
            F005
          </div>
          <div className="w-1/2 h-full flex justify-center items-center rounded-2xl bg-white text-gray-800">
            7
          </div>
        </div>
        <div className="flex gap-5 px-20 h-14 uppercase font-bold tracking-wide text-4xl">
          <div className="w-1/2 h-full flex justify-center items-center rounded-2xl bg-white text-gray-800">
            G014
          </div>
          <div className="w-1/2 h-full flex justify-center items-center rounded-2xl bg-white text-gray-800">
            1
          </div>
        </div>
        <div className="flex gap-5 px-20 h-14 uppercase font-bold tracking-wide text-4xl">
          <div className="w-1/2 h-full flex justify-center items-center rounded-2xl bg-white text-gray-800">
            G014
          </div>
          <div className="w-1/2 h-full flex justify-center items-center rounded-2xl bg-white text-gray-800">
            1
          </div>
        </div>
        <div className="flex gap-5 px-20 h-14 uppercase font-bold tracking-wide text-4xl">
          <div className="w-1/2 h-full flex justify-center items-center rounded-2xl bg-white text-gray-800">
            G014
          </div>
          <div className="w-1/2 h-full flex justify-center items-center rounded-2xl bg-white text-gray-800">
            1
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen;
