import { Battery, Camera, CheckCircle2, Compass, Droplets, Gauge, MapPin, Plane, Shield, Waves, Wind, Zap } from "lucide-react";

export const brand = {
  name: "SwellPro Argentina",
  phoneDisplay: "+54 11 6133-2326",
  phoneRaw: "5491161332326",
  email: "ventas@swellpro.com.ar",
  shopUrl: "https://swellproargentina.mitiendanube.com/",
  whatsappMessage: "Hola, quiero consultar por los drones de pesca SwellPro.",
};

export const navItems = [
  { label: "Beneficios", href: "/#beneficios" },
  { label: "Cómo funciona", href: "/#como-funciona" },
  { label: "Comparativa", href: "/#comparativa" },
  { label: "Contacto", href: "/#contacto" },
];

export const products = [
  {
    slug: "fisherman-fd1s",
    name: "Fisherman FD1S",
    eyebrow: "Entrada profesional",
    shortUse: "Para empezar con un drone resistente, simple y preparado para pesca real.",
    tagline: "Lanzá como un profesional, desde el primer vuelo.",
    description:
      "Drone de pesca resistente al agua salada, pensado para principiantes pero con rendimiento profesional: carga hasta 2,2 kg, alcance de 1,3 km y seguridad cerca del agua.",
    image: "/assets/images/frente.png",
    gallery: [
      "/assets/images/frente.png",
      "/assets/images/arriba.png",
      "/assets/images/abajo45grados.png",
      "/assets/images/arriba1.png",
    ],
    buyUrl: "https://swellproargentina.mitiendanube.com/productos/swellpro-fisherman-fd1s/",
    specs: [
      ["Carnada", "2,2 kg"],
      ["Alcance", "1,3 km"],
      ["Vuelo", "Hasta 6 drops"],
      ["Controlador", "S10"],
      ["Impermeable", "IP67"],
      ["Viento", "> Nivel 7"],
    ],
    highlights: [
      "Diseñado para principiantes que quieren empezar con prestaciones profesionales.",
      "Sistema PowerFlip™ para flotar, autoenderezarse y volver a despegar desde el agua.",
      "Anti-Sway Optimization para reducir el balanceo de la carnada durante el vuelo.",
      "Batería mejorada con gestión BMS y cargador rápido de 150W.",
    ],
    sections: [
      {
        title: "Capacidad de carnada de 2,2 kg",
        text: "El FD1S permite transportar carnadas grandes, aparejos pesados o líneas con múltiples anzuelos, manteniendo el vuelo estable y reduciendo el balanceo durante el trayecto.",
        image: "/assets/images/arriba.png",
      },
      {
        title: "Pensado para principiantes",
        text: "Su nuevo controlador S10, las funciones automáticas y la ausencia de calibración obligatoria reducen el tiempo de preparación y hacen que el primer uso sea más simple.",
        image: "/assets/images/frente.png",
      },
      {
        title: "Preparado para agua salada",
        text: "Cuenta con protección IP67, sistema anticorrosión y PowerFlip™ para autoenderezarse si cae al agua, dando más tranquilidad al operar cerca de la costa.",
        image: "/assets/images/abajo45grados.png",
      },
    ],
  },
  {
    slug: "fisherman-fd2-max",
    name: "Fisherman Max FD2",
    eyebrow: "Carga + cámara 4K",
    shortUse: "Para llevar más carnada y aprovechar cámara 4K.",
    tagline: "Máxima carga con cámara 4K.",
    description:
      "El modelo ideal para quienes buscan transportar más carnada, trabajar con cámara 4K y aprovechar funciones avanzadas de vuelo.",
    image: "/assets/images/fishermanfd2.png",
    gallery: [
      "/assets/images/fishermanfd2.png",
      "/assets/images/fishermanfd2-20250116-154803.webp",
      "/assets/images/fishermanfd2-waterproof-fishing-drone-float-in-water.webp",
      "/assets/images/fishermanfd2-control-render.png",
    ],
    buyUrl: "https://swellproargentina.mitiendanube.com/productos/swellpro-fisherman-max-fd2/",
    specs: [
      ["Carnada", "3,5 kg"],
      ["Alcance", "1,5 km"],
      ["Vuelo", "28 min"],
      ["Controlador", "S5 GPS 9.0"],
      ["Cámara", "4K"],
      ["Impermeable", "IP67"],
    ],
    highlights: [
      "Hasta 3,5 kg de capacidad de carnada con cámara 4K integrada.",
      "Cámara 4K estabilizada para interpretar playa, canales y cardúmenes.",
      "Pantalla multicolor integrada en el control remoto.",
      "Funciones automáticas con FDFly App.",
    ],
    sections: [
      {
        title: "Más carnada y visión 4K",
        text: "Fisherman Max está pensado para transportar carnadas pesadas a largas distancias y usar su cámara 4K para evaluar mejor dónde realizar cada lanzamiento.",
        image: "/assets/images/fishermanfd2-fisherman-max-drone-with-bait-baits.jpg",
      },
      {
        title: "Cámara de pesca 4K",
        text: "La cámara permite mirar estructuras de playa, bancos, rompientes y zonas de actividad para decidir mejor dónde soltar la carnada.",
        image: "/assets/images/fishermanfd2-fisherman-max-4k-camera_d92ad353-26a6-4ea8-80fe-bdcad07695a4.webp",
      },
      {
        title: "Vuelo automático con FDFly",
        text: "Guardá puntos de pesca, tocá para volar y automatizá la liberación de carnadas en ubicaciones estratégicas.",
        image: "/assets/images/fishermanfd2-fdfly-fishing-app.png",
      },
    ],
  },
  {
    slug: "fisherman-fd3",
    name: "Fisherman FD3",
    eyebrow: "Equilibrio premium",
    shortUse: "Para quienes quieren equilibrio entre tecnología, cámara y seguridad.",
    tagline: "Equilibrio premium con cámara 4K, GPS y diseño IP67.",
    description:
      "Un drone de pesca de nueva generación con cámara 4K, GPS 9.0, resistencia al viento y funciones automáticas.",
    image: "/assets/images/fishermanFD3.png",
    gallery: [
      "/assets/images/fishermanFD3.png",
      "/assets/images/fishermanfd3-FD3-fishing-drone-on-beach.jpg",
      "/assets/images/fishermanfd3-fd3-drone-floating-in-water.webp",
      "/assets/images/fishermanfd3-wind-proof.webp",
    ],
    buyUrl: "https://swellproargentina.mitiendanube.com/productos/swellpro-fisherman-fd3/",
    specs: [
      ["Carnada", "2 kg"],
      ["Alcance", "1,3 km"],
      ["Vuelo", "25 min"],
      ["Controlador", "S5 GPS 9.0"],
      ["Cámara", "4K"],
      ["Impermeable", "IP67"],
    ],
    highlights: [
      "Cámara 4K para ver mejor la playa y buscar señales de peces.",
      "Antena dual para mejorar transmisión cerca del agua.",
      "GPS 9.0 con adquisición satelital rápida.",
      "Diseño autoflotante y giro automático si cae al agua.",
    ],
    sections: [
      {
        title: "Lanzamiento de hasta 1,3 km",
        text: "FD3 permite llevar carnada más allá de las olas y alcanzar zonas de pesca que desde costa serían imposibles.",
        image: "/assets/images/fishermanfd3-fd3-drone-flying-baits-out.webp",
      },
      {
        title: "Cámara 4K para leer la playa",
        text: "La cámara ayuda a interpretar canales, bancos de arena, rompientes y posibles zonas de actividad.",
        image: "/assets/images/fishermanfd3-fd3-drone-fishing-camera_1.webp",
      },
      {
        title: "Diseño a prueba de agua salada",
        text: "El FD3 está sellado, protegido contra corrosión y preparado para flotar si aterriza sobre el agua.",
        image: "/assets/images/fishermanfd3-fd3-drone-floating-in-water.webp",
      },
    ],
  },
] as const;

