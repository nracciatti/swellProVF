import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppToast } from "@/components/WhatsAppToast";
import { Tracking } from "@/components/Tracking";

export const metadata: Metadata = {
  title: {
    default: "SwellPro Argentina | Drones de pesca",
    template: "%s | SwellPro Argentina",
  },
  description:
    "Drones de pesca SwellPro en Argentina. Modelos Fisherman FD1S, Fisherman Max FD2 y Fisherman FD3 con resistencia al agua, GPS y soporte local.",
  keywords: ["drone pesca", "drone para pescar", "SwellPro Argentina", "Fisherman FD3", "Fisherman FD1S", "Fisherman Max FD2"],
  icons: {
    icon: "/assets/images/logoPagina.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <Tracking />
        <Navbar />
        {children}
        <Footer />
        <WhatsAppToast />
      </body>
    </html>
  );
}
