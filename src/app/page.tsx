import { Authority } from "@/components/Authority";
import { Benefits } from "@/components/Benefits";
import { Comparison } from "@/components/Comparison";
import { Contact } from "@/components/Contact";
import { Experience } from "@/components/Experience";
import { FAQ } from "@/components/FAQ";
import { Gallery } from "@/components/Gallery";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { ModelSelector } from "@/components/ModelSelector";
import { ProductCards } from "@/components/ProductCards";
import { TrustBar } from "@/components/TrustBar";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <ProductCards />
      <Authority />
      <HowItWorks />
      <ModelSelector />
      <Benefits />
      <Comparison />
      <Experience />
      <Gallery />
      <FAQ />
      <Contact />
    </main>
  );
}
