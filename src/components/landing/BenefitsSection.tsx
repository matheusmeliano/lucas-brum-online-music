import { motion } from "framer-motion";
import { Feather, GraduationCap, Mic2, Music, PenTool, Sparkles } from "lucide-react";
import Reveal from "@/components/landing/Reveal";

const items = [
  {
    title: "Music engraving",
    desc: "Partituras limpas, legíveis e prontas para estúdio, palco e publicação.",
    icon: PenTool,
  },
  {
    title: "Composição",
    desc: "Peças autorais e encomendas com assinatura harmônica e narrativa cinematográfica.",
    icon: Music,
  },
  {
    title: "Aulas",
    desc: "Mentoria artística e técnica com direção estética e desenvolvimento musical real.",
    icon: GraduationCap,
  },
  {
    title: "Arranjos",
    desc: "Texturas e voicings contemporâneos para trio, quinteto ou big band.",
    icon: Feather,
  },
  {
    title: "Performances",
    desc: "Shows, residências e eventos com atmosfera noturna e musicalidade viva.",
    icon: Mic2,
  },
] as const;

export default function BenefitsSection() {
  return (
    <section id="servicos" className="relative">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Serviços
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-white/65 sm:text-base">
            Soluções musicais com acabamento premium, pensadas para soar e parecerem grandes.
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
            Cada entrega é tratada como obra: detalhe, silêncio, contraste e intenção.
          </div>
        </Reveal>
      </div>
    </section>
  );
}
