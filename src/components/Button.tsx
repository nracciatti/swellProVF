import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

export function ButtonLink({ href, children, variant = "primary", className = "" }: { href: string; children: ReactNode; variant?: "primary" | "dark" | "outline" | "light"; className?: string }) {
  const variants = {
    primary: "btn-primary-ui",
    dark: "btn-dark-ui",
    light: "btn-light-ui",
    outline: "btn-outline-ui",
  };
  return (
    <Link href={href} className={`btn-ui ${variants[variant]} ${className}`}>
      <span>{children}</span>
      <ArrowRight size={18} />
    </Link>
  );
}
