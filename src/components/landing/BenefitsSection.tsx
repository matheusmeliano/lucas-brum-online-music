import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronLeft, ChevronRight, Compass, MessageSquareText, Timer, UserRound } from "lucide-react";
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

type BenefitItem = (typeof items)[number];

function BenefitCard({ item }: { item: BenefitItem }) {
  const Icon = item.icon;

  return (
    <div className="group relative h-full overflow-hidden rounded-3xl border border-brand-border bg-white/4 p-6 backdrop-blur-md">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-accent/10 blur-3xl" />
        <div className="absolute -left-20 -bottom-20 h-56 w-56 rounded-full bg-brand-glow/10 blur-3xl" />
      </div>
      <div className="relative">
        <div className="flex items-center gap-3">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-brand-border bg-white/6">
            <Icon className="h-5 w-5 text-brand-accent" />
          </div>
          <div className="text-sm font-semibold text-white">{item.title}</div>
        </div>
        <div className="mt-3 text-sm text-white/65">{item.desc}</div>
      </div>
    </div>
  );
}

export default function BenefitsSection() {
  const [slideIndex, setSlideIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [instant, setInstant] = useState(false);
  const intervalRef = useRef<number | null>(null);

  const slides = useMemo(() => [items[items.length - 1], ...items, items[0]], []);

  const stopAutoplay = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const startAutoplay = () => {
    stopAutoplay();
    intervalRef.current = window.setInterval(() => {
      setSlideIndex((current) => current + 1);
    }, 4200);
  };

  useEffect(() => {
    startAutoplay();
    return () => stopAutoplay();
  }, []);

  useEffect(() => {
    if (!instant) return;
    const id = window.requestAnimationFrame(() => setInstant(false));
    return () => window.cancelAnimationFrame(id);
  }, [instant]);

  const goPrev = () => {
    if (isAnimating) return;
    startAutoplay();
    setSlideIndex((current) => current - 1);
  };

  const goNext = () => {
    if (isAnimating) return;
    startAutoplay();
    setSlideIndex((current) => current + 1);
  };

  return (
    <section id="beneficios" className="relative scroll-mt-[120px] bg-black">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Benefícios
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-white/65 sm:text-base">
            Dois modelos diferentes, com o mesmo objetivo: direção e resultado.
          </p>
        </Reveal>

        <div className="relative mt-10 sm:hidden">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${slideIndex * 100}%` }}
              transition={
                instant
                  ? { duration: 0 }
                  : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
              }
              onAnimationStart={() => setIsAnimating(true)}
              onAnimationComplete={() => {
                if (slideIndex === 0) {
                  setInstant(true);
                  setSlideIndex(items.length);
                  setIsAnimating(false);
                  return;
                }

                if (slideIndex === items.length + 1) {
                  setInstant(true);
                  setSlideIndex(1);
                  setIsAnimating(false);
                  return;
                }

                setIsAnimating(false);
              }}
              className="flex"
            >
              {slides.map((item, idx) => (
                <div key={`${item.title}-${idx}`} className="w-full shrink-0 px-1">
                  <BenefitCard item={item} />
                </div>
              ))}
            </motion.div>
          </div>

          <button
            type="button"
            aria-label="Voltar"
            onClick={goPrev}
            className="absolute left-2 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-brand-border bg-black/60 text-white/80 backdrop-blur-md transition hover:bg-black/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-glow/40"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="Avançar"
            onClick={goNext}
            className="absolute right-2 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-brand-border bg-black/60 text-white/80 backdrop-blur-md transition hover:bg-black/75 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-glow/40"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-10 hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {items.map((b, idx) => (
            <Reveal key={b.title} delay={0.05 + idx * 0.04}>
              <BenefitCard item={b} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
