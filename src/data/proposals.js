export const proposals = [
  {
    id: "P1",
    number: "01",
    title: "Agua Potable y Saneamiento",
    shortTitle: "Agua",
    objective: "Ampliar y mejorar la cobertura de agua segura y saneamiento en el cantón. Construcción y ampliación de sistemas de agua entubada/potable en comunidades rurales priorizadas.",
    icon: "Droplets",
    area: "servicios",
    color: "#3FA5DD"
  },
  {
    id: "P2",
    number: "02",
    title: "Vialidad Cantonal (Urbana y Rural)",
    shortTitle: "Vialidad",
    objective: "Mejorar la conectividad vial del cantón para la producción y la movilidad de la población. Estudio y priorización de la red vial rural, principal y secundaria.",
    icon: "Route",
    area: "territorio",
    color: "#EE8D09"
  },
  {
    id: "P3",
    number: "03",
    title: "Ordenamiento Territorial y Catastro",
    shortTitle: "Territorio",
    objective: "Actualización participativa del PDyOT cantonal. Actualización del catastro urbano y rural (avalúos y catastros).",
    icon: "Map",
    area: "territorio",
    color: "#36A036"
  },
  {
    id: "P4",
    number: "04",
    title: "Desarrollo Económico Local",
    shortTitle: "Economía",
    objective: "Dinamizar la economía cantonal mediante comercio, agroindustria y turismo. Impulsar una marca local y generar valor agregado a los productos del cantón.",
    icon: "TrendingUp",
    area: "desarrollo",
    color: "#EE8D09"
  },
  {
    id: "P5",
    number: "05",
    title: "Gestión Ambiental y Residuos Sólidos",
    shortTitle: "Ambiente",
    objective: "Proteger el ambiente y mejorar la gestión adecuada de residuos sólidos del cantón, promoviendo prácticas sostenibles. Gestionar la dotación de vehículos recolectores para la recolección de residuos sólidos en las parroquias de Cebadas y Palmira.",
    icon: "Leaf",
    area: "ambiente",
    color: "#36A036"
  },
  {
    id: "P6",
    number: "06",
    title: "Gestión de Riesgos",
    shortTitle: "Riesgos",
    objective: "Reducir la vulnerabilidad del cantón ante amenazas naturales. Fortalecimiento del sistema de alerta temprana y del cuerpo de bomberos. Capacitación comunitaria en gestión de riesgos.",
    icon: "ShieldAlert",
    area: "servicios",
    color: "#D81119"
  },
  {
    id: "P7",
    number: "07",
    title: "Gobernanza Digital y Gobierno Abierto",
    shortTitle: "Gobierno Digital",
    objective: "Modernizar la gestión municipal y cerrar la brecha digital del cantón mediante tecnologías de la información y la comunicación. Implementación de un portal web municipal con trámites y turnos en línea.",
    icon: "Monitor",
    area: "gobernanza",
    color: "#3FA5DD"
  },
  {
    id: "P8",
    number: "08",
    title: "Participación Ciudadana e Interculturalidad",
    shortTitle: "Participación",
    objective: "Asambleas cantonales y presupuesto participativo anual. Fortalecimiento de organizaciones comunitarias, indígenas y de mujeres.",
    icon: "Users",
    area: "gobernanza",
    color: "#C0E2ED"
  }
];

export const areas = [
  {
    id: "servicios",
    title: "Servicios Básicos",
    icon: "Droplets",
    proposals: ["P1", "P6"]
  },
  {
    id: "territorio",
    title: "Territorio",
    icon: "Map",
    proposals: ["P2", "P3"]
  },
  {
    id: "desarrollo",
    title: "Desarrollo",
    icon: "TrendingUp",
    proposals: ["P4"]
  },
  {
    id: "ambiente",
    title: "Ambiente",
    icon: "Leaf",
    proposals: ["P5"]
  },
  {
    id: "gobernanza",
    title: "Gobernanza",
    icon: "Monitor",
    proposals: ["P7", "P8"]
  }
];
