import Image from "next/image";
import Link from "next/link";
import { brand, products } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-[#171717] py-10 text-white">
      <div className="container-page flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <Image src="/assets/images/swellpro-logo-orange.png" alt="SwellPro" width={190} height={48} className="h-auto w-44" />
          <p className="mt-4 max-w-md text-sm leading-6 text-white/55">Drones de pesca SwellPro en Argentina. Modelos Fisherman, información técnica, soporte local y tienda online.</p>
        </div>
        <div className="grid gap-2 text-sm text-white/70 md:text-right">
          {products.map((p) => <Link key={p.slug} href={`/productos/${p.slug}`} className="hover:text-[var(--brand)]">{p.name}</Link>)}
          <a href={`mailto:${brand.email}`} className="hover:text-[var(--brand)]">{brand.email}</a>
        </div>
      </div>
      <div className="container-page mt-8 border-t border-white/10 pt-6 text-sm text-white/40">© 2026 SwellPro Argentina. Todos los derechos reservados.</div>
    </footer>
  );
}
