import { motion } from "framer-motion";
import { Check, Pause, Play } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import BackgroundGlow from "@/components/landing/BackgroundGlow";
import BenefitsSection from "@/components/landing/BenefitsSection";
import FinalCtaSection from "@/components/landing/FinalCtaSection";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import HeroSection from "@/components/landing/HeroSection";
import ModelsSection from "@/components/landing/ModelsSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import Reveal from "@/components/landing/Reveal";

function AboutSection() {
  const targets = [
    {
      title: "Direção no estudo",
      description: "Sabe exatamente o que estudar e como praticar para ter progresso real.",
    },
    {
      title: "Correção que destrava",
      description: "Recebe correção prática do que está errado e como ajustar.",
    },
    {
      title: "Consistência semanal",
      description: "Mantém uma rotina simples, foco no essencial e acompanhamento para seguir no ritmo.",
    },
    {
      title: "Segurança ao tocar",
      description: "Ganha clareza no próximo passo e confiança para executar no violão.",
    },
  ];

  return (
    <section id="como-funciona" className="relative bg-black scroll-mt-[120px]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <Reveal>
          <div className="grid gap-10">
            <div className="w-full">
              <h2 className="text-2xl font-semibold tracking-tight text-brand-text sm:text-3xl">
                Indicado para quem busca
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-white/65 sm:text-base">
                Clareza no estudo, correção objetiva e evolução consistente semana após semana.
              </p>

              <div className="mt-6 overflow-hidden rounded-[28px] border border-brand-border bg-white/4 backdrop-blur-md">
                <div className="grid grid-cols-1 gap-3 p-4 sm:grid-cols-2">
                  {targets.map((it) => (
                    <div
                      key={it.title}
                      className="group flex gap-3 rounded-2xl bg-black/25 p-4 ring-1 ring-brand-border/80 transition hover:bg-white/5 hover:ring-[#c2a46a]/22"
                    >
                      <div className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/18 text-emerald-300 ring-1 ring-emerald-400/25">
                        <Check className="h-4 w-4" />
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-white/90 transition-colors group-hover:text-white">
                          {it.title}
                        </div>
                        <div className="mt-1 text-xs text-white/60">{it.description}</div>
                      </div>
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

function DiscographySection() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoaded = () => {
      setDuration(Number.isFinite(audio.duration) ? audio.duration : 0);
    };
    const handleTime = () => setCurrentTime(audio.currentTime);
    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("loadedmetadata", handleLoaded);
    audio.addEventListener("timeupdate", handleTime);
    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoaded);
      audio.removeEventListener("timeupdate", handleTime);
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const progress = duration > 0 ? Math.min(1, Math.max(0, currentTime / duration)) : 0;
  const formatTime = (seconds: number) => {
    const safeSeconds = Number.isFinite(seconds) ? Math.max(0, seconds) : 0;
    const minutes = Math.floor(safeSeconds / 60);
    const rest = Math.floor(safeSeconds % 60);
    return `${minutes}:${String(rest).padStart(2, "0")}`;
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      void audio.play();
      return;
    }

    audio.pause();
  };

  return (
    <section
      id="estrutura"
      data-theme="light"
      className="relative scroll-mt-[120px] bg-white"
    >
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight text-black/90 sm:text-3xl">
            Feedback
          </h2>
          <p className="mt-2 max-w-2xl text-sm text-black/60 sm:text-base">
            Dê play e veja como é o acompanhamento por dentro: correção clara, direção objetiva e próximo passo definido.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal delay={0.05}>
            <div>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-black/90 sm:text-3xl">
                Ouça como é a evolução na prática.
              </h3>
              <p className="mt-3 max-w-xl text-sm text-black/60 sm:text-base">
                Um trecho curto, direto e real para você sentir o nível de clareza e correção que eu entrego.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="button"
                  onClick={togglePlay}
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-brand-glow px-6 py-3 text-sm font-semibold text-black/90 transition hover:bg-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-glow/40"
                >
                  {isPlaying ? "Pausar feedback" : "Ouvir feedback agora"}
                  <span className="transition group-hover:translate-x-0.5" aria-hidden="true">
                    →
                  </span>
                </button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[28px] border border-black/10 bg-black/[0.02] p-6">
              <div className="pointer-events-none absolute inset-0 opacity-80">
                <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-brand-glow/14 blur-3xl" />
                <div className="absolute -right-20 -bottom-20 h-56 w-56 rounded-full bg-brand-accent/12 blur-3xl" />
              </div>

              <div className="relative">
                <div className="mt-2 text-lg font-semibold leading-tight text-black/90">
                  Aluna Gezilene
                </div>
                <div className="mt-2 text-sm text-black/60">Everett, Massachusetts - USA</div>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-black/10 bg-black/[0.03] text-black/70 transition hover:bg-black/[0.06] focus:outline-none focus:ring-2 focus:ring-brand-glow/40"
                    aria-label={isPlaying ? "Pausar áudio" : "Reproduzir áudio"}
                  >
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                  </button>

                  <div className="flex-1">
                    <div className="flex items-center justify-between text-[11px] text-black/55">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(duration)}</span>
                    </div>

                    <div className="relative mt-2">
                      <div className="h-2 overflow-hidden rounded-full bg-black/10">
                        <div
                          className="h-full bg-[linear-gradient(90deg,rgba(194,164,106,0.20),rgba(194,164,106,0.95),rgba(255,179,71,0.85))]"
                          style={{ width: `${progress * 100}%` }}
                        />
                      </div>
                      <input
                        type="range"
                        min={0}
                        max={duration || 0}
                        step={0.1}
                        value={Math.min(currentTime, duration || 0)}
                        onChange={(e) => {
                          const audio = audioRef.current;
                          if (!audio) return;
                          const nextTime = Number(e.target.value);
                          audio.currentTime = Number.isFinite(nextTime) ? nextTime : 0;
                          setCurrentTime(audio.currentTime);
                        }}
                        className="absolute inset-0 h-2 w-full cursor-pointer opacity-0"
                        aria-label="Barra de progresso do áudio"
                      />
                    </div>
                  </div>
                </div>

                <audio ref={audioRef} className="hidden" src="/audio/feedback-aluna-3.mp3" preload="metadata" />
              </div>
            </div>
          </Reveal>
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
        <BenefitsSection />
        <ModelsSection />
        <DiscographySection />
        <TestimonialsSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
