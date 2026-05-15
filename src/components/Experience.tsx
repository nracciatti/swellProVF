import Image from "next/image";
import Link from "next/link";
import { Reveal } from "./Reveal";
import { ButtonLink } from "./Button";
import { brand } from "@/lib/data";
import { ArrowRight, ClipboardList, MessageCircle, ShoppingBag } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Información del modelo",
    text: "Cada producto reúne sus características principales, capacidad, alcance, tecnología disponible y recomendaciones de uso.",
    icon: ClipboardList,
  },
  {
    number: "02",
    title: "Asesoramiento disponible",
    text: "Ante dudas sobre el modelo adecuado, el equipo local puede orientar la elección según el tipo de pesca y condiciones de uso.",
    icon: MessageCircle,
  },
  {
    number: "03",
    title: "Compra online",
    text: "Los botones de compra dirigen a la tienda online, donde se consultan precio, disponibilidad y opciones de pago.",
    icon: ShoppingBag,
  },
];

export function Experience() {
  const whatsappHref = `https://wa.me/${brand.phoneRaw}?text=${encodeURIComponent("Hola, quiero consultar por los drones SwellPro.")}`;

  return (
    <section className="bg-white py-24">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[.9fr_1.1fr]">
        <Reveal className="grid grid-cols-2 gap-4">
          <div className="space-y-4 pt-12">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem]"><Image src="/assets/images/dronAgua.webp" alt="Drone resistente al agua" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition duration-700 hover:scale-105" /></div>
            <div className="relative aspect-square overflow-hidden rounded-[2rem]"><Image src="/assets/images/fishermanfd3-FD3-fishing-drone-on-beach.jpg" alt="Drone SwellPro en playa" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition duration-700 hover:scale-105" /></div>
          </div>
          <div className="space-y-4">
            <div className="relative aspect-square overflow-hidden rounded-[2rem]"><Image src="/assets/images/dronesharkfishinginsouthafrica-1681204074058.jpg" alt="Pesca con drone" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition duration-700 hover:scale-105" /></div>
            <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem]"><Image src="/assets/images/home-page-subscribe-P1_1400x.webp" alt="SwellPro en acción" fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition duration-700 hover:scale-105" /></div>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[var(--brand)]">Información y compra</p>
          <h2 className="text-balance text-4xl font-black tracking-tight md:text-6xl">Modelos documentados, asistencia local y compra online.</h2>
          <p className="mt-6 text-lg leading-8 text-[var(--muted)]">
            El sitio presenta la línea Fisherman con información clara sobre capacidades, alcance, cámara, impermeabilidad y usos recomendados. La compra se realiza desde la tienda online, manteniendo un proceso simple y administrable.
          </p>

          <div className="mt-8 grid gap-4">
            {steps.map(({ number, title, text, icon: Icon }) => (
              <div key={title} className="grid gap-4 rounded-[1.8rem] border border-black/5 bg-[#f7f3ea] p-5 transition hover:border-orange-500/20 hover:bg-[#fff9f4] sm:grid-cols-[88px_1fr]">
                <div className="flex items-center gap-3 sm:block">
                  <span className="block text-xs font-black uppercase tracking-[0.2em] text-[var(--brand)]">{number}</span>
                  <div className="mt-0 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[var(--brand)] shadow-sm sm:mt-3"><Icon size={22} /></div>
                </div>
                <div>
                  <h3 className="text-xl font-black text-[var(--fg)]">{title}</h3>
                  <p className="mt-2 leading-7 text-[var(--muted)]">{text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={brand.shopUrl}>Ver tienda online</ButtonLink>
            <Link href={whatsappHref} target="_blank" rel="noreferrer" className="btn-ui btn-dark-ui">
              Consultar por WhatsApp <ArrowRight size={18} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
