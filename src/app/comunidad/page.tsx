import ButtonComponent from "@/components/ButtonComponent";
import CommunicationChannel from "@/components/Community/CommunicationChannel";
import Paragraph from "@/components/Paragraph";
import Text from "@/components/Text";
import Title from "@/components/Title";
import { codeOfConductLink, links_community, links_data, social_networks } from "@/lib/communityPage-data";
import Image from "next/image";

// page.tsx
export default function CommunityPage() {
  return (
    <div className="w-full pt-[100px] flex flex-col items-center gap-[20px]">
  
      <section className="relative max-w-[1440px] w-full h-auto flex flex-col p-[30px] md:p-[80px] xl:p-[150px]">

        <div className="absolute top-0 left-0 size-[30px] md:size-[80px] xl:size-[150px] bg-green-500/50"></div>
        <div className="absolute bottom-0 right-0 size-[30px] md:size-[80px] xl:size-[150px] bg-green-500/50"></div>

        <div className="w-full flex flex-col items-start gap-[70px]">
          <div className="w-full flex justify-end">
            <ButtonComponent text="Volver al Inicio" href="/"/>
          </div>
          <article className="w-full flex flex-col gap-4">
            <Title title="Únete a DATA SAM"/>
            <Paragraph text="Bienvenido a la comunidad de Ciencia de Datos de la Universidad Nacional de San Martín. Aquí encontrarás todos los recursos necesarios para conectarte, aprender y crecer junto a otros apasionados por los datos."/>
          </article>
          <article className="w-full flex flex-col gap-4">
            <Title title="Acceso a la Comunidad 🚀"/>
            <Paragraph text="Únete a nuestros canales principales de comunicación para mantenerte al día con todas las actividades, discusiones y oportunidades de la comunidad DATA SAM."/>

            <ul className="w-full mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[40px]">
              {links_community.map((linkGroup, index) => (
                <CommunicationChannel key={index} linkPage={linkGroup}/>
              ))}
            </ul>
          </article>
          <article className="w-full flex flex-col gap-4">
            <Title title="Redes Sociales 📱"/>
            <Paragraph text="Sigue nuestras redes sociales para mantenerte informado sobre eventos, noticias y el día a día de nuestra comunidad y la universidad."/>

            <ul className="w-full mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[40px]">
              {social_networks.map((linkGroup, index) => (
                <CommunicationChannel key={index} linkPage={linkGroup}/>
              ))}
            </ul>
          </article>
          <article className="w-full flex flex-col gap-4">
            <Title title="Recursos y Materiales 📚"/>
            <Paragraph text="Accede a nuestros repositorios de conocimiento de algunas materias y proyectos. Estos recursos te ayudarán en tu aprendizaje y desarrollo profesional."/>

            <ul className="w-full mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[40px]">
              {links_data.map((linkGroup, index) => (
                <CommunicationChannel key={index} linkPage={linkGroup}/>
              ))}
            </ul>
          </article>
          <article className="w-full flex flex-col gap-4">
            <Title title="Documentos Importantes 📄"/>
            <Paragraph text="Documentos esenciales que guían nuestra comunidad y aseguran un ambiente de respeto y colaboración."/>

            <ul className="w-full mt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[40px]">
              <CommunicationChannel linkPage={codeOfConductLink}/>
            </ul>
          </article>
        </div>
        
      </section>
    </div>
  );
}