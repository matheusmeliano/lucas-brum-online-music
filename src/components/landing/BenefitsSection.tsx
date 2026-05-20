import { motion } from "framer-motion";
import { BadgeCheck, Clock, Sparkles, TrendingUp } from "lucide-react";
import Reveal from "@/components/landing/Reveal";
import { useI18n } from "@/i18n/useI18n";

const icons = [TrendingUp, Clock, BadgeCheck, Sparkles] as const;

export default function BenefitsSection() {
  const { dict } = useI18n();

  return (
    <section id="beneficios" className="relative">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {dict.benefits.title}
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-brand-muted sm:text-base">
            {dict.benefits.subtitle}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {dict.benefits.items.map((b, idx) => (
            <Reveal key={b.title} delay={0.05 + idx * 0.04}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="group relative h-full overflow-hidden rounded-3xl border border-brand-border bg-white/4 p-6 backdrop-blur-sm"
              >
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-brand-border bg-white/8">
                      {(() => {
                        const Icon = icons[idx] ?? TrendingUp;
                        return <Icon className="h-5 w-5 text-brand-accent" />;
                      })()}
                    </div>
                    <div className="text-sm font-semibold text-white">{b.title}</div>
                  </div>
                  <div className="mt-3 text-sm text-brand-muted">{b.desc}</div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
