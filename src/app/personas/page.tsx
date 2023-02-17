"use client";

import React from "react";
import {
  CheckIcon,
  DotFiDotFilledIcon,
  lledIconDotFilledIcon,
  InfoCircledIcon,
  DotFilledIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div className="bg-gray-50">
        <div className="mx-auto flex h-[700px] max-w-[1200px] flex-col justify-center">
          <div className="max-w-[550px] lg:mt-24">
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
            <Link href="/personas/registro">
              <button className="mt-10 rounded-full bg-lime-500 py-4 px-8 font-semibold">
                Quiero ser cliente
              </button>
            </Link>
            <p className="mt-6 font-semibold">
              Bienvenido a la nueva bancalidad
            </p>
          </div>
        </div>
      </div>
      <div className="bg-lime-500">
        <div className="mx-auto flex h-80 max-w-[1200px] flex-col justify-center py-10">
          <h2 className="text-[1.63rem] font-semibold">
            Viví una verdadera experiencia en banca
          </h2>
          <h3 className="my-4 mt-2 text-xl">
            ¿Qué esperás? Te podemos ayudar con tus necesidades financieras
          </h3>
          <ul className="mt-2 flex flex-col gap-4">
            <li className="flex items-center">
              <DotFilledIcon />
              Ponemos a tu alcance productos desarrollados pensando en tus
              necesidades
            </li>
            <li className="flex items-center">
              <DotFilledIcon />
              Siempre estamos cerca de vos con nuestra red de cajeros y
              sucursales
            </li>
            <li className="flex items-center">
              <DotFilledIcon />
              Tenés todos los canales digitales para operar desde la
              tranquilidad de tu hogar, contando con atención personalizada
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gray-50">
        <div className="mx-auto flex h-[40rem] max-w-[1200px] items-center justify-between">
          <div className="flex h-[500px] w-[360px] flex-col items-center justify-center rounded-xl border bg-white p-8 text-center drop-shadow-sm">
            <h2 className="text-3xl font-bold">Sacá tu tarjeta de crédito</h2>
            <h3 className="mt-2 text-base font-semibold">
              Sacá tu tarjeta de crédito gratis por 1 año
            </h3>
            <p className="mt-5">
              Pedila en 5 minutos, accedé a descuentos en viajes, preventas,
              indumentaria y mucho más.
            </p>
            <button className="mt-10 rounded-full border bg-lime-500 py-3 px-6 font-medium">
              Solicitá tu tarjeta
            </button>
            <p className="mt-10 flex items-center gap-2 font-semibold">
              <InfoCircledIcon className="scale-125" />
              Más información
            </p>
          </div>
          <div className="flex h-[500px] w-[360px] flex-col  items-center justify-center rounded-xl border bg-white p-6 text-center drop-shadow-sm">
            <h2 className="text-3xl font-bold">
              Cobrá tu sueldo en St. Patrick
            </h2>
            <h3 className="mt-2 text-base font-semibold">
              No te pierdas los beneficios exclusivos de cobrar tu sueldo en St.
              Patrick
            </h3>
            <p className="mt-5">
              Disfrutá de tu cuenta 100% bonificada, tasas exclusivas en
              préstamos personales y descuentos en seguros.
            </p>
            <button className="mt-10 rounded-full border bg-lime-500 py-3 px-6 font-medium">
              Solicitá tu tarjeta
            </button>
            <p className="mt-10 flex items-center gap-2 font-semibold">
              <InfoCircledIcon className="scale-125" />
              Mas informacion
            </p>
          </div>
          <div className="flex h-[500px] w-[360px] flex-col items-center justify-center rounded-xl border bg-white p-6 text-center drop-shadow-sm">
            <h2 className="text-3xl font-bold">Acreditá tus ventas</h2>
            <h3 className="mt-[4.25rem] text-base font-semibold">
              Te apoyamos con tu comercio
            </h3>
            <p className="mt-5">
              Acreditá tus ventas con tarjetas de crédito y débito en una cuenta
              corriente en BBVA y tené beneficios para vos y tus clientes.
            </p>
            <button className="mt-10 rounded-full border bg-lime-500 py-3 px-6 font-medium">
              Adherite
            </button>
            <p className="mt-10 flex items-center gap-2 font-semibold">
              <InfoCircledIcon className="scale-125" />
              Más información
            </p>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-200 bg-white">
        <div className="mx-auto flex h-40 max-w-[1200px] items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold">
              Venite a St. Patrick y disfrutá todo lo que tenemos para vos
            </h2>
            <p>
              Tenemos soluciones financieras, beneficios y productos que se
              adaptan a tus necesidades.
            </p>
          </div>
          <button className="rounded-full bg-lime-500 py-4 px-8 font-semibold">
            Hacete cliente
          </button>
        </div>
      </div>
    </>
  );
};

export default page;
