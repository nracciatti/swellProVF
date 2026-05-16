"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { brand, products } from "@/lib/data";
import { ButtonLink } from "./Button";
import { Reveal } from "./Reveal";
import { Camera, Compass, Droplets, ShieldCheck } from "lucide-react";

const heroProducts = [products[0], products[1], products[2]];
const labels = ["Ideal para empezar", "Carga + cámara 4K", "Premium 4K"];

export function Hero() {
  const whatsapp = `https://wa.me/${brand.phoneRaw}?text=${encodeURIComponent(
    brand.whatsappMessage
  )}`;
  const [active, setActive] = useState(0);
  const [showVideo, setShowVideo] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const current = heroProducts[active];

  useEffect(() => {
    const videoTimer = window.setTimeout(() => setShowVideo(true), 1200);
    const id = setInterval(
      () => setActive((prev) => (prev + 1) % heroProducts.length),
      4400
    );
    return () => {
      window.clearTimeout(videoTimer);
      clearInterval(id);
    };
  }, []);

  return (
    <section className="hero-soft-bg relative overflow-hidden pt-24 text-[var(--fg)]">
      <div className="absolute left-[-120px] top-24 h-[360px] w-[360px] rounded-full bg-orange-200/30 blur-3xl" />
      <div className="absolute right-[-120px] bottom-10 h-[340px] w-[340px] rounded-full bg-stone-300/35 blur-3xl" />

      <div className="container-page relative grid min-h-[calc(100vh-96px)] items-center gap-10 py-12 lg:grid-cols-[.88fr_1.12fr] lg:gap-14 lg:py-10">
        <div className="max-w-2xl">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-black/10 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-[var(--dark)] backdrop-blur">
              <ShieldCheck size={16} className="text-[var(--brand)]" />{" "}
              Representantes oficiales en Argentina
            </div>
            <h1 className="text-balance text-5xl font-black leading-[0.95] tracking-tight md:text-[3.6rem] lg:text-[4.6rem] xl:text-[5.25rem]">
              Drones de pesca para llegar más lejos.
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--muted)] md:text-xl">
              Drones de pesca SwellPro para playa, costa y surfcasting, con
              modelos preparados para diferentes necesidades de carga, alcance y
              uso.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="#productos">Ver modelos</ButtonLink>
            <ButtonLink
              href={whatsapp}
              variant="dark"
              className="hero-wa-target"
            >
              Consultar por WhatsApp
            </ButtonLink>
          </Reveal>

          <Reveal delay={0.16} className="mt-8 grid max-w-xl grid-cols-3 gap-3">
            <div className="rounded-3xl bg-white/70 p-4 shadow-sm backdrop-blur">
              <Droplets className="mb-2 text-[var(--brand)]" size={21} />
              <strong className="block text-xl font-black">IP67</strong>
              <span className="block text-xs font-bold text-[var(--muted)]">
                Waterproof
              </span>
            </div>
            <div className="rounded-3xl bg-white/70 p-4 shadow-sm backdrop-blur">
              <Compass className="mb-2 text-[var(--brand)]" size={21} />
              <strong className="block text-xl font-black">Hasta 1,5 km</strong>
              <span className="block text-xs font-bold text-[var(--muted)]">
                Alcance máximo
              </span>
            </div>
            <div className="rounded-3xl bg-white/70 p-4 shadow-sm backdrop-blur">
              <Camera className="mb-2 text-[var(--brand)]" size={21} />
              <strong className="block text-xl font-black">3 modelos</strong>
              <span className="block text-xs font-bold text-[var(--muted)]">
                Línea completa
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.18} className="relative lg:max-w-[760px] lg:-translate-y-4 lg:justify-self-end xl:max-w-[820px] xl:-translate-y-6">
          <div className="absolute -inset-8 rounded-full bg-[var(--brand)]/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[2.9rem] border border-white/40 bg-white/45 p-3 shadow-[0_30px_90px_rgba(17,19,21,.12)] backdrop-blur-xl md:p-4 lg:p-5">
            <Link
              href={`/productos/${current.slug}`}
              className="absolute inset-0 z-10"
              aria-label={`Ver ${current.name}`}
            />

            <div className="relative h-[310px] overflow-hidden rounded-[2.1rem] bg-[#121315] md:h-[350px] lg:h-[360px]">
              <Image
                src="/assets/images/fishermandronesurfcastingonbeach-1681203076907.webp"
                alt="Drone de pesca en la costa"
                fill
                priority
                sizes="(min-width: 1024px) 54vw, 100vw"
                className={`absolute inset-0 object-cover transition-opacity duration-700 ${
                  videoReady ? "opacity-0" : "opacity-65"
                }`}
              />
              {showVideo && (
                <video
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                    videoReady ? "opacity-80" : "opacity-0"
                  }`}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  onCanPlay={() => setVideoReady(true)}
                >
                  <source
                    src="/assets/images/videoHD-light.mp4"
                    type="video/mp4"
                  />
                </video>
              )}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,122,26,.30),transparent_24%),linear-gradient(180deg,rgba(10,10,11,.12),rgba(10,10,11,.46))]" />

              <div className="absolute left-6 top-6 z-20 rounded-full border border-white/15 bg-black/28 px-4 py-2 text-[11px] font-black uppercase tracking-[0.20em] text-white backdrop-blur-md">
                {labels[active]}
              </div>

              <div className="pointer-events-none absolute inset-x-10 bottom-10 h-16 rounded-full bg-[var(--brand)]/26 blur-3xl" />
              <div className="absolute inset-0 flex items-center justify-center px-8 pb-6 pt-12 md:px-12 lg:px-14">
                <div className="hero-drone-swap relative z-10 h-full w-full max-w-[760px] xl:max-w-[800px]">
                  <Image
                    key={current.slug}
                    src={current.image}
                    alt={current.name}
                    fill
                    priority
                    sizes="(min-width: 1280px) 800px, (min-width: 1024px) 760px, 100vw"
                    className="object-contain drop-shadow-[0_35px_70px_rgba(0,0,0,.45)]"
                  />
                </div>
              </div>
            </div>

            <div className="relative z-20 mt-3 min-h-[225px] rounded-[2rem] border border-black/6 bg-[linear-gradient(180deg,rgba(18,19,21,.92),rgba(25,26,28,.98))] px-5 py-5 text-white shadow-[0_18px_40px_rgba(17,19,21,.18)] md:h-[206px] md:px-6 md:py-6">
              <div
                key={current.slug}
                className="hero-copy-swap flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
              >
                <div>
                  <span className="text-[10px] font-black uppercase tracking-[0.22em] text-orange-200">
                    Modelo destacado
                  </span>
                  <h2 className="mt-2 text-3xl font-black tracking-tight text-white md:text-[2.35rem]">
                    {current.name}
                  </h2>
                  <p className="mt-1 min-h-12 max-w-xl text-sm font-medium leading-6 text-white/90 md:text-base">
                    {current.tagline}
                  </p>
                </div>
              </div>

              <div className="relative z-30 mt-4 flex flex-wrap gap-2">
                {heroProducts.map((product, index) => (
                  <button
                    key={product.slug}
                    type="button"
                    onClick={(e) => {
                      e.preventDefault();
                      setActive(index);
                    }}
                    className={`pointer-events-auto rounded-full px-4 py-2 text-sm font-black transition ${
                      active === index
                        ? "bg-[var(--brand)] text-white shadow-[0_10px_30px_rgba(255,91,24,.28)]"
                        : "bg-white/12 text-white/82 hover:bg-white/18"
                    }`}
                  >
                    {product.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
