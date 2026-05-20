import { motion } from "framer-motion";
import { X } from "lucide-react";
import { createPortal } from "react-dom";
import { useI18n } from "@/i18n/useI18n";
import { strings } from "@/i18n/strings";

type LanguageModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function LanguageModal({ open, onClose }: LanguageModalProps) {
  const { locale, setLocale, dict } = useI18n();

  if (!open) return null;

  if (typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-[60]">
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative mx-auto flex min-h-screen max-w-md items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-full rounded-3xl border border-brand-border bg-brand-deep p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="text-sm font-semibold text-white">{dict.languageModal.title}</div>
              <div className="mt-1 text-[11px] text-white/55">{strings.en.languageModal.title}</div>
              <div className="mt-1 text-xs text-white/70">PT / EN</div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white/5 text-white/90 transition hover:bg-white/8 focus:outline-none focus:ring-2 focus:ring-brand-accent"
              aria-label={dict.languageModal.close}
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-5 grid gap-3">
            <button
              type="button"
              onClick={() => {
                setLocale("pt");
              }}
              className={
                "flex items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm transition focus:outline-none focus:ring-2 focus:ring-brand-accent " +
                (locale === "pt" ? "border-[5px] border-[#009b3a] bg-white/8" : "border-brand-border bg-white/5 hover:bg-white/8")
              }
            >
              <span className="text-white">{dict.languageModal.pt}</span>
              <span className="text-xs text-white/70">PT</span>
            </button>

            <button
              type="button"
              onClick={() => {
                setLocale("en");
              }}
              className={
                "flex items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm transition focus:outline-none focus:ring-2 focus:ring-brand-accent " +
                (locale === "en" ? "border-[5px] border-[#009b3a] bg-white/8" : "border-brand-border bg-white/5 hover:bg-white/8")
              }
            >
              <span className="text-white">{dict.languageModal.en}</span>
              <span className="text-xs text-white/70">EN</span>
            </button>
          </div>
        </motion.div>
      </div>
    </div>,
    document.body
  );
}
