import ButtonComponent from "@/components/ButtonComponent";
import CommunicationChannel from "@/components/Community/CommunicationChannel";
import Paragraph from "@/components/Paragraph";
import Title from "@/components/Title";
import { codeOfConductLink, links_community, links_data, social_networks } from "@/lib/communityPage-data";

// page.tsx
export default function CommunityPage() {
  return (
    <div className="w-full pt-[80px] flex flex-col items-center gap-[20px]">
  
      <section className="relative max-w-[1440px] w-full h-auto flex flex-col p-[30px] md:p-[80px] xl:p-[150px]">

        <div className="absolute top-0 left-0 size-[30px] md:size-[80px] xl:size-[150px] bg-green-500/50"></div>
        <div className="absolute bottom-0 right-0 size-[30px] md:size-[80px] xl:size-[150px] bg-green-500/50"></div>

        <div className="w-full flex flex-col items-start gap-[70px] pb-10">
          <div className="w-full flex justify-end">
            <ButtonComponent text="Volver al Inicio" href="/"/>
          </div>
          <article className="w-full flex flex-col gap-4">
            <Title title="Únete a DATA SAM 🚀"/>
            <Paragraph text="Bienvenido a la comunidad de Ciencia de Datos de la Universidad Nacional de San Martín. 🌍📊 Aquí encontrarás un espacio colaborativo donde aprender, compartir conocimientos y conectar con otros entusiastas de los datos. Explora eventos, cursos, grupos de estudio y más. ¡Únete y potencia tu crecimiento profesional!"/>
          </article>
          <article className="w-full flex flex-col gap-4">
            <Title title="Acceso a la Comunidad 🔗"/>
            <Paragraph text="Mantente siempre informado y participa activamente en nuestras discusiones. Conéctate a nuestros canales oficiales y sé parte del ecosistema de DATA SAM. Aquí compartimos oportunidades laborales, proyectos colaborativos y novedades del mundo de la Ciencia de Datos."/>

            <ul className="w-full mt-2 grid grid-cols-1 sm:grid-cols-2 gap-[40px]">
              {links_community.map((linkGroup, index) => (
                <CommunicationChannel key={index} linkPage={linkGroup}/>
              ))}
            </ul>
          </article>
          <article className="w-full flex flex-col gap-4">
            <Title title="Redes Sociales 📱"/>
            <Paragraph text="Síguenos en nuestras redes sociales y mantente al día con lo último en Ciencia de Datos. 📰🎓 Descubre historias de éxito, eventos presenciales y virtuales, y participa en debates con la comunidad."/>

            <ul className="w-full mt-2 grid grid-cols-1 sm:grid-cols-2 gap-[40px]">
              {social_networks.map((linkGroup, index) => (
                <CommunicationChannel key={index} linkPage={linkGroup}/>
              ))}
            </ul>
          </article>
          <article className="w-full flex flex-col gap-4">
            <Title title="Recursos y Materiales 📚"/>
            <Paragraph text="Accede a una biblioteca digital con cursos, libros y proyectos en Ciencia de Datos. 🚀💡 Desde fundamentos de programación hasta técnicas avanzadas de Machine Learning, aquí tienes todo lo necesario para impulsar tu aprendizaje."/>

            <ul className="w-full mt-2 grid grid-cols-1 sm:grid-cols-2 gap-[40px]">
              {links_data.map((linkGroup, index) => (
                <CommunicationChannel key={index} linkPage={linkGroup}/>
              ))}
            </ul>
          </article>
          <article className="w-full flex flex-col gap-4">
            <Title title="Documentos Importantes 📄"/>
            <Paragraph text="Nuestra comunidad se basa en el respeto y la colaboración. 🌱🤝 Consulta nuestro código de conducta y otros documentos clave para asegurarte de contribuir a un entorno positivo y enriquecedor para todos."/>

            <ul className="w-full mt-2 grid grid-cols-1 sm:grid-cols-2 gap-[40px]">
              <CommunicationChannel linkPage={codeOfConductLink}/>
            </ul>
          </article>
        </div>
        
      </section>
    </div>
  );
}
