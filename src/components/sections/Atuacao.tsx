
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
} from "motion/react";
import { ArrowUpRight, X } from "lucide-react";
import { MonteCarlo } from "next/font/google";

const scriptFont = MonteCarlo({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const ease = [0.22, 1, 0.36, 1] as const;

const procedures = [
  "Avaliação de queixas e alterações capilares",
  "Acompanhamento de diferentes tipos de alopecia",
  "Cuidados relacionados à dermatite seborreica",
  "Laser e LEDterapia capilar",
  "Microagulhamento capilar",
  "Protocolos individualizados para o couro cabeludo",
];

const whatsappMessage =
  "Olá, Elizabeth! Vim pelo seu site e gostaria de agendar uma consulta.";

const whatsappUrl =
  "https://api.whatsapp.com/send?phone=5577999341034&text=" +
  encodeURIComponent(whatsappMessage);

export default function Atuacao() {
  const reducedMotion = useReducedMotion();
  const prefersReducedMotion = reducedMotion === true;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isModalOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const focusTimer = window.setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 30);

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModalOpen(false);
      }

      if (event.key !== "Tab") return;

      const modal = document.getElementById("atuacao-modal");
      if (!modal) return;

      const focusable = Array.from(
        modal.querySelectorAll<HTMLElement>(
          'button, a[href], [tabindex]:not([tabindex="-1"])'
        )
      ).filter(
        (element) =>
          !element.hasAttribute("disabled") &&
          element.getAttribute("tabindex") !== "-1"
      );

      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === last
      ) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      window.clearTimeout(focusTimer);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      triggerRef.current?.focus();
    };
  }, [isModalOpen]);

  return (
    <section
      id="atuacao"
      aria-labelledby="atuacao-title"
      className="relative isolate scroll-mt-20 overflow-hidden bg-[#EEEAE3] py-24 text-[#353535] sm:py-28 lg:py-32"
    >
      {/* Iluminação de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(201,167,122,0.14),transparent_70%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-60 -left-40 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.65),transparent_70%)]"
      />

      {/* Curvas laterais */}
      <svg
        aria-hidden="true"
        viewBox="0 0 460 900"
        fill="none"
        className="pointer-events-none absolute -right-28 top-0 hidden h-full w-[420px] lg:block"
      >
        <path
          d="M340 -100C50 130 90 355 285 510C475 660 340 800 100 980"
          stroke="#C9A77A"
          strokeWidth="1.2"
          opacity=".28"
        />
        <path
          d="M405 -80C135 155 150 380 340 540C505 685 390 845 170 990"
          stroke="#C9A77A"
          strokeWidth="0.8"
          opacity=".18"
        />
      </svg>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-24">
        {/* Introdução */}
        <div className="mb-14 grid items-end gap-8 lg:mb-16 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <motion.h2
            id="atuacao-title"
            initial={{
              opacity: 0,
              y: prefersReducedMotion ? 0 : 30,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.9,
              ease,
            }}
            className="font-display text-[clamp(2.8rem,5.2vw,5.5rem)] font-light leading-[1.04] tracking-[-0.055em]"
          >
            Ciência aplicada à
            <br />
            <span
              className={`${scriptFont.className} inline-block text-[1.25em] leading-[0.8] tracking-normal text-[#B69268]`}
            >
              saúde capilar.
            </span>
          </motion.h2>

          <motion.p
            initial={{
              opacity: 0,
              y: prefersReducedMotion ? 0 : 20,
            }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.8,
              delay: prefersReducedMotion ? 0 : 0.15,
              ease,
            }}
            className="max-w-[430px] text-[16px] leading-[1.85] text-[#625B55] sm:text-[18px]"
          >
            Cada couro cabeludo e cada história capilar
            apresentam necessidades diferentes. Por isso,
            a avaliação individualizada orienta a escolha
            dos cuidados e o acompanhamento.
          </motion.p>
        </div>

        {/* Card fixo com fotografia e painel */}
        <motion.article
          initial={{
            opacity: 0,
            y: prefersReducedMotion ? 0 : 35,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.9,
            ease,
          }}
          className="relative"
        >
          <div className="relative flex flex-col lg:min-h-[650px] lg:block">
            {/* Fotografia fixa */}
            <div className="relative z-20 h-[350px] overflow-hidden rounded-t-[22px] bg-[#D8D0C5] shadow-[12px_0_35px_-16px_rgba(45,35,25,0.35)] sm:h-[440px] lg:absolute lg:inset-y-0 lg:left-0 lg:h-auto lg:w-[43%] lg:rounded-[22px]">
              <Image
                src="/images/atuacao.png"
                alt="Cuidados em tricologia clínica"
                fill
                sizes="(max-width: 1023px) 100vw, 43vw"
                className="object-cover"
              />

              {/* Gradiente discreto */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#171513]/20 via-transparent to-transparent"
              />

              {/* Moldura delicada */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-[20px] rounded-[12px] border border-white/30 sm:inset-[28px]"
              />

              {/* Linha champagne */}
              <svg
                aria-hidden="true"
                viewBox="0 0 500 700"
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-0 h-full w-full"
              >
                <path
                  d="M-60 570 C 110 470, 210 625, 365 420 S 490 200, 565 95"
                  fill="none"
                  stroke="#E6D1B4"
                  strokeWidth="1.1"
                  strokeOpacity="0.65"
                />
              </svg>

              {/* Sombra na junção */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-y-0 right-0 hidden w-7 bg-gradient-to-l from-[#241B15]/15 to-transparent lg:block"
              />
            </div>

            {/* Painel branco fixo */}
            <div className="relative z-10 flex w-full flex-col justify-center rounded-b-[22px] bg-[#F8F6F2] px-7 py-11 shadow-[0_24px_85px_rgba(61,48,36,0.09)] sm:px-12 sm:py-14 lg:ml-[40%] lg:min-h-[650px] lg:w-[60%] lg:rounded-r-[22px] lg:rounded-l-none lg:pl-[9%] lg:pr-10 lg:py-14 xl:pl-[8%] xl:pr-14">
              <h3 className="font-display text-[clamp(2.6rem,4vw,4.5rem)] font-light leading-[1.05] tracking-[-0.055em] text-[#353535]">
                Tricologia
                <br />
                <span className="text-[#A9845F]">
                  Clínica.
                </span>
              </h3>

              <p className="mt-6 max-w-[520px] text-[15px] leading-[1.8] text-[#625B55] sm:text-[16px]">
                Uma abordagem individualizada que integra
                avaliação das alterações capilares,
                acompanhamento e recursos de terapia
                capilar, considerando a saúde do couro
                cabeludo, dos fios e as necessidades
                de cada paciente.
              </p>

              {/* Tópicos reunidos */}
              <div className="mt-8 border-t border-[#D9CEC1]">
                {procedures.map((procedure, index) => (
                  <div
                    key={procedure}
                    className="flex items-start gap-4 border-b border-[#D9CEC1]/75 py-3"
                  >
                    <span className="min-w-6 pt-0.5 text-[12px] font-medium text-[#A9845F]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-[13px] leading-[1.65] text-[#514B46] sm:text-[14px]">
                      {procedure}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <button
                  ref={triggerRef}
                  type="button"
                  onClick={() => setIsModalOpen(true)}
                  aria-haspopup="dialog"
                  className="group/button inline-flex min-h-[52px] items-center justify-center gap-5 rounded-full bg-[#353535] px-7 py-3.5 text-[13px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#A57E55] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#A57E55]"
                >
                  Saiba mais

                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.7}
                    className="transition-transform duration-300 group-hover/button:-translate-y-0.5 group-hover/button:translate-x-0.5"
                  />
                </button>
              </div>
            </div>
          </div>
        </motion.article>

        {/* CTA inferior */}
        <motion.div
          initial={{
            opacity: 0,
            y: prefersReducedMotion ? 0 : 25,
          }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{
            duration: prefersReducedMotion ? 0 : 0.8,
            ease,
          }}
          className="mt-14 flex flex-col gap-7 border-t border-[#C9A77A]/35 pt-10 sm:flex-row sm:items-center sm:justify-between lg:mt-16"
        >
          <p className="max-w-[530px] font-display text-[clamp(1.6rem,2.3vw,2.4rem)] font-light leading-[1.3] tracking-[-0.035em]">
            Um acompanhamento pensado para{" "}
            <span className="text-[#A57E55]">
              suas necessidades.
            </span>
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-[58px] w-fit items-center justify-center gap-5 rounded-full bg-[#353535] px-8 py-4 text-[13px] font-semibold text-white shadow-[0_10px_30px_rgba(53,53,53,0.10)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#A57E55] sm:px-10"
          >
            Agendar minha consulta

            <ArrowUpRight
              size={19}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>

      {/* Modal informativo */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 z-[300] flex items-center justify-center bg-[#171513]/80 px-4 py-8 backdrop-blur-md sm:px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.25,
            }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setIsModalOpen(false);
              }
            }}
          >
            <motion.div
              id="atuacao-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="atuacao-modal-title"
              initial={{
                opacity: 0,
                y: prefersReducedMotion ? 0 : 24,
                scale: prefersReducedMotion ? 1 : 0.97,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: prefersReducedMotion ? 0 : 16,
                scale: prefersReducedMotion ? 1 : 0.98,
              }}
              transition={{
                duration: prefersReducedMotion ? 0 : 0.4,
                ease,
              }}
              className="relative max-h-[90dvh] w-full max-w-[650px] overflow-y-auto rounded-[22px] border border-[#DDD2C3] bg-[#FAF9F6] p-7 shadow-[0_30px_100px_rgba(0,0,0,0.20)] sm:p-11"
            >
              <button
                ref={closeButtonRef}
                type="button"
                aria-label="Fechar informações"
                onClick={() => setIsModalOpen(false)}
                className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#DDD2C3] text-[#353535] transition-colors hover:bg-[#EEEAE3]"
              >
                <X size={20} />
              </button>

              <h3
                id="atuacao-modal-title"
                className="max-w-[490px] pr-10 font-display text-[clamp(2rem,4vw,3.4rem)] font-light leading-[1.15] tracking-[-0.045em] text-[#353535]"
              >
                Tricologia Clínica
              </h3>

              <p className="mt-5 max-w-[520px] text-[16px] leading-[1.8] text-[#625B55]">
                A avaliação individualizada permite
                compreender as alterações capilares e
                orientar os cuidados adequados a cada
                necessidade. Quando indicado, o acompanhamento
                pode incluir recursos e protocolos de
                terapia capilar.
              </p>

              <div className="mt-8 border-t border-[#DDD2C3]">
                {procedures.map((procedure, index) => (
                  <div
                    key={procedure}
                    className="flex items-start gap-5 border-b border-[#DDD2C3] py-5"
                  >
                    <span className="min-w-6 pt-0.5 text-[12px] font-medium text-[#A57E55]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-[15px] leading-[1.6] text-[#45403C] sm:text-[16px]">
                      {procedure}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-[13px] leading-[1.8] text-[#766F68]">
                A indicação dos cuidados depende de uma
                avaliação individualizada e das necessidades
                identificadas durante a consulta.
              </p>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex min-h-[56px] items-center justify-center gap-4 rounded-full bg-[#353535] px-7 py-4 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-[#A57E55]"
              >
                Agendar minha consulta
                <ArrowUpRight size={18} />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
