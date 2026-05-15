import { Award, BadgeCheck, Headphones, ShieldCheck, Truck, Wrench } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: BadgeCheck, title: "Representantes oficiales", text: "Presencia local para consultas sobre modelos Fisherman en Argentina." },
  { icon: ShieldCheck, title: "Garantía local", text: "Respaldo para productos técnicos y consultas posteriores a la compra." },
  { icon: Wrench, title: "Soporte técnico", text: "Orientación sobre puesta en marcha, uso básico y recomendaciones de operación." },
  { icon: Headphones, title: "Asesoramiento real", text: "Orientación según tipo de pesca, zona de uso y características requeridas." },
  { icon: Truck, title: "Compra online", text: "Acceso a tienda online para consultar disponibilidad, precio y opciones de compra." },
  { icon: Award, title: "Información clara", text: "Información organizada sobre características y diferencias entre modelos." },
];

export function Authority() {
  return (
    <section id="beneficios" className="dark-gradient py-24 text-white">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <Reveal>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[var(--brand)]">Confianza local</p>
            <h2 className="text-balance text-4xl font-black tracking-tight md:text-6xl">SwellPro Argentina: soporte e información local.</h2>
            <p className="mt-6 text-lg leading-8 text-white/68">La línea Fisherman combina tecnología, resistencia al agua y funciones específicas para pesca desde costa. La información técnica y el soporte local ayudan a evaluar cada modelo con mayor precisión.</p>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {items.map(({ icon: Icon, title, text }, index) => (
              <Reveal key={title} delay={index * .05} className="lift-card rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 backdrop-blur">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[var(--brand)]"><Icon size={26} /></div>
                <h3 className="text-xl font-black">{title}</h3>
                <p className="mt-3 leading-7 text-white/62">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
