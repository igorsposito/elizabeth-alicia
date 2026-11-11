
"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { MonteCarlo } from "next/font/google";

const scriptFont = MonteCarlo({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const ease = [0.22, 1, 0.36, 1] as const;

const message =
  "Olá! Vim pelo site da Dra. Elizabeth Alicia e gostaria de agendar uma consulta. Poderia me informar sobre os horários disponíveis?";

const whatsappUrl = `https://api.whatsapp.com/send?phone=5577998151743&text=${encodeURIComponent(message)}`;

export default function Contato() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="contato"
      aria-labelledby="contato-title"
      className="relative isolate flex min-h-[680px] scroll-mt-20 items-center overflow-hidden bg-[#F7F3EC] py-28 text-[#353535] sm:min-h-[760px] sm:py-36 lg:min-h-[850px]"
    >
      {/* Pedra clara: granulação mineral e veios discretos */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 1440 900"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter
              id="contato-stone-grain"
              x="0"
              y="0"
              width="100%"
              height="100%"
            >
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.025 0.06"
                numOctaves="4"
                seed="14"
                stitchTiles="stitch"
                result="mineral"
              />
              <feColorMatrix
                in="mineral"
                type="saturate"
                values="0"
              />
            </filter>

            <linearGradient
              id="contato-stone-base"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
            >
              <stop offset="0%" stopColor="#F7F3EC" />
              <stop offset="52%" stopColor="#EEE6DB" />
              <stop offset="100%" stopColor="#F9F6F1" />
            </linearGradient>
          </defs>

          <rect
            width="1440"
            height="900"
            fill="url(#contato-stone-base)"
          />

          <rect
            width="1440"
            height="900"
            filter="url(#contato-stone-grain)"
            opacity="0.18"
          />

          <g fill="none" strokeLinecap="round">
            <path
              d="M-90 200 C170 270 270 90 490 180 S840 340 1030 225 S1310 150 1530 210"
              stroke="#C3AD99"
              strokeWidth="3"
              opacity="0.18"
            />
            <path
              d="M-90 208 C170 278 270 98 490 188 S840 348 1030 233 S1310 158 1530 218"
              stroke="#FFFFFF"
              strokeWidth="10"
              opacity="0.26"
            />
            <path
              d="M-90 720 C210 590 350 780 620 675 S1060 590 1530 750"
              stroke="#B8A18D"
              strokeWidth="4"
              opacity="0.13"
            />
            <path
              d="M-90 729 C210 599 350 789 620 684 S1060 599 1530 759"
              stroke="#FFFFFF"
              strokeWidth="12"
              opacity="0.2"
            />
            <path
              d="M1060 -80 C920 140 1180 310 1080 520 S1040 820 1270 1000"
              stroke="#BBA590"
              strokeWidth="2"
              opacity="0.11"
            />
          </g>
        </svg>

        <div className="absolute inset-0 bg-[#F7F3EC]/35" />

        {/* Iluminação ambiente */}
        <motion.div
          className="absolute -left-[18%] top-[4%] h-[70%] w-[48%] rounded-full bg-[#FFFDF7]/70 blur-[100px]"
          animate={
            reducedMotion
              ? undefined
              : {
                  x: [0, 70, 0],
                  opacity: [0.4, 0.8, 0.4],
                }
          }
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF9]/10 via-transparent to-[#E4D8C9]/10" />
        <div className="absolute inset-x-0 top-0 h-px bg-[#C5A27F]/20" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1180px] flex-col items-center px-6 text-center sm:px-10 lg:px-16">


<motion.h2
  id="contato-title"
  initial={{
    opacity: 0,
    y: reducedMotion ? 0 : 35,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{
    once: true,
    amount: 0.35,
  }}
  transition={{
    duration: 0.9,
    ease,
  }}
    className="w-full max-w-[1180px] font-display text-[clamp(3rem,8vw,3rem)] font-light leading-[1.15] tracking-[-0.06em] lg:text-[6rem]"
>
  <span className="block lg:whitespace-nowrap">
    Resultados consistentes
  </span>

  <span className="block lg:whitespace-nowrap">
    começam com uma condução
  </span>

  <span
    className={`${scriptFont.className} block pb-3 text-[1.35em] leading-[1.1] tracking-normal text-[#B58E69] lg:whitespace-nowrap`}
  >
    individualizada.
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
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.85,
            delay: 0.15,
            ease,
          }}
          className="mt-9 max-w-[570px] text-[16px] font-light leading-[1.9] text-[#625B55] sm:mt-11 sm:text-[18px]"
        >
          Entender o que acontece com seus fios e couro cabeludo
          é o primeiro passo para uma abordagem clínica
          individualizada. Agende sua consulta e inicie essa
          investigação.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: reducedMotion ? 0 : 20,
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
            duration: 0.85,
            delay: 0.25,
            ease,
          }}
          className="mt-10 flex w-full justify-center sm:mt-12"
        >
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-[66px] w-full max-w-[360px] items-center justify-center gap-4 rounded-full border border-[#211C19] bg-[#211C19] px-7 py-5 text-[14px] font-semibold tracking-wide text-[#F7F3EC] shadow-[0_16px_65px_rgba(33,28,25,0.12)] transition-all duration-300 hover:-translate-y-1 hover:border-[#49372F] hover:bg-[#49372F] hover:shadow-[0_22px_75px_rgba(33,28,25,0.18)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#49372F] sm:w-auto sm:max-w-none sm:px-10 sm:text-[15px]"
          >
            <MessageCircle size={19} strokeWidth={1.7} />
            Agendar minha consulta
            <ArrowUpRight
              size={19}
              strokeWidth={1.7}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.45,
          }}
          className="mt-5 text-[12px] font-light tracking-[0.025em] text-[#77716B]"
        >
          Atendimento e informações pelo WhatsApp
        </motion.p>
      </div>
    </section>
  );
}
