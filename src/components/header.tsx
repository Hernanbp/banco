"use client";
import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex h-16 items-center border-b  border-gray-200 bg-white">
      <div className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          St. Patrick
        </Link>
        <nav>
          <div className="flex items-center gap-4">
            <Link href="/personas">
              <button className="flex items-center gap-1 rounded-full border py-2 px-4 text-sm font-light">
                Hacete cliente
                <ChevronRightIcon />
              </button>
            </Link>
            <button className="flex items-center gap-1 rounded-full bg-black py-2 px-4 text-sm font-light text-white">
              Online Banking
              <ChevronRightIcon />
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
