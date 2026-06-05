import { motion } from "framer-motion";
import Reveal from "@/components/landing/Reveal";
import { cn } from "@/lib/utils";

type ModelCardProps = {
  title: string;
  subtitle: string;
  bullets: string[];
  featured?: boolean;
  disabled?: boolean;
};

function ModelCard({ title, subtitle, bullets, featured, disabled }: ModelCardProps) {
  return (
    <motion.div
      whileHover={disabled ? undefined : { y: -4, scale: 1.01 }}
      transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-brand-border bg-white/4 p-7 backdrop-blur-md",
        featured
          ? "border-[#c2a46a]/35 bg-[linear-gradient(135deg,rgba(194,164,106,0.24),rgba(255,255,255,0.03))] ring-1 ring-[#c2a46a]/22 shadow-[0_34px_90px_rgba(194,164,106,0.14)]"
          : "",
        disabled ? "cursor-not-allowed grayscale opacity-55" : ""
      )}
    >
      <div
        className={cn(
          "pointer-events-none absolute inset-0",
          featured ? "opacity-100" : "opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        )}
      >
        {featured ? (
          <>
            <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_12%_18%,rgba(255,179,71,0.28),transparent_60%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_92%_82%,rgba(194,164,106,0.30),transparent_60%)]" />
            <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-brand-glow/24 blur-3xl" />
            <div className="absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-brand-accent/20 blur-3xl" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.05),rgba(0,0,0,0.55))]" />
          </>
        ) : (
          <>
            <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-brand-accent/12 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-brand-glow/12 blur-3xl" />
          </>
        )}
      </div>

      {disabled ? <div className="pointer-events-none absolute inset-0 bg-black/40" /> : null}

      <div className="relative">
        {disabled ? (
          <div className="mb-3 inline-flex rounded-full border border-white/10 bg-black/40 px-3 py-1 text-[11px] font-semibold text-white/75">
            Em breve
          </div>
        ) : null}
        <h3 className="text-2xl font-semibold tracking-tight text-brand-text">{title}</h3>
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
    <section id="modelos" className="relative bg-[#000000] scroll-mt-[120px]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <Reveal>
          <div className="text-center min-[1000px]:text-left">
            <h2 className="text-2xl font-semibold tracking-tight text-brand-text sm:text-3xl">Modelos de aula</h2>
            <p className="mt-2 max-w-none text-sm text-white/65 sm:text-base min-[1000px]:max-w-2xl">
              Encontre o formato ideal para evoluir com consistência e alcançar seus resultados.
            </p>
          </div>
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
              subtitle="Formato escalável, ideal para quem quer flexibilidade."
              bullets={[
                "Aula introdutória",
                "4 aulas gravadas (1 por semana)",
                "1 aula online ao vivo mensal (avaliação/feedback)",
                "Formato escalável (ideal para quem quer flexibilidade)",
              ]}
              disabled
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
