import { motion } from "framer-motion";
import { CheckCircle2, Compass, MessageSquareText, Sparkles, Timer, UserRound } from "lucide-react";
import Reveal from "@/components/landing/Reveal";

const items = [
  {
    title: "Plano claro",
    desc: "Você sabe exatamente o que estudar e em qual ordem, sem perder tempo.",
    icon: Compass,
  },
  {
    title: "Consistência",
    desc: "Formato semanal (gravado ou ao vivo) para manter ritmo e evolução contínua.",
    icon: Timer,
  },
  {
    title: "Feedback que destrava",
    desc: "Correção do que realmente trava: postura, técnica, timbre, ritmo e musicalidade.",
    icon: MessageSquareText,
  },
  {
    title: "Personalização",
    desc: "No Individual, o ensino é 100% ajustado ao seu nível e objetivo.",
    icon: UserRound,
  },
  {
    title: "Evolução real",
    desc: "Metas e acompanhamento para sentir progresso de verdade, semana após semana.",
    icon: CheckCircle2,
  },
] as const;

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="relative scroll-mt-[120px]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Benefícios
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-white/65 sm:text-base">
            Dois modelos diferentes, com o mesmo objetivo: direção e resultado.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((b, idx) => (
            <Reveal key={b.title} delay={0.05 + idx * 0.04}>
              <motion.div
                whileHover={{ y: -3 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="group relative h-full overflow-hidden rounded-3xl border border-brand-border bg-white/4 p-6 backdrop-blur-md"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-accent/10 blur-3xl" />
                  <div className="absolute -left-20 -bottom-20 h-56 w-56 rounded-full bg-brand-glow/10 blur-3xl" />
                </div>
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-brand-border bg-white/6">
                      <b.icon className="h-5 w-5 text-brand-accent" />
                    </div>
                    <div className="text-sm font-semibold text-white">{b.title}</div>
                  </div>
                  <div className="mt-3 text-sm text-white/65">{b.desc}</div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-brand-border bg-white/4 px-4 py-2 text-xs text-white/65 backdrop-blur-md">
            <Sparkles className="h-4 w-4 text-brand-accent" />
            Escolha o modelo e comece com clareza.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
