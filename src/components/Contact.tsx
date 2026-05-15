import { Mail, Phone, Store } from "lucide-react";
import { brand } from "@/lib/data";
import { ButtonLink } from "./Button";
import { Reveal } from "./Reveal";

export function Contact() {
  const whatsapp = `https://wa.me/${brand.phoneRaw}?text=${encodeURIComponent(brand.whatsappMessage)}`;
  return (
    <section id="contacto" className="bg-[#171717] py-24 text-white">
      <div className="container-page grid gap-10 lg:grid-cols-[1fr_.85fr]">
        <Reveal>
          <p className="mb-3 text-sm font-black uppercase tracking-[0.22em] text-[var(--brand)]">Contacto</p>
          <h2 className="text-balance text-4xl font-black tracking-tight md:text-6xl">Contacto y compra online</h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">Canales disponibles para consultas sobre modelos, disponibilidad y acceso a la tienda online.</p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={whatsapp}>Consultar por WhatsApp</ButtonLink>
            <ButtonLink href={brand.shopUrl} variant="outline">Ver tienda</ButtonLink>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="rounded-[2rem] border border-white/10 bg-white/10 p-7">
          <div className="space-y-4">
            <a href={whatsapp} className="flex items-center gap-4 rounded-3xl bg-white/[0.08] p-5 transition hover:bg-white/[0.12]"><Phone className="text-[var(--brand)]" /> <span><strong className="block">Teléfono / WhatsApp</strong>{brand.phoneDisplay}</span></a>
            <a href={`mailto:${brand.email}`} className="flex items-center gap-4 rounded-3xl bg-white/[0.08] p-5 transition hover:bg-white/[0.12]"><Mail className="text-[var(--brand)]" /> <span><strong className="block">Email</strong>{brand.email}</span></a>
            <a href={brand.shopUrl} className="flex items-center gap-4 rounded-3xl bg-white/[0.08] p-5 transition hover:bg-white/[0.12]"><Store className="text-[var(--brand)]" /> <span><strong className="block">Tienda</strong>shop-swellpro.com</span></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
