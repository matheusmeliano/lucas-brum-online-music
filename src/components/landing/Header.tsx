import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import FlagBR from "@/components/icons/FlagBR";
import FlagUS from "@/components/icons/FlagUS";
import { useI18n } from "@/i18n/useI18n";
import LanguageModal from "@/components/language/LanguageModal";
import LanguagePrompt from "@/components/language/LanguagePrompt";

const navItems = [
  { label: "Modelos", href: "#modelos" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Depoimentos", href: "#depoimentos" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { dict } = useI18n();
  const langButtonRef = useRef<HTMLButtonElement | null>(null);

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
        "fixed inset-x-0 top-0 z-50 border-b backdrop-blur-sm transition-colors duration-300",
        scrolled ? "border-black/10 bg-white" : "border-transparent bg-brand-deep/60"
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
                    "max-w-[220px] truncate text-[13px] font-semibold tracking-tight transition-colors duration-150 sm:max-w-[280px] md:max-w-none md:whitespace-nowrap md:overflow-visible md:text-sm",
                    scrolled ? "text-brand-ink" : "text-white"
                  )}
                >
                  Lucas Brum Online Music USA
                </div>
              </div>
            </a>

            <div className="mt-2 flex w-full items-center justify-center gap-2 md:mt-0 md:ml-2 md:w-auto md:justify-start">
              <div className="relative">
                <button
                  ref={langButtonRef}
                  type="button"
                  onClick={() => setLangOpen(true)}
                  className={cn(
                    "inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-[11px] transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#009b3a]/40",
                    scrolled
                      ? "bg-brand-deep/[0.04] text-brand-ink/70 hover:bg-brand-deep/[0.06]"
                      : "bg-white/6 text-white/85 hover:bg-white/10"
                  )}
                  aria-label="Idioma"
                >
                  <FlagBR className="h-4 w-6" />
                  <FlagUS className="h-4 w-6" />
                </button>

                <LanguagePrompt
                  onOpen={() => setLangOpen(true)}
                  suspended={langOpen || open}
                  anchorRef={langButtonRef}
                />
              </div>

              <button
                type="button"
                aria-label={open ? "Fechar menu" : "Abrir menu"}
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className={cn(
                  "inline-flex h-10 w-10 items-center justify-center rounded-2xl transition-colors duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#009b3a]/40 md:hidden",
                  scrolled
                    ? "bg-brand-deep/[0.04] text-brand-ink/80 hover:bg-brand-deep/[0.06]"
                    : "bg-white/6 text-white/90 hover:bg-white/10"
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
                    "transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#009b3a]/40",
                    scrolled ? "text-brand-ink/70 hover:text-brand-ink" : "text-white/85 hover:text-white"
                  )}
                >
                  {item.href === "#modelos"
                    ? dict.nav.models
                    : item.href === "#beneficios"
                      ? dict.nav.benefits
                      : dict.nav.testimonials}
                </a>
              ))}
            </nav>

            <motion.a
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              href="#cta"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-[#009b3a] px-3 py-2 text-[13px] font-medium text-white transition hover:bg-[#008a34] focus:outline-none focus:ring-2 focus:ring-brand-accent"
            >
              {dict.header.cta}
            </motion.a>
          </div>
        </div>
      </div>

      <div className={cn("md:hidden", open ? "block" : "hidden")}
        role="dialog"
        aria-modal="true"
      >
        <div className={cn("border-t", scrolled ? "border-brand-border bg-white" : "border-brand-border bg-brand-deep/80 backdrop-blur-sm")}>
          <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "rounded-2xl border border-brand-border px-4 py-3 text-sm transition focus:outline-none focus:ring-2 focus:ring-[#009b3a]/40",
                  scrolled
                    ? "bg-brand-deep/[0.03] text-brand-ink/90 hover:bg-brand-deep/[0.05]"
                    : "bg-white/5 text-white/90 hover:bg-white/8"
                )}
              >
                {item.href === "#modelos"
                  ? dict.nav.models
                  : item.href === "#beneficios"
                    ? dict.nav.benefits
                    : dict.nav.testimonials}
              </a>
            ))}
            <a
              href="#cta"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-2xl bg-[#009b3a] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#008a34] focus:outline-none focus:ring-2 focus:ring-brand-accent"
            >
              {dict.header.cta}
            </a>
          </div>
        </div>
      </div>

      <LanguageModal open={langOpen} onClose={() => setLangOpen(false)} />
    </header>
  );
}