export type Product = (typeof products)[number];

export const benefits = [
  { icon: Droplets, title: "100% impermeables", text: "Diseñados para operar cerca del agua salada, flotar y volver a despegar." },
  { icon: Wind, title: "Resistencia al viento", text: "Estabilidad en playa y costa, incluso con condiciones exigentes." },
  { icon: Compass, title: "GPS 9.0", text: "Mayor precisión para navegar, mantener posición y regresar seguro." },
  { icon: Camera, title: "Cámara 4K", text: "Modelos con cámara para interpretar playa, canales y actividad de peces." },
  { icon: Shield, title: "Pesca segura", text: "Llevá la carnada al punto sin entrar al agua ni usar kayak." },
  { icon: Battery, title: "Autonomía real", text: "Baterías de alto rendimiento para varias maniobras por jornada." },
];

export const steps = [
  { title: "Preparás la línea", text: "Cargás la carnada o el aparejo en el sistema de liberación." },
  { title: "Volás al punto", text: "Llevás la línea más allá de la rompiente con vuelo estable y controlado." },
  { title: "Soltás y volvés", text: "Liberás la carnada en la zona elegida y el drone regresa a la costa." },
];

export const trustItems = [
  { icon: MapPin, label: "Representantes en Argentina" },
  { icon: Waves, label: "Diseñados para pesca en agua salada" },
  { icon: Plane, label: "Alcance de hasta 1,5 km" },
  { icon: Zap, label: "Compra online en Tienda Oficial" },
  { icon: CheckCircle2, label: "Soporte y contacto local" },
  { icon: Gauge, label: "Probados para costa, playa y surfcasting" },
];


