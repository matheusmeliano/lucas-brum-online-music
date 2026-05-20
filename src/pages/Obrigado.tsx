import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useI18n } from "@/i18n/useI18n";

const whatsappHref = "https://wa.me/?text=Ol%C3%A1%2C%20quero%20come%C3%A7ar%20agora";

export default function Obrigado() {
  const { dict } = useI18n();

  return (
    <div className="relative min-h-screen bg-brand-deep px-4 py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[460px] w-[460px] -translate-x-1/2 rounded-full bg-brand-glow/12 blur-3xl" />
        <div className="absolute bottom-[-160px] right-[-140px] h-[460px] w-[460px] rounded-full bg-brand-accent/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-brand-border bg-white/5 p-8 backdrop-blur-sm"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-white/8 px-3 py-1 text-xs text-brand-muted">
            <span className="inline-block h-2 w-2 rounded-full bg-brand-accent" />
            {dict.thanks.badge}
          </div>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight">{dict.thanks.title}</h1>
          <p className="mt-3 text-brand-muted">{dict.thanks.body}</p>

          <div className="mt-6 rounded-2xl border border-brand-border bg-white/5 p-4">
            <p className="text-sm text-brand-muted">
              {dict.thanks.nextTitle}: {dict.thanks.nextBody}
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-glow px-5 py-3 text-sm font-medium text-white transition focus:outline-none focus:ring-2 focus:ring-brand-accent"
            >
              <MessageCircle className="h-4 w-4" />
              {dict.thanks.whatsapp}
              <span className="opacity-80 transition group-hover:opacity-100">→</span>
            </a>

            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-border bg-white/5 px-5 py-3 text-sm font-medium text-white/90 transition hover:bg-white/8 focus:outline-none focus:ring-2 focus:ring-brand-accent"
            >
              <ArrowLeft className="h-4 w-4" />
              {dict.thanks.back}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
