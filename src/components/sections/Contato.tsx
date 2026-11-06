
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

const whatsappUrl = `https://api.whatsapp.com/send?phone=5577999341034&text=${encodeURIComponent(message)}`;

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

        {/* Sombras botânicas animadas */}
        <motion.svg
          viewBox="0 0 480 760"
          fill="none"
          aria-hidden="true"
          className="absolute -left-[150px] top-[4%] h-[74%] w-[380px] origin-bottom-left text-[#756A55] opacity-[0.24] blur-[3px] sm:-left-[100px] sm:w-[460px] lg:-left-[75px] lg:opacity-[0.30]"
          animate={
            reducedMotion
              ? undefined
              : {
                  rotate: [-6, 5, -6],
                  x: [-15, 20, -15],
                  y: [4, -12, 4],
                }
          }
          transition={{
            duration: 13,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            d="M-20 760 C70 600 80 415 170 235 C205 162 245 94 315 25"
            stroke="currentColor"
            strokeWidth="9"
            strokeLinecap="round"
          />
          <path
            d="M87 546 C-10 515 -30 445 3 371 C78 383 116 444 87 546Z"
            fill="currentColor"
          />
          <path
            d="M124 415 C213 422 271 357 272 277 C181 282 135 333 124 415Z"
            fill="currentColor"
          />
          <path
            d="M165 289 C78 272 51 209 76 144 C148 160 180 217 165 289Z"
            fill="currentColor"
          />
          <path
            d="M220 161 C305 176 371 122 382 51 C296 45 241 88 220 161Z"
            fill="currentColor"
          />
          <path
            d="M61 622 C140 621 192 569 198 493 C126 497 78 535 61 622Z"
            fill="currentColor"
          />
        </motion.svg>

        <motion.svg
          viewBox="0 0 440 720"
          fill="none"
          aria-hidden="true"
          className="absolute -right-[180px] bottom-[-12%] h-[70%] w-[350px] origin-bottom-right -scale-x-100 text-[#897963] opacity-[0.19] blur-[5px] sm:-right-[115px] sm:w-[430px] lg:opacity-[0.24]"
          animate={
            reducedMotion
              ? undefined
              : {
                  rotate: [5, -5, 5],
                  x: [10, -18, 10],
                  y: [-5, 14, -5],
                }
          }
          transition={{
            duration: 17,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            d="M-10 740 C60 560 122 412 195 270 C240 170 275 110 335 15"
            stroke="currentColor"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M65 575 C-25 550 -40 475 -5 404 C70 423 100 480 65 575Z"
            fill="currentColor"
          />
          <path
            d="M126 426 C215 430 267 363 266 292 C184 293 139 350 126 426Z"
            fill="currentColor"
          />
          <path
            d="M180 301 C95 278 77 208 106 148 C172 172 201 228 180 301Z"
            fill="currentColor"
          />
          <path
            d="M250 154 C322 168 382 115 389 47 C320 45 273 82 250 154Z"
            fill="currentColor"
          />
        </motion.svg>

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
          className="max-w-[1050px] font-display text-[clamp(2.9rem,6.5vw,7.4rem)] font-light leading-[1.06] tracking-[-0.06em]"
        >
          Seu próximo passo
          <br />
          começa com
          <span
            className={`${scriptFont.className} ml-3 inline-block text-[1.25em] leading-[0.82] tracking-normal text-[#B58E69] sm:ml-5`}
          >
            clareza.
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
