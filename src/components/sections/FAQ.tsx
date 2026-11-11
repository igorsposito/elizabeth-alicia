
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
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
    pergunta: "Como funciona a primeira consulta capilar?",
    resposta:
      "A consulta é voltada à compreensão das suas queixas, do histórico de saúde e das características dos fios e do couro cabeludo. A partir dessa análise, são discutidos os próximos passos de acordo com as necessidades identificadas.",
  },
  {
    id: 2,
    pergunta: "Quais são as principais causas da queda de cabelo?",
    resposta:
      "A queda capilar pode estar relacionada a fatores genéticos, hormonais, nutricionais, períodos de estresse e determinadas condições de saúde. Como existem diferentes possibilidades, a investigação individualizada é fundamental para compreender cada situação.",
  },
  {
    id: 3,
    pergunta: "O emagrecimento pode provocar queda de cabelo?",
    resposta:
      "Sim. A perda rápida de peso, mudanças alimentares e possíveis deficiências nutricionais podem contribuir para o aumento da queda. A relação depende de cada caso e deve ser investigada. Medicamentos prescritos não devem ser interrompidos sem orientação do profissional responsável.",
  },
  {
    id: 4,
    pergunta:
      "É necessário passar por uma consulta antes de iniciar um tratamento?",
    resposta:
      "A avaliação clínica é importante para identificar possíveis causas das alterações capilares e verificar quais abordagens podem ser indicadas. Nem todos os casos exigem os mesmos recursos ou protocolos.",
  },
  {
    id: 5,
    pergunta: "Quanto tempo leva para perceber resultados?",
    resposta:
      "O tempo de resposta varia conforme a condição identificada, as características individuais e a abordagem adotada. Algumas alterações exigem acompanhamento prolongado, por isso é importante estabelecer expectativas realistas desde o início.",
  },
  {
    id: 6,
    pergunta: "Como agendar minha consulta?",
    resposta:
      "O agendamento pode ser solicitado diretamente pelo WhatsApp. Por lá, você poderá consultar a disponibilidade de horários, o local de atendimento e as orientações necessárias.",
  },
];

const whatsappMessage =
  "Olá, Elizabeth! Vim pelo seu site e gostaria de tirar uma dúvida sobre a consulta capilar.";

const whatsappUrl =
  "https://api.whatsapp.com/send?phone=5577998151743&text=" +
  encodeURIComponent(whatsappMessage);

