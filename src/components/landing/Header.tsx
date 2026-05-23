import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Sobre", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Discografia", href: "#discografia" },
  { label: "Ao vivo", href: "#ao-vivo" },
  { label: "Serviços", href: "#servicos" },
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
            "flex items-center justify-between gap-4 rounded-full border px-4 py-3 backdrop-blur-xl transition",
            scrolled
              ? "border-black/8 bg-white/92 shadow-[0_18px_70px_rgba(0,0,0,0.35)]"
              : "border-black/6 bg-white/88 shadow-[0_18px_70px_rgba(0,0,0,0.28)]"
          )}
        >
          <a href="#topo" onClick={handleBrandClick} className="inline-flex items-center gap-3">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-black/5">
              <img
                src="/imagens/logo-online-music-usa.png"
                alt="Lucas Brum Online Music USA"
                className="h-7 w-7 object-contain"
                loading="eager"
              />
            </span>
            <div className="hidden text-[13px] font-semibold tracking-tight text-black/85 sm:block">
              Lucas Brum Online Music USA
            </div>
          </a>

          <nav className="hidden items-center gap-7 text-[13px] text-black/55 md:flex">
            {navItems.slice(0, 4).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-black/80 focus:outline-none focus:ring-2 focus:ring-brand-glow/40"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href="#contato"
              className="hidden items-center justify-center rounded-full border border-black/10 bg-white px-4 py-2 text-[13px] font-semibold text-black/70 transition hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-brand-glow/40 md:inline-flex"
            >
              Entrar
            </a>

            <motion.a
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              href="#discografia"
              className="hidden items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,rgba(17,24,39,0.95),rgba(79,70,229,0.95))] px-4 py-2 text-[13px] font-semibold text-white shadow-[0_14px_34px_rgba(79,70,229,0.25)] transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-brand-glow/40 md:inline-flex"
            >
              Fazer o teste
              <ArrowRight className="h-4 w-4" />
            </motion.a>

            <button
              type="button"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white text-black/75 transition hover:bg-black/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-glow/40 md:hidden"
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
          <div className="rounded-[28px] border border-black/10 bg-white/92 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="block rounded-2xl px-4 py-3 text-sm font-medium text-black/70 transition hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-brand-glow/40"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#discografia"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[linear-gradient(135deg,rgba(17,24,39,0.95),rgba(79,70,229,0.95))] px-4 py-3 text-sm font-semibold text-white transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-brand-glow/40"
            >
              Fazer o teste
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
