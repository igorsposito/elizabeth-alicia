"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, Minus, Plus } from "lucide-react";
import { MonteCarlo } from "next/font/google";

const scriptFont = MonteCarlo({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const ease = [0.22, 1, 0.36, 1] as const;

type Pergunta = {
  id: number;
  pergunta: string;
  resposta: string;
};

const perguntas: Pergunta[] = [
  {
    id: 1,
    pergunta: "Como funciona a primeira avaliação capilar?",
    resposta:
      "A avaliação busca compreender suas queixas, seu histórico e as características do couro cabeludo e dos fios. Os próximos passos são definidos conforme as necessidades identificadas. Confirme com a equipe os detalhes da consulta.",
  },
  {
    id: 2,
    pergunta: "Quais são as principais causas da queda de cabelo?",
    resposta:
      "Fatores genéticos, hormonais, nutricionais, estresse e condições do couro cabeludo podem estar envolvidos. A investigação individual ajuda a entender as possíveis causas.",
  },
  {
    id: 3,
    pergunta: "A queda capilar pode estar relacionada ao emagrecimento?",
    resposta:
      "Sim. A perda rápida de peso e alterações nutricionais podem contribuir para a queda dos fios. Isso não significa que um medicamento seja necessariamente a causa. Não suspenda tratamentos prescritos sem orientação profissional.",
  },
  {
    id: 4,
    pergunta: "Quais procedimentos capilares são realizados?",
    resposta:
      "Em conteúdos anteriores, a Dra. Elizabeth apresentou laser, LEDterapia e microagulhamento capilar. A disponibilidade atual e a indicação de cada procedimento devem ser confirmadas com a equipe.",
  },
  {
    id: 5,
    pergunta: "Quanto tempo leva para perceber resultados?",
    resposta:
      "Não existe um prazo igual para todos. A evolução depende da causa, das características individuais e dos cuidados indicados. A avaliação ajuda a alinhar expectativas realistas.",
  },
  {
    id: 6,
    pergunta: "Como agendar uma avaliação?",
    resposta:
      "Basta entrar em contato pelo WhatsApp. A equipe poderá informar sobre disponibilidade, local de atendimento e orientações para o agendamento.",
  },
];

const whatsappMessage =
  "Olá! Vim pelo site da Dra. Elizabeth e gostaria de tirar uma dúvida e saber como agendar uma avaliação.";
const whatsappUrl = `https://api.whatsapp.com/send?phone=5577999341034&text=${encodeURIComponent(whatsappMessage)}`;

export default function FAQ() {
  const reducedMotion = useReducedMotion();
  const [aberta, setAberta] = useState<number | null>(null);

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative isolate scroll-mt-20 overflow-hidden bg-[#211C19] py-16 text-[#F7F3EC] sm:py-20 lg:py-24"
    >
      {/* Iluminação ambiente champagne em movimento lento e desfocado */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div
          className="absolute -left-[20%] -bottom-[45%] h-[650px] w-[650px] rounded-full bg-[#C5A27F]/[0.12] blur-[140px] sm:h-[850px] sm:w-[850px]"
          animate={reducedMotion ? undefined : { x: [0, 95, 25, 0], y: [0, -65, -20, 0], scale: [1, 1.12, 0.96, 1] }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-[22%] top-[-45%] h-[500px] w-[600px] rounded-full bg-[#B58E69]/[0.065] blur-[150px] sm:h-[680px] sm:w-[780px]"
          animate={reducedMotion ? undefined : { x: [0, -70, -25, 0], y: [0, 75, 25, 0], scale: [1, 1.1, 1, 1] }}
          transition={{ duration: 34, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-28%] left-[30%] h-[300px] w-[480px] rounded-full bg-[#E7D8C6]/[0.045] blur-[120px]"
          animate={reducedMotion ? undefined : { x: [-45, 55, -45], y: [0, -35, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="grid gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 xl:gap-20">
          <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease }}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <h2
              id="faq-title"
              className="font-display text-[clamp(2.8rem,4.8vw,5.4rem)] font-light leading-[1.07] tracking-[-0.055em]"
            >
              Ainda tem
              <br />
              <span
                className={`${scriptFont.className} inline-block text-[1.3em] leading-[0.9] tracking-normal text-[#C5A27F]`}
              >
                dúvidas?
              </span>
            </h2>
            <p className="mt-5 max-w-[390px] text-[15px] font-light leading-[1.9] text-[#E7D8C6]/70 sm:text-[17px]">
              Informação também faz parte do cuidado. Reunimos respostas para
              algumas das perguntas mais comuns sobre saúde capilar,
              procedimentos e atendimento.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex min-h-[56px] items-center justify-center gap-4 rounded-full border border-[#C5A27F]/60 px-7 py-4 text-[14px] font-semibold text-[#F7F3EC] transition-colors duration-300 hover:border-[#C5A27F] hover:bg-[#C5A27F] hover:text-[#211C19]"
            >
              Conversar pelo WhatsApp
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: reducedMotion ? 0 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.85, delay: 0.1, ease }}
          >
            <div className="border-t border-[#E7D8C6]/20">
              {perguntas.map((item) => {
                const isOpen = aberta === item.id;
                const panelId = `faq-answer-${item.id}`;
                return (
                  <div key={item.id} className="border-b border-[#E7D8C6]/20">
                    <h3>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setAberta(isOpen ? null : item.id)}
                        className="group flex w-full items-start justify-between gap-5 py-4 text-left sm:py-5"
                      >
                        <span
                          className={`max-w-[610px] font-display text-[clamp(1.2rem,1.7vw,1.65rem)] font-light leading-[1.4] tracking-[-0.025em] transition-colors duration-300 ${
                            isOpen ? "text-[#C5A27F]" : "text-[#F7F3EC] group-hover:text-[#C5A27F]"
                          }`}
                        >
                          {item.pergunta}
                        </span>
                        <span
                          className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                            isOpen
                              ? "border-[#C5A27F] bg-[#C5A27F] text-[#211C19]"
                              : "border-[#E7D8C6]/30 text-[#E7D8C6] group-hover:border-[#C5A27F]"
                          }`}
                        >
                          {isOpen ? <Minus size={17} /> : <Plus size={17} />}
                        </span>
                      </button>
                    </h3>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={panelId}
                          role="region"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: reducedMotion ? 0 : 0.35, ease }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-[610px] pb-5 pr-10 text-[14px] font-light leading-[1.9] text-[#E7D8C6]/75 sm:text-[16px]">
                            {item.resposta}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
            <p className="mt-7 text-[12px] leading-[1.8] text-[#E7D8C6]/50">
              As informações são educativas e não substituem uma avaliação
              individualizada. A disponibilidade dos procedimentos deve ser
              confirmada com a equipe.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
