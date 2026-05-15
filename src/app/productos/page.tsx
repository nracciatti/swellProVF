import { ProductCards } from "@/components/ProductCards";
import { Comparison } from "@/components/Comparison";

export default function ProductsPage() {
  return (
    <main className="pt-20">
      <ProductCards />
      <Comparison />
    </main>
  );
}
