
"use client";

import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { MonteCarlo } from "next/font/google";

const scriptFont = MonteCarlo({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const ease = [0.22, 1, 0.36, 1] as const;

const etapas = [
  {
    number: "01",
    title: "Consulta e investigação",
    description:
      "O atendimento começa com uma conversa sobre suas queixas, histórico e rotina, seguida da avaliação dos fios e do couro cabeludo.",
  },
  {
    number: "02",
    title: "Conduta individualizada",
    description:
      "A partir da avaliação clínica, são consideradas as possibilidades terapêuticas adequadas às necessidades identificadas.",
  },
  {
    number: "03",
    title: "Evolução e acompanhamento",
    description:
      "A resposta às condutas adotadas é observada ao longo do tempo, permitindo reavaliações e ajustes quando necessários.",
  },
];

const whatsappMessage =
  "Olá, Elizabeth! Vim pelo seu site e gostaria de agendar uma consulta para saber mais sobre o acompanhamento capilar.";

const whatsappUrl = `https://api.whatsapp.com/send?phone=5577999341034&text=${encodeURIComponent(
  whatsappMessage
)}`;

export default function Jornada() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 40%"],
  });

  const lineScale = useTransform(
    scrollYProgress,
    [0.1, 0.8],
    [0, 1]
  );

  return (
    <section
      ref={sectionRef}
      id="jornada"
      aria-labelledby="jornada-title"
      className="relative isolate overflow-hidden bg-[#EEEAE3] py-24 text-[#49372F] sm:py-28 lg:py-36"
    >
      {/* Textura arquitetônica extremamente sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49.95%,rgba(73,55,47,0.035)_50%,transparent_50.05%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-24">
        {/* Introdução */}
        <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <motion.h2
            id="jornada-title"
            initial={{
              opacity: 0,
              y: reducedMotion ? 0 : 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, ease }}
            className="max-w-[780px] font-display text-[clamp(2.7rem,4.8vw,5.3rem)] font-light leading-[1.08] tracking-[-0.055em]"
          >
            Da primeira consulta
            <span
              className={`${scriptFont.className} ml-12 inline-block text-[1.28em] leading-[0.5] tracking-normal text-[#B58E69]`}
            >
              a cada nova etapa.
            </span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: reducedMotion ? 0 : 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease,
            }}
            className="max-w-[410px] text-[16px] font-light leading-[1.85] text-[#73645B] sm:text-[18px]"
          >
            A saúde capilar exige uma investigação criteriosa, que considere o histórico, as queixas e as particularidades de cada paciente. É a partir dessa análise que são definidas as condutas mais adequadas
          </motion.p>
        </div>

        {/* Etapas */}
        <div className="relative mt-20 lg:mt-28">
          {/* Linha horizontal no desktop */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[73px] hidden h-px bg-[#49372F]/15 lg:block"
          />

          <motion.div
            aria-hidden="true"
            style={{
              scaleX: reducedMotion ? 1 : lineScale,
              transformOrigin: "left",
            }}
            className="absolute left-0 right-0 top-[73px] hidden h-px bg-[#B58E69] lg:block"
          />

          {/* Linha vertical no mobile */}
          <div
            aria-hidden="true"
            className="absolute bottom-12 left-[26px] top-8 w-px bg-[#49372F]/15 lg:hidden"
          />

          <motion.div
            aria-hidden="true"
            style={{
              scaleY: reducedMotion ? 1 : lineScale,
              transformOrigin: "top",
            }}
            className="absolute bottom-12 left-[26px] top-8 w-px bg-[#B58E69] lg:hidden"
          />

          <div className="grid gap-14 lg:grid-cols-3 lg:gap-12">
            {etapas.map((etapa, index) => (
              <motion.article
                key={etapa.number}
                initial={{
                  opacity: 0,
                  y: reducedMotion ? 0 : 35,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.85,
                  delay: index * 0.14,
                  ease,
                }}
                className="relative pl-20 lg:pl-0"
              >
                {/* Número */}
                <div className="relative flex h-[145px] items-start lg:h-[160px]">
                  <span className="font-display text-[clamp(5rem,8vw,8rem)] font-light leading-none tracking-[-0.09em] text-[#B58E69]">
                    {etapa.number}
                  </span>

                  {/* Marcador na linha */}
                  <span className="absolute bottom-[66px] -left-[60px] z-10 h-[13px] w-[13px] rounded-full border-[3px] border-[#EEEAE3] bg-[#B58E69] lg:bottom-[80px] lg:left-0" />
                </div>

                {/* Conteúdo */}
                <div className="lg:pt-5">
                  <h3 className="font-display text-[clamp(1.65rem,2.3vw,2.5rem)] font-light leading-[1.2] tracking-[-0.04em]">
                    {etapa.title}
                  </h3>

                  <div className="mt-5 h-px w-10 bg-[#B58E69]" />

                  <p className="mt-5 max-w-[360px] text-[15px] font-light leading-[1.85] text-[#73645B] sm:text-[16px]">
                    {etapa.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{
            opacity: 0,
            y: reducedMotion ? 0 : 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.85, ease }}
          className="mt-20 flex flex-col gap-8 border-t border-[#49372F]/20 pt-10 sm:mt-24 lg:flex-row lg:items-center lg:justify-between"
        >
          <p className="max-w-[560px] font-display text-[clamp(1.6rem,2.5vw,2.8rem)] font-light leading-[1.3] tracking-[-0.04em]">
            O próximo passo é a sua
            <span className="text-[#B58E69]">
              {" "}consulta.
            </span>
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-[60px] w-fit shrink-0 items-center justify-center gap-5 rounded-full bg-[#49372F] px-9 py-5 text-[14px] font-semibold tracking-wide text-[#F7F3EC] transition-all duration-300 hover:bg-[#B58E69] hover:text-[#211C19] sm:px-11 sm:text-[15px]"
          >
            Agendar minha consulta

            <ArrowUpRight
              size={19}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
