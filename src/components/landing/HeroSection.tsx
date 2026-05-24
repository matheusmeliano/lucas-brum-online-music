import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/landing/Reveal";

export default function HeroSection() {
  return (
    <section id="topo" className="relative -mt-[50px]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_50%_40%,rgba(255,179,71,0.14),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(5,5,5,0.95),rgba(5,5,5,0.55),rgba(5,5,5,0.95))]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(5,5,5,0.60),rgba(5,5,5,0.12),rgba(0,0,0,1))]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_92%)]" />
        <div className="absolute left-[12%] top-[20%] h-44 w-44 rounded-full bg-brand-accent/10 blur-3xl animate-float-slow" />
        <div className="absolute right-[10%] top-[28%] h-56 w-56 rounded-full bg-brand-glow/12 blur-3xl animate-float-slow" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-4 pb-0 pt-[120px] sm:pt-[140px]">
        <div className="pointer-events-none absolute inset-x-0 top-[88px] z-0 flex justify-center overflow-hidden sm:top-[112px]">
          <motion.img
            initial={{ opacity: 0, y: -28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            src="/imagens/foto-perfil-lucas-brum.png?v=4"
            alt=""
            className="w-[520px] max-w-[92vw] opacity-40 grayscale [mask-image:linear-gradient(to_bottom,transparent_0%,black_22%,black_82%,transparent_100%)]"
            loading="eager"
          />
        </div>

        <div className="pointer-events-none absolute left-1/2 top-[120px] bottom-0 z-[5] w-screen -translate-x-1/2 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.62)_34%,rgba(0,0,0,0.90)_68%,rgba(0,0,0,0.96)_100%)] sm:top-[140px]" />

        <div className="relative z-10 isolate">
          <Reveal className="relative z-20">
            <div className="flex flex-col items-center text-center">
              <h1 className="mt-[300px] text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-white drop-shadow-[0_10px_28px_rgba(0,0,0,0.85)] sm:mt-[320px] sm:text-6xl">
                De Brasileiro para Brasileiro nos EUA.
              </h1>

              <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/80 drop-shadow-[0_10px_24px_rgba(0,0,0,0.85)] sm:text-lg">
                Dois formatos para você ter clareza, estratégia e acompanhamento: o Híbrido (flexível e escalável) ou o
                Individual (totalmente personalizado, ao vivo, semanal).
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="relative z-20">
            <div className="mt-8 flex flex-col items-center justify-center gap-3 text-center sm:flex-row sm:items-center">
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
      </div>
    </section>
  );
}
