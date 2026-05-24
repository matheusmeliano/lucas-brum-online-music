import { motion } from "framer-motion";
import Reveal from "@/components/landing/Reveal";
import { cn } from "@/lib/utils";

type ModelCardProps = {
  title: string;
  subtitle: string;
  bullets: string[];
  featured?: boolean;
};

function ModelCard({ title, subtitle, bullets, featured }: ModelCardProps) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative overflow-hidden rounded-[28px] border border-brand-border bg-white/4 p-7 backdrop-blur-md",
        featured ? "bg-[linear-gradient(135deg,rgba(194,164,106,0.16),rgba(255,255,255,0.03))]" : ""
      )}
    >
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-brand-accent/12 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-brand-glow/12 blur-3xl" />
      </div>

      <div className="relative">
        <div className="text-[11px] font-semibold tracking-[0.18em] text-white/55">
          {featured ? "RECOMENDADO" : "OPÇÃO"}
        </div>
        <h3 className="mt-3 text-2xl font-semibold tracking-tight text-brand-text">{title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-white/70">{subtitle}</p>

        <div className="mt-6 space-y-3">
          {bullets.map((b) => (
            <div key={b} className="flex items-start gap-3">
              <div className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full bg-brand-accent/90" />
              <div className="text-sm text-white/75">{b}</div>
            </div>
          ))}
        </div>

      </div>
    </motion.div>
  );
}

export default function ModelsSection() {
  return (
    <section id="modelos" className="relative">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight text-brand-text sm:text-3xl">Modelos de aula</h2>
          <p className="mt-2 max-w-2xl text-sm text-white/65 sm:text-base">
            Escolha entre flexibilidade com conteúdo gravado ou acompanhamento completo e personalizado ao vivo.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Reveal delay={0.06}>
            <ModelCard
              title="Modelo Individual"
              subtitle="Acompanhamento contínuo e ensino totalmente personalizado."
              bullets={[
                "1 aula online ao vivo por semana",
                "Ensino totalmente personalizado",
                "Acompanhamento contínuo",
              ]}
              featured
            />
          </Reveal>

          <Reveal delay={0.1}>
            <ModelCard
              title="Modelo Híbrido"
              subtitle="Formato escalável, ideal para quem quer flexibilidade com feedback ao vivo."
              bullets={[
                "Aula introdutória",
                "4 aulas gravadas (1 por semana)",
                "1 aula online ao vivo mensal (avaliação/feedback)",
                "Formato escalável (ideal para quem quer flexibilidade)",
              ]}
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
