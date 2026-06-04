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
  requestAnimationFrame(() => {
    appLoading.classList.add("fade-out");
    window.setTimeout(() => appLoading.remove(), 520);
  });
}
