import Image from "next/image";
import Link from "next/link";  // Importa el componente Link de Next.js
import { FaUser } from "react-icons/fa";

// Header.tsx
function Header() {
  return (
    <header className="fixed z-50 top-0 h-[80px] w-full bg-gray-950/60">
      <nav className="w-full h-full px-[50px] py-[10px] flex justify-between md:justify-start items-center md:gap-[100px]">
        <Image src="/Svg/DataSamLogo.svg" width={80} height={40} alt="DatasamLogo" loading="lazy" />
        
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
        
        <div className="h-full flex items-center gap-2 group cursor-pointer">
          <FaUser size={24} className="text-white group-hover:text-blue-500 transition-colors duration-300" />
          <span className="hidden sm:inline-flex font-rubik text-lg font-light text-white group-hover:text-blue-500 transition-colors duration-300">Iniciar Sesión</span>
        </div>
      </nav>
    </header>
  );
}

export default Header;
