
export interface CommunityData {
  title: string;
  description: string[];
  image: string;
  link?: {
    text:string;
    href: string;
  };
}
export const comunidadData: CommunityData[] = [
  {
    title: "¿Qué es la comunidad DATA SAM?",
    description: [
      "👉🏼 DATA SAM es una comunidad conformada por estudiantes de la Licenciatura en Ciencia de Datos de la Universidad Nacional de San Martín, comprometidos con el aprendizaje 📚 y la colaboración 🤝 en el fascinante mundo de los datos.",
      "Buscamos construir un espacio donde la innovación 💡, la investigación 🔍 y la práctica se fusionen para promover el desarrollo de habilidades técnicas y la resolución de problemas reales."
    ],
    image: "/Images/grupo_comunidad.png",
    link: {
      text:"Unirse a la comunidad", 
      href:"/comunidad"
    }
  },
  {
    title: "¿Cuál es nuestra misión?",
    description: [
      "🌱 Nuestra misión es crear un espacio inclusivo y dinámico donde estudiantes de nuestra carrera, así como de otras disciplinas, puedan conectarse 🌐, compartir recursos 📖 y enriquecer sus conocimientos.",
      "Fomentamos el intercambio de ideas 💬 como pilar fundamental para el crecimiento personal y colectivo. Invitamos tanto a estudiantes como a docentes de otras carreras a unirse, aprender y colaborar en proyectos conjuntos, ampliando así las posibilidades de aprendizaje y desarrollo en la ciencia de datos."
    ],
    image: "/Images/apoyo_comunidad.png"
  }
];


export interface FAQ {
  title: string;
  description: string;
}

export const faqs: FAQ[] = [
  {
    title: "¿Quién puede unirse a DATA SAM?",
    description: "DATA SAM está abierto a todos los estudiantes de la Universidad Nacional de San Martín, especialmente a aquellos de la Licenciatura en Ciencia de Datos. Sin embargo, también damos la bienvenida a estudiantes de otras carreras interesados en el campo de los datos."
  },
  {
    title: "¿Ofrecen recursos para principiantes?",
    description: "¡Sí! Tenemos una variedad de recursos para todos los niveles, incluyendo tutoriales, workshops y mentorías para aquellos que están comenzando en el mundo de la ciencia de datos."
  }
];
