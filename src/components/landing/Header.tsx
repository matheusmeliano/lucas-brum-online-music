import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navItems = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Modelos", href: "#modelos" },
  { label: "Feedback", href: "#estrutura" },
  { label: "Vídeos", href: "#depoimentos" },
  { label: "Dúvidas", href: "#faq" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [onLight, setOnLight] = useState(false);
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    const update = () => {
      setScrolled(window.scrollY > 8);

      const bar = barRef.current;
      if (!bar) return;

      const rect = bar.getBoundingClientRect();
      const probeY = window.scrollY + rect.bottom + 1;
      const themed = document.querySelectorAll<HTMLElement>("[data-theme]");

      let nextOnLight = false;
      for (const el of themed) {
        const elRect = el.getBoundingClientRect();
        const top = window.scrollY + elRect.top;
        const bottom = window.scrollY + elRect.bottom;
        if (probeY >= top && probeY < bottom) {
          nextOnLight = el.dataset.theme === "light";
          break;
        }
      }

      setOnLight((current) => (current === nextOnLight ? current : nextOnLight));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-4 sm:pt-6">
        <div
          ref={barRef}
          className={cn(
            "flex items-center justify-center gap-3 rounded-full border px-4 py-3 backdrop-blur-xl transition md:justify-between md:gap-4",
            onLight
              ? "border-black/10 bg-white/80 shadow-[0_18px_70px_rgba(0,0,0,0.14)]"
              : scrolled
                ? "border-black/10 bg-white/88 shadow-[0_18px_70px_rgba(0,0,0,0.16)]"
                : "border-black/10 bg-white/82 shadow-[0_18px_70px_rgba(0,0,0,0.14)]"
          )}
        >
          <a href="https://www.lucasbrumonlinemusic.com/" className="inline-flex items-center gap-3">
            <span
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-black/5"
            >
              <img
                src="/imagens/logo-online-music-usa.png"
                alt="Lucas Brum Online Music USA"
                className="h-7 w-7 object-contain"
                loading="eager"
              />
            </span>
            <div
              className="hidden text-[13px] font-semibold tracking-tight text-black/90 md:block"
            >
              Lucas Brum Online Music USA
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-[13px] text-black/60 md:flex">
            {navItems.slice(0, 5).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors focus:outline-none focus:ring-2 focus:ring-brand-glow/40 hover:text-black"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 md:gap-2">
            <motion.a
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              href="#modelos"
              className="group hidden items-center justify-center gap-2 rounded-full bg-brand-glow px-4 py-2 text-[13px] font-semibold text-black/90 transition hover:bg-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-glow/40 md:inline-flex"
            >
              Começar
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </motion.a>

            <button
              type="button"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-black/70 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-glow/40 md:hidden"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn("md:hidden", open ? "block" : "hidden")}
        role="dialog"
        aria-modal="true"
      >
        <div className="mx-auto max-w-6xl px-4 pb-4 pt-3">
          <div
            className={cn(
              "rounded-[28px] border p-3 backdrop-blur-xl",
              onLight
                ? "border-black/10 bg-white/85 shadow-[0_24px_80px_rgba(0,0,0,0.14)]"
                : "border-black/10 bg-white/90 shadow-[0_24px_80px_rgba(0,0,0,0.16)]"
            )}
          >
            {navItems
              .filter((item) => item.href !== "#beneficios" && item.href !== "#contato")
              .map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block rounded-2xl px-4 py-3 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-brand-glow/40",
                    onLight
                      ? "text-black/80 hover:bg-black/5"
                      : "text-black/80 hover:bg-black/5"
                  )}
                >
                  {item.label}
                </a>
              ))}
            <a
              href="#modelos"
              onClick={() => setOpen(false)}
              className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-glow px-4 py-3 text-sm font-semibold text-black/90 transition hover:bg-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-glow/40"
            >
              Começar
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
