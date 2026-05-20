import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import Reveal from "@/components/landing/Reveal";
import { Link } from "react-router-dom";
import { useI18n } from "@/i18n/useI18n";

export default function FinalCtaSection() {
  const { dict } = useI18n();

  return (
    <section id="cta" className="relative">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:pb-28 sm:pt-14">
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] border border-white/16 bg-white/5 px-6 py-10 backdrop-blur-sm sm:px-10">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-brand-glow/12 blur-3xl" />
              <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-brand-accent/10 blur-3xl" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />
            </div>

            <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-white/6 px-3 py-1 text-xs text-brand-muted">
                  <ShieldCheck className="h-4 w-4 text-brand-accent" />
                  {dict.finalCta.badge}
                </div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                  {dict.finalCta.title}
                </h2>
                <p className="mt-3 max-w-2xl text-sm text-brand-muted sm:text-base">
                  {dict.finalCta.subtitle}
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                  <Link
                    to="/obrigado"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-glow px-6 py-4 text-sm font-semibold text-white transition focus:outline-none focus:ring-2 focus:ring-brand-accent"
                  >
                  {dict.finalCta.primary}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </Link>
                </motion.div>

                <a
                  href="#modelos"
                  className="inline-flex items-center justify-center rounded-2xl border border-brand-border bg-white/5 px-6 py-4 text-sm font-medium text-white/90 transition hover:bg-white/8 focus:outline-none focus:ring-2 focus:ring-brand-accent"
                >
                  {dict.finalCta.secondary}
                </a>

                <div className="text-center text-xs text-brand-muted">
                  {dict.finalCta.micro}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
