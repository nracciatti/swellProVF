"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useRef, useState } from "react";
import { brand, navItems, products } from "@/lib/data";
import { ButtonLink } from "./Button";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [desktopModelsOpen, setDesktopModelsOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openModels = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setDesktopModelsOpen(true);
  };

  const closeModels = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setDesktopModelsOpen(false), 220);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-black/5 bg-[rgba(247,243,234,.84)] backdrop-blur-xl">
      <div className="container-page flex h-20 items-center justify-between gap-5">
        <Link href="/" className="relative h-11 w-44 shrink-0" aria-label="SwellPro Argentina">
          <Image src="/assets/images/swellpro-logo-orange.png" alt="SwellPro Argentina" fill sizes="176px" className="object-contain" priority />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link-ui">
              {item.label}
            </Link>
          ))}

          <div className="relative" onMouseEnter={openModels} onMouseLeave={closeModels}>
            <div className="flex items-center gap-1 rounded-full px-2 py-2 transition hover:bg-white/55">
              <Link href="/productos" className="nav-link-ui nav-link-ui-active inline-flex items-center gap-1.5">
                Modelos
              </Link>
              <button type="button" aria-label="Abrir modelos" onClick={() => setDesktopModelsOpen((prev) => !prev)} className="rounded-full p-1.5 text-[var(--dark)] transition hover:bg-black/5">
                <ChevronDown size={16} className={`transition ${desktopModelsOpen ? "rotate-180" : ""}`} />
              </button>
            </div>

            <div className="absolute right-0 top-full h-6 w-[620px]" onMouseEnter={openModels} />
            <div
              onMouseEnter={openModels}
              onMouseLeave={closeModels}
              className={`nav-dropdown-ui absolute right-0 top-[calc(100%+12px)] max-h-[72vh] w-[620px] overflow-y-auto rounded-[2rem] p-4 transition duration-200 ${desktopModelsOpen ? "visible translate-y-0 opacity-100" : "invisible translate-y-2 opacity-0"}`}
            >
              <div className="mb-3 flex items-center justify-between px-2">
                <span className="text-xs font-black uppercase tracking-[0.22em] text-[var(--brand)]">Modelos Fisherman</span>
                <Link href="/productos" className="text-xs font-bold text-[var(--muted)] hover:text-[var(--brand)]">Ver línea completa</Link>
              </div>
              <div className="grid gap-3">
                {products.map((p) => (
                  <Link key={p.slug} href={`/productos/${p.slug}`} className="group/item grid grid-cols-[94px_1fr] items-center gap-4 rounded-[1.4rem] border border-black/6 bg-[#fcfaf6] p-3 transition hover:border-orange-500/35 hover:bg-white">
                    <div className="relative h-20 overflow-hidden rounded-[1rem] product-media-bg">
                      <Image src={p.image} alt={p.name} fill sizes="94px" className="object-contain p-3 transition duration-300 group-hover/item:scale-110" />
                    </div>
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <strong className="block text-base font-black text-[var(--fg)]">{p.name}</strong>
                        <span className="rounded-full bg-[var(--brand)] px-3 py-1 text-[10px] font-black uppercase tracking-widest text-white">Ficha</span>
                      </div>
                      <p className="mt-1 text-sm font-semibold leading-5 text-[var(--muted)]">{p.shortUse}</p>
                      <div className="mt-2 flex flex-wrap gap-2 text-[11px] font-black uppercase tracking-wider text-[var(--muted)]">
                        {p.specs.slice(0, 3).map(([label, value]) => <span key={label}>{label}: {value}</span>)}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink href={brand.shopUrl} className="px-6 py-3">Comprar online</ButtonLink>
        </div>

        <button className="rounded-full border border-black/10 p-2 text-[var(--dark)] lg:hidden" onClick={() => setOpen(!open)} aria-label="Abrir menú">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/6 bg-[#f7f3ea] p-5 lg:hidden">
          <div className="container-page grid gap-3">
            {navItems.map((item) => (
              <Link key={item.href} onClick={() => setOpen(false)} href={item.href} className="rounded-2xl bg-white px-4 py-3 text-sm font-bold text-[var(--dark)] shadow-sm">
                {item.label}
              </Link>
            ))}
            <Link onClick={() => setOpen(false)} href="/productos" className="rounded-2xl bg-white px-4 py-3 text-sm font-bold text-[var(--dark)] shadow-sm">
              Modelos
            </Link>
            <div className="grid gap-3 py-2">
              {products.map((p) => (
                <Link key={p.slug} onClick={() => setOpen(false)} href={`/productos/${p.slug}`} className="grid grid-cols-[70px_1fr] items-center gap-3 rounded-2xl bg-white p-3 text-[var(--dark)] shadow-sm">
                  <div className="relative h-16 rounded-xl product-media-bg"><Image src={p.image} alt={p.name} fill sizes="70px" className="object-contain p-2" /></div>
                  <div><strong className="block text-sm">{p.name}</strong><span className="text-xs text-[var(--muted)]">{p.eyebrow}</span></div>
                </Link>
              ))}
            </div>
            <ButtonLink href={brand.shopUrl}>Comprar online</ButtonLink>
          </div>
        </div>
      )}
    </header>
  );
}
