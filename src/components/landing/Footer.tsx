import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-brand-border bg-brand-deep/60 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="text-sm font-semibold text-white">Lucas Brum</div>
            <div className="mt-2 max-w-md text-sm text-white/65">
              Aulas de violão com direção, estratégia e acompanhamento. Modelo Híbrido ou Individual.
            </div>
          </div>

          <div className="grid gap-3 text-sm">
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
            <a
              href="#contato"
              className="text-white/80 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-glow/40"
            >
              Contato
            </a>
          </div>

          <div>
            <div className="text-xs font-medium text-white/65">Links</div>
            <div className="mt-3 flex items-center gap-2">
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

        <div className="mt-10 flex flex-col gap-2 border-t border-brand-border pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Lucas Brum</div>
          <div className="text-white/50">Evolução real com clareza e consistência.</div>
        </div>
      </div>
    </footer>
  );
}
