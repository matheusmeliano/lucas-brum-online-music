import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
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
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-colors duration-300",
        scrolled ? "border-brand-border bg-brand-deep/85" : "border-transparent bg-brand-deep/55"
      )}
    >
      <div className="mx-auto max-w-6xl px-4 py-4 sm:py-5">
        <div className="flex flex-col items-center gap-3 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div className="flex w-full flex-col items-center md:w-auto md:flex-row md:items-center">
            <a
              href="#topo"
              onClick={handleBrandClick}
              className="group inline-flex w-full items-center justify-center gap-2 md:w-auto md:justify-start"
            >
              <img
                src="/imagens/logo-online-music-usa.png"
                alt="Lucas Brum Online Music USA"
                className="h-11 w-11 rounded-2xl bg-white/0 p-0 object-contain"
                loading="eager"
              />
              <div className="leading-tight">
                <div
                  className={cn(
                    "max-w-[220px] truncate text-[13px] font-semibold tracking-tight text-brand-text transition-colors duration-150 sm:max-w-[280px] md:max-w-none md:whitespace-nowrap md:overflow-visible md:text-sm"
                  )}
                >
                  Lucas Brum Online Music USA
                </div>
              </div>
            </a>

            <div className="mt-2 flex w-full items-center justify-center gap-2 md:mt-0 md:ml-2 md:w-auto md:justify-start">
              <button
                type="button"
                aria-label={open ? "Fechar menu" : "Abrir menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className={cn(
                  "inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-white/90 transition-colors duration-150 hover:bg-white/8 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-glow/40 md:hidden"
                )}
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <div className="hidden items-center gap-6 md:flex">
            <nav className="flex items-center gap-6 text-sm">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-white/70 transition-colors duration-150 hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-glow/40"
                  )}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <motion.a
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              href="#discografia"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-brand-glow px-4 py-2 text-[13px] font-semibold text-black/90 transition hover:bg-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-glow/40"
            >
              Ouça agora
            </motion.a>
          </div>
        </div>
      </div>

      <div
        className={cn("md:hidden", open ? "block" : "hidden")}
        role="dialog"
        aria-modal="true"
      >
        <div className="border-t border-brand-border bg-brand-deep/92 backdrop-blur-xl">
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-2xl border border-brand-border bg-white/4 px-4 py-3 text-sm text-white/90 transition hover:bg-white/7 focus:outline-none focus:ring-2 focus:ring-brand-glow/40"
                )}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#discografia"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-2xl bg-brand-glow px-4 py-3 text-sm font-semibold text-black/90 transition hover:bg-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-glow/40"
            >
              Ouça agora
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
