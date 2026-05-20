import { animate, motion, useMotionValue } from "framer-motion";
import { MessageSquare, TrendingUp, Video, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import BackgroundGlow from "@/components/landing/BackgroundGlow";
import BenefitsSection from "@/components/landing/BenefitsSection";
import FinalCtaSection from "@/components/landing/FinalCtaSection";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ModelsSection from "@/components/landing/ModelsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import { useI18n } from "@/i18n/useI18n";

function KeyPointsCarouselSection() {
  const { dict } = useI18n();
  const baseItems = dict.carousel.items;
  const [index, setIndex] = useState(() => baseItems.length);
  const [slidesPerView, setSlidesPerView] = useState(1);
  const [viewportWidth, setViewportWidth] = useState(0);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const x = useMotionValue(0);
  const animationRef = useRef<ReturnType<typeof animate> | null>(null);
  const indexRef = useRef(index);

  const items = useMemo(() => {
    return [...baseItems, ...baseItems, ...baseItems];
  }, [baseItems]);

  const icons = [TrendingUp, MessageSquare, Video];
  const gap = 16;
  const baseSlideWidth =
    slidesPerView === 1 ? Math.max(0, viewportWidth - 96) : Math.max(0, (viewportWidth - gap * (slidesPerView - 1)) / slidesPerView);
  const slideWidth = slidesPerView === 1 ? Math.min(baseSlideWidth, 520) : baseSlideWidth;
  const step = slideWidth + gap;
  const maxIndex = Math.max(0, items.length - slidesPerView);
  const middleStart = baseItems.length;
  const middleEnd = baseItems.length * 2;
  const sidePad = slidesPerView === 1 ? Math.max(0, (viewportWidth - slideWidth) / 2) : 0;


  const snapToIndex = (nextIndex: number) => {
    const clamped = Math.max(0, Math.min(nextIndex, maxIndex));
    setIndex(clamped);
    x.set(-clamped * step);
  };

  const normalizeIfNeeded = (currentIndex: number) => {
    if (baseItems.length === 0) return;
    if (step <= 0) return;

    if (currentIndex >= middleEnd) {
      const normalized = currentIndex - baseItems.length;
      snapToIndex(normalized);
    } else if (currentIndex < middleStart) {
      const normalized = currentIndex + baseItems.length;
      snapToIndex(normalized);
    }
  };

  const animateToIndex = (nextIndex: number) => {
    if (step <= 0) return;

    const clamped = Math.max(0, Math.min(nextIndex, maxIndex));
    setIndex(clamped);
    animationRef.current?.stop();

    const controls = animate(x, -clamped * step, {
      type: "spring",
      stiffness: 260,
      damping: 30,
      mass: 0.9,
    });

    animationRef.current = controls;
    controls.then(() => {
      if (animationRef.current !== controls) return;
      normalizeIfNeeded(clamped);
    });
  };

  useEffect(() => {
    indexRef.current = index;
  }, [index]);

  const goPrev = () => {
    animateToIndex(indexRef.current - 1);
  };

  const goNext = () => {
    animateToIndex(indexRef.current + 1);
  };

  useEffect(() => {
    if (!viewportRef.current) return;
    const ro = new ResizeObserver((entries) => {
      const next = entries[0]?.contentRect?.width ?? 0;
      setViewportWidth(next);
    });
    ro.observe(viewportRef.current);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    if (viewportWidth <= 0) return;
    setSlidesPerView(viewportWidth >= 1024 ? 3 : 1);
  }, [viewportWidth]);

  useEffect(() => {
    if (baseItems.length === 0) return;
    setIndex(baseItems.length);
    if (step > 0) x.set(-baseItems.length * step);
  }, [baseItems.length]);

  if (baseItems.length === 0) return null;

  useEffect(() => {
    if (step <= 0) return;
    animationRef.current?.stop();
    x.set(-indexRef.current * step);
  }, [step, x]);

  return (
    <section className="relative">
      <div className="mx-auto max-w-6xl px-4 pb-12">
        <div ref={containerRef} className="relative">
          <button
            type="button"
            onClick={goPrev}
            aria-label="Voltar"
            className="absolute left-0 top-1/2 z-10 inline-flex h-11 w-11 -translate-x-2 -translate-y-1/2 items-center justify-center rounded-full bg-[#009b3a] text-white transition hover:bg-[#008a34] focus:outline-none focus:ring-2 focus:ring-[#009b3a] sm:-translate-x-4"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div ref={viewportRef} className="w-full overflow-hidden">
            <motion.div
              drag="x"
              dragConstraints={{ left: -maxIndex * step, right: 0 }}
              dragElastic={0.08}
              onDragEnd={() => {
                if (step <= 0) return;
                const next = Math.round(-x.get() / step);
                animateToIndex(next);
              }}
              style={{ x, paddingLeft: sidePad, paddingRight: sidePad }}
              className="flex gap-4"
            >
              {items.map((item, i) => {
                const baseIndex = baseItems.length ? i % baseItems.length : 0;
                const Icon = icons[baseIndex % icons.length] ?? TrendingUp;

                return (
                  <div
                    key={`${i}-${item.title}`}
                    style={{ width: slideWidth }}
                    className="shrink-0"
                  >
                    <div className="rounded-2xl bg-[linear-gradient(120deg,rgba(0,155,58,0.45),rgba(124,58,237,0.18),rgba(0,155,58,0.35))] p-[1px]">
                      <div className="flex min-h-[92px] items-center gap-4 rounded-2xl border border-white/5 bg-brand-deep/60 px-5 py-5 backdrop-blur-sm">
                        <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#009b3a]/12">
                          <Icon className="h-6 w-6 text-[#009b3a]" />
                        </div>
                        <div className="text-[15px] font-semibold leading-snug text-white sm:text-base">
                          {item.title}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </motion.div>
          </div>

          <button
            type="button"
            onClick={goNext}
            aria-label="Avançar"
            className="absolute right-0 top-1/2 z-10 inline-flex h-11 w-11 translate-x-2 -translate-y-1/2 items-center justify-center rounded-full bg-[#009b3a] text-white transition hover:bg-[#008a34] focus:outline-none focus:ring-2 focus:ring-[#009b3a] sm:translate-x-4"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundGlow />
      <Header />
      <main className="pt-[88px] sm:pt-[96px]">
        <HeroSection />
        <KeyPointsCarouselSection />
        <ModelsSection />
        <BenefitsSection />
        <TestimonialsSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
