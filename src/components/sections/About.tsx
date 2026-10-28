
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { ArrowUpRight, Play, X } from "lucide-react";
import { MonteCarlo } from "next/font/google";

const scriptFont = MonteCarlo({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const ease = [0.22, 1, 0.36, 1] as const;

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const [videoOpen, setVideoOpen] = useState(false);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [reducedMotion ? 0 : -35, reducedMotion ? 0 : 35]
  );

  useEffect(() => {
    if (!videoOpen) {
      videoRef.current?.pause();
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setVideoOpen(false);
      }

      if (event.key === "Tab") {
        const modal = document.getElementById(
          "elizabeth-video-modal"
        );

        if (!modal) return;

        const focusable = Array.from(
          modal.querySelectorAll<HTMLElement>(
            'button, video[controls], a[href], [tabindex]:not([tabindex="-1"])'
          )
        ).filter(
          (element) =>
            !element.hasAttribute("disabled") &&
            element.getAttribute("tabindex") !== "-1"
        );

        if (!focusable.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (
          event.shiftKey &&
          document.activeElement === first
        ) {
          event.preventDefault();
          last.focus();
        } else if (
          !event.shiftKey &&
          document.activeElement === last
        ) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
      videoRef.current?.pause();
      triggerRef.current?.focus();
    };
  }, [videoOpen]);

  return (
    <>
      <section
        ref={sectionRef}
        id="sobre"
        aria-labelledby="about-title"
        className="relative isolate overflow-hidden border-t-[10px] border-[#C5A27F] bg-[#F7F3EC] py-24 text-[#211C19] sm:py-28 lg:py-32"
      >
        {/* Iluminação lateral */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-28 top-[5%] h-[760px] w-[760px] rounded-full bg-[radial-gradient(circle,rgba(197,162,127,0.20)_0%,rgba(197,162,127,0.07)_38%,transparent_72%)] blur-3xl"
        />

        {/* Curvas orgânicas */}
        <motion.svg
          aria-hidden="true"
          viewBox="0 0 460 900"
          fill="none"
          className="pointer-events-none absolute -right-16 top-0 hidden h-full w-[420px] lg:block"
          animate={
            reducedMotion ? undefined : { y: [0, -18, 0] }
          }
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            d="M340 -100C50 130 90 355 285 510C475 660 340 800 100 980"
            stroke="#C5A27F"
            strokeWidth="1.5"
            opacity=".55"
          />
          <path
            d="M405 -80C135 155 150 380 340 540C505 685 390 845 170 990"
            stroke="#C5A27F"
            strokeWidth="1"
            opacity=".32"
          />
          <path
            d="M465 -50C230 180 215 410 390 575C530 715 445 875 240 1010"
            stroke="#C5A27F"
            strokeWidth=".8"
            opacity=".2"
          />
        </motion.svg>

        <div className="relative z-10 mx-auto grid w-full max-w-[1440px] items-center gap-14 px-6 sm:px-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 lg:px-16 xl:px-24">
          {/* Fotografia */}
          <motion.div
            initial={{
              opacity: 0,
              y: reducedMotion ? 0 : 50,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, ease }}
            className="relative mx-auto w-full max-w-[560px]"
          >
            <div className="relative h-[540px] overflow-hidden rounded-t-[220px] rounded-b-[12px] bg-[#E7D8C6] sm:h-[640px] lg:h-[740px]">
              <motion.div
                style={{ y: imageY }}
                className="absolute -inset-y-10 inset-x-0"
              >
                <Image
                  src="/images/foto6.jpg"
                  alt="Dra. Elizabeth Alicia"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover object-center"
                />
              </motion.div>

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#211C19]/30 via-transparent to-transparent" />

              {/* Placa editorial */}
              <div className="absolute bottom-6 left-6 right-6 z-10 sm:bottom-8 sm:left-8 sm:right-auto">
                <div className="inline-flex flex-col gap-1 rounded-[10px] border border-white/25 bg-[#211C19]/65 px-6 py-4 text-[#F7F3EC] shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl">
                  <span className="font-display text-[20px] font-light tracking-[-0.035em] sm:text-[23px]">
                    Elizabeth Alicia
                  </span>
                  <span className="text-[10px] font-medium tracking-[0.12em] text-[#E7D8C6]/85">
                  Farmacêutica • Tricologista   |   RQE 6445-95
                  </span>
                </div>
              </div>
            </div>

            {/* Moldura deslocada */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-5 -left-5 -z-10 h-[88%] w-[88%] rounded-t-[220px] rounded-b-[12px] border border-[#C5A27F]/55"
            />
          </motion.div>

          {/* Conteúdo */}
          <div className="relative flex min-w-0 flex-col items-start">
            
<motion.h2
  id="about-title"
  initial={{
    opacity: 0,
    y: reducedMotion ? 0 : 30,
  }}
  whileInView={{
    opacity: 1,
    y: 0,
  }}
  viewport={{ once: true, amount: 0.5 }}
  transition={{ duration: 0.9, ease }}
  className="w-full font-display font-light tracking-[-0.055em]"
>
  {/* Desktop */}
  <span className="hidden lg:block text-[clamp(2.2rem,3.3vw,3.8rem)] leading-[0.95]">
    <span className="block">Uma trajetória</span>
    <span className="block">
      guiada pelo{" "}
      <span
        className={`${scriptFont.className} relative -top-[2px] inline-block whitespace-nowrap text-[1.5em] leading-none tracking-normal text-[#B58E69]`}
      >
        cuidado.
      </span>
    </span>
  </span>

  {/* Mobile e tablet */}
  <span className="block lg:hidden text-[clamp(2.5rem,7vw,3.8rem)] leading-[1.05]">
    <span className="block">Uma trajetória</span>
    <span className="block">guiada pelo</span>
    <span
      className={`${scriptFont.className} -mt-3 block text-[1.55em] leading-[0.95] tracking-normal text-[#B58E69]`}
    >
      cuidado.
    </span>
  </span>
</motion.h2>


            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                delay: 0.25,
                ease,
              }}
              className="mt-8 h-px w-20 origin-left bg-[#C5A27F]"
            />

            {/* Biografia */}
            <motion.div
              initial={{
                opacity: 0,
                y: reducedMotion ? 0 : 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.9,
                delay: 0.15,
                ease,
              }}
              className="mt-8 max-w-[560px] space-y-5 text-[17px] font-light leading-[1.85] text-[#49372F]/85 sm:text-[18px] lg:text-[19px]"
            >
              <p>
                Farmacêutica especialista em estética,
                tricologia clínica e terapia capilar, a Dra.
                Elizabeth Alicia construiu sua trajetória
                unindo conhecimento científico e um olhar
                sensível para cada paciente.
              </p>

              <p>
                Sua jornada começou na farmácia, onde
                descobriu, na prática, que saúde e bem-estar
                caminham juntos. Foi na estética e,
                especialmente, na tricologia que encontrou
                uma forma de cuidar ainda mais próxima
                e individualizada.
              </p>

              <p>
                Hoje, sua atuação valoriza a escuta atenta
                e a construção de tratamentos que respeitam
                a história, a rotina e os objetivos de cada
                pessoa.
              </p>
            </motion.div>

            {/* Botão do vídeo */}
            <motion.button
              ref={triggerRef}
              type="button"
              onClick={() => setVideoOpen(true)}
              initial={{
                opacity: 0,
                y: reducedMotion ? 0 : 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.35,
                ease,
              }}
              className="group mt-9 inline-flex cursor-pointer items-center gap-4 border-b border-[#C5A27F]/55 pb-3 text-[12px] font-semibold tracking-wide text-[#49372F] transition-colors hover:text-[#B58E69]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#C5A27F]/50 transition-all duration-300 group-hover:border-[#B58E69] group-hover:bg-[#C5A27F]/10">
                <Play size={13} fill="currentColor" />
              </span>

              Conheça minha história

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </motion.button>
          </div>
        </div>
      </section>

      {/* Modal de vídeo */}
      <AnimatePresence>
        {videoOpen && (
          <motion.div
            id="elizabeth-video-modal"
            role="dialog"
            aria-modal="true"
            aria-label="Vídeo de apresentação da Dra. Elizabeth Alicia"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(event) => {
              if (event.target === event.currentTarget) {
                setVideoOpen(false);
              }
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#100D0B]/90 px-4 py-6 backdrop-blur-xl sm:px-8"
          >
            <motion.div
              initial={{
                opacity: 0,
                scale: reducedMotion ? 1 : 0.94,
                y: reducedMotion ? 0 : 25,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: reducedMotion ? 1 : 0.96,
                y: reducedMotion ? 0 : 15,
              }}
              transition={{
                duration: 0.5,
                ease,
              }}
              className="relative flex max-h-[90dvh] w-full max-w-[440px] flex-col"
            >
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => setVideoOpen(false)}
                aria-label="Fechar vídeo"
                className="absolute -right-2 -top-12 z-20 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-md transition-all hover:bg-white/20 sm:-right-14 sm:top-0"
              >
                <X size={20} />
              </button>

              <div className="relative aspect-[9/16] max-h-[82dvh] w-full overflow-hidden rounded-[20px] border border-[#C5A27F]/30 bg-black shadow-[0_30px_100px_rgba(0,0,0,0.55)]">
                <video
                  ref={videoRef}
                  src="/videos/aboutvideo.mp4"
                  controls
                  autoPlay
                  playsInline
                  preload="metadata"
                  className="h-full w-full object-contain"
                >
                  Seu navegador não suporta reprodução de vídeo.
                </video>
              </div>

              <p className="mt-4 text-center text-[12px] tracking-wide text-[#E7D8C6]/75">
                Conheça a história da Dra. Elizabeth Alicia
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
