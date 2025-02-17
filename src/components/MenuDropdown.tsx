'use client';

import classNames from 'classnames';
import { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

export default function MenuDropdown({title, description}: {title: string, description: string}) {
  const [openMenu, setOpenMenu] = useState(false);

  // Maneja la apertura y cierre del menú
  const toggleMenu = () => setOpenMenu((prev) => !prev);

  return (
    <div className="w-full h-auto flex justify-center items-center">
      <div className="w-full h-auto flex flex-col">
        <button onClick={toggleMenu} className={classNames("w-full p-4 border-b-[1.5px] flex justify-between items-center transition-colors duration-500", {"border-b-green-500": openMenu, "border-b-gray-600": !openMenu})}>
          <span className={classNames("font-rubik text-base md:text-lg font-normal transition-colors duration-500", {"text-green-500": openMenu, "text-gray-600": !openMenu})}>{title}</span>
          <BiChevronDown size={24} className={classNames("transition-all duration-500", {"rotate-180 text-green-500": openMenu, "text-gray-600": !openMenu})}/>
        </button>
        {/* Lista desplegable */}
        <div className={classNames("overflow-hidden w-full h-full transition-max-h duration-1000 ease-in-out",{"max-h-52": openMenu, "max-h-0": !openMenu})}>
          <p className="p-4 text-base md:text-lg font-rubik text-gray-600">{description}</p>
        </div>
      </div>
    </div>
  );
}

