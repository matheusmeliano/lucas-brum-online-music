import { Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#000000]">
      <div className="mx-auto max-w-6xl px-4 py-14">
        <div className="flex flex-col items-center gap-10 text-center sm:flex-row sm:items-start sm:justify-between sm:text-left">
          <div>
            <img
              src="/imagens/logo-online-music-usa.png"
              alt="Lucas Brum Online Music USA"
              className="mx-auto mb-3 h-10 w-auto object-contain sm:mx-0"
              loading="eager"
            />
            <div className="text-sm font-semibold text-white">Professor Lucas Brum</div>
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
            <a
              href="#estrutura"
              className="text-white/80 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-glow/40"
            >
              Feedback
            </a>
            <a
              href="#depoimentos"
              className="text-white/80 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-glow/40"
            >
              Vídeos
            </a>
            <a
              href="#faq"
              className="text-white/80 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-glow/40"
            >
              Dúvidas
            </a>
          </div>

          <div>
            <div className="text-xs font-medium text-white/65">Links</div>
            <div className="mt-3 flex items-center justify-center gap-2 sm:justify-start">
              <a
                href="https://www.instagram.com/lucasbrumonlinemusic/"
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

        <div className="mt-12 h-px w-full bg-white/10" />

        <div className="mt-6 flex flex-col items-center gap-4 text-center text-[13px] text-white/55 sm:flex-row sm:items-center sm:justify-between sm:text-left sm:text-sm">
          <div>© {new Date().getFullYear()} Lucas Brum Online Music USA</div>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-white/60 sm:justify-start">
            <Link
              to="/politica-privacidade"
              className="transition hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-accent"
            >
              Política de privacidade
            </Link>
            <span className="hidden text-white/20 sm:inline">•</span>
            <Link
              to="/termos-e-compromisso"
              className="transition hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-accent"
            >
              Termos e compromisso
            </Link>
          </div>

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
