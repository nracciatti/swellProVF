import Image from "next/image";
import { steps } from "@/lib/data";
import { ButtonLink } from "./Button";
import { Reveal } from "./Reveal";
import { PlaneTakeoff } from "lucide-react";

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative overflow-hidden bg-[#f8f4ec] py-24 text-[var(--fg)]">
      <div className="absolute -left-24 top-16 h-80 w-80 rounded-full bg-orange-200/45 blur-3xl" />
      <div className="absolute -right-28 bottom-16 h-96 w-96 rounded-full bg-stone-300/40 blur-3xl" />
      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[.95fr_1.05fr]">
        <Reveal>
          <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[var(--brand)]">Cómo funciona</p>
          <h2 className="text-balance text-4xl font-black tracking-tight md:text-6xl">Llevás la carnada al punto exacto en tres pasos.</h2>
          <p className="mt-6 text-lg leading-8 text-[var(--muted)]">El proceso permite transportar la línea desde la costa hacia el punto elegido, liberar la carnada y regresar con control durante la maniobra.</p>

          <div className="relative mt-10 grid gap-4">
            <div className="absolute left-[26px] top-8 hidden h-[calc(100%-64px)] w-px bg-gradient-to-b from-orange-500 via-orange-400 to-transparent sm:block" />
            {steps.map((step, i) => (
              <div key={step.title} className="premium-card lift-card relative flex gap-4 rounded-3xl p-5">
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--brand)] text-lg font-black text-white shadow-lg shadow-orange-500/25">{i + 1}</span>
                <div>
                  <h3 className="text-lg font-black">{step.title}</h3>
                  <p className="mt-1 leading-7 text-[var(--muted)]">{step.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8"><ButtonLink href="#productos">Ver modelos</ButtonLink></div>
        </Reveal>

        <Reveal delay={0.12} className="relative">
          <div className="absolute -inset-7 rounded-[3rem] bg-orange-500/10 blur-2xl" />
          <div className="premium-card relative overflow-hidden rounded-[2.7rem] p-3">
            <div className="relative min-h-[560px] overflow-hidden rounded-[2.2rem]">
              <Image src="/assets/images/fishermanfd3-fd3-drone-flying-baits-out.webp" alt="Drone soltando carnada" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover transition duration-700 hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-black/5 to-transparent" />
              <div className="absolute left-6 top-6 rounded-full bg-white/90 px-4 py-2 text-xs font-black uppercase tracking-widest text-[var(--dark)] backdrop-blur">Vuelo controlado</div>
              <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-[#111315]/78 p-6 text-white backdrop-blur-xl">
                <PlaneTakeoff className="mb-3 text-[var(--brand)]" />
                <strong className="block text-3xl font-black">Más distancia. Menos riesgo.</strong>
                <span className="mt-2 block text-white/75">Ideal para pesca de playa, costa y surfcasting.</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
