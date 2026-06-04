import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { I18nProvider } from "@/i18n/I18nProvider";
import "./index.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <I18nProvider>
      <App />
    </I18nProvider>
  </StrictMode>
)

const appLoading = document.getElementById("app-loading");
if (appLoading) {
  const anyWindow = window as unknown as { __appLoadingStart?: number };
  const start = typeof anyWindow.__appLoadingStart === "number" ? anyWindow.__appLoadingStart : performance.now();
  const minMs = 2000;
  const elapsed = performance.now() - start;
  const wait = Math.max(0, minMs - elapsed);

  window.setTimeout(() => {
    requestAnimationFrame(() => {
      appLoading.classList.add("fade-out");
      window.setTimeout(() => appLoading.remove(), 520);
    });
  }, wait);
}
