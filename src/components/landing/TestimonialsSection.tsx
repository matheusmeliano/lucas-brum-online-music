import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Reveal from "@/components/landing/Reveal";
import { useI18n } from "@/i18n/useI18n";

export default function TestimonialsSection() {
  const { dict } = useI18n();

  return (
    <section id="depoimentos" className="relative">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <Reveal>
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">{dict.testimonials.title}</h2>
              <p className="mt-2 max-w-2xl text-sm text-brand-muted sm:text-base">
                {dict.testimonials.subtitle}
              </p>
            </div>
            <div className="hidden rounded-full border border-brand-border bg-white/5 px-4 py-2 text-xs text-brand-muted sm:block">
              {dict.testimonials.hint}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {dict.testimonials.items.map((it, idx) => (
            <Reveal key={it.quote} delay={0.06 + idx * 0.06}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-full overflow-hidden rounded-3xl border border-brand-border bg-white/4 p-6 backdrop-blur-sm"
              >
                <div className="relative">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-brand-border bg-white/8">
                    <Quote className="h-5 w-5 text-brand-accent" />
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-white/90">{it.quote}</p>
                  <div className="mt-6 flex items-center justify-between gap-4">
                    <div>
                      <div className="text-sm font-semibold text-white">{it.name}</div>
                      <div className="text-xs text-brand-muted">{it.role}</div>
                    </div>
                    <div className="h-2 w-24 overflow-hidden rounded-full bg-white/8">
                      <div className="h-full w-2/3 rounded-full bg-brand-glow/70" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
