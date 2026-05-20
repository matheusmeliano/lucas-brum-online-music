import { createContext } from "react";
import type { Dictionary, Locale } from "@/i18n/strings";

export type I18nContextValue = {
  locale: Locale;
  dict: Dictionary;
  setLocale: (next: Locale) => void;
};

export const I18nContext = createContext<I18nContextValue | null>(null);

export const STORAGE_KEY = "omu_locale";

export function parseLocale(value: string | null): Locale | null {
  if (value === "pt" || value === "en") return value;
  return null;
}

