
"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { MonteCarlo } from "next/font/google";

const scriptFont = MonteCarlo({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const ease = [0.22, 1, 0.36, 1] as const;

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  const reducedMotion = useReducedMotion();
  const prefersReducedMotion = reducedMotion === true;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [
      prefersReducedMotion ? 0 : -30,
      prefersReducedMotion ? 0 : 30,
    ]
  );

  const scrollToAtuacao = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    const target = document.getElementById("atuacao");

    if (!target) return;

    event.preventDefault();

    target.scrollIntoView({
      behavior: prefersReducedMotion ? "instant" : "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", "#atuacao");
  };

  return (
    <section
      ref={sectionRef}
      id="sobre"
      aria-labelledby="about-title"
      className="relative isolate overflow-hidden bg-[#F7F4EF] py-24 text-[#353535] sm:py-28 lg:py-32"
    >
      {/* Iluminação sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-[8%] h-[760px] w-[760px] rounded-full bg-[radial-gradient(circle,rgba(201,167,122,0.10)_0%,transparent_70%)]"
      />

      {/* Curvas decorativas laterais */}
      <motion.svg
        aria-hidden="true"
        viewBox="0 0 460 900"
        fill="none"
        className="pointer-events-none absolute -right-16 top-0 hidden h-full w-[420px] lg:block"
        animate={
          prefersReducedMotion
            ? undefined
            : { y: [0, -12, 0] }
        }
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <path
          d="M340 -100C50 130 90 355 285 510C475 660 340 800 100 980"
          stroke="#C9A77A"
          strokeWidth="1.2"
          opacity=".38"
        />
        <path
          d="M405 -80C135 155 150 380 340 540C505 685 390 845 170 990"
          stroke="#C9A77A"
          strokeWidth="0.9"
          opacity=".22"
        />
      </motion.svg>

      <div className="relative z-10 mx-auto grid w-full max-w-[1440px] items-center gap-14 px-6 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-16 xl:px-24">
        {/* Fotografia original */}
        <motion.div
          initial={{
            opacity: 0,
            y: prefersReducedMotion ? 0 : 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.9,
            ease,
          }}
          className="relative mx-auto w-full max-w-[560px]"
        >
          <div className="relative h-[540px] overflow-hidden rounded-t-[220px] rounded-b-[12px] bg-[#E7D8C6] sm:h-[640px] lg:h-[740px]">
            <motion.div
              style={{ y: imageY }}
              className="absolute -inset-y-10 inset-x-0"
            >
              <Image
                src="/images/foto6.jpg"
                alt="Elizabeth Alicia em fotografia profissional"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover object-center"
              />
            </motion.div>

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

            {/* Card editorial compacto */}
            <div className="absolute bottom-6 left-6 right-6 z-10 sm:bottom-8 sm:left-8 sm:right-auto">
              <div className="inline-flex flex-col items-center rounded-[12px] border border-white/30 bg-[#FAF9F6]/90 px-5 py-3 text-center text-[#353535] shadow-[0_12px_40px_rgba(0,0,0,0.12)] backdrop-blur-xl sm:px-6">
                <span className="font-display text-[23px] font-light leading-[1.15] tracking-[-0.035em]">
                  Elizabeth Alicia
                </span>

                <span className="mt-1 text-[12px] font-medium leading-[1.3] text-[#766A60]">
                  Farmacêutica • Tricologia Clínica
                </span>

                <span className="mt-1 text-[12px] font-medium leading-[1.3] text-[#766A60]">
                  RQE 6445-95
                </span>
              </div>
            </div>
          </div>

          {/* Moldura deslocada */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-5 -left-5 -z-10 h-[88%] w-[88%] rounded-t-[220px] rounded-b-[12px] border border-[#C9A77A]/40"
          />
        </motion.div>

        {/* Conteúdo */}
        <div className="relative flex min-w-0 flex-col items-start">
          <motion.h2
            id="about-title"
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
              amount: 0.5,
            }}
            transition={{
              duration: 0.9,
              ease,
            }}
            className="w-full font-display font-light tracking-[-0.055em]"
          >
            <span className="block text-[clamp(2.7rem,3.6vw,4.2rem)] leading-[1.02]">
              Minha trajetória,
            </span>

            <span className="block text-[clamp(2.7rem,3.6vw,4.2rem)] leading-[1.05]">
              minha{" "}
              <span
                className={`${scriptFont.className} inline-block whitespace-nowrap text-[1.45em] leading-[0.85] tracking-normal text-[#B69268]`}
              >
                essência.
              </span>
            </span>
          </motion.h2>

          {/* Biografia */}
          <motion.div
            initial={{
              opacity: 0,
              y: prefersReducedMotion ? 0 : 25,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease,
            }}
            className="mt-9 max-w-[560px] space-y-6 text-[16px] font-normal leading-[1.9] text-[#615A54] sm:text-[17px] lg:text-[18px]"
          >
            <p>
              Sou farmacêutica e dedico minha atuação à
              tricologia clínica e à saúde capilar, unindo
              conhecimento científico, escuta atenta e um
              olhar individualizado para cada paciente.
            </p>

            <p>
              Acredito que cuidar da saúde dos cabelos e
              do couro cabeludo exige compreender muito
              mais do que os sinais visíveis. Cada pessoa
              tem sua própria história, suas necessidades
              e particularidades que precisam ser
              consideradas.
            </p>

            <p>
              Por isso, meu trabalho é pautado em uma
              avaliação cuidadosa e na construção de
              condutas individualizadas, sempre com
              responsabilidade, atenção e respeito a cada
              etapa do acompanhamento.
            </p>
          </motion.div>

          {/* Link para a próxima seção */}
          <motion.a
            href="#atuacao"
            onClick={scrollToAtuacao}
            initial={{
              opacity: 0,
              y: prefersReducedMotion ? 0 : 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.3,
              ease,
            }}
            className="group mt-10 inline-flex cursor-pointer items-center gap-4 border-b border-[#C9A77A]/55 pb-3 text-[13px] font-semibold tracking-wide text-[#353535] transition-colors hover:text-[#A57E55] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A57E55]"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#C9A77A]/55 transition-all duration-300 group-hover:translate-y-0.5 group-hover:border-[#A57E55] group-hover:bg-[#C9A77A]/10">
              <ArrowDown size={16} strokeWidth={1.7} />
            </span>

            Continue explorando

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
