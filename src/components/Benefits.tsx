import { benefits } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Benefits() {
  return (
    <section className="relative overflow-hidden bg-[#f8f4ec] py-24">
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-orange-200/45 blur-3xl" />
      <div className="absolute -right-24 bottom-20 h-72 w-72 rounded-full bg-stone-300/40 blur-3xl" />
      <div className="container-page relative">
        <SectionHeading eyebrow="Tecnología para costa" title="Más alcance, más control y menos exposición al agua" text="SwellPro está pensado para pescadores que necesitan llevar la carnada lejos, operar cerca del mar y mantener el control en condiciones reales de playa." />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ icon: Icon, title, text }, index) => (
            <Reveal key={title} delay={index * 0.05} className="premium-card lift-card rounded-[2rem] p-7">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-[var(--brand)]">
                <Icon size={28} />
              </div>
              <h3 className="text-xl font-black text-[var(--fg)]">{title}</h3>
              <p className="mt-3 leading-7 text-[var(--muted)]">{text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
