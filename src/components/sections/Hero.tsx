
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

const whatsapp =
  "https://api.whatsapp.com/send?phone=5577998151743&text=" +
  encodeURIComponent(
    "Olá, Elizabeth! Vim pelo seu site e gostaria de agendar uma consulta."
  );

function HairSculpture({
  reducedMotion,
}: {
  reducedMotion: boolean;
}) {
  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 0.7, x: 0 }}
      transition={{
        duration: 1.8,
        delay: 0.6,
        ease,
      }}
      className="pointer-events-none absolute bottom-[-75px] left-[-150px] z-[3] hidden h-[390px] w-[320px] lg:block xl:bottom-[-75px] xl:left-[-145px] xl:h-[440px] xl:w-[360px]"
    >
      <motion.div
        animate={
          reducedMotion
            ? undefined
            : {
                y: [0, -8, 0],
                rotate: [-2, 0, -2],
              }
        }
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="h-full w-full"
      >
        <svg
          viewBox="0 0 440 540"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full overflow-visible"
        >
          <defs>
            <linearGradient
              id="hair-metal-main"
              x1="45"
              y1="80"
              x2="380"
              y2="460"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFFDF8" />
              <stop offset="0.2" stopColor="#E6D3BA" />
              <stop offset="0.43" stopColor="#FFF9EF" />
              <stop offset="0.7" stopColor="#CDB393" />
              <stop offset="1" stopColor="#F5E8D6" />
            </linearGradient>

            <linearGradient
              id="hair-metal-light"
              x1="100"
              y1="50"
              x2="340"
              y2="480"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#FFFFFF" />
              <stop offset="0.35" stopColor="#F1E5D5" />
              <stop offset="0.7" stopColor="#D5BB9C" />
              <stop offset="1" stopColor="#FFF9F0" />
            </linearGradient>

            <filter
              id="hair-shadow"
              x="-40%"
              y="-40%"
              width="180%"
              height="180%"
            >
              <feGaussianBlur stdDeviation="10" />
            </filter>
          </defs>

          <path
            d="M-55 485 C90 390 310 500 365 235"
            stroke="#BDA78D"
            strokeOpacity="0.1"
            strokeWidth="30"
            filter="url(#hair-shadow)"
          />

          <path
            d="M-75 510 C100 495 278 414 280 275 C282 155 127 141 160 49 C183 -18 303 5 361 94"
            stroke="url(#hair-metal-main)"
            strokeWidth="23"
            strokeLinecap="round"
          />

          <path
            d="M-75 504 C100 489 270 409 272 275 C274 158 119 144 153 47 C177 -24 302 0 354 89"
            stroke="#FFFFFF"
            strokeOpacity="0.75"
            strokeWidth="3"
            strokeLinecap="round"
          />

          <path
            d="M-80 425 C80 390 215 345 224 240 C232 150 125 115 190 34"
            stroke="url(#hair-metal-light)"
            strokeWidth="10"
            strokeLinecap="round"
          />

          <path
            d="M-30 540 C120 470 325 435 336 300 C345 192 255 158 290 75"
            stroke="#DCC9B1"
            strokeOpacity="0.6"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();
  const prefersReducedMotion = reducedMotion === true;

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, prefersReducedMotion ? 0 : 30]
  );

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: prefersReducedMotion ? 0 : 30,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <section
      ref={heroRef}
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] w-full items-center overflow-hidden bg-[#FAF9F6] text-[#292929] lg:h-[100svh] lg:min-h-[680px]"
    >
      {/* Fotografia — enquadramento aprovado */}
      <motion.div
        style={{ y: imageY }}
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <motion.div
          initial={{
            opacity: 0,
            scale: prefersReducedMotion ? 1 : 1.025,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.4,
            ease,
          }}
          className="absolute inset-0"
        >
          <Image
            src="/images/herosection.png"
            alt="Elizabeth Alicia — Tricologia Clínica"
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover object-[83%_center] lg:object-[center_20%]"
          />
        </motion.div>
      </motion.div>

      {/* Mobile: sombra escura inferior, sem desbotar o rosto */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-transparent via-transparent to-[#161616]/65 lg:bg-gradient-to-r lg:from-[#FAF9F6]/85 lg:via-[#FAF9F6]/15 lg:to-transparent"
      />

      {/* Reforço de contraste somente atrás do conteúdo mobile */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-[1] h-[58%] bg-gradient-to-t from-[#111111]/45 via-[#111111]/10 to-transparent lg:hidden"
      />

      <HairSculpture reducedMotion={prefersReducedMotion} />

      {/* Conteúdo */}
      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1600px] items-end px-6 pb-6 pt-36 sm:px-10 sm:pb-8 lg:h-full lg:min-h-0 lg:items-center lg:px-16 lg:pb-12 lg:pt-24 xl:px-24">
        <div className="flex max-w-[720px] flex-col items-start">
          <motion.h1
            id="hero-title"
            initial="hidden"
            animate="visible"
            transition={{
              staggerChildren: 0.12,
              delayChildren: 0.2,
            }}
            className="font-display text-[clamp(2.8rem,5.1vw,5.8rem)] font-light leading-[0.92] tracking-[-0.055em] text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)] lg:text-[#292929] lg:drop-shadow-none"
          >
            <motion.span
              variants={fadeUp}
              transition={{ duration: 0.9, ease }}
              className="block"
            >
              Um novo olhar
            </motion.span>

            <motion.span
              variants={fadeUp}
              transition={{ duration: 0.9, ease }}
              className="block"
            >
              para a sua
            </motion.span>

            <motion.span
              variants={fadeUp}
              transition={{ duration: 0.9, ease }}
              className="block"
            >
              saúde capilar
            </motion.span>
          </motion.h1>

          {/* Texto cursivo */}
          <motion.div
            initial={{
              opacity: 0,
              x: prefersReducedMotion ? 0 : -25,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.65,
              ease,
            }}
            className="relative -mt-6"
          >
            <span
              className={`${scriptFont.className} block pr-8 text-[clamp(4.5rem,7.5vw,8rem)] leading-[0.95] text-[#E3BD91] drop-shadow-[0_2px_8px_rgba(0,0,0,0.25)] lg:text-[#B69268] lg:drop-shadow-none`}
            >
              com cuidado.
            </span>
          </motion.div>

          {/* Descrição */}
          <motion.p
            initial={{
              opacity: 0,
              y: prefersReducedMotion ? 0 : 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.85,
              ease,
            }}
            className="mt-6 max-w-[460px] text-[14px] font-light leading-[1.9] text-white/90 drop-shadow-[0_1px_5px_rgba(0,0,0,0.3)] sm:text-[15px] lg:text-[#5F5A55] lg:drop-shadow-none"
          >
            Tricologia clínica avançada, com uma abordagem
            individualizada para a saúde dos cabelos e do couro
            cabeludo.
          </motion.p>
          

          {/* Botões */}
          <motion.div
            initial={{
              opacity: 0,
              y: prefersReducedMotion ? 0 : 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1,
              ease,
            }}
            className="mt-8 flex flex-wrap items-center gap-6"
          >
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[56px] items-center justify-center gap-5 rounded-full bg-[#292929] px-7 py-4 text-[12px] font-semibold tracking-wide text-white shadow-[0_12px_35px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#45413E]"
            >
              Agendar minha consulta
              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#sobre"
              className="group inline-flex min-h-[48px] items-center gap-3 text-[12px] font-medium tracking-wide text-white/90 transition-colors hover:text-[#E3BD91] lg:text-[#55514D] lg:hover:text-[#A57E55]"
            >
              Conheça a profissional
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </motion.div>
          
        </div>
      </div>

      {/* Indicador de rolagem */}
      <motion.a
        href="#sobre"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.6,
          duration: 0.8,
        }}
        className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-[#77716B] transition-colors hover:text-[#A57E55] lg:flex"
      >
        Explore
        <ArrowDown size={14} />
      </motion.a>
    </section>
  );
}
