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
            Esta Política de Privacidade explica como o site Lucas Brum Online Music USA coleta, utiliza, armazena,
            compartilha e protege as informações dos visitantes, alunos e usuários dos seus serviços.
          </p>

          <div className="mt-5 space-y-4 text-sm text-black/70">
            <p>
              Esta Política de Privacidade aplica-se ao site Lucas Brum Online Music USA, de responsabilidade de Lucas
              Brum, responsável pela oferta de aulas, conteúdos e treinamentos musicais online.
            </p>
            <p>Ao utilizar este site, o usuário concorda com os termos desta Política de Privacidade.</p>
          </div>

          <div className="mt-8 space-y-6 text-sm text-black/70">
            <div>
              <div className="font-semibold text-black/90">1. Informações coletadas</div>
              <p className="mt-2">
                Podemos coletar dados fornecidos voluntariamente pelo usuário, como nome, e-mail, telefone/WhatsApp, país
                de residência, mensagens enviadas e informações relacionadas ao interesse em aulas de música.
              </p>
              <p className="mt-3">
                Também poderão ser coletados dados técnicos básicos, incluindo endereço IP, tipo de dispositivo,
                navegador utilizado, páginas acessadas, origem do acesso, data e horário de navegação, além de cookies e
                tecnologias semelhantes.
              </p>
            </div>

            <div>
              <div className="font-semibold text-black/90">2. Uso das informações</div>
              <p className="mt-2">As informações coletadas poderão ser utilizadas para:</p>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                <li>Responder contatos e solicitações;</li>
                <li>Agendar aulas experimentais;</li>
                <li>Enviar informações sobre aulas, horários, valores e conteúdos relacionados;</li>
                <li>Realizar atendimento por WhatsApp, e-mail ou outros canais de comunicação;</li>
                <li>Processar inscrições e pagamentos;</li>
                <li>Melhorar a experiência de navegação e utilização do site;</li>
                <li>Divulgar conteúdos, novidades, promoções e materiais relacionados aos serviços oferecidos;</li>
                <li>Cumprir obrigações legais e regulatórias.</li>
              </ul>
              <p className="mt-3">
                O tratamento dos dados pessoais é realizado com base no consentimento do usuário, na execução dos serviços
                contratados, no cumprimento de obrigações legais e em legítimos interesses relacionados às atividades do
                site, conforme aplicável pela legislação vigente.
              </p>
              <p className="mt-3">Não vendemos dados pessoais.</p>
            </div>

            <div>
              <div className="font-semibold text-black/90">3. Compartilhamento com terceiros</div>
              <p className="mt-2">
                Os dados poderão ser compartilhados com fornecedores e plataformas necessárias para a operação dos
                serviços, incluindo, mas não se limitando a:
              </p>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                <li>Serviços de hospedagem de sites;</li>
                <li>Plataformas de e-mail;</li>
                <li>WhatsApp e ferramentas de comunicação;</li>
                <li>Sistemas de agenda e agendamento online;</li>
                <li>Processadores e intermediadores de pagamento;</li>
                <li>Ferramentas de automação de marketing;</li>
                <li>Ferramentas de análise de acesso e desempenho.</li>
              </ul>
              <p className="mt-3">
                Os terceiros envolvidos deverão utilizar as informações apenas para as finalidades necessárias à
                prestação dos serviços.
              </p>
            </div>

            <div>
              <div className="font-semibold text-black/90">4. Cookies e tecnologias de rastreamento</div>
              <p className="mt-2">
                Este site poderá utilizar cookies e tecnologias similares para melhorar a navegação, personalizar a
                experiência do usuário, analisar visitas e apoiar campanhas de divulgação.
              </p>
              <p className="mt-3">
                Também poderão ser utilizadas ferramentas de análise e publicidade, incluindo Google Analytics, Meta
                Pixel e tecnologias semelhantes, para compreender o comportamento dos visitantes e otimizar ações de
                comunicação e marketing.
              </p>
              <p className="mt-3">
                O usuário poderá gerenciar ou desativar cookies diretamente nas configurações do seu navegador.
              </p>
            </div>

            <div>
              <div className="font-semibold text-black/90">5. Segurança e armazenamento dos dados</div>
              <p className="mt-2">
                Adotamos medidas técnicas e organizacionais adequadas para proteger os dados pessoais contra acessos não
                autorizados, perda, alteração, divulgação ou destruição indevida.
              </p>
              <p className="mt-3">
                Os dados serão armazenados pelo período necessário para a prestação dos serviços, cumprimento de
                obrigações legais, resolução de disputas e exercício regular de direitos.
              </p>
            </div>

            <div>
              <div className="font-semibold text-black/90">6. Direitos do usuário</div>
              <p className="mt-2">O usuário poderá, a qualquer momento, solicitar:</p>
              <ul className="mt-3 list-disc space-y-1 pl-5">
                <li>Acesso aos seus dados pessoais;</li>
                <li>Correção ou atualização de informações;</li>
                <li>Exclusão de dados, quando aplicável;</li>
                <li>Revogação de consentimentos anteriormente concedidos;</li>
                <li>Informações sobre o tratamento de seus dados.</li>
              </ul>
              <p className="mt-3">
                Solicitações relacionadas à privacidade e proteção de dados poderão ser encaminhadas para o e-mail:{" "}
                <a
                  href="mailto:atendimento.usa.music@gmail.com"
                  className="break-all font-medium text-black/80 underline underline-offset-2"
                >
                  atendimento.usa.music@gmail.com
                </a>
              </p>
            </div>

            <div>
              <div className="font-semibold text-black/90">7. Menores de idade</div>
              <p className="mt-2">
                Menores de 18 anos deverão utilizar os serviços com autorização e supervisão de seus pais ou responsáveis
                legais.
              </p>
              <p className="mt-3">
                Ao contratar aulas ou fornecer informações em nome de menores, os responsáveis declaram possuir
                legitimidade para realizar tal ato.
              </p>
            </div>

            <div>
              <div className="font-semibold text-black/90">8. Transferência internacional de dados</div>
              <p className="mt-2">Os serviços poderão ser oferecidos a usuários localizados em diferentes países.</p>
              <p className="mt-3">
                Quando necessário para a prestação dos serviços, os dados poderão ser processados ou armazenados em
                servidores localizados fora do país de residência do usuário, observadas as medidas adequadas de
                segurança e proteção de dados.
              </p>
            </div>

            <div>
              <div className="font-semibold text-black/90">9. Aulas, conteúdos e direitos autorais</div>
              <p className="mt-2">
                Todos os materiais, vídeos, aulas, apostilas, exercícios, métodos de ensino, textos, imagens, marcas,
                logotipos e demais conteúdos disponibilizados pelo Lucas Brum Online Music USA são protegidos pelas leis
                de propriedade intelectual e direitos autorais.
              </p>
              <p className="mt-3">
                É proibida a reprodução, gravação, distribuição, compartilhamento, comercialização ou utilização desses
                conteúdos sem autorização prévia e expressa do titular dos direitos.
              </p>
            </div>

            <div>
              <div className="font-semibold text-black/90">10. Links externos</div>
              <p className="mt-2">
                O site poderá conter links para serviços e plataformas de terceiros, incluindo Instagram, YouTube,
                WhatsApp, plataformas de pagamento e outras ferramentas externas.
              </p>
              <p className="mt-3">
                Cada serviço possui suas próprias políticas de privacidade e termos de uso, não sendo o Lucas Brum Online
                Music USA responsável pelas práticas adotadas por terceiros.
              </p>
            </div>

            <div>
              <div className="font-semibold text-black/90">11. Atualizações desta política</div>
              <p className="mt-2">
                Esta Política de Privacidade poderá ser alterada ou atualizada a qualquer momento, sem aviso prévio, para
                refletir mudanças legais, operacionais ou de funcionamento dos serviços.
              </p>
              <p className="mt-3">
                Recomenda-se que o usuário consulte periodicamente esta página para verificar eventuais atualizações.
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
