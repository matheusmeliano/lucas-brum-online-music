import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Modelos", href: "#modelos" },
  { label: "Estrutura", href: "#estrutura" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const handleBrandClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
    window.history.replaceState(null, "", "#topo");
  };

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 8);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 pt-4 sm:pt-6">
        <div
          className={cn(
            "flex items-center justify-center gap-3 rounded-full border px-4 py-3 backdrop-blur-xl transition md:justify-between md:gap-4",
            scrolled
              ? "border-transparent bg-transparent shadow-[0_18px_70px_rgba(0,0,0,0.45)]"
              : "border-transparent bg-transparent shadow-[0_18px_70px_rgba(0,0,0,0.38)]"
          )}
        >
          <a href="#topo" onClick={handleBrandClick} className="inline-flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/6">
              <img
                src="/imagens/logo-online-music-usa.png"
                alt="Lucas Brum Online Music USA"
                className="h-7 w-7 object-contain"
                loading="eager"
              />
            </span>
            <div className="hidden text-[13px] font-semibold tracking-tight text-white md:block">
              Lucas Brum Online Music USA
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-[13px] text-white/70 md:flex">
            {navItems.slice(0, 4).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-glow/40"
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
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-transparent text-white/85 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-glow/40 md:hidden"
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
          <div className="rounded-[28px] border border-transparent bg-transparent p-3 shadow-[0_24px_80px_rgba(0,0,0,0.5)] backdrop-blur-xl">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm font-medium text-white/85 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-glow/40"
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
