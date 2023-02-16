"use client";
import React from "react";
import { CheckIcon, DashIcon } from "@radix-ui/react-icons";

const page = () => {
  return (
    <>
      <div className="mx-auto flex h-screen max-w-[1200px] flex-col justify-center">
        <div className="max-w-[550px] lg:mb-20">
          <p className="font-semibold  text-lime-500">Dejá de pensarlo</p>
          <h2 className="text-[2.5rem] font-bold  leading-[120%]">
            Hacete cliente de St. Patrick ¡Te estamos esperando!
          </h2>
          <ul className="mt-4 flex flex-col gap-2 text-lg">
            <li className="flex items-center">
              <CheckIcon className="mr-2 scale-150 text-lime-500" />
              Aprovechá todos los productos y beneficios que tenemos para vos
            </li>
            <li className="flex items-center">
              <CheckIcon className="mr-2 scale-150 text-lime-500" />
              Acumulá Puntos St. Patrick en todas tus compras
            </li>
            <li className="flex items-center">
              <CheckIcon className="mr-2 scale-150 text-lime-500" />
              Disfrutá descuentos en Go de St. Patrick, pagá con MODO y más
            </li>
          </ul>
          <button className="mt-10 rounded-full bg-lime-500 py-4 px-8 font-semibold">
            Quiero ser cliente
          </button>
          <p className="mt-6 font-semibold">Bienvenido a la nueva bancalidad</p>
        </div>
      </div>
      <div className="bg-lime-500">
        <div className="mx-auto flex h-80 max-w-[1200px] flex-col justify-center py-10">
          <h2 className="text-2xl font-semibold">
            Viví una verdadera experiencia en banca
          </h2>
          <h3 className="my-4 mt-2 text-xl">
            ¿Qué esperás? Te podemos ayudar con tus necesidades financieras
          </h3>
          <ul className="mt-2 flex flex-col gap-4">
            <li className="flex items-center">
              <DashIcon />
              Ponemos a tu alcance productos desarrollados pensando en tus
              necesidades
            </li>
            <li className="flex items-center">
              <DashIcon />
              Siempre estamos cerca de vos con nuestra red de cajeros y
              sucursales
            </li>
            <li className="flex items-center">
              <DashIcon />
              Tenés todos los canales digitales para operar desde la
              tranquilidad de tu hogar, contando con atención personalizada
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default page;
