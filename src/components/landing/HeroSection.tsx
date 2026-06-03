import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Reveal from "@/components/landing/Reveal";
import FlagBR from "@/components/icons/FlagBR";
import FlagUS from "@/components/icons/FlagUS";

export default function HeroSection() {
  return (
    <section
      id="topo"
      className="relative -mt-[50px] bg-[linear-gradient(to_bottom,#080807_0%,#100e0d_100%)]"
    >
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_50%_40%,rgba(255,179,71,0.22),transparent_58%),radial-gradient(980px_circle_at_20%_18%,rgba(194,164,106,0.14),transparent_62%),radial-gradient(920px_circle_at_85%_28%,rgba(255,179,71,0.12),transparent_64%)]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_92%)]" />
        <div className="absolute left-[10%] top-[18%] h-56 w-56 rounded-full bg-brand-accent/16 blur-3xl animate-float-slow" />
        <div className="absolute right-[8%] top-[22%] h-72 w-72 rounded-full bg-brand-glow/16 blur-3xl animate-float-slow" />
        <div className="absolute left-1/2 top-[10%] h-72 w-72 -translate-x-1/2 rounded-full bg-brand-accent/10 blur-3xl animate-float-slow" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-center px-4 pb-12 pt-[120px] sm:pb-14 sm:pt-[140px]">
        <div className="pointer-events-none absolute inset-x-0 top-[clamp(132px,20vw,202px)] z-[3] flex justify-center overflow-hidden md:top-[clamp(104px,14vw,152px)]">
          <motion.img
            initial={{ opacity: 0, y: -28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
            src="/imagens/foto-perfil-lucas-brum.png?v=4"
            alt=""
            className="w-[clamp(320px,62vw,520px)] max-w-[92vw] opacity-60 grayscale brightness-[1.08] [mask-image:linear-gradient(to_bottom,black_0%,black_76%,transparent_100%)]"
            loading="eager"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
          <motion.img
            src="/imagens/simbolo-musica-01.png"
            alt=""
            className="absolute left-3 top-[clamp(180px,28vw,320px)] h-10 w-10 opacity-35 [filter:brightness(0)_invert(1)] sm:left-8 sm:h-12 sm:w-12"
            animate={{ y: [0, -14, 0], rotate: [0, -6, 0] }}
            transition={{ duration: 7.4, repeat: Infinity, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.img
            src="/imagens/simbolo-musica-02.png"
            alt=""
            className="absolute right-4 top-[clamp(210px,32vw,360px)] h-8 w-8 opacity-30 [filter:brightness(0)_invert(1)] sm:right-10 sm:h-10 sm:w-10"
            animate={{ y: [0, 12, 0], rotate: [0, 7, 0] }}
            transition={{ duration: 6.6, repeat: Infinity, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          />
          <motion.img
            src="/imagens/simbolo-musica-01.png"
            alt=""
            className="absolute left-8 top-[clamp(430px,62vw,560px)] h-7 w-7 opacity-25 [filter:brightness(0)_invert(1)] sm:left-24 sm:h-9 sm:w-9"
            animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 8.2, repeat: Infinity, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
          />
          <motion.img
            src="/imagens/simbolo-musica-02.png"
            alt=""
            className="absolute right-10 top-[clamp(460px,66vw,600px)] hidden h-9 w-9 opacity-30 [filter:brightness(0)_invert(1)] sm:block"
            animate={{ y: [0, 16, 0], rotate: [0, -8, 0] }}
            transition={{ duration: 7.8, repeat: Infinity, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          />
          <motion.img
            src="/imagens/simbolo-musica-01.png"
            alt=""
            className="absolute left-1/2 top-[clamp(170px,24vw,260px)] hidden h-8 w-8 -translate-x-[170px] opacity-22 [filter:brightness(0)_invert(1)] md:block"
            animate={{ y: [0, -12, 0], rotate: [0, 8, 0] }}
            transition={{ duration: 9.2, repeat: Infinity, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
          />
          <motion.img
            src="/imagens/simbolo-musica-02.png"
            alt=""
            className="absolute left-1/2 top-[clamp(520px,76vw,700px)] hidden h-10 w-10 translate-x-[150px] opacity-24 [filter:brightness(0)_invert(1)] md:block"
            animate={{ y: [0, 10, 0], rotate: [0, -6, 0] }}
            transition={{ duration: 8.6, repeat: Infinity, ease: [0.22, 1, 0.36, 1], delay: 0.18 }}
          />
        </div>

        <div className="pointer-events-none absolute left-1/2 top-[clamp(206px,30vw,292px)] bottom-0 z-[4] w-screen -translate-x-1/2 bg-[linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,0.58)_36%,rgba(0,0,0,0.90)_68%,rgba(0,0,0,0.96)_100%)]" />

        <div className="relative z-10 isolate">
          <Reveal className="relative z-20">
            <div className="flex flex-col items-center text-center">
              <h1 className="mt-[clamp(240px,40vw,320px)] text-balance text-4xl font-semibold leading-[1.02] tracking-tight text-white drop-shadow-[0_10px_28px_rgba(0,0,0,0.85)] sm:text-6xl">
                De Brasileiro para Brasileiro nos EUA.
              </h1>

              <p className="mt-5 max-w-2xl text-pretty text-base leading-relaxed text-white/80 drop-shadow-[0_10px_24px_rgba(0,0,0,0.85)] sm:text-lg">
                Aulas de violão online e ao vivo para brasileiros nos EUA, com horários flexíveis, ensino em português e
                aula experimental gratuita para você começar a tocar com confiança.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="relative z-20">
            <div className="mt-8 flex flex-col items-center justify-center text-center">
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:items-center">
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

              <div className="mt-6 inline-flex items-center justify-center gap-2">
                <FlagBR className="h-5 w-auto rounded-md ring-1 ring-brand-border/80" />
                <FlagUS className="h-5 w-auto rounded-md ring-1 ring-brand-border/80" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
