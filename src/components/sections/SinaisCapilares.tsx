
"use client";

import { useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "motion/react";
import { ArrowUpRight, Plus } from "lucide-react";
import { MonteCarlo } from "next/font/google";

const scriptFont = MonteCarlo({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const ease = [0.22, 1, 0.36, 1] as const;

const sinais = [
  {
    number: "01",
    title: "Queda capilar",
    description:
      "O aumento da queda durante o banho, ao pentear ou ao longo do dia pode estar relacionado a diferentes fatores. A avaliação profissional ajuda a investigar suas possíveis causas.",
  },
  {
    number: "02",
    title: "Afinamento dos fios",
    description:
      "A redução progressiva da espessura ou da densidade dos cabelos pode ocorrer por diferentes motivos. Identificar essas alterações é importante para definir a abordagem mais adequada.",
  },
  {
    number: "03",
    title: "Alterações no couro cabeludo",
    description:
      "Coceira, descamação, oleosidade excessiva e sensibilidade podem estar associadas a condições que exigem atenção e avaliação específica.",
  },
  {
    number: "04",
    title: "Fragilidade capilar",
    description:
      "Quebra frequente, perda de resistência e mudanças na textura dos fios podem indicar a necessidade de investigar fatores que comprometem sua integridade.",
  },
];

const whatsappMessage =
  "Olá, Elizabeth! Vim pelo seu site e gostaria de agendar uma consulta para avaliar minhas queixas capilares.";

const whatsappUrl =
  "https://api.whatsapp.com/send?phone=5577999341034&text=" +
  encodeURIComponent(whatsappMessage);

export default function SinaisCapilares() {
  const reducedMotion = useReducedMotion();
  const prefersReducedMotion = reducedMotion === true;

  const [activeIndex, setActiveIndex] = useState<number | null>(
    0
  );

  return (
    <section
      id="sinais-capilares"
      aria-labelledby="sinais-capilares-title"
      className="relative isolate overflow-hidden bg-[#FAF9F6] py-24 text-[#353535] sm:py-28 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 xl:gap-28">
          {/* Conteúdo editorial */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{
                opacity: 0,
                y: prefersReducedMotion ? 0 : 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.25,
              }}
              transition={{
                duration: 0.85,
                ease,
              }}
            >
              <h2
                id="sinais-capilares-title"
                className="font-display text-[clamp(2.1rem,3.4vw,4rem)] font-light leading-[1.1] tracking-[-0.055em]"
              >
                <span className="block">
                  Entender a origem
                </span>

                <span
                  className={`${scriptFont.className} block pb-3 text-[1.5em] leading-[0.9] tracking-normal text-[#B69268]`}
                >
                  faz a diferença.
                </span>
              </h2>

              <p className="mt-8 max-w-[530px] text-[16px] font-light leading-[1.85] text-[#625B55] sm:text-[17px]">
                Queda de cabelo, afinamento dos fios e
                alterações no couro cabeludo podem estar
                associados a diferentes condições. Uma
                investigação clínica permite compreender
                melhor cada caso e orientar a abordagem
                adequada.
              </p>
            </motion.div>

            {/* Acordeão */}
            <div className="mt-12 border-t border-[#DDD2C3] sm:mt-14">
              {sinais.map((sinal, index) => {
                const isActive = activeIndex === index;

                return (
                  <motion.div
                    key={sinal.number}
                    initial={{
                      opacity: 0,
                      y: prefersReducedMotion ? 0 : 18,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.3,
                    }}
                    transition={{
                      duration: 0.65,
                      delay: index * 0.07,
                      ease,
                    }}
                    className="border-b border-[#DDD2C3]"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setActiveIndex(
                          isActive ? null : index
                        )
                      }
                      aria-expanded={isActive}
                      aria-controls={`sinal-conteudo-${index}`}
                      className="group flex w-full items-center gap-5 py-6 text-left sm:gap-7 sm:py-7"
                    >
                      <span className="w-7 shrink-0 font-display text-[12px] tracking-[0.12em] text-[#B69268]">
                        {sinal.number}
                      </span>

                      <span
                        className={`min-w-0 flex-1 font-display text-[clamp(1.3rem,2vw,1.9rem)] font-light leading-[1.2] tracking-[-0.035em] transition-colors duration-300 ${
                          isActive
                            ? "text-[#A57E55]"
                            : "text-[#353535] group-hover:text-[#A57E55]"
                        }`}
                      >
                        {sinal.title}
                      </span>

                      <span
                        aria-hidden="true"
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isActive
                            ? "rotate-45 border-[#B69268] bg-[#B69268] text-white"
                            : "border-[#353535]/20 text-[#353535] group-hover:border-[#B69268] group-hover:text-[#B69268]"
                        }`}
                      >
                        <Plus
                          size={17}
                          strokeWidth={1.5}
                        />
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isActive && (
                        <motion.div
                          id={`sinal-conteudo-${index}`}
                          key="content"
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
                            duration: prefersReducedMotion
                              ? 0
                              : 0.4,
                            ease,
                          }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-[490px] pb-7 pl-12 pr-8 text-[15px] font-light leading-[1.85] text-[#625B55] sm:pl-14 sm:text-[16px]">
                            {sinal.description}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.div
              initial={{
                opacity: 0,
                y: prefersReducedMotion ? 0 : 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{ duration: 0.8, ease }}
              className="mt-12"
            >
              <p className="mb-7 font-display text-[clamp(1.4rem,2vw,1.9rem)] font-light tracking-[-0.035em] text-[#353535]">
                Sua saúde capilar merece atenção especializada.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[60px] items-center justify-center gap-5 rounded-full bg-[#353535] px-9 py-5 text-[14px] font-semibold tracking-wide text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#A57E55] sm:px-11 sm:text-[15px]"
              >
                Agendar minha consulta

                <ArrowUpRight
                  size={19}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </motion.div>
          </div>

          {/* Fotografia editorial original */}
          <motion.div
            initial={{
              opacity: 0,
              x: prefersReducedMotion ? 0 : 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 1,
              ease,
            }}
            className="order-1 relative mx-auto w-full max-w-[620px] lg:order-2"
          >
            {/* Moldura deslocada */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-3 top-5 h-full w-full rounded-t-[220px] rounded-b-[12px] border border-[#C9A77A]/55 sm:-right-5 sm:top-7"
            />

            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[220px] rounded-b-[12px] bg-[#E7D8C6]">
              <Image
                src="/images/sinais-editorial.jpg"
                alt="Fotografia editorial relacionada à saúde capilar"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>

            {/* Assinatura editorial */}
            <div className="absolute bottom-8 left-0 bg-[#FAF9F6]/95 px-6 py-4 backdrop-blur-md sm:-left-8 sm:px-8">
              <span className="font-display text-[13px] font-medium tracking-[0.08em] text-[#353535]">
                Conhecimento que transforma a abordagem.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
