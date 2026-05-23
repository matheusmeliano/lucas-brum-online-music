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
        name: /alma brasileira\. sofisticação europeia\./i,
      })
    ).toBeInTheDocument();

    expect(screen.getByRole("heading", { name: /projetos em destaque/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /discografia/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /experiência ao vivo/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /serviços/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /vamos criar algo inesquecível\./i })).toBeInTheDocument();
  });
});
