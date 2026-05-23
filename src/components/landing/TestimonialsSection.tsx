import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import Reveal from "@/components/landing/Reveal";

const testimonials = [
  {
    quote:
      "Finalmente entendi o que estudar. O plano ficou claro e a evolução apareceu rápido.",
    source: "Aluno",
  },
  {
    quote:
      "O feedback ao vivo corrigiu detalhes que eu repetia há anos. Mudou meu som.",
    source: "Aluno",
  },
  {
    quote:
      "No híbrido consegui manter constância na rotina e ainda ter avaliação mensal.",
    source: "Aluno",
  },
] as const;

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="relative">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_20%_20%,rgba(255,179,71,0.08),transparent_60%),radial-gradient(900px_circle_at_90%_60%,rgba(194,164,106,0.10),transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,5,5,0.2),rgba(5,5,5,0.8))]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-brand-text sm:text-3xl">Depoimentos</h2>
              <p className="mt-3 max-w-2xl text-sm text-white/65 sm:text-base">
                Resultados vêm de clareza, consistência e feedback. O foco é evolução real.
              </p>
            </div>
            <div className="rounded-3xl border border-brand-border bg-white/4 p-6 text-sm text-white/70 backdrop-blur-md">
              Aulas diretas, sem enrolação: você sai de cada etapa sabendo exatamente o próximo passo.
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {testimonials.map((it, idx) => (
            <Reveal key={it.quote} delay={0.06 + idx * 0.06}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="relative h-full overflow-hidden rounded-3xl border border-brand-border bg-white/4 p-6 backdrop-blur-md"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 hover:opacity-100">
                  <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-accent/10 blur-3xl" />
                </div>
                <div className="relative">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-brand-border bg-white/6">
                    <Quote className="h-5 w-5 text-brand-accent" />
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-white/85">{it.quote}</p>
                  <div className="mt-6 flex items-center justify-between gap-4">
                    <div className="text-xs font-medium tracking-wide text-white/55">{it.source}</div>
                    <div className="h-2 w-24 overflow-hidden rounded-full bg-white/8">
                      <div className="h-full w-2/3 rounded-full bg-brand-glow/80" />
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
