import { Github, Instagram, Mail } from "lucide-react";
import { useI18n } from "@/i18n/useI18n";

export default function Footer() {
  const { dict } = useI18n();

  return (
    <footer className="border-t border-brand-border bg-brand-deep/60 backdrop-blur-sm">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="text-sm font-semibold text-white">{dict.footer.brand}</div>
            <div className="mt-2 max-w-md text-sm text-brand-muted">
              {dict.footer.desc}
            </div>
          </div>

          <div className="grid gap-3 text-sm">
            <a
              href="#modelos"
              className="text-white/85 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-accent"
            >
              {dict.nav.models}
            </a>
            <a
              href="#beneficios"
              className="text-white/85 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-accent"
            >
              {dict.nav.benefits}
            </a>
            <a
              href="#cta"
              className="text-white/85 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-brand-accent"
            >
              {dict.footer.start}
            </a>
          </div>

          <div>
            <div className="text-xs font-medium text-brand-muted">Contato</div>
            <div className="mt-3 flex items-center gap-2">
              <a
                href="mailto:contato@exemplo.com"
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-brand-border bg-white/5 text-white/85 transition hover:bg-white/8 focus:outline-none focus:ring-2 focus:ring-brand-accent"
                aria-label="E-mail"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-brand-border bg-white/5 text-white/85 transition hover:bg-white/8 focus:outline-none focus:ring-2 focus:ring-brand-accent"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-brand-border bg-white/5 text-white/85 transition hover:bg-white/8 focus:outline-none focus:ring-2 focus:ring-brand-accent"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-brand-border pt-6 text-xs text-brand-muted sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Educação Premium</div>
          <div className="text-white/60">Feito para parecer vivo, fluido e de alto valor.</div>
        </div>
      </div>
    </footer>
  );
}
