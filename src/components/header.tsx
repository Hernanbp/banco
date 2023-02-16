"use client";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 flex h-16 w-full flex-col items-center border-b border-gray-200 bg-white   ">
      <div className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-between py-6">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          St. Patrick
        </Link>
        <nav>
          <div className="flex items-center gap-4">
            <Link href="/personas">
              <button className="flex items-center gap-1 rounded-full border py-2 px-4 text-sm transition-all duration-200 ease-linear hover:border-black hover:text-black ">
                Hacete cliente
                <ChevronRightIcon />
              </button>
            </Link>
            <button className="flex items-center gap-1 overflow-hidden rounded-full bg-black py-2 px-4 text-sm  text-white  transition-all duration-200 ease-linear hover:bg-lime-500 hover:text-black">
              Online Banking
              <ChevronRightIcon />
            </button>
          </div>
        </nav>
      </div>
      <div className="flex h-full w-full items-center border-b border-t border-gray-200 bg-white py-4">
        <div className="mx-auto w-full max-w-[1200px]">
          <ul className=" flex gap-6 text-sm">
            <li className="cursor-pointer font-semibold hover:text-lime-500">
              Centro de ayuda
            </li>
            <li className="cursor-pointer font-semibold hover:text-lime-500">
              Turnos Online
            </li>
            <li className="cursor-pointer font-semibold hover:text-lime-500">
              Beneficios
            </li>
            <li className="cursor-pointer font-semibold hover:text-lime-500">
              Tarjetas y Cuentas
            </li>
            <li className="cursor-pointer hover:text-lime-500">
              Cuenta Sueldo
            </li>
            <li className="cursor-pointer hover:text-lime-500">Préstamos</li>
            <li className="cursor-pointer hover:text-lime-500">Seguros</li>
            <li className="cursor-pointer hover:text-lime-500">Superfondos</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
