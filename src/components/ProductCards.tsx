import Image from "next/image";
import Link from "next/link";
import { brand, products } from "@/lib/data";
import { ButtonLink } from "./Button";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { CheckCircle2, ShoppingBag } from "lucide-react";

const labels = ["Ideal para empezar", "Carga + 4K", "Premium 4K"];
const focus = ["Principiante pro", "Carga y cámara 4K", "Cámara y GPS"];

export function ProductCards() {
  return (
    <section id="productos" className="sand-gradient relative overflow-hidden py-24">
      <div className="container-page">
        <SectionHeading
          eyebrow="Modelos Fisherman"
          title="Modelos SwellPro Fisherman"
          text="La línea Fisherman reúne modelos para pesca desde costa, con diferencias en capacidad de carga, alcance, cámara, impermeabilidad y funciones de asistencia."
        />

        <div className="mt-14 grid gap-7 lg:grid-cols-3">
          {products.map((product, index) => (
            <Reveal key={product.slug} delay={index * 0.08} className="group relative flex h-full flex-col overflow-hidden rounded-[2.4rem] border border-black/6 bg-white shadow-[0_22px_70px_rgba(17,19,21,.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(17,19,21,.13)]">
              <div className="relative overflow-hidden bg-[#111315]">
                <Link href={`/productos/${product.slug}`} className="absolute inset-0 z-10" aria-label={`Ver ${product.name}`} />
                <div className="absolute left-5 top-5 z-20 rounded-full bg-white px-4 py-2 text-[11px] font-black uppercase tracking-[0.18em] text-[var(--brand)] shadow-lg shadow-black/10">{labels[index]}</div>
                <div className="absolute inset-x-8 bottom-7 h-14 rounded-full bg-orange-500/20 blur-2xl" />
                <div className="relative aspect-[1.18]">
                  <Image src={product.image} alt={product.name} fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-contain p-8 transition duration-500 group-hover:scale-105" />
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <span className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-[var(--brand)]">{focus[index]}</span>
                <h3 className="text-2xl font-black text-[var(--fg)]">{product.name}</h3>
                <p className="mt-2 text-base font-extrabold leading-6 text-[var(--dark)]">{product.tagline}</p>
                <p className="mt-3 leading-7 text-[var(--muted)]">{product.description}</p>

                <div className="mt-6 grid grid-cols-2 gap-2">
                  {product.specs.slice(0, 4).map(([label, value]) => (
                    <div key={label} className="rounded-2xl bg-[#f4f1eb] p-3">
                      <span className="block text-[11px] font-black uppercase tracking-wider text-[var(--muted)]">{label}</span>
                      <strong className="text-lg font-black text-[var(--fg)]">{value}</strong>
                    </div>
                  ))}
                </div>

                <div className="mt-5 space-y-2">
                  {product.highlights.slice(0, 2).map((item) => (
                    <div key={item} className="flex gap-2 text-sm leading-6 text-[var(--muted)]"><CheckCircle2 size={17} className="mt-1 shrink-0 text-[var(--brand)]" /> {item}</div>
                  ))}
                </div>

                <div className="mt-auto pt-6 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
                  <ButtonLink href={`/productos/${product.slug}`} variant="dark" className="flex-1">Ver modelo</ButtonLink>
                  <a href={product.buyUrl} target="_blank" rel="noreferrer" className="btn-ui btn-primary-ui flex-1">
                    <span>Comprar online</span>
                    <ShoppingBag size={18} />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
