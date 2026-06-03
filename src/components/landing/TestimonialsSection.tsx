import { AnimatePresence, motion } from "framer-motion";
import { Play, X } from "lucide-react";
import Reveal from "@/components/landing/Reveal";
import { useEffect, useState } from "react";

function getYouTubeId(url: string) {
  const shorts = url.match(/youtube\.com\/shorts\/([^?/#]+)/i);
  if (shorts?.[1]) return shorts[1];

  const watch = url.match(/[?&]v=([^&]+)/i);
  if (watch?.[1]) return watch[1];

  const youtuBe = url.match(/youtu\.be\/([^?/#]+)/i);
  if (youtuBe?.[1]) return youtuBe[1];

  return null;
}

const videos = [
  { url: "https://youtube.com/shorts/QHIZv_FmHVo?feature=share", title: "Aluna 01" },
  { url: "https://youtube.com/shorts/xdGI7i_Cw7U?feature=share", title: "Aluna 02" },
  { url: "https://youtube.com/shorts/doiw0CmSQuw?feature=share", title: "Aluna 03" },
]
  .map((it) => {
    const id = getYouTubeId(it.url);
    return {
      ...it,
      id,
      embedUrl: id ? `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&playsinline=1&rel=0&modestbranding=1` : null,
      thumbUrl: id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : null,
    };
  })
  .filter((it) => it.id && it.embedUrl && it.thumbUrl) as Array<{
  url: string;
  title: string;
  id: string;
  embedUrl: string;
  thumbUrl: string;
}>;

export default function TestimonialsSection() {
  const [activeVideo, setActiveVideo] = useState<(typeof videos)[number] | null>(null);

  useEffect(() => {
    if (!activeVideo) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActiveVideo(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [activeVideo]);

  return (
    <section id="depoimentos" className="relative scroll-mt-[120px] bg-[#000000]">
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl font-semibold tracking-tight text-brand-text sm:text-3xl">Vídeos</h2>
              <p className="mt-3 max-w-2xl text-sm text-white/65 sm:text-base">
                Vídeos de alunas contando como foi a experiência no curso e a evolução que tiveram com direção e feedback.
              </p>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((it, idx) => (
            <Reveal key={it.id} delay={0.06 + idx * 0.06}>
              <motion.button
                type="button"
                onClick={() => setActiveVideo(it)}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.99 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                className="group w-full overflow-hidden rounded-3xl border border-brand-border bg-white/4 p-4 text-left backdrop-blur-md transition"
              >
                <div className="relative overflow-hidden rounded-2xl border border-brand-border bg-black/40">
                  <div className="aspect-video">
                    <img
                      src={it.thumbUrl}
                      alt={it.title}
                      loading="lazy"
                      className="h-full w-full object-cover opacity-75 transition group-hover:opacity-95"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.45),transparent_55%)]" />
                  <div className="pointer-events-none absolute inset-0 grid place-items-center">
                    <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-white/12 bg-black/45 text-white/90 shadow-[0_20px_70px_rgba(0,0,0,0.55)] transition group-hover:scale-[1.03]">
                      <Play className="h-6 w-6 translate-x-[1px]" />
                    </div>
                  </div>
                </div>

                <div className="mt-4">
                  <div className="text-sm font-semibold text-white/90">{it.title}</div>
                  <div className="mt-1 text-xs text-white/60">Clique para assistir</div>
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeVideo ? (
          <motion.div
            className="fixed inset-0 z-[80]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label="Fechar vídeo"
              className="absolute inset-0 z-0 bg-black/70 backdrop-blur-sm"
              onClick={() => setActiveVideo(null)}
            />
            <div className="relative z-10 mx-auto flex min-h-dvh max-w-5xl items-center justify-center px-4 py-10">
              <motion.div
                role="dialog"
                aria-modal="true"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="w-full overflow-hidden rounded-[28px] border border-white/10 bg-black/60 shadow-[0_40px_120px_rgba(0,0,0,0.65)]"
              >
                <div className="flex items-center justify-between gap-3 border-b border-white/10 px-4 py-3">
                  <div className="text-sm font-semibold text-white/90">{activeVideo.title}</div>
                  <button
                    type="button"
                    aria-label="Fechar"
                    onClick={() => setActiveVideo(null)}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-glow/40"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <div className="p-4">
                  <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black">
                    <iframe
                      src={activeVideo.embedUrl}
                      title={activeVideo.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      className="h-full w-full"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
