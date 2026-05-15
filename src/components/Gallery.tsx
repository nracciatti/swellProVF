import Image from "next/image";
import { Reveal } from "./Reveal";

const images = [
  ["/assets/images/dronAgua.webp", "Drone SwellPro en agua"],
  ["/assets/images/fishermanfd3-FD3-fishing-drone-on-beach.jpg", "SwellPro en playa"],
  ["/assets/images/dronesharkfishinginsouthafrica-1681204074058.jpg", "Pesca con drone"],
  ["/assets/images/home-page-subscribe-P1_1400x.webp", "Drone de pesca"],
];

export function Gallery() {
  return (
    <section className="bg-white py-24">
      <div className="container-page">
        <Reveal className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[var(--brand)]">Experiencia SwellPro</p>
          <h2 className="text-balance text-4xl font-black tracking-tight md:text-6xl">Pesca desde costa con tecnología SwellPro.</h2>
          <p className="mt-5 text-lg leading-8 text-[var(--muted)]">Imágenes de producto y uso en entornos costeros, pensadas para mostrar la aplicación real de la línea Fisherman.</p>
        </Reveal>
        <div className="mt-12 grid gap-4 md:grid-cols-4 md:grid-rows-[260px_260px]">
          {images.map(([src, alt], index) => (
            <Reveal key={src} delay={index * .06} className={`group relative overflow-hidden rounded-[2rem] ${index === 0 ? "md:col-span-2 md:row-span-2" : index === 3 ? "md:col-span-2" : ""}`}>
              <Image src={src} alt={alt} fill sizes="(min-width: 1024px) 25vw, 50vw" className="object-cover transition duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/5 to-transparent opacity-80 transition group-hover:opacity-100" />
              <div className="absolute bottom-5 left-5 right-5 translate-y-2 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-black text-[var(--dark)] backdrop-blur">{alt}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
