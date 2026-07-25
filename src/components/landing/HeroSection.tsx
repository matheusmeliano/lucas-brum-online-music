import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageCircleMore, ShieldCheck } from "lucide-react";
import Reveal from "@/components/landing/Reveal";
import FlagBR from "@/components/icons/FlagBR";
import FlagUS from "@/components/icons/FlagUS";

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  const shouldAnimate = !reduceMotion;

  const highlights = [
    "Professor ao vivo com você, em português e no seu ritmo.",
    "Repertório escolhido conforme seu gosto, nível e objetivos.",
    "Horários compatíveis com a rotina de brasileiros nos EUA.",
  ];

  return (
    <section id="topo" className="relative -mt-[50px] overflow-hidden bg-[#050505]">
      <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_22%_18%,rgba(255,179,71,0.13),transparent_52%),radial-gradient(1000px_circle_at_78%_22%,rgba(255,179,71,0.11),transparent_48%),linear-gradient(to_bottom,#050505_0%,#0a0807_44%,#000000_100%)]" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-center px-4 pb-10 pt-[118px] sm:pb-14 sm:pt-[138px] lg:px-6 xl:px-8">
        <div className="pointer-events-none absolute inset-x-0 top-[126px] bottom-0">
          <div className="absolute inset-0 bg-[radial-gradient(720px_circle_at_28%_24%,rgba(255,179,71,0.15),transparent_38%),radial-gradient(760px_circle_at_74%_40%,rgba(255,179,71,0.20),transparent_40%)]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-[linear-gradient(to_top,rgba(0,0,0,0.94),rgba(0,0,0,0.72)_44%,transparent)]" />
          <div className="absolute inset-y-0 left-1/2 hidden w-px -translate-x-12 bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.10),transparent)] lg:block" />
        </div>

        <div className="relative grid flex-1 items-center gap-12 py-6 lg:grid-cols-[minmax(0,1.02fr)_minmax(380px,0.98fr)] lg:gap-10 lg:py-10">
            <Reveal immediate className="relative z-10 flex flex-col justify-center">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-brand-glow/30 bg-brand-glow/[0.08] px-3 py-1.5 text-[12px] font-medium text-brand-glow sm:px-4 sm:text-[13px]">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand-glow/15 text-brand-glow">
                  <ShieldCheck className="h-3.5 w-3.5" />
                </span>
                Para brasileiros que vivem nos Estados Unidos
              </div>

              <h1 className="mt-6 max-w-[11ch] text-balance font-serif text-[2.8rem] leading-[0.96] tracking-[-0.04em] text-white sm:text-[3.7rem] lg:text-[4.9rem] xl:text-[5.3rem]">
                Aprenda violão ao vivo, com as músicas que você ama.
              </h1>

              <p className="mt-5 max-w-xl text-pretty text-[15px] leading-7 text-white/72 sm:text-[17px] lg:max-w-[34rem]">
                Aulas online e personalizadas para brasileiros nos EUA, com acompanhamento em português,
                repertório sob medida e uma rotina pensada para o seu horário.
              </p>

              <div className="mt-7 space-y-3.5">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3 text-left">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-brand-glow/30 bg-brand-glow/10 text-brand-glow">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <span className="text-sm leading-6 text-white/82 sm:text-[15px]">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-col items-start gap-3">
                <motion.a
                  whileHover={{ y: -1 }}
                  whileTap={{ scale: 0.985 }}
                  href="https://www.autobot.business/atendimento?slug=lucas-brum-online-music-usa"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex min-h-14 items-center justify-center gap-3 rounded-[20px] bg-brand-glow px-6 py-4 text-[15px] font-semibold text-black/90 shadow-[0_14px_36px_rgba(255,179,71,0.24)] transition hover:bg-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-glow/40 sm:px-7"
                >
                  <MessageCircleMore className="h-5 w-5" />
                  Quero fazer minha aula gratuita
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </motion.a>

                <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-white/50 sm:text-[13px]">
                  <span>Pelo WhatsApp</span>
                  <span className="hidden h-1 w-1 rounded-full bg-white/25 sm:block" />
                  <span>Sem compromisso</span>
                  <span className="hidden h-1 w-1 rounded-full bg-white/25 sm:block" />
                  <span>Atendimento direto com a escola</span>
                </div>
              </div>
            </Reveal>

            <Reveal immediate className="relative z-10 flex min-h-[340px] items-center justify-center lg:min-h-[620px] lg:justify-end">
              <div className="relative w-full max-w-[620px] lg:max-w-[680px] xl:max-w-[760px]">
                <div className="absolute inset-x-[4%] top-[8%] h-[76%] rounded-full bg-brand-glow/34 blur-3xl" />
                <div className="absolute left-1/2 top-1/2 h-[92%] w-[92%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-glow/12" />
                <div className="absolute left-1/2 top-1/2 h-[78%] w-[78%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-brand-glow/10" />
                <div className="absolute inset-x-[2%] bottom-[6%] h-24 rounded-full bg-black/70 blur-2xl" />

                <motion.img
                  src="/imagens/simbolo-musica-02.png"
                  alt=""
                  className="pointer-events-none absolute left-[2%] top-[18%] h-9 w-9 opacity-60 [filter:brightness(0)_saturate(100%)_invert(70%)_sepia(62%)_saturate(701%)_hue-rotate(340deg)_brightness(101%)_contrast(102%)] sm:h-11 sm:w-11 lg:left-0"
                  animate={shouldAnimate ? { y: [0, -10, 0], rotate: [0, -6, 0] } : undefined}
                  transition={
                    shouldAnimate ? { duration: 6.2, repeat: Infinity, ease: [0.22, 1, 0.36, 1] } : undefined
                  }
                  loading="lazy"
                  decoding="async"
                />
                <motion.img
                  src="/imagens/simbolo-musica-01.png"
                  alt=""
                  className="pointer-events-none absolute right-[2%] top-[10%] h-10 w-10 opacity-55 [filter:brightness(0)_saturate(100%)_invert(70%)_sepia(62%)_saturate(701%)_hue-rotate(340deg)_brightness(101%)_contrast(102%)] sm:h-12 sm:w-12 lg:right-0"
                  animate={shouldAnimate ? { y: [0, 12, 0], rotate: [0, 7, 0] } : undefined}
                  transition={
                    shouldAnimate
                      ? { duration: 7.1, repeat: Infinity, ease: [0.22, 1, 0.36, 1], delay: 0.2 }
                      : undefined
                  }
                  loading="lazy"
                  decoding="async"
                />
                <motion.img
                  src="/imagens/simbolo-musica-02.png"
                  alt=""
                  className="pointer-events-none absolute right-[8%] top-[64%] h-8 w-8 opacity-45 [filter:brightness(0)_saturate(100%)_invert(70%)_sepia(62%)_saturate(701%)_hue-rotate(340deg)_brightness(101%)_contrast(102%)] sm:h-10 sm:w-10"
                  animate={shouldAnimate ? { y: [0, -8, 0], rotate: [0, 5, 0] } : undefined}
                  transition={
                    shouldAnimate
                      ? { duration: 6.8, repeat: Infinity, ease: [0.22, 1, 0.36, 1], delay: 0.35 }
                      : undefined
                  }
                  loading="lazy"
                  decoding="async"
                />

                <motion.img
                  initial={{ opacity: 0, x: 24, y: 10 }}
                  animate={{ opacity: 1, x: 0, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.16 }}
                  src="/imagens/foto-perfil-lucas-brum.png?v=4"
                  alt="Lucas Brum com violão"
                  className="relative z-10 ml-auto w-full max-w-[620px] object-contain brightness-[1.04] contrast-[1.02] saturate-0 sepia-[0.16] drop-shadow-[0_38px_65px_rgba(0,0,0,0.62)] lg:max-w-[680px] xl:max-w-[760px]"
                  loading="eager"
                />
              </div>
            </Reveal>
          </div>

        <div className="relative z-10">
          <div className="flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center gap-3 text-sm text-white/62">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-brand-glow/20 bg-brand-glow/10 text-brand-glow">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <span>+20 anos ensinando música para crianças, jovens e adultos</span>
            </div>

            <div className="flex items-center gap-2">
              <FlagBR className="h-6 w-auto rounded-md ring-1 ring-brand-border/80" />
              <FlagUS className="h-6 w-auto rounded-md ring-1 ring-brand-border/80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
