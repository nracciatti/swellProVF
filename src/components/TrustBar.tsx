import { trustItems } from "@/lib/data";

export function TrustBar() {
  return (
    <section className="relative z-20 -mt-8 pb-8">
      <div className="container-page rounded-[1.8rem] border border-black/5 bg-white/92 p-3 shadow-2xl shadow-black/10 backdrop-blur">
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {trustItems.map(({ icon: Icon, label }) => (
            <div key={label} className="flex items-center gap-3 rounded-[1.2rem] bg-[#f7f3ea] px-4 py-3">
              <Icon className="shrink-0 text-[var(--brand)]" size={21} />
              <span className="text-sm font-extrabold leading-5 text-[var(--dark)]">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
