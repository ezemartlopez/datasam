import MenuDropdown from "@/components/MenuDropdown";
import Image from "next/image";
import Title from "@/components/Title";
import InfoCommunity from "@/components/InfoCommunity";
import { comunidadData, faqs } from "@/lib/homePage-data";
import JoinCommunity from "@/components/Home/JoinCommunity";
import { FaGraduationCap } from "react-icons/fa";
import ButtonComponent from "@/components/ButtonComponent";

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
            <div className="w-full py-14 flex flex-col gap-[70px]">
              {comunidadData.map((infoData, index) => (
                <InfoCommunity key={index} info={infoData} reverse={index%2===0}/>
              ))}
              <article className="w-full h-[500px] sm:h-[400px] relative z-0">
                <Image 
                  src="/Images/CarreraImagen.png"
                  alt="Descripción de la imagen"
                  layout="fill"
                  className="object-cover rounded-lg z-0 absolute" // Cambio a object-cover para asegurar que la imagen no cubra todo el contenido
                />
                <div className="w-full h-full absolute z-20 py-6 px-8 rounded-lg cursor-pointer bg-black/50 hover:bg-black/65 transition-colors duration-500 flex flex-col justify-center items-center gap-3 group">
                  <div className="w-full ">
                    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-3">
                      <FaGraduationCap className="size-[70px] lg:size-[40px] text-white"/>
                      <span className="text-wrap text-center font-rubik text-white font-medium text-2xl sm:text-3xl">Descubre tu futuro en Ciencia de Datos</span>
                    </div>
                  </div>
                  <div className="w-full">
                    <p className="font-rubik text-base sm:text-xl font-light text-center text-white">
                      La licenciatura en ciencia de datos te prepara para liderar la revolución de los datos. Aprenderás técnicas avanzadas de análisis, machine learning y big data para resolver problemas complejos del mundo real.
                    </p>
                  </div>
                  <div className="w-full mt-2">
                    <div className="w-full flex justify-center items-center">
                      <ButtonComponent text="Más información sobre la carrera" href="/carrera"/>
                    </div>
                  </div>
                </div>
              </article>


              <article className="w-full h-auto flex flex-col gap-6">
                <Title title="Preguntas Frecuentes"/>
                <div className="w-full h-auto flex flex-col gap-1">
                  {faqs.map((faq, index) => (
                    <MenuDropdown key={index} title={faq.title} description={faq.description}/>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>
        <JoinCommunity/>
      </>
  );
}
