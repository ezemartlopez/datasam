import MenuDropdown from "@/components/MenuDropdown";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { comunidadData, faqs } from "./lib/homePage-data";
import Title from "@/components/Title";
import InfoCommunity from "@/components/InfoCommunity";
import ButtonComponent from "@/components/ButtonComponent";

export default function Home() {
  return (
    <div className="relative w-full min-h-screen font-rubik">
      {/* Div azul fijo en la parte superior */}
      <header className="fixed z-50 top-0 h-[80px] w-full bg-gray-950/60">
        <nav className="w-full h-full px-[50px] py-[10px] flex justify-between md:justify-start items-center md:gap-[100px]">
          <Image src="/svg/DataSamLogo.svg" width={80} height={40} alt="DatasamLogo" loading="lazy"/>
          <div className="flex-1 h-full hidden md:inline-flex">
            <ul className="h-full w-full flex justify-start items-center gap-[35px]">
              <li className="">
                <a href="" className="font-rubik text-lg font-light text-white hover:text-blue-500 transition-colors duration-300">Inicio</a>
              </li>
              <li className="">
                <a href="" className="font-rubik text-lg font-light text-white hover:text-blue-500 transition-colors duration-300">Comunidad</a>
              </li>
              <li className="">
                <a href="" className="font-rubik text-lg font-light text-white hover:text-blue-500 transition-colors duration-300">Carrera</a>
              </li>
            </ul>
          </div>
          <div className="h-full flex items-center gap-2 group cursor-pointer">
            <FaUser size={24} className="text-white group-hover:text-blue-500 transition-colors duration-300"/>
            <span className="hidden sm:inline-flex font-rubik text-lg font-light text-white group-hover:text-blue-500 transition-colors duration-300">Iniciar Sesión</span>
          </div>
        </nav>
      </header>
      <main className="w-full h-full">
        {/* Contenido siguiente */}
        <section className="relative z-0 w-full h-screen">
        <Image
            src="/Images/UnsamCampusFullHD.png"
            alt="Descripción de la imagen"
            layout="fill"
            //objectFit="cover"
            className="object-fill lg:object-cover w-full h-full absolute z-10"
            quality={100}
            priority
          />

          <div className="absolute z-20 w-full h-full p-[30px] sm:p-[80px] xl:p-[150px] bg-black/15">
            <div className="w-full h-full flex flex-col justify-end items-start gap-[30px]">
              <h1 className="w-full xl:w-[1024px] font-rubik text-4xl md:text-7xl font-medium text-white">Comunidad de Ciencia de Datos UNSAM</h1>
              <h3 className="font-rubik text-lg md:text-2xl font-normal text-white">Donde el conocimiento se comparte y la comunidad se fortalece 🚀</h3>
            </div>
          </div>
        </section>
        <section className="w-full min-h-screen bg-white text-black flex justify-center">
          <div className="relative max-w-[1440px] p-[30px] md:p-[80px] xl:p-[150px] w-full h-full flex flex-col gap-20">
            <div className="absolute top-0 left-0 size-[30px] md:size-[80px] xl:size-[150px] bg-green-500/50"></div>
            <div className="absolute bottom-0 right-0 size-[30px] md:size-[80px] xl:size-[150px] bg-green-500/50"></div>
            <div className="w-full h-2"></div>
            {comunidadData.map((infoData, index) => (
              <InfoCommunity key={index} info={infoData} reverse={index%2===0}/>
            ))}
            <article className="w-full h-auto flex flex-col gap-6">
              <Title title="Preguntas Frecuentes"/>
              <div className="w-full h-auto flex flex-col gap-1">
                {faqs.map((faq, index) => (
                  <MenuDropdown key={index} title={faq.title} description={faq.description}/>
                ))}
              </div>
            </article>
            <div className="w-full h-2"></div>
          </div>
        </section>
      </main>
      <footer className="">
        <div className="relative w-full h-[300px] sm:h-[400px] bg-black/20">
          <Image
            src="/Images/UnsamLcdComunidad.png" // Ruta correcta (sin `/public`)
            alt="image_comunidad_lcd"
            layout="fill" // Hace que la imagen ocupe todo el espacio disponible
            objectFit="cover" // Para que la imagen cubra todo el contenedor sin distorsión
            className="object-center absolute z-0" // Se asegura de que la imagen no se distorsione
          />
          <div className="absolute z-10 w-full h-full bg-black/25">
            <div className="w-full h-full p-[30px] flex flex-col justify-center items-center gap-[20px]">
              <h2 className="w-auto font-rubik text-3xl sm:text-5xl font-medium text-white">Únete a DATA SAM</h2>
              <h3 className="font-rubik text-lg sm:text-2xl font-normal text-white">Sé parte de una comunidad apasionada por la ciencia de datos y la innovación.</h3>
              <ButtonComponent text="Unirse a la comunidad"/>
            </div>
          </div>
        </div>
        <div className="w-full h-[100px] bg-green-700 flex justify-center items-center">
          <p className="font-rubik text-sm sm:text-lg font-light text-center text-white">©2025 - DATA SAM - Universidad Nacional de San Martín. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}
