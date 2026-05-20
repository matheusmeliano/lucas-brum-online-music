import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Home from "@/pages/Home";
import { I18nProvider } from "@/i18n/I18nProvider";

describe("Home", () => {
  it("renderiza headline e seções principais", () => {
    render(
      <I18nProvider>
        <MemoryRouter>
          <Home />
        </MemoryRouter>
      </I18nProvider>
    );

    expect(
      screen.getByRole("heading", {
        name: /de brasileiro para brasileiro nos eua\./i,
      })
    ).toBeInTheDocument();

    expect(screen.getByRole("heading", { name: /identifique o modelo ideal de aula para você\./i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^modelo individual$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /^modelo híbrido$/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /benefícios/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /prova e autoridade/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /o próximo nível depende da sua decisão\./i })).toBeInTheDocument();
  });
});
