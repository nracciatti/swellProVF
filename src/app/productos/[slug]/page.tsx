import Image from "next/image";
import { notFound } from "next/navigation";
import { brand, products } from "@/lib/data";
import { ButtonLink } from "@/components/Button";
import { Reveal } from "@/components/Reveal";
import { Contact } from "@/components/Contact";
import type { Metadata } from "next";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  const whatsapp = `https://wa.me/${brand.phoneRaw}?text=${encodeURIComponent(`Hola, quiero consultar por el ${product.name}.`)}`;

  return (
    <main className="pt-20">
      <section className="overflow-hidden bg-[#202020] py-20 text-white">
        <div className="container-page grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <p className="mb-4 text-sm font-black uppercase tracking-[0.22em] text-[var(--brand)]">{product.eyebrow}</p>
            <h1 className="text-balance text-5xl font-black tracking-tight md:text-7xl">{product.name}</h1>
            <p className="mt-5 text-xl font-bold text-white/90">{product.tagline}</p>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/70">{product.description}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href={product.buyUrl}>Comprar</ButtonLink>
              <ButtonLink href={whatsapp} variant="outline">Consultar</ButtonLink>
            </div>
          </Reveal>
          <Reveal delay={0.12} className="relative rounded-[2.5rem] bg-white p-6 orange-glow">
            <Image src={product.image} alt={product.name} width={1000} height={720} priority sizes="(min-width: 1024px) 50vw, 100vw" className="h-auto w-full object-contain" />
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--bg-soft)] py-16">
        <div className="container-page grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {product.specs.map(([label, value], index) => (
            <Reveal key={label} delay={index * 0.03} className="rounded-3xl bg-white p-5 text-center shadow-lg shadow-black/5">
              <span className="text-xs font-black uppercase tracking-wider text-[var(--muted)]">{label}</span>
              <strong className="mt-1 block text-2xl font-black text-[var(--fg)]">{value}</strong>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="py-24">
        <div className="container-page grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <Reveal>
            <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[var(--brand)]">Puntos fuertes</p>
            <h2 className="text-balance text-4xl font-black tracking-tight md:text-5xl">Características principales del modelo.</h2>
          </Reveal>
          <div className="grid gap-4 md:grid-cols-2">
            {product.highlights.map((item, index) => (
              <Reveal key={item} delay={index * 0.05} className="rounded-3xl border border-[var(--border)] bg-white p-6 shadow-lg shadow-black/5">
                <span className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 font-black text-[var(--brand)]">{index + 1}</span>
                <p className="text-lg font-bold leading-8 text-[var(--dark)]">{item}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {product.sections.map((section, index) => (
        <section key={section.title} className={index % 2 === 0 ? "bg-[var(--bg-soft)] py-24" : "py-24"}>
          <div className={`container-page grid items-center gap-12 lg:grid-cols-2 ${index % 2 ? "" : "lg:[&>*:first-child]:order-2"}`}>
            <Reveal>
              <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[var(--brand)]">{product.name}</p>
              <h2 className="text-balance text-4xl font-black tracking-tight md:text-5xl">{section.title}</h2>
              <p className="mt-5 text-lg leading-8 text-[var(--muted)]">{section.text}</p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row"><ButtonLink href={product.buyUrl}>Comprar</ButtonLink><ButtonLink href={whatsapp} variant="dark">Pedir asesoramiento</ButtonLink></div>
            </Reveal>
            <Reveal delay={0.1} className="relative min-h-[420px] overflow-hidden rounded-[2.5rem] bg-[#202020]">
              <Image src={section.image} alt={section.title} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </Reveal>
          </div>
        </section>
      ))}

      <section className="bg-[#202020] py-20 text-white">
        <div className="container-page">
          <Reveal className="grid gap-4 md:grid-cols-4">
            {product.gallery.map((image, i) => (
              <div key={image} className={`relative overflow-hidden rounded-[2rem] ${i === 0 ? "aspect-[4/3] md:col-span-2 md:row-span-2" : "aspect-square"}`}>
                <Image src={image} alt={`${product.name} imagen ${i + 1}`} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <Contact />
    </main>
  );
}
