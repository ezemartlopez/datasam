"use client"
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";  // Importa el componente Link de Next.js
import { useState } from "react";
import { FaDiscord, FaGoogle, FaUser } from "react-icons/fa";

// Header.tsx
function Header() {
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  const [openSidebar, setOpenSidebar] = useState<boolean>(false);

  const handleLogin = () => {
    setOpenSidebar(false);
    setOpenLogin(prev => !prev);
  }
  const handleSidebar = () => {
    setOpenLogin(false);
    setOpenSidebar(prev => !prev);
  }
  return (
    <header className="fixed z-50 top-0 h-[80px] w-full bg-gray-950/70">
      <nav className="w-full h-full px-[50px] py-[10px] flex justify-between md:justify-start items-center md:gap-[100px]">
        <button onClick={handleSidebar} className="md:pointer-events-none">
          <Image src="/Svg/DataSamLogo.svg" width={80} height={40} alt="DatasamLogo" loading="lazy" />
        </button>
        
        <div className="flex-1 h-full hidden md:inline-flex">
          <ul className="h-full w-full flex justify-start items-center gap-[35px]">
            <li>
              <Link href="/" className="font-rubik text-lg font-light text-white hover:text-blue-500 transition-colors duration-300">Inicio</Link>
            </li>
            <li>
              <Link href="/comunidad" className="font-rubik text-lg font-light text-white hover:text-blue-500 transition-colors duration-300">Comunidad</Link>
            </li>
            <li>
              <Link href="/carrera" className="font-rubik text-lg font-light text-white hover:text-blue-500 transition-colors duration-300">Carrera</Link>
            </li>
          </ul>
        </div>
        
        <div className="h-full relative">
          <div onClick={handleLogin} className="h-full flex items-center gap-2 group cursor-pointer">
            <FaUser size={24} className="text-white group-hover:text-blue-500 transition-colors duration-300" />
            <span className="hidden sm:inline-flex font-rubik text-lg font-light text-white group-hover:text-blue-500 transition-colors duration-300">Iniciar Sesión</span>
          </div>
        </div>
      </nav>
      
      <div className="absolute z-30 right-2 top-[80px]">
        <div className={classNames("w-[200px] rounded-b-lg", {"h-auto": !openLogin, "h-[115px]": openLogin})}>
          <div className={classNames("overflow-hidden bg-gray-950/70 w-full h-full flex flex-col justify-center rounded-b-lg transition-all duration-1000 ease-in-out", {"max-h-28 opacity-100": openLogin, "max-h-0 opacity-0": !openLogin})}>
            <ul className="px-4 py-4 flex flex-col gap-1">
              <li className="w-full py-1 flex items-center justify-center gap-2 group cursor-pointer">
                <FaDiscord size={24} className="text-white group-hover:text-blue-500 transition-colors duration-300"/>
                <span className="text-base font-rubik font-normal text-white group-hover:text-blue-500 transition-colors duration-300">Discord</span>
              </li>
              <li className="w-full py-1 flex items-center justify-center gap-2 group cursor-pointer">
                <FaGoogle size={20} className="text-white group-hover:text-blue-500 transition-colors duration-300"/>
                <span className="text-base font-rubik font-normal text-white group-hover:text-blue-500 transition-colors duration-300">Google</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="absolute z-10 w-full md:hidden block">
        <div className={classNames("w-full transition-opacity duration-500 ease-in-out opacity-100 flex flex-col", {"h-auto": !openSidebar, "h-screen": openSidebar})}>
          <div className={classNames("overflow-hidden w-full h-full rounded-b-lg bg-gray-950/70 transition-all duration-1000 ease-in-out", {"max-h-52 opacity-100": openSidebar, "max-h-0 opacity-0": !openSidebar})}>
            <ul className="px-10 py-10 flex flex-col gap-5">
              <li>
                <Link href="/" className="font-rubik text-lg font-light text-white hover:text-blue-500 transition-colors duration-300">Inicio</Link>
              </li>
              <li>
                <Link href="/comunidad" className="font-rubik text-lg font-light text-white hover:text-blue-500 transition-colors duration-300">Comunidad</Link>
              </li>
              <li>
                <Link href="/carrera" className="font-rubik text-lg font-light text-white hover:text-blue-500 transition-colors duration-300">Carrera</Link>
              </li>
            </ul>
          </div>
          <div onClick={()=>setOpenSidebar(false)} className={classNames("w-full flex-1", {"hidden": !openSidebar})}></div>
        </div>
      </div>

    </header>
  );
}

export default Header;
