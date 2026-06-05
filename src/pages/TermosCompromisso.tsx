import { motion } from "framer-motion";

export default function TermosCompromisso() {
  return (
    <div className="min-h-screen bg-white px-4 py-14 text-black">
      <div className="mx-auto w-full max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.99 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="rounded-3xl border border-black/10 bg-white p-7 sm:p-10"
        >
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Termos e Compromisso</h1>
          <p className="mt-3 text-sm text-black/65">
            Ao prosseguir com o contato e contratação, você concorda com os termos abaixo.
          </p>

          <div className="mt-8 space-y-6 text-sm text-black/70">
            <div>
              <div className="font-semibold text-black/90">Sobre o acompanhamento</div>
              <p className="mt-2">
                O acompanhamento é orientado a direção de estudo, correção e evolução no violão, de acordo com o formato
                contratado.
              </p>
            </div>

            <div>
              <div className="font-semibold text-black/90">Compromisso do aluno</div>
              <p className="mt-2">
                Para ter resultado, o aluno se compromete a aplicar as orientações, manter consistência e enviar o
                material conforme combinado (vídeos/áudios, dúvidas e exercícios).
              </p>
            </div>

            <div>
              <div className="font-semibold text-black/90">Comunicação</div>
              <p className="mt-2">
                A comunicação acontece pelos canais informados na contratação. Prazos e formato de retorno podem variar
                conforme a demanda e a disponibilidade.
              </p>
            </div>

            <div>
              <div className="font-semibold text-black/90">Conteúdo e direitos</div>
              <p className="mt-2">
                Os materiais e orientações são de uso pessoal do aluno. É proibido redistribuir, publicar ou comercializar
                o conteúdo sem autorização.
              </p>
            </div>
          </div>

          <div className="mt-10">
            <button
              type="button"
              onClick={() => (window.location.href = "https://www.lucasbrumonlinemusic.com/")}
              className="inline-flex items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition hover:bg-black/90 focus:outline-none focus:ring-2 focus:ring-black/20"
            >
              Voltar ao início
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
