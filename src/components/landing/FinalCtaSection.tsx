import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import Reveal from "@/components/landing/Reveal";

export default function FinalCtaSection() {
  return (
    <section id="contato" className="relative scroll-mt-[120px] bg-black">
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-10 sm:pb-28 sm:pt-14">
        <Reveal>
          <div className="relative overflow-hidden rounded-[36px] border border-white/16 bg-black px-6 py-10 sm:px-10">

            <div className="relative grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-border bg-white/6 px-3 py-1 text-xs text-white/65">
                  <Mail className="h-4 w-4 text-brand-accent" />
                  Começar agora
                </div>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-brand-text sm:text-4xl">
                  Pronto para evoluir com direção?
                </h2>
                <p className="mt-3 max-w-2xl text-sm text-white/65 sm:text-base">
                  Me diga seu objetivo e qual modelo você quer (Híbrido ou Individual). Eu te respondo com os próximos passos.
                </p>
              </div>

              <div className="flex flex-col gap-3">
                <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                  <a
                    href="https://www.instagram.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-glow px-6 py-4 text-sm font-semibold text-black/90 transition hover:bg-brand-accent focus:outline-none focus:ring-2 focus:ring-brand-glow/40"
                  >
                    Falar comigo agora
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </a>
                </motion.div>

                <a
                  href="#topo"
                  className="inline-flex items-center justify-center rounded-2xl border border-brand-border bg-white/5 px-6 py-4 text-sm font-medium text-white/90 transition hover:bg-white/8 focus:outline-none focus:ring-2 focus:ring-brand-accent"
                >
                  Voltar ao topo
                </a>

                <div className="text-center text-xs text-white/55">
                  Resposta humana, rápida e direta.
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
