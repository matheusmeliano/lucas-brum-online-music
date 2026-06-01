import { motion } from "framer-motion";
import { Pause, Play, Sparkles } from "lucide-react";
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
  return (
    <section id="como-funciona" className="relative bg-black scroll-mt-[120px]">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div className="relative overflow-hidden rounded-[32px] bg-black p-6 shadow-[0_0_110px_rgba(194,164,106,0.14)] ring-1 ring-[#c2a46a]/28 backdrop-blur-md">
              <div className="pointer-events-none absolute inset-0 opacity-70">
                <div className="absolute inset-0 bg-[radial-gradient(900px_circle_at_12%_14%,rgba(194,164,106,0.18),transparent_58%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(194,164,106,0.08),transparent_46%,transparent_100%)]" />
              </div>
              <div className="relative">
                <div className="text-[11px] font-semibold tracking-[0.18em] text-white/55">COMO FUNCIONA</div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-text sm:text-4xl">
                  Direção + consistência.
                </h2>
                <div className="mt-4 space-y-3 text-sm leading-relaxed text-white/70">
                  <p>
                    Você recebe um caminho claro para evoluir: conteúdo objetivo, prática guiada e feedback para corrigir o que
                    realmente trava sua evolução.
                  </p>
                  <p>Escolha o formato que combina com sua rotina: híbrido (flexível) ou individual (ao vivo, semanal).</p>
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {[
                    "Objetivos definidos",
                    "Acompanhamento",
                    "Evolução semanal",
                    "Clareza no estudo",
                  ].map((t) => (
                    <div
                      key={t}
                      className="rounded-2xl bg-black/35 px-4 py-3 text-xs font-medium text-white/75 ring-1 ring-[#c2a46a]/14"
                    >
                      {t}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[32px] bg-black/25 p-[1px] shadow-[0_0_100px_rgba(194,164,106,0.12)] ring-1 ring-[#c2a46a]/18">
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(194,164,106,0.50),rgba(0,0,0,0))]" />
              <div className="relative rounded-[31px] bg-brand-deep/60 p-6 shadow-[0_0_90px_rgba(194,164,106,0.10)] ring-1 ring-[#c2a46a]/18 backdrop-blur-md">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <div className="text-[11px] font-semibold tracking-[0.18em] text-white/55">O QUE VOCÊ GANHA</div>
                    <div className="mt-3 text-sm text-white/70">
                      Um processo simples e funcional para você sentir progresso de verdade, sem enrolação.
                    </div>
                  </div>
                  <div className="hidden h-12 w-12 items-center justify-center rounded-2xl bg-black/35 text-white/70 ring-1 ring-[#c2a46a]/16 sm:flex">
                    <Sparkles className="h-5 w-5 text-brand-accent" />
                  </div>
                </div>

                <div className="mt-6 space-y-4">
                  {[
                    { k: "Feedback que destrava", v: "Avaliação do que está errado e o que fazer na prática." },
                    { k: "Plano claro", v: "Sem perder tempo: o que estudar, como e quando." },
                    { k: "Acompanhamento", v: "Você não fica sozinho: direção constante no processo." },
                  ].map((it) => (
                    <div key={it.k} className="rounded-3xl bg-black/30 px-5 py-4 ring-1 ring-[#c2a46a]/14">
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

function DiscographySection() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoaded = () => {
      setDuration(Number.isFinite(audio.duration) ? audio.duration : 0);
      setIsReady(true);
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
    <section id="estrutura" className="relative scroll-mt-[120px] bg-black">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight text-brand-text sm:text-3xl">Estrutura</h2>
          <p className="mt-2 max-w-2xl text-sm text-white/65 sm:text-base">
            Um processo simples: conteúdo direto, prática com direção e feedback para ajustar rápido.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal delay={0.05}>
            <div>
              <h3 className="mt-5 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Ouça como é a evolução na prática.
              </h3>
              <p className="mt-3 max-w-xl text-sm text-white/70 sm:text-base">
                Clique para ouvir um feedback real. Isso te mostra o tipo de direção, correção e clareza que você recebe.
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
                <div className="text-xs text-white/55">{isReady ? "Áudio pronto" : "Carregando áudio..."}</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[28px] border border-brand-border bg-white/4 p-6 backdrop-blur-md">
              <div className="pointer-events-none absolute inset-0 opacity-70">
                <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-brand-glow/12 blur-3xl" />
                <div className="absolute -right-20 -bottom-20 h-56 w-56 rounded-full bg-brand-accent/10 blur-3xl" />
              </div>

              <div className="relative">
                <div className="text-[11px] font-semibold tracking-[0.18em] text-white/55">COMEÇO</div>
                <div className="mt-2 text-lg font-semibold leading-tight text-white">Aula introdutória</div>
                <div className="mt-2 text-sm text-white/65">
                  Alinhamento de objetivo, diagnóstico e direção do que focar.
                </div>

                <div className="mt-6 flex items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={togglePlay}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-brand-border bg-white/5 text-white/85 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-glow/40"
                    aria-label={isPlaying ? "Pausar áudio" : "Reproduzir áudio"}
                  >
                    {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                  </button>

                  <div className="flex-1">
                    <div className="flex items-center justify-between text-[11px] text-white/55">
                      <span>{formatTime(currentTime)}</span>
                      <span>{formatTime(duration)}</span>
                    </div>

                    <div className="relative mt-2">
                      <div className="h-2 overflow-hidden rounded-full bg-white/10">
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
