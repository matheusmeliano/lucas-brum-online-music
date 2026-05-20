import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/landing/Reveal";
import { useI18n } from "@/i18n/useI18n";

export default function HeroSection() {
  const { dict } = useI18n();

  return (
    <section id="topo" className="relative">
      <div className="mx-auto max-w-6xl px-4 pb-10 pt-14 sm:pb-14 sm:pt-20">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <Reveal>
              <div className="mb-4 inline-flex items-center rounded-full border border-[#009b3a] bg-[#009b3a]/10 px-4 py-2 text-sm font-semibold text-white">
                {dict.hero.badge}
              </div>
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                {dict.hero.headline}
              </h1>
              <p className="mt-4 max-w-xl text-base text-brand-muted sm:text-lg">
                {dict.hero.subheadline}
              </p>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  href="#modelos"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#009b3a] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#008a34] focus:outline-none focus:ring-2 focus:ring-brand-accent"
                >
                  {dict.hero.ctaPrimary}
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </motion.a>

                <a
                  href="#depoimentos"
                  className="inline-flex items-center justify-center rounded-full border border-brand-border bg-white/5 px-6 py-3 text-sm font-medium text-white/90 transition hover:bg-white/8 focus:outline-none focus:ring-2 focus:ring-brand-accent"
                >
                  {dict.hero.ctaSecondary}
                </a>
              </div>
            </Reveal>

            <div className="hidden lg:block">
              <Reveal delay={0.12}>
                <div className="mt-10 grid gap-3 sm:grid-cols-2">
                  {dict.hero.highlights.map((item) => (
                    <div
                      key={item.k}
                      className="rounded-3xl border border-brand-border bg-white/4 px-4 py-4 text-center backdrop-blur-sm"
                    >
                      <div className="text-sm font-medium text-white">{item.k}</div>
                      <div className="mt-1 text-xs text-brand-muted">{item.v}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-left text-xs text-white/55">
                  {dict.hero.paymentLocal}
                </div>
              </Reveal>
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="flex justify-center lg:justify-end">
              <img
                src="/imagens/foto-perfil-lucas-brum.png?v=4"
                alt="Lucas Brum"
                className="h-auto w-full max-w-xl object-contain"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>

        <div className="lg:hidden">
          <Reveal delay={0.12}>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {dict.hero.highlights.map((item) => (
                <div
                  key={item.k}
                  className="rounded-3xl border border-brand-border bg-white/4 px-4 py-4 text-center backdrop-blur-sm"
                >
                  <div className="text-sm font-medium text-white">{item.k}</div>
                  <div className="mt-1 text-xs text-brand-muted">{item.v}</div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-left text-xs text-white/55">
              {dict.hero.paymentLocal}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
