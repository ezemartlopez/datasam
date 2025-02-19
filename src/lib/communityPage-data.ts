export interface LinkPage{
  type: "whatsapp" | "discord" | "instagram" | "notion" | "github";
  logo: string;
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

export const links_community: LinkPage[] = [
  {
    type: "whatsapp",
    logo: "/Svg/whatsapp.svg",
    title: "Comunidad",
    description: "Nuestra comunidad de WhatsApp para actualizaciones rápidas, anuncios importantes y comunicación informal entre miembros de la comunidad.",
    buttonText: "Unirse al grupo de WhatsApp",
    href: "https://chat.whatsapp.com/GZYwzwIY8FZJH8qF1ooUpj"
  },
  {
    type: "discord",
    logo: "/Svg/discord.svg",
    title: "Comunidad",
    description: "Nuestro servidor principal de comunicación. Únete para discusiones en tiempo real, eventos, colaboración en proyectos y soporte entre pares.",
    buttonText: "Unirse al Discord",
    href: "https://discord.gg/b58Rhb63W6"
  }, 
];

export const social_networks: LinkPage[] = [
  {
    type: "instagram",
    logo: "/Svg/instagram.svg", // Reemplaza con la ruta real del logo si la tienes
    title: "DATASAM",
    description: "Nuestro medio audiovisual principal. Sigue nuestras actualizaciones, eventos y contenido exclusivo de la comunidad.",
    buttonText: "Seguir",
    href: "https://www.instagram.com/datasamok/" // Reemplaza con el enlace real
  },
  {
    type: "instagram",
    logo: "/Svg/instagram.svg", // Reemplaza con la ruta real del logo si la tienes
    title: "LCD",
    description: "Instagram oficial de la Licenciatura en Ciencia de Datos. Información académica y eventos relacionados con la carrera.",
    buttonText: "Seguir",
    href: "https://www.instagram.com/lcd_unsam/" // Reemplaza con el enlace real
  },
  {
    type: "instagram",
    logo: "/Svg/instagram.svg", // Reemplaza con la ruta real del logo si la tienes
    title: "UNSAM",
    description: "Instagram oficial de la Universidad Nacional de San Martín. Noticias y eventos de toda la universidad.",
    buttonText: "Seguir",
    href: "https://www.instagram.com/unsamoficial/" // Reemplaza con el enlace real
  },
  {
    type: "instagram",
    logo: "/Svg/instagram.svg", // Reemplaza con la ruta real del logo si la tienes
    title: "ECyT",
    description: "Instagram de la Escuela de Ciencia y Tecnología. Información específica de nuestra facultad.",
    buttonText: "Seguir",
    href: "https://instagram.com/ecyt.unsam" // Reemplaza con el enlace real
  } 
];

export const links_data: LinkPage[] = [
  {
    type: "notion",
    logo: "/Svg/notion.svg", // Reemplaza con la ruta real del logo si la tienes
    title: "Notion",
    description: "Nuestro repositorio principal de apuntes, guías de estudio, y recursos compartidos por la comunidad. Una fuente invaluable de conocimiento colaborativo.",
    buttonText: "Acceder a Notion",
    href: "https://datasam.notion.site/1e9dc7b00cd6444897be928a234e2e32?v=42ef38f5d4094f16bc159d973c1499f8&pvs=25" // Reemplaza con el enlace real
  },
  {
    type: "github",
    logo: "/Svg/github.svg", // Reemplaza con la ruta real del logo si la tienes
    title: "GitHub",
    description: "Explora y contribuye a nuestros proyectos de código abierto. Perfecto para practicar, colaborar y construir tu portafolio.",
    buttonText: "Ver proyectos en GitHub",
    href: "https://github.com/DATA-SAM-LCD" // Reemplaza con el enlace real
  }
];

export const codeOfConductLink: LinkPage = {
  type: "notion",
  logo: "/Svg/notion.svg",
  title: "Código de Conducta",
  description: "Nuestras reglas de convivencia aseguran un ambiente respetuoso y productivo para todos los miembros. Es crucial que todos los miembros lean y sigan estas pautas.",
  buttonText: "Leer Código de Conducta",
  href: "https://datasam.notion.site/C-DIGO-DE-CONDUCTA-ff93040740cf43ccb4e7286faa3a3eff" // Reemplaza con el enlace real
};