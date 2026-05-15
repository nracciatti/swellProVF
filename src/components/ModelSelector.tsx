import Image from "next/image";
import Link from "next/link";
import { brand, products } from "@/lib/data";
import { Reveal } from "./Reveal";
import { ArrowRight, Camera, HelpCircle, PackageCheck, Waves } from "lucide-react";

const options = [
  { title: "Quiero empezar bien", text: "Busco un drone resistente, seguro y fácil para empezar desde costa.", product: products[0], icon: Waves },
  { title: "Quiero llevar más carnada", text: "Necesito máxima capacidad para jornadas más exigentes.", product: products[1], icon: PackageCheck },
  { title: "Quiero cámara 4K", text: "Prefiero tecnología premium para ver playa, canales y zonas de actividad.", product: products[2], icon: Camera },
];

export function ModelSelector() {
  const whatsappHref = `https://wa.me/${brand.phoneRaw}?text=${encodeURIComponent("Hola, no sé qué modelo SwellPro elegir. ¿Me asesoran?")}`;

  return (
    <section className="bg-white py-24">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <Reveal>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[var(--brand)]">Guía rápida</p>
            <h2 className="text-balance text-4xl font-black tracking-tight md:text-6xl">¿Cuál te conviene?</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="max-w-2xl text-lg leading-8 text-[var(--muted)]">Elegí según tu necesidad real: empezar con seguridad, transportar más carnada o priorizar cámara, GPS y funciones avanzadas.</p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {options.map(({ title, text, product, icon: Icon }, index) => (
            <Reveal key={title} delay={index * .07} className="lift-card overflow-hidden rounded-[2.2rem] border border-black/5 bg-[#f7f3ea]">
              <Link href={`/productos/${product.slug}`} className="block h-full p-6">
                <div className="mb-7 flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[var(--brand)] shadow-lg shadow-black/5"><Icon size={28} /></span>
                  <ArrowRight className="text-[var(--brand)]" />
                </div>
                <h3 className="text-2xl font-black">{title}</h3>
                <p className="mt-3 min-h-20 leading-7 text-[var(--muted)]">{text}</p>
                <div className="mt-6 rounded-[1.5rem] bg-white p-4">
                  <div className="relative mb-3 h-24 product-media-bg rounded-[1.2rem]"><Image src={product.image} alt={product.name} fill sizes="(min-width: 1024px) 30vw, 100vw" className="object-contain p-3" /></div>
                  <span className="text-xs font-black uppercase tracking-widest text-[var(--brand)]">Recomendado</span>
                  <strong className="mt-1 block text-lg font-black">{product.name}</strong>
                </div>
              </Link>
            </Reveal>
          ))}

          <Reveal delay={0.24} className="rounded-[2.2rem] bg-[#111315] p-6 text-white shadow-[0_22px_70px_rgba(17,19,21,.18)]">
            <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-[var(--brand)]"><HelpCircle size={28} /></div>
            <h3 className="text-2xl font-black">No sé cuál elegir</h3>
            <p className="mt-3 leading-7 text-white/68">Contanos tipo de pesca, zona y presupuesto. Te recomendamos el modelo correcto por WhatsApp.</p>
            <a href={whatsappHref} target="_blank" rel="noreferrer" className="btn-ui btn-primary-ui mt-8 w-full">Consultar modelo <ArrowRight size={18} /></a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
