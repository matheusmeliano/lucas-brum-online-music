import { motion } from "framer-motion";
import Reveal from "@/components/landing/Reveal";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  title: string;
  desc: string;
  meta: string;
  featured?: boolean;
};

function ProjectCard({ title, desc, meta, featured }: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative overflow-hidden rounded-[28px] border border-brand-border bg-white/4 p-7 backdrop-blur-md",
        featured ? "bg-[linear-gradient(135deg,rgba(194,164,106,0.14),rgba(255,255,255,0.03))]" : ""
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-brand-accent/12 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-brand-glow/12 blur-3xl" />
      </div>

      <div className="relative">
        <div className="text-[11px] font-semibold tracking-[0.18em] text-white/55">{meta}</div>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-brand-text">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-white/70">{desc}</p>

        <div className="mt-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-white/4 px-4 py-2 text-xs text-white/75 transition group-hover:bg-white/6">
            Preview musical
            <span className="text-brand-accent">→</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ModelsSection() {
  return (
    <section id="projetos" className="relative">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight text-brand-text sm:text-3xl">Projetos em destaque</h2>
          <p className="mt-2 max-w-2xl text-sm text-white/65 sm:text-base">
            Formações, obras e universos sonoros tratados como cinema: composição, textura e espaço.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal delay={0.06}>
            <ProjectCard
              meta="FORMATO • QUINTETO"
              title="Quinteto"
              desc="Repertório autoral de jazz contemporâneo, com improviso controlado e narrativa musical em camadas."
              featured
            />
          </Reveal>

          <Reveal delay={0.1}>
            <ProjectCard
              meta="FORMATO • BIG BAND"
              title="Big Band"
              desc="Arranjos sofisticados, dinâmica dramática e energia de palco com estética europeia de clube."
            />
          </Reveal>

          <Reveal delay={0.14}>
            <ProjectCard
              meta="FORMATO • DUO"
              title="Duo"
              desc="Intimidade e silêncio como linguagem. Espaço para timbre, respiração e harmonia moderna."
            />
          </Reveal>

          <Reveal delay={0.18}>
            <ProjectCard
              meta="OBRA • AUTORAL"
              title="Projetos autorais"
              desc="Composições originais e produção musical com assinatura estética: minimalismo, tensão e brilho âmbar."
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
