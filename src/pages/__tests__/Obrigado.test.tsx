import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Obrigado from "@/pages/Obrigado";
import { I18nProvider } from "@/i18n/I18nProvider";

describe("Obrigado", () => {
  it("exibe confirmação e CTA de retorno", () => {
    render(
      <I18nProvider>
        <MemoryRouter>
          <Obrigado />
        </MemoryRouter>
      </I18nProvider>
    );

    expect(screen.getByRole("heading", { name: /obrigado/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /voltar para a landing/i })).toBeInTheDocument();
  });
});
