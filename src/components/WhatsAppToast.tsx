"use client";

import { MessageCircle, Sparkles, X } from "lucide-react";
import { useEffect, useState } from "react";
import { brand } from "@/lib/data";

export function WhatsAppToast() {
  const href = `https://wa.me/${brand.phoneRaw}?text=${encodeURIComponent(brand.whatsappMessage)}`;
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowHint(true), 5000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 flex items-end gap-3">
      <div className={`max-w-[280px] transition-all duration-500 ${showHint ? "translate-x-0 opacity-100" : "pointer-events-none translate-x-6 opacity-0"}`}>
        <div className="rounded-[1.4rem] border border-[#25D366]/20 bg-white px-4 py-3 text-[#111315] shadow-[0_18px_45px_rgba(17,19,21,.16)]">
          <div className="flex items-start gap-3">
            <div className="mt-0.5 rounded-full bg-[#25D366]/12 p-2 text-[#25D366]">
              <Sparkles size={16} />
            </div>
            <div className="min-w-0">
              <p className="text-sm font-black leading-5">¿No sabés qué modelo elegir?</p>
              <p className="mt-1 text-sm leading-5 text-[var(--muted)]">Te asesoramos según tu tipo de pesca, zona y presupuesto.</p>
            </div>
            <button onClick={() => setShowHint(false)} aria-label="Cerrar" className="rounded-full p-1 text-black/35 transition hover:bg-black/5 hover:text-black/60">
              <X size={14} />
            </button>
          </div>
          <div className="mt-3 flex justify-end">
            <a href={href} target="_blank" rel="noreferrer" className="rounded-full bg-[#25D366] px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white shadow-[0_10px_25px_rgba(37,211,102,.28)] transition hover:scale-[1.02]">
              Consultar modelo
            </a>
          </div>
        </div>
      </div>

      <a href={href} target="_blank" rel="noreferrer" className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-black/25 transition hover:scale-105" aria-label="Consultar por WhatsApp">
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 animate-[ping_2.2s_ease-out_infinite]" />
        <span className="relative z-10"><MessageCircle /></span>
      </a>
    </div>
  );
}
