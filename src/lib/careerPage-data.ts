// Archivo: informacion.ts

import { IconType } from "react-icons";
import { FaAward } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";
import { MdAccessTimeFilled } from "react-icons/md";

export interface InfoItemCareer {
  icon: IconType; // nombre del ícono (por ejemplo, MdAccessTimeFilled)
  title: string;
  subtitle: string;
  description: string;
}

export const informationCareer: InfoItemCareer[] = [
  {
    icon: MdAccessTimeFilled,
    title: 'Duración',
    subtitle: 'Aproximadamente 4 años',
    description: '8 cuatrimestres',
  },
  {
    icon: GiOpenBook,
    title: 'Modalidad',
    subtitle: 'Presencial Campus',
    description: 'con 41% de carga virtual',
  },
  {
    icon: FaAward,
    title: 'Título',
    subtitle: 'Licenciado/a en Ciencia de Datos',
    description: 'Título oficial y validez nacional',
  },
];

export const graduateProfile: string[] = [
  "Empresas y administración privada o pública",
  "Campo académico y científico",
  "Docencia universitaria",
  "Asesoría y gestión",
  "Estudios de posgrado y becas de investigación"
];


// Archivo: condicionesAdmision.ts
interface AdmissionCondition{
  title: string;
  description: string;
}

export const admissionConditions: AdmissionCondition[] = [
  {
    title: "Título secundario",
    description: "De instituciones reconocidas oficialmente",
  },
  {
    title: "Aprobar el CPU",
    description: "Curso de Preparación Universitaria de la ECyT - UNSAM (20 horas)",
  },
  {
    title: "Documentación requerida",
    description: "Según normativa vigente para educación superior universitaria",
  },
  {
    title: "Mayores de 25 años sin secundario",
    description: "Pueden postularse según Art. 7 de la Ley 24521 y Art. 1 de la Res. 454/96 UNSAM",
  }
];


// Archivo: informesYContacto.ts

import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

interface ReportAndContact{
  icon: IconType;
  text: string;
}
export const reportsAndContacts: ReportAndContact[] = [
  {
    icon: FaMapMarkerAlt,
    text: "Departamento de Estudiantes - ECyT\nMartín de Irigoyen 3100, 1º piso - Campus Miguelete",
  },
  {
    icon: FaPhone,
    text: "4006-1500 int. 1161/1162/1163",
  },
  {
    icon: FaEnvelope,
    text: "ecyt.estudiantes@unsam.edu.ar",
  },
  {
    icon: FaClock,
    text: "Horario de atención: Lunes a Viernes 9 a 13 y 15 a 19",
  },
];