export default function FAQ() {
  const reducedMotion = useReducedMotion();
  const [aberta, setAberta] = useState<number | null>(null);

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative isolate scroll-mt-20 overflow-hidden bg-[#EFE5DA] py-16 text-[#353535] sm:py-20 lg:py-24"
    >

{/* Fotografia editorial de fundo */}
<div
  aria-hidden="true"
  className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
>
  <div className="absolute inset-0 hidden overflow-hidden lg:block lg:opacity-65">
<div className="absolute inset-y-0 -left-[30%] w-[78%] xl:-left-[22%]">
      <Image
        src="/images/faq-editorial.jpg"
        alt=""
        fill
        sizes="(min-width: 1024px) 78vw, 100vw"
className="object-cover object-[50%_22%]"
        quality={85}
      />
    </div>
  </div>

  {/* Degradê horizontal: integra a foto ao fundo */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#EFE5DA]/20 via-[#EFE5DA]/70 to-[#EFE5DA]" />

  {/* Suavização vertical */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#EFE5DA]/30 via-transparent to-[#EFE5DA]/90" />

  {/* Suavização adicional da borda direita da fotografia */}
  <div className="absolute inset-y-0 left-[20%] hidden w-[45%] bg-gradient-to-r from-transparent via-[#EFE5DA]/80 to-[#EFE5DA] lg:block" />
</div>


      {/* Iluminação ambiente champagne */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <motion.div
          className="absolute -left-[20%] -bottom-[45%] h-[650px] w-[650px] rounded-full bg-[#C5A27F]/[0.12] blur-[140px] sm:h-[850px] sm:w-[850px]"
          animate={
            reducedMotion
              ? undefined
              : {
                  x: [0, 95, 25, 0],
                  y: [0, -65, -20, 0],
                  scale: [1, 1.12, 0.96, 1],
                }
          }
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -right-[22%] top-[-45%] h-[500px] w-[600px] rounded-full bg-[#B58E69]/[0.065] blur-[150px] sm:h-[680px] sm:w-[780px]"
          animate={
            reducedMotion
              ? undefined
              : {
                  x: [0, -70, -25, 0],
                  y: [0, 75, 25, 0],
                  scale: [1, 1.1, 1, 1],
                }
          }
          transition={{
            duration: 34,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-[-28%] left-[30%] h-[300px] w-[480px] rounded-full bg-[#E7D8C6]/[0.045] blur-[120px]"
          animate={
            reducedMotion
              ? undefined
              : {
                  x: [-45, 55, -45],
                  y: [0, -35, 0],
                }
          }
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Detalhe orgânico inspirado em fios capilares */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-25px] right-[-35px] z-[1] hidden h-[300px] w-[560px] opacity-[0.16] lg:block xl:bottom-[-35px] xl:right-[-45px] xl:h-[360px] xl:w-[680px]"
      >
        <svg
          viewBox="0 0 680 360"
          width="100%"
          height="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid meet"
        >
          <g
            stroke="#B69268"
            strokeWidth="1.5"
            strokeLinecap="round"
          >
            <path d="M90 380 C165 280 130 105 315 -30" />
            <path d="M165 380 C245 275 205 100 395 -30" />
            <path d="M240 380 C325 260 295 95 475 -30" />
            <path d="M315 380 C405 275 390 105 555 -30" />
            <path d="M390 380 C485 260 480 100 635 -30" />
            <path d="M465 380 C565 265 565 110 710 -30" />
          </g>
        </svg>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="grid gap-9 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 xl:gap-20">
          {/* Título e introdução */}
          <motion.div
            initial={{
              opacity: 0,
              y: reducedMotion ? 0 : 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease }}
            className="lg:sticky lg:top-28 lg:self-start"
          >

          <h2
            id="faq-title"
            className="relative isolate w-fit font-display text-[clamp(2.8rem,4.8vw,5.4rem)] font-light leading-[1.07] tracking-[-0.055em]lg:translate-x-[45px] xl:translate-x-[65px]"
          >

            Ainda tem
            <br />
            <span
              className={`${scriptFont.className} inline-block text-[1.3em] leading-[0.9] tracking-normal text-[#8b5415]`}
            >
              dúvidas?
            </span>
          </h2>


            <p className="mt-5 max-w-[390px] text-[15px] font-light leading-[1.9] text-[#24211F] sm:text-[17px] [filter:drop-shadow(0_1px_8px_rgba(255,255,255,0.9))] lg:translate-x-[45px] xl:translate-x-[65px]">
              Reunimos respostas para algumas das
              perguntas mais frequentes sobre saúde
              capilar, investigação clínica e
              funcionamento das consultas.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex min-h-[56px] items-center justify-center gap-4 rounded-full border border-[#B69268]/60 px-7 py-4 text-[14px] font-semibold text-[#353535] transition-colors duration-300 hover:border-[#B69268] hover:bg-[#B69268] hover:text-white lg:translate-x-[45px] xl:translate-x-[65px]"
            >
              Conversar pelo WhatsApp

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          {/* Perguntas */}
          <motion.div
            initial={{
              opacity: 0,
              y: reducedMotion ? 0 : 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{
              duration: 0.85,
              delay: 0.1,
              ease,
            }}
          >
            <div className="border-t border-[#DDD2C3]">
              {perguntas.map((item) => {
                const isOpen = aberta === item.id;
                const panelId = `faq-answer-${item.id}`;

                return (
                  <div
                    key={item.id}
                    className="border-b border-[#DDD2C3]"
                  >
                    <h3>
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() =>
                          setAberta(isOpen ? null : item.id)
                        }
                        className="group flex w-full items-start justify-between gap-5 py-4 text-left sm:py-5"
                      >
                        <span
                          className={`max-w-[610px] font-display text-[clamp(1.2rem,1.7vw,1.65rem)] font-light leading-[1.4] tracking-[-0.025em] transition-colors duration-300 ${
                            isOpen
                              ? "text-[#A57E55]"
                              : "text-[#353535] group-hover:text-[#A57E55]"
                          }`}
                        >
                          {item.pergunta}
                        </span>

                        <span
                          aria-hidden="true"
                          className={`mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                            isOpen
                              ? "border-[#B69268] bg-[#B69268] text-white"
                              : "border-[#353535]/25 text-[#353535] group-hover:border-[#B69268]"
                          }`}
                        >
                          {isOpen ? (
                            <Minus size={17} />
                          ) : (
                            <Plus size={17} />
                          )}
                        </span>
                      </button>
                    </h3>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={panelId}
                          role="region"
                          initial={{
                            height: 0,
                            opacity: 0,
                          }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                          }}
                          transition={{
                            duration: reducedMotion
                              ? 0
                              : 0.35,
                            ease,
                          }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-[610px] pb-5 pr-10 text-[14px] font-light leading-[1.9] text-[#625B55] sm:text-[16px]">
                            {item.resposta}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <p className="mt-7 text-[12px] leading-[1.8] text-[#77716B]">
              As informações apresentadas são educativas
              e não substituem uma consulta individualizada.
              As condutas são definidas conforme a
              avaliação de cada caso.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
