"use client";
import { ChevronRightIcon } from "@radix-ui/react-icons";

const Header = () => {
  return (
    <div className="flex h-20 items-center  border-b border-gray-200">
      <div className="mx-auto flex h-full w-full max-w-[1200px] items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tighter">St. Patrick</h1>
        <nav>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 rounded-full border py-2 px-4 text-sm font-light">
              Hacete cliente
              <ChevronRightIcon />
            </button>
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
