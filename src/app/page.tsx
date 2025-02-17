import MenuDropdown from "@/components/MenuDropdown";
import Image from "next/image";
import Title from "@/components/Title";
import InfoCommunity from "@/components/InfoCommunity";
import { comunidadData, faqs } from "@/lib/homePage-data";
import JoinCommunity from "@/components/Home/JoinCommunity";

export default function Home() {
  return (
      <>
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
          <div className="relative max-w-[1440px] p-[30px] md:p-[80px] xl:p-[150px] w-full h-full flex flex-col">
            <div className="absolute top-0 left-0 size-[30px] md:size-[80px] xl:size-[150px] bg-green-500/50"></div>
            <div className="absolute bottom-0 right-0 size-[30px] md:size-[80px] xl:size-[150px] bg-green-500/50"></div>
            <div className="w-full py-14 flex flex-col gap-[40px]">
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
              <article className="w-full h-[200px] sm:h-[300px] relative z-0">
                <Image 
                  src="/Images/CarreraImagen.png"
                  alt="Descripción de la imagen"
                  layout="fill"
                  className="object-fill rounded-lg z-0 absolute"
                />
                <div className="absolute w-full h-full rounded-lg z-10 cursor-pointer bg-black/30 hover:bg-black/50 transition-colors duration-500 flex justify-center items-center">
                  <span className="font-rubik text-white font-light text-3xl sm:text-5xl">Informacion de la Carrera</span>
                </div>
              </article>
            </div>
          </div>
        </section>
        <JoinCommunity/>
      </>
  );
}
