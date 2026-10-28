
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

const whatsapp =
  "https://api.whatsapp.com/send?phone=5577999341034";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [0, reducedMotion ? 0 : 65]
  );

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: reducedMotion ? 0 : 30,
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
      className="relative isolate flex min-h-[100svh] w-full items-center overflow-hidden bg-[#211c19] text-[#f7f3ec] lg:h-[100svh] lg:min-h-[620px]"
    >
      {/* Imagem de fundo */}
      <motion.div
        style={{ y: imageY }}
        className="pointer-events-none absolute -inset-y-[5%] inset-x-0 z-0"
      >
        <motion.div
          initial={{
            opacity: 0,
            scale: reducedMotion ? 1 : 1.035,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 1.5,
            ease,
          }}
          className="relative h-full w-full"
        >
          <Image
            src="/images/herosection.png"
            alt="Composição fotográfica da Dra. Elizabeth Alicia"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-[77%_center] lg:object-center"
          />
        </motion.div>
      </motion.div>

      {/* Gradiente lateral */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-r from-[#211c19]/85 via-[#211c19]/35 to-transparent"
      />

      {/* Gradiente inferior */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-[#211c19]/25 via-transparent to-transparent"
      />

      {/* Iluminação champagne suave no lado esquerdo */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.2, delay: 0.4, ease }}
        className="pointer-events-none absolute inset-y-0 left-0 z-[2] w-[65%] overflow-hidden"
      >
        <motion.div
          animate={
            reducedMotion
              ? undefined
              : {
                  x: [0, 28, 0],
                  y: [0, -18, 0],
                }
          }
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-[22%] top-[10%] h-[80%] w-[85%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(197,162,127,0.105)_0%,rgba(197,162,127,0.035)_35%,transparent_70%)] blur-[55px]"
        />
      </motion.div>

      {/* Curvas orgânicas champagne */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.8, ease }}
        className="pointer-events-none absolute inset-y-0 left-0 z-[2] hidden w-[46%] overflow-hidden lg:block"
      >
        <motion.svg
          viewBox="0 0 700 900"
          preserveAspectRatio="xMinYMid slice"
          fill="none"
          className="absolute inset-0 h-full w-full"
          animate={
            reducedMotion
              ? undefined
              : {
                  x: [0, 10, 0],
                  y: [0, -14, 0],
                }
          }
          transition={{
            duration: 22,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <defs>
            <linearGradient
              id="hero-left-curve-one"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#C5A27F"
                stopOpacity="0"
              />
              <stop
                offset="40%"
                stopColor="#C5A27F"
                stopOpacity="0.22"
              />
              <stop
                offset="75%"
                stopColor="#C5A27F"
                stopOpacity="0.10"
              />
              <stop
                offset="100%"
                stopColor="#C5A27F"
                stopOpacity="0"
              />
            </linearGradient>

            <linearGradient
              id="hero-left-curve-two"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
            >
              <stop
                offset="0%"
                stopColor="#E7D8C6"
                stopOpacity="0"
              />
              <stop
                offset="55%"
                stopColor="#E7D8C6"
                stopOpacity="0.12"
              />
              <stop
                offset="100%"
                stopColor="#E7D8C6"
                stopOpacity="0"
              />
            </linearGradient>
          </defs>

          <path
            d="M -175 70 C 155 170, 225 415, 80 655 S -10 940, 240 1020"
            stroke="url(#hero-left-curve-one)"
            strokeWidth="1.2"
          />

          <path
            d="M -260 -35 C 120 85, 300 340, 165 595 S 60 865, 320 970"
            stroke="url(#hero-left-curve-two)"
            strokeWidth="0.8"
          />
        </motion.svg>
      </motion.div>

      {/* Conteúdo principal */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1600px] items-end px-6 pt-36 pb-16 sm:px-10 lg:items-center lg:px-16 lg:pt-16 lg:pb-8 xl:px-24">
        <div className="flex max-w-[740px] translate-y-[125px] flex-col items-start sm:translate-y-[45px] lg:translate-y-0">
          <motion.h1
            id="hero-title"
            initial="hidden"
            animate="visible"
            transition={{
              staggerChildren: 0.12,
              delayChildren: 0.2,
            }}
            className="font-display text-[clamp(2.8rem,5.1vw,5.7rem)] font-light leading-[0.88] tracking-[-0.055em]"
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

          {/* Destaque cursivo */}
          <motion.div
            initial={{
              opacity: 0,
              x: reducedMotion ? 0 : -25,
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
            className="relative -mt-8"
          >
            <span
              className={`${scriptFont.className} block pr-8 text-[clamp(4.5rem,7.5vw,8rem)] leading-[0.95] text-[#c5a27f]`}
            >
              com cuidado.
            </span>

            <div
              aria-hidden="true"
              className="absolute -bottom-1 left-3 h-px w-[65%] bg-gradient-to-r from-[#c5a27f]/70 to-transparent"
            />
          </motion.div>

          {/* Descrição */}
          <motion.p
            initial={{
              opacity: 0,
              y: reducedMotion ? 0 : 20,
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
            className="mt-6 max-w-[450px] text-[14px] font-light leading-[1.9] text-[#e7d8c6]/85 sm:text-[15px]"
          >
            Conheça a atuação da Dra. Elizabeth Alicia em
            tricologia clínica e descubra mais sobre o cuidado
            com a saúde dos seus cabelos.
          </motion.p>

          {/* Ações */}
          <motion.div
            initial={{
              opacity: 0,
              y: reducedMotion ? 0 : 20,
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
            className="mt-6 flex flex-wrap items-center gap-5"
          >
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex min-h-[56px] items-center justify-center gap-5 rounded-full bg-[#c5a27f] px-7 py-4 text-[12px] font-semibold tracking-wide text-[#211c19] shadow-[0_12px_45px_rgba(197,162,127,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#e0bc96] hover:shadow-[0_18px_55px_rgba(197,162,127,0.3)]"
            >
              Agendar atendimento

              <ArrowUpRight
                size={18}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#sobre"
              className="group inline-flex min-h-[48px] items-center gap-3 text-[12px] font-medium tracking-wide text-[#f7f3ec]/85 transition-colors hover:text-[#c5a27f]"
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
        className="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-3 text-[10px] uppercase tracking-[0.24em] text-[#e7d8c6]/65 transition-colors hover:text-[#c5a27f] lg:flex"
      >
        Explore
        <ArrowDown size={14} />
      </motion.a>
    </section>
  );
}
