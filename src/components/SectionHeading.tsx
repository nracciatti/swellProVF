import { Reveal } from "./Reveal";

export function SectionHeading({ eyebrow, title, text, align = "center" }: { eyebrow?: string; title: string; text?: string; align?: "center" | "left" }) {
  return (
    <Reveal className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && <p className="mb-3 text-sm font-bold uppercase tracking-[0.22em] text-[var(--brand)]">{eyebrow}</p>}
      <h2 className="text-balance text-3xl font-black tracking-tight text-[var(--fg)] md:text-5xl">{title}</h2>
      {text && <p className="mt-5 text-base leading-8 text-[var(--muted)] md:text-lg">{text}</p>}
    </Reveal>
  );
}
