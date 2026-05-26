import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-deep/60 backdrop-blur-sm">
      <div className="pointer-events-none absolute inset-0 opacity-90">
        <div className="absolute -top-48 left-1/2 h-[520px] w-[980px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(194,164,106,0.12),transparent_70%)]" />
        <div className="absolute -bottom-56 left-1/2 h-[520px] w-[980px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(194,164,106,0.08),transparent_72%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
          <div>
            <div className="text-sm font-semibold text-white">Lucas Brum</div>
            <div className="mt-2 max-w-md text-sm text-white/65">
              Aulas de violão com direção, estratégia e acompanhamento. Modelo Híbrido ou Individual.
            </div>
          </div>

          <div className="grid justify-items-center gap-3 text-sm sm:justify-items-start">
            <a
              href="#como-funciona"
              className="text-white/80 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-glow/40"
            >
              Como funciona
            </a>
            <a
              href="#modelos"
              className="text-white/80 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-glow/40"
            >
              Modelos
            </a>
          </div>

          <div>
            <div className="text-xs font-medium text-white/65">Links</div>
            <div className="mt-3 flex items-center justify-center gap-2 sm:justify-start">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-brand-border bg-white/5 text-white/85 transition hover:bg-white/8 focus:outline-none focus:ring-2 focus:ring-brand-accent"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 border-t border-brand-border pt-6 text-center text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <div>© {new Date().getFullYear()} Lucas Brum Online Music USA</div>
          <div className="text-white/50">
            Desenvolvido pela{" "}
            <a
              href="https://heybrothers.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-white/70 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-accent"
            >
              HEYBROTHERS
            </a>
            .
          </div>
        </div>
      </div>
    </footer>
  );
}