export const faqs = [
  { question: "¿Hacen envíos a todo el país?", answer: "Sí. Realizamos envíos a todo el país por Andreani y Vía Cargo, coordinando la opción más conveniente según la zona y el producto." },
  { question: "¿Cómo se realiza la compra?", answer: "Podés cerrar la compra por WhatsApp con asesoramiento personalizado o realizarla directamente a través de la tienda online oficial." },
  { question: "¿Necesito saber volar drones?", answer: "No es necesario tener experiencia previa. En la entrega se explica el uso paso a paso y se comparten recomendaciones de buenas prácticas para operar el drone con seguridad." },
  { question: "¿Cuánto dura cada batería?", answer: "Cada batería tiene una autonomía aproximada de 25 minutos. En uso de pesca, equivale normalmente a entre 8 y 10 lanzadas a 250 metros, sin utilizar la función de vuelta a casa." },
  { question: "Si se cae al agua, ¿qué pasa?", answer: "Los drones flotan y están preparados para operar en agua salada. Además, cuentan con sistema de auto volteo para minimizar riesgos y facilitar la recuperación." },
  { question: "¿Cuál modelo me conviene?", answer: "Si lo querés exclusivamente para pescar, recomendamos el FD1S. Si buscás cámara 4K con un equipo equilibrado, el FD3 es una gran opción. Si además necesitás mayor capacidad de carga, el FD2 también incluye cámara 4K y permite levantar más peso." },
  { question: "¿Cuentan con garantía?", answer: "Sí. Los drones cuentan con un año de garantía por fallas de fábrica." },
  { question: "¿Tienen servicio técnico?", answer: "Sí. Contamos con servicio técnico oficial de SwellPro en Argentina, repuestos originales y pruebas de vacío para que tu drone quede en condiciones óptimas." },
];

export const useCases = [
  { title: "Pesca de playa", text: "Llevá carnada más allá de la rompiente y cubrí zonas que desde costa son difíciles de alcanzar." },
  { title: "Surfcasting", text: "Mayor precisión para ubicar la línea donde cambia el fondo, el canal o la actividad de peces." },
  { title: "Jornadas largas", text: "Modelos con autonomía, GPS y funciones automáticas para repetir maniobras con más control." },
];
