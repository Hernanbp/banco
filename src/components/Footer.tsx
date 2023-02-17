import React from "react";

const Footer = () => {
  return (
    <div className="flex h-56 justify-center border-t border-gray-200 bg-white">
      <div className="flex h-full w-full max-w-[1200px] flex-col items-center justify-center gap-6 ">
        <div className="flex w-full justify-between">
          <div className="text-4xl font-bold tracking-tighter">St. Patrick</div>
          <div className="logo">Socials</div>
        </div>
        <div className="w-full">
          <ul className="flex gap-6 font-semibold">
            <li>Aviso legal</li>
            <li>Aviso sobre navegadores</li>
            <li>Mapa</li>
            <li>Recomendaciones de seguridad</li>
          </ul>
        </div>
        <p className="w-full text-sm text-[#959595]">
          ©&thinsp;Banco St. Patrick Argentina S.A.
        </p>
      </div>
    </div>
  );
};

export default Footer;
