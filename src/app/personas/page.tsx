"use client";
import React from "react";
import { CheckIcon } from "@radix-ui/react-icons";

const page = () => {
  return (
    <div className="mx-auto flex h-screen max-w-[1200px] flex-col justify-center">
      <div className="max-w-[550px] lg:mb-20">
        <p className="font-semibold  text-lime-500">Dejá de pensarlo</p>
        <h2 className="text-[2.5rem] font-bold  leading-[120%]">
          Hacete cliente de St. Patrick ¡Te estamos esperando!
        </h2>
        <ul className="mt-4 flex flex-col gap-2 text-lg">
          <li className="flex items-center">
            <CheckIcon className="mr-2 scale-150" />
            Aprovechá todos los productos y beneficios que tenemos para vos
          </li>
          <li className="flex items-center">
            <CheckIcon className="mr-2 scale-150" />
            Acumulá Puntos St. Patrick en todas tus compras
          </li>
          <li className="flex items-center">
            <CheckIcon className="mr-2 scale-150" />
            Disfrutá descuentos en Go de St. Patrick, pagá con MODO y más
          </li>
        </ul>
        <button className="mt-10 rounded-full bg-lime-500 py-4 px-8 font-semibold">
          Quiero ser cliente
        </button>
        <p className="mt-6 font-semibold">Bienvenido a la nueva bancalidad</p>
      </div>
    </div>
  );
};

export default page;
