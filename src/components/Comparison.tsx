import Link from "next/link";
import { products } from "@/lib/data";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { ArrowRight } from "lucide-react";

const rows = ["Ideal para", "Carnada", "Alcance", "Vuelo", "Cámara", "Impermeable"];
const ideal = ["Empezar con respaldo", "Máxima capacidad", "Premium 4K"];

function value(product: typeof products[number], row: string, index: number) {
  if (row === "Ideal para") return ideal[index];
  const spec = product.specs.find(([label]) => label === row);
  return spec?.[1] ?? "—";
}

export function Comparison() {
  return (
    <section id="comparativa" className="bg-[var(--bg)] py-24">
      <div className="container-page">
        <SectionHeading eyebrow="Comparativa" title="Comparativa de modelos Fisherman" text="Resumen de características principales para revisar diferencias de uso, capacidad, alcance, cámara e impermeabilidad entre modelos." />
        <Reveal className="mt-12 overflow-hidden rounded-[2rem] border border-black/5 bg-white shadow-xl shadow-black/10">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[820px] border-collapse text-left">
              <thead className="bg-[#171717] text-white">
                <tr>
                  <th className="p-5 text-sm font-black uppercase tracking-wider">Característica</th>
                  {products.map((p) => <th key={p.slug} className="p-5 text-sm font-black uppercase tracking-wider">{p.name}</th>)}
                </tr>
              </thead>
              <tbody>
                {rows.map((row) => (
                  <tr key={row} className="border-b border-[var(--border)] last:border-0">
                    <td className="p-5 font-black text-[var(--dark)]">{row}</td>
                    {products.map((p, index) => (
                      <td key={p.slug} className="p-5 text-[var(--muted)]"><strong className={row === "Ideal para" ? "text-[var(--brand)]" : "text-[var(--fg)]"}>{value(p, row, index)}</strong></td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        <div className="mt-6 grid gap-3 md:grid-cols-3">
          {products.map((p, index) => (
            <Reveal key={p.slug} delay={index * .05} className="rounded-3xl border border-black/5 bg-white p-5 shadow-lg shadow-black/5">
              <span className="text-xs font-black uppercase tracking-widest text-[var(--brand)]">{ideal[index]}</span>
              <strong className="mt-1 block text-xl font-black">{p.name}</strong>
              <p className="mt-2 min-h-12 text-sm leading-6 text-[var(--muted)]">{p.shortUse}</p>
              <Link href={`/productos/${p.slug}`} className="mt-4 inline-flex items-center gap-2 text-sm font-black text-[var(--fg)] hover:text-[var(--brand)]">Ver modelo <ArrowRight size={16} /></Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
