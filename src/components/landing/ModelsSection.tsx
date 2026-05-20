import { motion } from "framer-motion";
import { CalendarDays, GraduationCap, Zap } from "lucide-react";
import Reveal from "@/components/landing/Reveal";
import { cn } from "@/lib/utils";
import { useI18n } from "@/i18n/useI18n";

type ModelCardProps = {
  title: string;
  tagline: string;
  bullets: string[];
  featured?: boolean;
};

function ModelCard({ title, tagline, bullets, featured }: ModelCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.008 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "relative overflow-hidden rounded-3xl border bg-brand-deep/[0.035] p-6",
        featured ? "border-[#009b3a]/35 bg-[#009b3a]/[0.06]" : "border-brand-border"
      )}
    >
      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold tracking-tight text-brand-ink">{title}</h3>
            <p className="mt-2 text-sm text-brand-ink/70">{tagline}</p>
          </div>
        </div>

        <div className="mt-6 space-y-3">
          {bullets.map((b) => (
            <div key={b} className="flex items-start gap-3">
              <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-[#009b3a]" />
              <div className="text-sm text-brand-ink/80">{b}</div>
            </div>
          ))}
        </div>

        <div className="mt-7" />
      </div>
    </motion.div>
  );
}

export default function ModelsSection() {
  const { dict } = useI18n();

  return (
    <section id="modelos" className="relative bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-brand-ink sm:text-3xl">
                {dict.models.title}
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-brand-ink/70 sm:text-base">
                {dict.models.subtitle}
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal delay={0.06}>
            <ModelCard
              title={dict.models.individual.title}
              tagline={dict.models.individual.tagline}
              bullets={dict.models.individual.bullets}
              featured
            />
          </Reveal>

          <Reveal delay={0.1}>
            <ModelCard
              title={dict.models.hybrid.title}
              tagline={dict.models.hybrid.tagline}
              bullets={dict.models.hybrid.bullets}
            />
          </Reveal>
        </div>

        <Reveal delay={0.12}>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {[
              { icon: <CalendarDays className="h-4 w-4 text-brand-ink/60" />, t: dict.models.micro[0] },
              { icon: <GraduationCap className="h-4 w-4 text-brand-ink/60" />, t: dict.models.micro[1] },
              { icon: <Zap className="h-4 w-4 text-brand-ink/60" />, t: dict.models.micro[2] },
            ].map((item) => (
              <div
                key={item.t}
                className="flex items-center gap-3 rounded-3xl border border-brand-border bg-brand-deep/[0.035] px-4 py-3"
              >
                {item.icon}
                <div className="text-sm text-brand-ink/80">{item.t}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
