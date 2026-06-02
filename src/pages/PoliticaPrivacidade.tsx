import { motion } from "framer-motion";

export default function PoliticaPrivacidade() {
  return (
    <div className="min-h-screen bg-white px-4 py-14 text-black">
      <div className="mx-auto w-full max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.99 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-black/10 bg-white p-7 sm:p-10"
        >
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Política de Privacidade</h1>
          <p className="mt-3 text-sm text-black/65">
            Esta página descreve como as informações são usadas ao navegar neste site e ao entrar em contato.
          </p>

          <div className="mt-8 space-y-6 text-sm text-black/70">
            <div>
              <div className="font-semibold text-black/90">Informações coletadas</div>
              <p className="mt-2">
                Podemos receber dados que você envia voluntariamente ao entrar em contato (ex.: nome, mensagem e meios de
                contato). Também podem ser coletados dados técnicos básicos (ex.: tipo de dispositivo e páginas
                acessadas) para funcionamento e melhoria do site.
              </p>
            </div>

            <div>
              <div className="font-semibold text-black/90">Uso das informações</div>
              <p className="mt-2">
                As informações são usadas para responder mensagens, orientar sobre modelos disponíveis, suporte e melhoria
                da experiência no site. Não vendemos dados pessoais.
              </p>
            </div>

            <div>
              <div className="font-semibold text-black/90">Links externos</div>
              <p className="mt-2">
                Este site pode conter links para serviços de terceiros (ex.: Instagram e YouTube). Cada serviço possui
                sua própria política de privacidade.
              </p>
            </div>

            <div>
              <div className="font-semibold text-black/90">Atualizações</div>
              <p className="mt-2">
                Podemos atualizar esta política quando necessário. Recomendamos revisar periodicamente.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <button
              type="button"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-black/20"
            >
              Voltar ao topo
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
