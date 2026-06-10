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
    desc: "Formato semanal para manter ritmo e evolução contínua.",
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
    <div className="group relative h-full overflow-hidden rounded-3xl border border-black/10 bg-black/[0.03] p-7 sm:p-8">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-brand-accent/12 blur-3xl" />
        <div className="absolute -left-20 -bottom-20 h-56 w-56 rounded-full bg-brand-glow/14 blur-3xl" />
      </div>
      <div className="relative text-center min-[1000px]:text-left">
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row min-[1000px]:justify-start">
          <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-black/10 bg-black/[0.03]">
            <Icon className="h-5 w-5 text-brand-accent" />
          </div>
          <div className="text-sm font-semibold text-black/90">{item.title}</div>
        </div>
        <div className="mt-3 text-sm text-black/60">{item.desc}</div>
      </div>
    </div>
  );
}

export default function BenefitsSection() {
  const [visibleCount, setVisibleCount] = useState(1);
  const [slideIndex, setSlideIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [instant, setInstant] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const intervalRef = useRef<number | null>(null);

  const stepPercent = 100 / visibleCount;

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1000px)");

    const apply = () => {
      const nextVisibleCount = mql.matches ? 3 : 1;
      setVisibleCount(nextVisibleCount);
      setInstant(true);
      setSlideIndex(nextVisibleCount);
    };

    apply();
    mql.addEventListener("change", apply);
    return () => mql.removeEventListener("change", apply);
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.25 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const slides = useMemo(() => {
    const head = items.slice(Math.max(0, items.length - visibleCount));
    const tail = items.slice(0, visibleCount);
    return [...head, ...items, ...tail];
  }, [visibleCount]);

  const stopAutoplay = () => {
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const startAutoplay = () => {
    if (!isInView) return;
    stopAutoplay();
    intervalRef.current = window.setInterval(() => {
      setSlideIndex((current) => current + 1);
    }, 4200);
  };

  useEffect(() => {
    if (!isInView) {
      stopAutoplay();
      return;
    }

    startAutoplay();
    return () => stopAutoplay();
  }, [isInView]);

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
    <section ref={sectionRef} id="beneficios" data-theme="light" className="relative scroll-mt-[120px] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <Reveal>
          <div className="text-center min-[1000px]:text-left">
            <h2 className="text-2xl font-semibold tracking-tight text-black/90 sm:text-3xl">
              Benefícios
            </h2>
            <p className="mt-2 max-w-none text-sm text-black/60 sm:text-base min-[1000px]:max-w-2xl">
              Mais do que aprender, evoluir com propósito, técnica e resultados.
            </p>
          </div>
        </Reveal>

        <div
          className="relative mt-10"
          onMouseEnter={stopAutoplay}
          onMouseLeave={startAutoplay}
        >
          <div className="overflow-hidden px-12 sm:px-14 min-[1000px]:px-0">
            <motion.div
              animate={{ x: `-${slideIndex * stepPercent}%` }}
              transition={instant ? { duration: 0 } : { duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              onAnimationStart={() => setIsAnimating(true)}
              onAnimationComplete={() => {
                if (slideIndex < visibleCount) {
                  setInstant(true);
                  setSlideIndex((current) => current + items.length);
                  setIsAnimating(false);
                  return;
                }

                if (slideIndex >= items.length + visibleCount) {
                  setInstant(true);
                  setSlideIndex((current) => current - items.length);
                  setIsAnimating(false);
                  return;
                }

                setIsAnimating(false);
              }}
              className="flex"
            >
              {slides.map((item, idx) => (
                <div key={`${item.title}-${idx}`} className="shrink-0 basis-full px-1 min-[1000px]:basis-1/3">
                  <BenefitCard item={item} />
                </div>
              ))}
            </motion.div>
          </div>

          <button
            type="button"
            aria-label="Voltar"
            onClick={goPrev}
            className="absolute left-2 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/80 text-black/70 backdrop-blur-md transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-glow/40 min-[1000px]:-left-10"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            type="button"
            aria-label="Avançar"
            onClick={goNext}
            className="absolute right-2 top-1/2 z-10 inline-flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-white/80 text-black/70 backdrop-blur-md transition hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-glow/40 min-[1000px]:-right-10"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
