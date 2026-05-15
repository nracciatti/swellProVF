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

      {product.sections.map((section, index) => {
        const isFdFlySection =
          product.slug === "fisherman-fd2-max" &&
          section.title === "Vuelo automático con FDFly";

        return (
          <section key={section.title} className={index % 2 === 0 ? "bg-[var(--bg-soft)] py-24" : "py-24"}>
            <div className={`container-page grid items-center gap-12 lg:grid-cols-2 ${index % 2 ? "" : "lg:[&>*:first-child]:order-2"}`}>
              <Reveal>
                <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[var(--brand)]">{product.name}</p>
                <h2 className="text-balance text-4xl font-black tracking-tight md:text-5xl">{section.title}</h2>
                <p className="mt-5 text-lg leading-8 text-[var(--muted)]">{section.text}</p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row"><ButtonLink href={product.buyUrl}>Comprar</ButtonLink><ButtonLink href={whatsapp} variant="dark">Pedir asesoramiento</ButtonLink></div>
              </Reveal>
              {isFdFlySection ? (
                <Reveal delay={0.1} className="relative min-h-[420px] overflow-hidden rounded-[2.5rem] border border-black/5 bg-[linear-gradient(145deg,#f7f3ea,#ffffff)] p-5 shadow-[0_28px_80px_rgba(17,19,21,.12)]">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_18%,rgba(255,91,24,.16),transparent_30%),radial-gradient(circle_at_85%_78%,rgba(17,19,21,.08),transparent_26%)]" />
                  <div className="relative overflow-hidden rounded-[2rem] border border-black/8 bg-[#151617] p-4 shadow-[inset_0_1px_0_rgba(255,255,255,.08)] md:p-5">
                    <div className="mb-4 flex items-center justify-between gap-4 text-white">
                      <div>
                        <p className="text-[10px] font-black uppercase tracking-[0.22em] text-orange-200">FDFly Mission</p>
                        <p className="mt-1 text-xl font-black tracking-tight">Ruta de pesca</p>
                      </div>
                      <span className="rounded-full border border-white/12 bg-white/8 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-white/78">GPS 9.0</span>
                    </div>

                    <div className="relative min-h-[280px] overflow-hidden rounded-[1.5rem] border border-white/10 bg-[linear-gradient(135deg,#ece7dc,#faf7ef)]">
                      <div className="absolute inset-0 opacity-60 [background-image:linear-gradient(rgba(17,19,21,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(17,19,21,.08)_1px,transparent_1px)] [background-size:34px_34px]" />
                      <div className="absolute left-[8%] top-[18%] h-28 w-48 rounded-full border border-black/8 bg-white/25 blur-sm" />
                      <div className="absolute bottom-[12%] right-[8%] h-24 w-44 rounded-full border border-black/8 bg-orange-200/20 blur-sm" />
                      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 560 280" aria-hidden="true">
                        <path d="M70 212 C150 135 225 182 300 112 S430 72 492 42" fill="none" stroke="rgba(17,19,21,.18)" strokeWidth="10" strokeLinecap="round" />
                        <path d="M70 212 C150 135 225 182 300 112 S430 72 492 42" fill="none" stroke="rgb(255,91,24)" strokeWidth="4" strokeLinecap="round" strokeDasharray="10 10" />
                      </svg>

                      <div className="absolute left-[10%] top-[68%] flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-[var(--brand)] text-sm font-black text-white shadow-lg shadow-black/20">1</div>
                      <div className="absolute left-[50%] top-[34%] flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-[#151617] text-sm font-black text-white shadow-lg shadow-black/20">2</div>
                      <div className="absolute right-[9%] top-[10%] flex h-10 w-10 items-center justify-center rounded-full border-4 border-white bg-[var(--brand)] text-sm font-black text-white shadow-lg shadow-black/20">3</div>

                      <div className="absolute left-5 top-5 rounded-2xl border border-black/8 bg-white/85 px-4 py-3 shadow-lg shadow-black/5 backdrop-blur">
                        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--muted)]">Estado</p>
                        <p className="mt-1 text-sm font-black text-[var(--dark)]">Ruta lista</p>
                      </div>
                      <div className="absolute bottom-5 right-5 rounded-2xl border border-black/8 bg-white/85 px-4 py-3 text-right shadow-lg shadow-black/5 backdrop-blur">
                        <p className="text-[10px] font-black uppercase tracking-[0.18em] text-[var(--muted)]">Distancia</p>
                        <p className="mt-1 text-sm font-black text-[var(--dark)]">1,5 km</p>
                      </div>
                    </div>

                    <div className="mt-4 grid gap-3 sm:grid-cols-3">
                      {["Puntos de pesca guardados", "Ruta automática", "Liberación precisa"].map((item, itemIndex) => (
                        <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.07] p-3 text-white">
                          <span className="mb-2 flex h-7 w-7 items-center justify-center rounded-full bg-[var(--brand)] text-xs font-black">{itemIndex + 1}</span>
                          <p className="text-sm font-black leading-5 text-white/90">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ) : (
                <Reveal delay={0.1} className="relative min-h-[420px] overflow-hidden rounded-[2.5rem] bg-[#202020]">
                  <Image src={section.image} alt={section.title} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
                </Reveal>
              )}
            </div>
          </section>
        );
      })}

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
