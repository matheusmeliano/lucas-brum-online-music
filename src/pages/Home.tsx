import { motion, useMotionValue, useSpring } from "framer-motion";
import { Play, Sparkles } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import BackgroundGlow from "@/components/landing/BackgroundGlow";
import BenefitsSection from "@/components/landing/BenefitsSection";
import FinalCtaSection from "@/components/landing/FinalCtaSection";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ModelsSection from "@/components/landing/ModelsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import Reveal from "@/components/landing/Reveal";

function PremiumCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 540, damping: 42, mass: 0.7 });
  const ringY = useSpring(y, { stiffness: 540, damping: 42, mass: 0.7 });

  useEffect(() => {
    const mq = window.matchMedia("(pointer: fine)");
    const update = () => setEnabled(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.body.classList.add("premium-cursor-enabled");
    return () => {
      document.body.classList.remove("premium-cursor-enabled");
    };
  }, [enabled]);

  useEffect(() => {
    if (!enabled) return;
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const onOver = (e: Event) => {
      const el = e.target as HTMLElement | null;
      if (!el) return;
      const interactive = el.closest("a,button,[role='button']") != null;
      setHovering(interactive);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("pointerout", onOver, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerout", onOver);
    };
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="premium-cursor-dot"
        style={{
          translateX: x,
          translateY: y,
          x: "-50%",
          y: "-50%",
        }}
      />
      <motion.div
        className="premium-cursor-ring"
        style={{
          translateX: ringX,
          translateY: ringY,
          x: "-50%",
          y: "-50%",
          scale: hovering ? 1.6 : 1,
          opacity: hovering ? 0.95 : 0.8,
        }}
      />
    </>
  );
}

function AboutSection() {
  return (
    <section id="sobre" className="relative">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[32px] border border-brand-border bg-white/4 p-6 backdrop-blur-md">
              <div className="pointer-events-none absolute inset-0 opacity-80">
                <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_10%_10%,rgba(255,179,71,0.10),transparent_60%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05),rgba(255,255,255,0.02))]" />
              </div>
              <div className="relative">
                <div className="text-[11px] font-semibold tracking-[0.18em] text-white/55">BIOGRAFIA</div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-text sm:text-4xl">
                  Storytelling visual, sem blocos de texto.
                </h2>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-white/70">
                  <p>Guitarrista, compositor e produtor musical brasileiro de jazz contemporâneo com presença internacional.</p>
                  <p>
                    A linguagem mistura minimalismo moderno, timbres orgânicos, silêncio calculado e brilho âmbar — como um
                    documentário musical que você atravessa.
                  </p>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Carreira internacional",
                    "Jazz contemporâneo",
                    "Composição autoral",
                    "Produção musical",
                  ].map((t) => (
                    <div
                      key={t}
                      className="rounded-2xl border border-brand-border bg-white/4 px-4 py-3 text-xs font-medium text-white/75"
                    >
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[32px] border border-brand-border bg-white/3 p-[1px]">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(194,164,106,0.20),rgba(255,255,255,0.02))]" />
              <div className="relative rounded-[31px] bg-brand-deep/60 p-6 backdrop-blur-md">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[11px] font-semibold tracking-[0.18em] text-white/55">DESTAQUES</div>
                    <div className="mt-3 text-sm text-white/70">
                      Festival, estúdio, palco ou sala íntima — a mesma intenção: profundidade e elegância.
                    </div>
                  </div>
                  <div className="hidden h-12 w-12 items-center justify-center rounded-2xl border border-brand-border bg-white/4 text-white/70 sm:flex">
                    <Sparkles className="h-5 w-5 text-brand-accent" />
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    { k: "Ritmo cinematográfico", v: "Transições suaves, entradas editoriais e composição visual limpa." },
                    { k: "Atmósfera noturna", v: "Pretos profundos, grafite e brilho dourado controlado." },
                    { k: "Autenticidade", v: "Música viva, sem excesso — presença e intenção." },
                  ].map((it) => (
                    <div key={it.k} className="rounded-3xl border border-brand-border bg-white/4 px-5 py-4">
                      <div className="text-sm font-semibold text-white">{it.k}</div>
                      <div className="mt-1 text-sm text-white/65">{it.v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

type Release = {
  title: string;
  year: string;
  note: string;
};

function DiscographySection() {
  const releases: Release[] = useMemo(
    () => [
      { title: "Noite em Movimento", year: "2026", note: "Singles e sessões ao vivo com estética noturna e timbres orgânicos." },
      { title: "Carta para o Silêncio", year: "2025", note: "Composições autorais: minimalismo moderno e tensão elegante." },
      { title: "Clube Europeu", year: "2024", note: "Arranjos contemporâneos com brilho âmbar e dinâmica cinematográfica." },
      { title: "Brasil em Preto", year: "2023", note: "Alma brasileira com sofisticação europeia — harmonia e espaço." },
    ],
    []
  );

  return (
    <section id="discografia" className="relative">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight text-brand-text sm:text-3xl">Discografia</h2>
          <p className="mt-2 max-w-2xl text-sm text-white/65 sm:text-base">
            Um visual premium no estilo streaming: capas grandes, brilho controlado e microinterações.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {releases.map((r, idx) => (
            <Reveal key={r.title} delay={0.05 + idx * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="group relative overflow-hidden rounded-[28px] border border-brand-border bg-white/4 p-5 backdrop-blur-md"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-brand-glow/14 blur-3xl" />
                  <div className="absolute -right-20 -bottom-20 h-56 w-56 rounded-full bg-brand-accent/10 blur-3xl" />
                </div>

                <div className="relative">
                  <div className="aspect-[1/1] overflow-hidden rounded-2xl border border-brand-border bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))]">
                    <div className="h-full w-full bg-[radial-gradient(400px_circle_at_30%_30%,rgba(255,179,71,0.18),transparent_60%)] p-4">
                      <div className="text-[11px] font-semibold tracking-[0.18em] text-white/55">{r.year}</div>
                      <div className="mt-2 text-lg font-semibold leading-tight text-white">{r.title}</div>
                      <div className="mt-3 text-xs text-white/60">{r.note}</div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-3">
                    <div className="h-[2px] flex-1 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-brand-glow to-transparent opacity-90 animate-shimmer" />
                    </div>
                    <button
                      type="button"
                      className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-brand-border bg-white/5 text-white/85 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-glow/40"
                      aria-label={`Tocar ${r.title}`}
                    >
                      <Play className="h-5 w-5" />
                    </button>
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

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = window.setTimeout(() => setLoading(false), 680);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      <PremiumCursor />
      <BackgroundGlow />
      <Header />
      {loading ? (
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 0.45, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="pointer-events-none fixed inset-0 z-[70] grid place-items-center bg-brand-deep"
        >
          <div className="text-center">
            <div className="text-[11px] font-semibold tracking-[0.22em] text-white/55">CARREGANDO</div>
            <div className="mt-4 h-1 w-40 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-1/2 bg-gradient-to-r from-transparent via-brand-glow to-transparent opacity-90 animate-shimmer" />
            </div>
          </div>
        </motion.div>
      ) : null}
      <main className="pt-[88px] sm:pt-[96px]">
        <HeroSection />
        <AboutSection />
        <ModelsSection />
        <DiscographySection />
        <TestimonialsSection />
        <BenefitsSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
