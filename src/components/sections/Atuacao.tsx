
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

const services = [
  {
    number: "01",
    title: "Tricologia Clínica",
    description:
      "Avaliação individualizada das alterações capilares, considerando a saúde do couro cabeludo, dos fios e as particularidades de cada paciente.",
    image: "/images/tricologia10.jpg",
    alt: "Atendimento em tricologia clínica",
    procedures: [
      "Avaliação de queixas e alterações capilares",
      "Acompanhamento de diferentes tipos de alopecia",
      "Cuidados relacionados à dermatite seborreica",
    ],
  },
  {
    number: "02",
    title: "Terapia Capilar",
    description:
      "Recursos e protocolos de cuidado capilar selecionados conforme as necessidades identificadas durante a avaliação.",
    image: "/images/terapia-capilar10.jpg",
    alt: "Atendimento e terapia capilar",
    procedures: [
      "Laser e LEDterapia capilar",
      "Microagulhamento capilar",
      "Protocolos individualizados para o couro cabeludo",
    ],
  },
] as const;

type Service = (typeof services)[number];

const whatsappMessage =
  "Olá, Elizabeth! Vim pelo seu site e gostaria de agendar uma consulta.";

const whatsappUrl =
  "https://api.whatsapp.com/send?phone=5577999341034&text=" +
  encodeURIComponent(whatsappMessage);

function getServiceWhatsappUrl(title: string) {
  const message = `Olá, Elizabeth! Vim pelo seu site e gostaria de agendar uma consulta para conversar sobre ${title.toLowerCase()}.`;

  return (
    "https://api.whatsapp.com/send?phone=5577999341034&text=" +
    encodeURIComponent(message)
  );
}

export default function Atuacao() {
  const reducedMotion = useReducedMotion();
  const prefersReducedMotion = reducedMotion === true;

  const [selectedService, setSelectedService] =
    useState<Service | null>(null);

  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const lastTriggerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!selectedService) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedService(null);
      }

      if (event.key === "Tab") {
        const modal = document.getElementById(
          "atuacao-modal"
        );

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
      lastTriggerRef.current?.focus();
    };
  }, [selectedService]);

  const openService = (
    service: Service,
    trigger: HTMLButtonElement
  ) => {
    lastTriggerRef.current = trigger;
    setSelectedService(service);
  };

  return (
    <section
      id="atuacao"
      aria-labelledby="atuacao-title"
      className="relative isolate scroll-mt-20 overflow-hidden bg-[#EEEAE3] py-24 text-[#353535] sm:py-28 lg:py-32"
    >
      {/* Iluminação decorativa */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -top-40 h-[700px] w-[700px] rounded-full bg-[radial-gradient(circle,rgba(201,167,122,0.14),transparent_70%)]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-60 -left-40 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.65),transparent_70%)]"
      />

      {/* Curvas laterais discretas */}
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
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease }}
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
            className="max-w-[430px] text-[16px] leading-[1.85] text-[#625B55] sm:text-[18px]"
          >
            Cada couro cabeludo e cada história capilar
            apresentam necessidades diferentes. Por isso,
            a avaliação individualizada orienta a escolha
            dos cuidados e o acompanhamento.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-7">
          {services.map((service, index) => (
            <motion.article
              key={service.number}
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
                amount: 0.15,
              }}
              transition={{
                duration: 0.85,
                delay: index * 0.1,
                ease,
              }}
              className="group relative isolate min-h-[490px] overflow-hidden rounded-[18px] bg-[#D8D0C5] sm:min-h-[560px] lg:min-h-[650px]"
            >
              <Image
                src={service.image}
                alt={service.alt}
                fill
                sizes="(max-width: 1023px) 100vw, 50vw"
                className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.055]"
              />

              {/* Contraste para os textos */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#171513]/95 via-[#171513]/35 to-transparent"
              />

              {/* Número */}
              <span className="absolute left-7 top-7 z-10 font-display text-[14px] tracking-[0.14em] text-white/85 sm:left-9 sm:top-9">
                {service.number}
              </span>

              {/* Ícone */}
              <span
                aria-hidden="true"
                className="absolute right-7 top-7 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-white/35 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:rotate-45 group-hover:border-[#C9A77A] group-hover:bg-[#C9A77A] group-hover:text-[#353535] sm:right-9 sm:top-9"
              >
                <ArrowUpRight
                  size={20}
                  strokeWidth={1.5}
                />
              </span>

              {/* Conteúdo */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-7 sm:p-10">
                <h3 className="max-w-[470px] font-display text-[clamp(2.4rem,3.5vw,4rem)] font-light leading-[1.08] tracking-[-0.045em] text-white">
                  {service.title}
                </h3>

                <p className="mt-5 max-w-[430px] text-[15px] leading-[1.8] text-white/85 sm:text-[17px]">
                  {service.description}
                </p>

                <div className="mt-6 flex items-center gap-3 text-[12px] font-semibold tracking-wide text-[#E6D2B6]">
                  Saiba mais
                  <ArrowUpRight size={16} />
                </div>
              </div>

              {/* Área clicável */}
              <button
                type="button"
                onClick={(event) =>
                  openService(service, event.currentTarget)
                }
                aria-label={`Conhecer os cuidados de ${service.title}`}
                className="absolute inset-0 z-20 cursor-pointer rounded-[18px] focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#C9A77A]"
              />
            </motion.article>
          ))}
        </div>

        {/* CTA inferior */}
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
            amount: 0.4,
          }}
          transition={{ duration: 0.8, ease }}
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

      {/* Modal dos cuidados */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 z-[300] flex items-center justify-center bg-[#171513]/80 px-4 py-8 backdrop-blur-md sm:px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                setSelectedService(null);
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
                duration: 0.4,
                ease,
              }}
              className="relative max-h-[90dvh] w-full max-w-[650px] overflow-y-auto rounded-[22px] border border-[#DDD2C3] bg-[#FAF9F6] p-7 shadow-[0_30px_100px_rgba(0,0,0,0.20)] sm:p-11"
            >
              <button
                ref={closeButtonRef}
                type="button"
                aria-label="Fechar informações"
                onClick={() => setSelectedService(null)}
                className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-[#DDD2C3] text-[#353535] transition-colors hover:bg-[#EEEAE3]"
              >
                <X size={20} />
              </button>

              <h3
                id="atuacao-modal-title"
                className="max-w-[490px] pr-10 font-display text-[clamp(2rem,4vw,3.4rem)] font-light leading-[1.15] tracking-[-0.045em] text-[#353535]"
              >
                {selectedService.title}
              </h3>

              <p className="mt-5 max-w-[520px] text-[16px] leading-[1.8] text-[#625B55]">
                {selectedService.description}
              </p>

              <div className="mt-8 border-t border-[#DDD2C3]">
                {selectedService.procedures.map(
                  (procedure, index) => (
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
                  )
                )}
              </div>

              <p className="mt-6 max-w-[500px] text-[13px] leading-[1.8] text-[#766F68]">
                A indicação dos cuidados depende de uma
                avaliação individualizada e das necessidades
                identificadas durante a consulta.
              </p>

              <a
                href={getServiceWhatsappUrl(
                  selectedService.title
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex min-h-[56px] items-center justify-center gap-4 rounded-full bg-[#353535] px-7 py-4 text-[13px] font-semibold text-white transition-all duration-300 hover:bg-[#A57E55]"
              >
                Agendar minha consulta

                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
