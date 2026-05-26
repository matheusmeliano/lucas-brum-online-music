import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-[#c2a46a]/12 bg-black">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="text-sm font-semibold text-white/90">Lucas Brum</div>
            <div className="mt-2 max-w-md text-sm text-white/60">
              Aulas de violão com direção, estratégia e acompanhamento. Modelo Híbrido ou Individual.
            </div>
          </div>

          <div className="grid gap-3 text-sm">
            <a
              href="#como-funciona"
              className="text-white/70 transition hover:text-white/90 focus:outline-none focus:ring-2 focus:ring-brand-glow/40"
            >
              Como funciona
            </a>
            <a
              href="#modelos"
              className="text-white/70 transition hover:text-white/90 focus:outline-none focus:ring-2 focus:ring-brand-glow/40"
            >
              Modelos
            </a>
            <a
              href="#contato"
              className="text-white/70 transition hover:text-white/90 focus:outline-none focus:ring-2 focus:ring-brand-glow/40"
            >
              Contato
            </a>
          </div>

          <div>
            <div className="mt-3 flex items-center gap-2">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/5 text-white/85 ring-1 ring-[#c2a46a]/14 transition hover:bg-white/8 focus:outline-none focus:ring-2 focus:ring-brand-accent"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-[#c2a46a]/12 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Lucas Brum</div>
          <div className="text-white/50">
            Desenvolvido pela{" "}
            <a
              href="https://heybrothers.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-white/70 underline decoration-[#c2a46a]/30 underline-offset-4 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-accent"
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
