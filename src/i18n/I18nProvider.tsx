import { useCallback, useEffect, useMemo, useState } from "react";
import type { PropsWithChildren } from "react";
import type { Locale } from "@/i18n/strings";
import { strings } from "@/i18n/strings";
import { I18nContext, parseLocale, STORAGE_KEY } from "@/i18n/context";

export function I18nProvider({ children }: PropsWithChildren) {
  const [locale, setLocaleState] = useState<Locale>("pt");

  useEffect(() => {
    const stored = parseLocale(window.localStorage.getItem(STORAGE_KEY));
    if (stored) setLocaleState(stored);
  }, []);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const dict = useMemo(() => strings[locale], [locale]);

  const value = useMemo(() => ({ locale, dict, setLocale }), [locale, dict, setLocale]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}
