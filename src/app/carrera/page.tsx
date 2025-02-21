import Paragraph from "@/components/Paragraph";
import Title from "@/components/Title";
import { admissionConditions, graduateProfile, informationCareer, reportsAndContacts } from "@/lib/careerPage-data";
import Image from "next/image";
import { FaClipboardCheck } from "react-icons/fa";
import { TbPointFilled } from "react-icons/tb";

export default function CareerPage() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-[80px] pb-20">
      <section className="relative max-w-[1440px] pt-[120px] w-full h-auto flex flex-col gap-[50px] px-[30px] md:px-[80px] xl:px-[150px]">
        <article className="w-full flex flex-col gap-5">
          <Title title="Acerca de la Licenciatura en Ciencia de Datos"/>
          <div className="w-full h-[250px] sm:h-[400px] relative z-0">
            <Image src="/Images/carrera_imagen_fondo.png" alt="imagen_carrera" layout="fill" objectFit="fill" className="w-full h-full brightness-75 rounded-2xl absolute z-0"/>
            {/* 
            <div className="w-full h-full absolute z-10 flex justify-center items-center">
              <div className="w-auto h-auto flex flex-col sm:flex-row items-center gap-4 px-6 sm:px-10">
                <h1 className="w-auto font-rubik text-3xl md:text-5xl lg:text-6xl font-medium text-white text-center">Licenciatura en Ciencia de Datos</h1>
              </div>
            </div>
            */}
          </div>
          <Paragraph text="La Licenciatura en Ciencia de Datos de la UNSAM es una carrera innovadora 🚀 que forma profesionales capaces de extraer conocimiento valioso a partir del análisis de grandes volúmenes de datos. En un mundo cada vez más digitalizado, nuestros graduados desarrollan las habilidades necesarias para liderar la revolución de los datos en diversos campos como tecnología 💻, finanzas 💰, investigación científica 🔬 y desarrollo social 🌍."/>    
        </article>
      </section>
      <section className="relative max-w-[1440px] w-full h-auto flex flex-col gap-[80px] px-[30px] md:px-[80px] xl:px-[150px]">
        <article className="w-full flex flex-col gap-5">
          <Title title="Información General"/>
          <Paragraph text="La Licenciatura en Ciencia de Datos de la UNSAM está respaldada por la Resolución Ministerial RM 3079/21, que oficializa el programa y asegura su calidad. Esta carrera forma profesionales capacitados para analizar grandes volúmenes de datos y tomar decisiones informadas, con aplicaciones en áreas como tecnología, finanzas, investigación científica y desarrollo social."/>    
          <ul className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {informationCareer.map((item, index) => (
              <li key={index} className="w-full h-full px-[15px] py-[30px] rounded-lg border border-green-500 flex flex-col gap-4 items-center">
                <div className="flex items-center gap-3">
                  <item.icon className="size-[30px] sm:size-[40px] text-green-500" />
                  <h3 className="font-rubik text-2xl sm:text-3xl text-green-500 font-medium">{item.title}</h3>
                </div>
                <h4 className="font-rubik text-xl text-black text-center">{item.subtitle}</h4>
                <span className="font-rubik text-lg text-gray-500 font-light">{item.description}</span>
              </li>
            ))}
          </ul>
        </article>

        <article className="w-full flex flex-col gap-5">
          <Title title="Perfil del Egresado/a"/>
          <Paragraph text="El/la graduado/a en Ciencia de Datos posee una sólida formación en áreas diversas, como matemática, informática y estadística, desde la obtención de datos, evaluación y preparación, hasta la implementación de los modelos, producción y puesta en funcionamiento de una herramienta o solución adaptada."/>
          <Paragraph text="Tiene una gran capacidad analítica para el desarrollo de modelos estadísticos y la implementación de algoritmos que permitan obtener información a partir de gran cantidad de datos."/>
          <Paragraph text="Es capaz de participar en proyectos de desarrollo tecnológico y científico, tanto en equipos nacionales como internacionales. Su perfil es ideal para:"/>
          <ul className="w-full flex flex-col gap-4">
            {graduateProfile.map((item, index) => (
              <li key={index} className="w-full flex gap-4 ">
                <TbPointFilled className="text-green-500 mt-1 size-[20px]"/>
                <Paragraph text={item} bold={true}/>
              </li>
            ))}
          </ul>
        </article>

        <article className="w-full flex flex-col gap-5">
          <Title title="Condiciones de Admisión"/>
          <Paragraph text="Podrán ingresar a la carrera Licenciatura en Ciencia de Datos quien egrese del nivel medio o polimodal con título de instituciones reconocidas oficialmente, que deberán, además, cumplimentar los siguientes requisitos:"/>
          <ul className="w-full flex flex-col gap-4">
            {admissionConditions.map((condition, index) => (
              <li key={index} className="w-full flex gap-4 ">
                <FaClipboardCheck className="text-green-500 mt-1 size-[16px]"/>
                <div className="w-full flex flex-col items-start justify-start gap-1">
                  <Paragraph text={condition.title} bold={true}/>
                  <Paragraph text={condition.description}/>
                </div>
              </li>
            ))}
          </ul>
        </article>

        <article className="w-full flex flex-col gap-5">
          <Title title="Informes y Contacto"/>
          <Paragraph text="Para obtener asistencia o resolver cualquier consulta relacionada con tu carrera en la ECyT, puedes comunicarte con el Departamento de Estudiantes. A continuación, te brindamos la información de contacto, la dirección del campus y el horario de atención para que puedas ponerte en contacto de manera rápida y sencilla."/>
          <ul className="w-full flex flex-col gap-4">
            {reportsAndContacts.map((rac, index) => (
              <li key={index} className="w-full flex gap-4 ">
                <rac.icon className="text-green-500 mt-1 size-[20px]"/>
                <div className="w-full flex flex-col items-start justify-start gap-1">
                  <Paragraph text={rac.text} bold={true}/>
                </div>
              </li>
            ))}
          </ul>
        </article>       
             
      </section>

    </div>
  );
}
