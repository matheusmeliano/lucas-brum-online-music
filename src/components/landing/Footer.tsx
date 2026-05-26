import { Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#c2a46a]/12 bg-black">
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[980px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(194,164,106,0.10),transparent_70%)]" />
        <div className="absolute -bottom-52 left-1/2 h-[520px] w-[980px] -translate-x-1/2 bg-[radial-gradient(closest-side,rgba(194,164,106,0.06),transparent_72%)]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-14">
        <div className="grid gap-10 sm:grid-cols-[1.2fr_1fr_auto] sm:items-start">
          <div>
            <div className="text-sm font-semibold tracking-tight text-white/90">Lucas Brum</div>
            <div className="mt-2 max-w-md text-sm leading-relaxed text-white/60">
              Aulas de violão com direção, estratégia e acompanhamento. Modelo Híbrido ou Individual.
            </div>
          </div>

          <nav className="flex flex-col gap-3 text-sm sm:items-center sm:justify-self-center">
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
          </nav>

          <div className="sm:justify-self-end">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-white/[0.04] text-white/85 ring-1 ring-[#c2a46a]/16 transition-all hover:bg-white/[0.07] hover:ring-[#c2a46a]/28 focus:outline-none focus:ring-2 focus:ring-brand-accent"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-[#c2a46a]/12 pt-6 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Lucas Brum</div>
          <div className="text-white/50">
            Desenvolvido pela{" "}
            <a
              href="https://heybrothers.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className="text-white/70 underline decoration-[#c2a46a]/28 underline-offset-4 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-accent"
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
