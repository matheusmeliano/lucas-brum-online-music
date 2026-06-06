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
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">Termos e Condições de Uso</h1>
          <p className="mt-3 text-sm text-black/65">
            Bem-vindo ao Lucas Brum Online Music USA.
          </p>

          <div className="mt-8 space-y-6 text-sm text-black/70">
            <div>
              <p className="mt-2">
                Ao acessar este site, contratar aulas, adquirir produtos ou utilizar qualquer conteúdo disponibilizado, o
                usuário declara que leu, compreendeu e concorda com os presentes Termos e Condições de Uso.
              </p>
              <p className="mt-3">
                Caso não concorde com qualquer disposição destes termos, recomenda-se não utilizar os serviços oferecidos.
              </p>
            </div>

            <div>
              <div className="font-semibold text-black/90">1. Objeto</div>
              <p className="mt-2">
                O presente documento estabelece as condições de acesso e utilização do site Lucas Brum Online Music USA,
                bem como dos serviços, aulas, conteúdos, materiais didáticos e demais recursos disponibilizados aos
                usuários.
              </p>
            </div>

            <div>
              <div className="font-semibold text-black/90">2. Serviços oferecidos</div>
              <p className="mt-2">
                O Lucas Brum Online Music USA oferece serviços relacionados ao ensino de música, incluindo, mas não se
                limitando a:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                <li>Aulas particulares online;</li>
                <li>Aulas experimentais;</li>
                <li>Consultorias e mentorias;</li>
                <li>Conteúdos educacionais;</li>
                <li>Materiais de apoio;</li>
                <li>Cursos, treinamentos e programas de desenvolvimento musical.</li>
              </ul>
              <p className="mt-3">Os serviços poderão ser alterados, ampliados ou descontinuados a qualquer momento.</p>
            </div>

            <div>
              <div className="font-semibold text-black/90">3. Cadastro e informações fornecidas</div>
              <p className="mt-2">
                O usuário compromete-se a fornecer informações verdadeiras, completas e atualizadas ao preencher
                formulários ou realizar inscrições.
              </p>
              <p className="mt-3">
                O fornecimento de informações falsas poderá resultar na suspensão ou cancelamento do atendimento ou
                acesso aos serviços.
              </p>
            </div>

            <div>
              <div className="font-semibold text-black/90">4. Agendamento e aulas</div>
              <p className="mt-2">As aulas serão realizadas nos dias e horários previamente acordados entre professor e aluno.</p>
              <p className="mt-3">
                O aluno é responsável por comparecer no horário agendado e possuir equipamentos e conexão de internet
                adequados para participação nas aulas online.
              </p>
              <p className="mt-3">Eventuais atrasos do aluno não gerarão extensão automática do horário da aula.</p>
            </div>

            <div>
              <div className="font-semibold text-black/90">5. Cancelamentos e reagendamentos</div>
              <p className="mt-2">
                Pedidos de cancelamento ou reagendamento deverão ser realizados com antecedência mínima previamente
                informada pelo professor.
              </p>
              <p className="mt-3">
                A ausência sem aviso prévio poderá resultar na perda da aula agendada, sem direito a reposição, salvo
                situações excepcionais avaliadas individualmente.
              </p>
            </div>

            <div>
              <div className="font-semibold text-black/90">6. Pagamentos</div>
              <p className="mt-2">
                Os valores, formas de pagamento, prazos e condições comerciais serão informados antes da contratação.
              </p>
              <p className="mt-3">O acesso aos serviços poderá estar condicionado à confirmação do pagamento.</p>
              <p className="mt-3">
                A inadimplência poderá resultar na suspensão temporária dos serviços até a regularização dos valores
                pendentes.
              </p>
            </div>

            <div>
              <div className="font-semibold text-black/90">7. Propriedade intelectual</div>
              <p className="mt-2">
                Todos os conteúdos disponibilizados pelo Lucas Brum Online Music USA, incluindo vídeos, aulas, apostilas,
                exercícios, materiais didáticos, métodos de ensino, textos, imagens, logotipos, marcas e demais
                materiais, são protegidos pelas leis de direitos autorais e propriedade intelectual.
              </p>
              <p className="mt-3">É proibido:</p>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                <li>Copiar ou reproduzir conteúdos sem autorização;</li>
                <li>Compartilhar materiais com terceiros;</li>
                <li>Comercializar conteúdos fornecidos durante as aulas;</li>
                <li>Gravar, distribuir ou disponibilizar aulas sem autorização expressa.</li>
              </ul>
              <p className="mt-3">O descumprimento desta cláusula poderá gerar responsabilização civil e legal.</p>
            </div>

            <div>
              <div className="font-semibold text-black/90">8. Uso adequado do site</div>
              <p className="mt-2">
                O usuário compromete-se a utilizar o site de forma ética e legal, abstendo-se de:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                <li>Violar leis ou regulamentos aplicáveis;</li>
                <li>Tentar acessar áreas restritas sem autorização;</li>
                <li>Inserir códigos maliciosos ou praticar atividades que comprometam a segurança do site;</li>
                <li>Utilizar os serviços para fins ilícitos.</li>
              </ul>
            </div>

            <div>
              <div className="font-semibold text-black/90">9. Limitação de responsabilidade</div>
              <p className="mt-2">
                O Lucas Brum Online Music USA envidará esforços para manter o site e os serviços disponíveis e
                atualizados.
              </p>
              <p className="mt-3">
                Entretanto, não garante funcionamento ininterrupto, ausência de falhas técnicas ou indisponibilidades
                decorrentes de fatores externos, incluindo falhas de internet, plataformas de terceiros ou eventos fora
                de seu controle.
              </p>
              <p className="mt-3">
                Os resultados obtidos pelos alunos dependerão de fatores individuais, incluindo dedicação, prática,
                frequência e comprometimento, não havendo garantia de resultados específicos.
              </p>
            </div>

            <div>
              <div className="font-semibold text-black/90">10. Links e serviços de terceiros</div>
              <p className="mt-2">
                O site poderá conter links para plataformas, redes sociais, meios de pagamento e outros serviços de
                terceiros.
              </p>
              <p className="mt-3">
                O Lucas Brum Online Music USA não se responsabiliza pelas práticas, políticas ou conteúdos desses
                serviços externos.
              </p>
            </div>

            <div>
              <div className="font-semibold text-black/90">11. Privacidade e proteção de dados</div>
              <p className="mt-2">
                O tratamento de dados pessoais é realizado conforme descrito na Política de Privacidade do site, que
                integra estes Termos e Condições de Uso.
              </p>
            </div>

            <div>
              <div className="font-semibold text-black/90">12. Alterações dos termos</div>
              <p className="mt-2">
                Estes Termos e Condições poderão ser modificados a qualquer momento para refletir mudanças nos serviços,
                na legislação ou na operação do site.
              </p>
              <p className="mt-3">A versão mais atual estará sempre disponível nesta página.</p>
            </div>

            <div>
              <div className="font-semibold text-black/90">13. Legislação aplicável</div>
              <p className="mt-2">Estes Termos serão regidos pelas leis da República Federativa do Brasil.</p>
              <p className="mt-3">
                Eventuais controvérsias deverão ser interpretadas de acordo com a legislação brasileira aplicável.
              </p>
              <p className="mt-3">Última atualização: 06 de junho de 2026.</p>
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
