import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

const STORAGE_KEY = "lucas-brum:presentation-video:hidden";
const PRESENTATION_VIDEO_EMBED_URL =
  "https://www.youtube-nocookie.com/embed/aCBO8uFwGNA?autoplay=1&playsinline=1&rel=0&modestbranding=1";

export default function PresentationVideoModal() {
  const [open, setOpen] = useState(false);
  const [doNotShowAgain, setDoNotShowAgain] = useState(false);

  useEffect(() => {
    const savedPreference = window.localStorage.getItem(STORAGE_KEY) === "1";
    setDoNotShowAgain(savedPreference);

    if (savedPreference) return;

    const timeoutId = window.setTimeout(() => {
      setOpen(true);
    }, 5000);

    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (doNotShowAgain) {
      window.localStorage.setItem(STORAGE_KEY, "1");
      return;
    }

    window.localStorage.removeItem(STORAGE_KEY);
  }, [doNotShowAgain]);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[90]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Fechar vídeo de apresentação"
            className="absolute inset-0 bg-black/75 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          <div className="relative z-10 mx-auto flex min-h-dvh max-w-5xl items-center justify-center px-4 py-6 sm:py-10">
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="presentation-video-title"
              initial={{ opacity: 0, scale: 0.98, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 12 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="w-full overflow-hidden rounded-[28px] border border-white/10 bg-black/70 shadow-[0_40px_120px_rgba(0,0,0,0.65)]"
            >
              <div className="flex items-start justify-between gap-4 border-b border-white/10 px-4 py-4 sm:px-5">
                <div>
                  <div id="presentation-video-title" className="text-base font-semibold text-white/95 sm:text-lg">
                    Vídeo de apresentação
                  </div>
                  <div className="mt-1 text-sm text-white/60">
                    Conheça rapidamente a proposta antes de seguir na página.
                  </div>
                </div>

                <button
                  type="button"
                  aria-label="Fechar"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-brand-glow/40"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-3 sm:p-4">
                <div className="aspect-video w-full overflow-hidden rounded-2xl bg-black">
                  <iframe
                    src={PRESENTATION_VIDEO_EMBED_URL}
                    title="Vídeo de apresentação Lucas Brum Online Music USA"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="h-full w-full"
                  />
                </div>

                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <label className="inline-flex cursor-pointer items-center gap-3 text-sm text-white/78">
                    <input
                      type="checkbox"
                      checked={doNotShowAgain}
                      onChange={(event) => setDoNotShowAgain(event.target.checked)}
                      className="h-4 w-4 rounded border-white/20 bg-transparent text-brand-glow focus:ring-2 focus:ring-brand-glow/40"
                    />
                    Não mostrar novamente
                  </label>

                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="inline-flex items-center justify-center rounded-full bg-brand-glow px-5 py-2.5 text-sm font-semibold text-black/90 transition hover:bg-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-glow/40"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}
