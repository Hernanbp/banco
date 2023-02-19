"use client";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  console.log("path: ", pathname);

  return (
    <>
      {pathname !== "/personas/login" ? (
        <div className="fixed top-0 left-0 z-50 flex h-16 w-full flex-col items-center border-b border-gray-200 bg-white">
          <div className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-between py-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-xl font-bold tracking-tighter"
            >
              <div className="relative h-[35px] w-[35px]">
                <Image
                  src="/logo.svg"
                  alt="logo"
                  fill={true}
                  style={{ objectFit: "cover" }}
                />
              </div>
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
                <Link href="/personas/login">
                  <button className="flex items-center gap-1 overflow-hidden rounded-full bg-black py-2 px-4 text-sm text-white  transition-all  duration-200 ease-linear hover:bg-lime-500 hover:text-black ">
                    Online Banking
                    <ChevronRightIcon />
                  </button>
                </Link>
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
                <li className="cursor-pointer hover:text-lime-500">
                  Préstamos
                </li>
                <li className="cursor-pointer hover:text-lime-500">Seguros</li>
                <li className="cursor-pointer hover:text-lime-500">
                  Superfondos
                </li>
              </ul>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Navbar;
