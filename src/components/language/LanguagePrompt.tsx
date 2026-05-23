import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { useI18n } from "@/i18n/useI18n";
import { strings } from "@/i18n/strings";

type LanguagePromptProps = {
  onOpen: () => void;
  suspended?: boolean;
  anchorRef?: React.RefObject<HTMLElement | null>;
};

export default function LanguagePrompt({ onOpen, suspended, anchorRef }: LanguagePromptProps) {
  const { locale, dict } = useI18n();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const [mobileTop, setMobileTop] = useState<number | undefined>(undefined);

  const shouldShow = useMemo(() => {
    if (locale !== "pt") return false;
    return !dismissed;
  }, [locale, dismissed]);

  useEffect(() => {
    const mql = window.matchMedia("(min-width: 1000px)");
    const update = () => setIsDesktop(mql.matches);
    update();
    mql.addEventListener("change", update);
    return () => mql.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!shouldShow) return;

    const t = window.setTimeout(() => setVisible(true), 2200);
    return () => window.clearTimeout(t);
  }, [shouldShow]);

  useEffect(() => {
    if (isDesktop) return;
    if (!visible || !shouldShow) return;

    const update = () => {
      const offset = 10;
      const anchorEl = anchorRef?.current ?? null;
      const headerEl = anchorEl?.closest("header") ?? document.querySelector("header");
      const headerRect = headerEl?.getBoundingClientRect();
      if (headerRect) {
        setMobileTop(Math.max(0, headerRect.bottom - offset));
        return;
      }

      if (anchorEl) {
        setMobileTop(Math.max(0, anchorEl.getBoundingClientRect().bottom - offset));
      }
    };

    update();
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, { passive: true });
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("scroll", update);
    };
  }, [anchorRef, isDesktop, visible, shouldShow]);

  if (suspended) return null;
  if (!shouldShow || !visible) return null;

  if (!isDesktop) {
    return (
      <div
        className="fixed left-1/2 z-[55] -translate-x-1/2"
        style={{ top: mobileTop ?? 62 }}
      >
        <motion.div
          initial={{ opacity: 0, y: -6, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-[260px]"
        >
          <div className="relative rounded-2xl border border-brand-border bg-brand-deep p-3">
            <div className="text-xs font-medium text-white">{dict.langPrompt.title}</div>
            <div className="mt-1 text-[11px] text-white/70">{dict.langPrompt.subtitle}</div>

            <div className="mt-3 flex items-center justify-between gap-2">
              <button
                type="button"
                onClick={() => {
                  setVisible(false);
                  setDismissed(true);
                }}
                className="text-left text-[11px] text-white/70 hover:underline underline-offset-4"
              >
                <span className="block">{dict.langPrompt.dismiss}</span>
                <span className="mt-0.5 block text-[10px] text-white/55">
                  {strings.en.langPrompt.dismiss}
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  onOpen();
                }}
                className="rounded-full bg-white/10 px-3 py-1.5 text-left text-[11px] font-medium text-white transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-brand-accent"
              >
                <span className="block leading-none">{dict.langPrompt.action}</span>
                <span className="mt-1 block text-[10px] font-normal leading-none text-white/55">
                  {strings.en.langPrompt.action}
                </span>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -6, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="absolute right-0 top-full mt-0 z-[55] w-[260px]"
    >
      <div className="relative rounded-2xl border border-brand-border bg-brand-deep p-3">
        <div className="absolute -top-2 right-4 h-4 w-4 rotate-45 border-l border-t border-brand-border bg-brand-deep" />
        <div className="text-xs font-medium text-white">{dict.langPrompt.title}</div>
        <div className="mt-1 text-[11px] text-white/70">{dict.langPrompt.subtitle}</div>

        <div className="mt-3 flex items-center justify-between gap-2">
          <button
            type="button"
            onClick={() => {
              setVisible(false);
              setDismissed(true);
            }}
            className="text-left text-[11px] text-white/70 hover:underline underline-offset-4"
          >
            <span className="block">{dict.langPrompt.dismiss}</span>
            <span className="mt-0.5 block text-[10px] text-white/55">{strings.en.langPrompt.dismiss}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              onOpen();
            }}
            className="rounded-full bg-white/10 px-3 py-1.5 text-left text-[11px] font-medium text-white transition hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-brand-accent"
          >
            <span className="block leading-none">{dict.langPrompt.action}</span>
            <span className="mt-1 block text-[10px] font-normal leading-none text-white/55">
              {strings.en.langPrompt.action}
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
