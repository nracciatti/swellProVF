import { faqs } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function FAQ() {
  return (
    <section className="bg-white py-24">
      <div className="container-page">
        <SectionHeading eyebrow="Dudas frecuentes" title="Preguntas frecuentes" text="Información general sobre uso, modelos, compra online y consultas habituales." />
        <div className="mx-auto mt-12 grid max-w-4xl gap-4">
          {faqs.map((faq, index) => (
            <Reveal key={faq.question} delay={index * .05} className="rounded-[1.7rem] border border-black/5 bg-[#f6f7f9] p-6">
              <h3 className="text-xl font-black">{faq.question}</h3>
              <p className="mt-3 leading-7 text-[var(--muted)]">{faq.answer}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
