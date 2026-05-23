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
        name: /escolha seu modelo\. evolua de verdade\./i,
      })
    ).toBeInTheDocument();

    expect(screen.getByRole("heading", { name: /direção \+ consistência\./i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /modelos de aula/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /estrutura/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /depoimentos/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /benefícios/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /pronto para evoluir com direção\?/i })).toBeInTheDocument();
  });
});
