
"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
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
      "Perceber um aumento na quantidade de fios durante o banho, ao pentear ou ao longo do dia pode indicar a necessidade de uma avaliação individualizada.",
  },
  {
    number: "02",
    title: "Afinamento dos fios",
    description:
      "A redução gradual da espessura ou da densidade dos cabelos pode ter diferentes causas. Compreender essas mudanças é importante para orientar o cuidado.",
  },
  {
    number: "03",
    title: "Alterações no couro cabeludo",
    description:
      "Coceira, descamação, oleosidade excessiva ou sensibilidade são sinais que merecem atenção e uma investigação adequada.",
  },
  {
    number: "04",
    title: "Fragilidade capilar",
    description:
      "Fios que quebram com facilidade, perdem resistência ou apresentam mudanças na textura podem se beneficiar de uma avaliação profissional.",
  },
];

const whatsappMessage =
  "Oi! Vim pelo site e gostaria de agendar uma avaliação para entender melhor minhas queixas capilares.";

const whatsappUrl = `https://api.whatsapp.com/send?phone=5577999341034&text=${encodeURIComponent(
  whatsappMessage
)}`;

export default function SinaisCapilares() {
  const reducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  return (
    <section
      id="sinais-capilares"
      aria-labelledby="sinais-capilares-title"
      className="relative isolate overflow-hidden bg-[#F7F3EC] py-24 text-[#49372F] sm:py-28 lg:py-36"
    >
      <div className="mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20 xl:gap-28">
          {/* Conteúdo editorial */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{
                opacity: 0,
                y: reducedMotion ? 0 : 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.85, ease }}
            >
              <h2
                id="sinais-capilares-title"
                className="font-display text-[clamp(2.1rem,3.4vw,4rem)] font-light leading-[1.1] tracking-[-0.055em]"
              >
                <span className="block">
                  O cuidado começa pela
                </span>
                <span
                  className={`${scriptFont.className} block text-[1.5em] leading-[0.5] tracking-normal text-[#B58E69]`}
                >
                  compreensão.
                </span>
              </h2>

              <p className="mt-8 max-w-[530px] text-[16px] font-light leading-[1.85] text-[#73645B] sm:text-[17px]">
                Mudanças na saúde capilar podem ter diferentes
                causas. Uma avaliação individualizada ajuda
                a compreender cada situação e a identificar
                os cuidados mais adequados.
              </p>
            </motion.div>

            {/* Lista interativa */}
            <div className="mt-12 border-t border-[#49372F]/15 sm:mt-14">
              {sinais.map((sinal, index) => {
                const isActive = activeIndex === index;

                return (
                  <motion.div
                    key={sinal.number}
                    initial={{
                      opacity: 0,
                      y: reducedMotion ? 0 : 18,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.65,
                      delay: index * 0.07,
                      ease,
                    }}
                    className="border-b border-[#49372F]/15"
                  >
                    <button
                      type="button"
                      onClick={() =>
                        setActiveIndex(isActive ? null : index)
                      }
                      aria-expanded={isActive}
                      aria-controls={`sinal-conteudo-${index}`}
                      className="group flex w-full items-center gap-5 py-6 text-left sm:gap-7 sm:py-7"
                    >
                      <span className="w-7 shrink-0 font-display text-[12px] tracking-[0.12em] text-[#B58E69]">
                        {sinal.number}
                      </span>

                      <span
                        className={`min-w-0 flex-1 font-display text-[clamp(1.3rem,2vw,1.9rem)] font-light leading-[1.2] tracking-[-0.035em] transition-colors duration-300 ${
                          isActive
                            ? "text-[#B58E69]"
                            : "text-[#49372F] group-hover:text-[#B58E69]"
                        }`}
                      >
                        {sinal.title}
                      </span>

                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isActive
                            ? "rotate-45 border-[#B58E69] bg-[#B58E69] text-white"
                            : "border-[#49372F]/20 text-[#49372F] group-hover:border-[#B58E69] group-hover:text-[#B58E69]"
                        }`}
                      >
                        <Plus size={17} strokeWidth={1.5} />
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
                            duration: reducedMotion ? 0 : 0.4,
                            ease,
                          }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-[490px] pb-7 pl-12 pr-8 text-[15px] font-light leading-[1.85] text-[#73645B] sm:pl-14 sm:text-[16px]">
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
                y: reducedMotion ? 0 : 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease }}
              className="mt-12"
            >
              <p className="mb-7 font-display text-[clamp(1.4rem,2vw,1.9rem)] font-light tracking-[-0.035em] text-[#49372F]">
                Um olhar atento faz toda a diferença.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex min-h-[60px] items-center justify-center gap-5 rounded-full bg-[#49372F] px-9 py-5 text-[14px] font-semibold tracking-wide text-[#F7F3EC] transition-all duration-300 hover:bg-[#B58E69] hover:text-[#211C19] sm:px-11 sm:text-[15px]"
              >
                Agendar minha avaliação

                <ArrowUpRight
                  size={19}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </motion.div>
          </div>

          {/* Fotografia editorial */}
          <motion.div
            initial={{
              opacity: 0,
              x: reducedMotion ? 0 : 35,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease }}
            className="order-1 relative mx-auto w-full max-w-[620px] lg:order-2"
          >
            {/* Moldura deslocada */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-3 top-5 h-full w-full rounded-t-[220px] rounded-b-[12px] border border-[#B58E69]/55 sm:-right-5 sm:top-7"
            />

            <div className="relative aspect-[4/5] overflow-hidden rounded-t-[220px] rounded-b-[12px] bg-[#E7D8C6]">
              <Image
                src="/images/sinais-editorial.jpg"
                alt="Fotografia editorial representando o cuidado com a saúde capilar"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>

            {/* Assinatura discreta */}
            <div className="absolute bottom-8 left-0 bg-[#F7F3EC]/95 px-6 py-4 backdrop-blur-md sm:-left-8 sm:px-8">
              <span className="font-display text-[13px] font-medium tracking-[0.08em] text-[#49372F]">
                Cuidado que começa pela escuta.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
