import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/landing/Reveal";

export default function HeroSection() {
  return (
    <section id="topo" className="relative">
      <div className="absolute inset-0">
        <div className="absolute inset-0">
          <img
            src="/imagens/foto-perfil-lucas-brum.png?v=4"
            alt=""
            className="h-full w-full object-cover opacity-35 grayscale"
            loading="eager"
          />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_50%_40%,rgba(255,179,71,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(5,5,5,0.95),rgba(5,5,5,0.55),rgba(5,5,5,0.95))]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,5,5,0.65),rgba(5,5,5,0.15),rgba(5,5,5,0.92))]" />
        <div className="absolute left-[12%] top-[20%] h-44 w-44 rounded-full bg-brand-accent/10 blur-3xl animate-float-slow" />
        <div className="absolute right-[10%] top-[28%] h-56 w-56 rounded-full bg-brand-glow/12 blur-3xl animate-float-slow" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-4 pb-14 pt-[120px] sm:pb-20 sm:pt-[140px]">
        <Reveal>
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-border bg-white/4 px-4 py-2 text-[11px] font-semibold tracking-wide text-white/80 backdrop-blur-md">
            Aulas de violão • Evolução real • Direção
          </div>

          <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-brand-text sm:text-6xl">
            Escolha seu modelo. Evolua de verdade.
          </h1>

          <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/70 sm:text-lg">
            Dois formatos para você ter clareza, estratégia e acompanhamento: o Híbrido (flexível e escalável) ou o Individual
            (totalmente personalizado, ao vivo, semanal).
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="#modelos"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-glow px-6 py-3 text-sm font-semibold text-black/90 transition hover:bg-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-glow/40"
            >
              Ver modelos
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
            </motion.a>

            <a
              href="#contato"
              className="inline-flex items-center justify-center rounded-full border border-brand-border bg-white/5 px-6 py-3 text-sm font-medium text-white/85 backdrop-blur-md transition hover:bg-white/8 focus:outline-none focus:ring-2 focus:ring-brand-glow/40"
            >
              Começar agora
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
