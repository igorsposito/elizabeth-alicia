"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
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
      "Uma abordagem dedicada à investigação e ao cuidado da saúde capilar, considerando as particularidades do couro cabeludo, dos fios e de cada paciente.",
    image: "/images/tricologia10.jpg",
    alt: "Atendimento especializado em tricologia clínica",
    featured: true,
    procedures: [
      "Avaliação de queixas e distúrbios capilares",
      "Acompanhamento de alopecias",
      "Cuidados relacionados à dermatite seborreica",
    ],
  },
  {
    number: "02",
    title: "Terapia Capilar",
    description:
      "Protocolos individualizados que valorizam a saúde do couro cabeludo e dos fios.",
    image: "/images/terapia-capilar10.jpg",
    alt: "Tratamento e terapia capilar",
    featured: false,
    procedures: [
      "Laser e LEDterapia capilar",
      "Microagulhamento capilar",
      "Cuidados e protocolos para o couro cabeludo",
    ],
  },
  {
    number: "03",
    title: "Estética",
    description:
      "Um olhar cuidadoso para a beleza, o bem-estar e a autoestima.",
    image: "/images/estetica.jpg",
    alt: "Cuidados estéticos individualizados",
    featured: false,
    procedures: [
      "Toxina botulínica (Botox)",
      "Limpeza de pele",
      "Microagulhamento facial",
      "Clareamento de manchas",
      "Tratamento de cicatrizes de acne",
      "Remoção de microvasos (PEIM)",
    ],
  },
] as const;

type Service = (typeof services)[number];

const whatsappMessage =
  "Oi! Vim pelo site e gostaria de agendar uma avaliação com a Dra. Elizabeth.";

const whatsappUrl = `https://api.whatsapp.com/send?phone=5577999341034&text=${encodeURIComponent(whatsappMessage)}`;

function getServiceWhatsappUrl(title: string) {
  const message = `Oi! Vim pelo site e gostaria de saber mais sobre os procedimentos de ${title} com a Dra. Elizabeth.`;
  return `https://api.whatsapp.com/send?phone=5577999341034&text=${encodeURIComponent(message)}`;
}

export default function Atuacao() {
  const reducedMotion = useReducedMotion();
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useEffect(() => {
    if (!selectedService) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedService(null);
    };
    window.addEventListener("keydown", onEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onEscape);
    };
  }, [selectedService]);

  return (
    <section
      id="atuacao"
      aria-labelledby="atuacao-title"
      className="relative isolate scroll-mt-20 overflow-hidden bg-[#211C19] py-24 text-[#F7F3EC] sm:py-28 lg:py-32"
    >
      {/* Textura topográfica em toda a seção */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      >
        <motion.svg
          viewBox="0 0 1440 1600"
          preserveAspectRatio="xMidYMid slice"
          fill="none"
          className="absolute inset-0 h-full w-full"
          animate={
            reducedMotion
              ? undefined
              : { y: [-18, 18, -18], x: [-8, 8, -8] }
          }
          transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
        >
          <defs>
            <linearGradient
              id="atuacao-topographic-stroke"
              x1="0"
              y1="0"
              x2="1"
              y2="1"
            >
              <stop offset="0%" stopColor="#C5A27F" stopOpacity="0.03" />
              <stop offset="45%" stopColor="#C5A27F" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#C5A27F" stopOpacity="0.035" />
            </linearGradient>
          </defs>

          {Array.from({ length: 23 }, (_, index) => {
            const offset = index * 35;
            return (
              <path
                key={index}
                d={`
                  M ${-450 + offset} -200
                  C ${300 + offset} 200,
                    ${-350 + offset} 620,
                    ${280 + offset} 900
                  S ${650 + offset} 1450,
                    ${250 + offset} 1850
                `}
                stroke="url(#atuacao-topographic-stroke)"
                strokeWidth={index % 5 === 0 ? 1.1 : 0.7}
              />
            );
          })}
        </motion.svg>

        {/* Suaviza a textura nas laterais */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#211C19_0%,transparent_20%,transparent_80%,#211C19_100%)] opacity-50" />

        {/* Suaviza a textura nas extremidades */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#211C19_0%,transparent_15%,transparent_85%,#211C19_100%)] opacity-60" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-24">
        {/* Introdução */}
        <div className="mb-14 grid items-end gap-8 lg:mb-20 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <motion.h2
            id="atuacao-title"
            initial={{ opacity: 0, y: reducedMotion ? 0 : 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease }}
            className="font-display text-[clamp(2.8rem,5.2vw,5.8rem)] font-light leading-[1.03] tracking-[-0.055em]"
          >
            Ciência e cuidado
            <br />
            para cada
            <span
              className={`${scriptFont.className} ml-3 inline-block text-[1.25em] leading-[0.8] tracking-normal text-[#C5A27F]`}
            >
              história.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.15, ease }}
            className="max-w-[410px] text-[16px] font-light leading-[1.85] text-[#E7D8C6]/75 sm:text-[18px]"
          >
            Cada pessoa possui uma história única.
            Por isso, o cuidado começa com uma escuta
            atenta e uma abordagem pensada para suas
            necessidades.
          </motion.p>
        </div>

        {/* Grid de especialidades */}
        <div className="grid gap-5 lg:grid-cols-2 lg:gap-6">
          {services.map((service, index) => (
            <motion.article
              key={service.number}
              initial={{ opacity: 0, y: reducedMotion ? 0 : 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.85, delay: index * 0.1, ease }}
              className={`group relative isolate overflow-hidden rounded-[16px] border border-[#E7D8C6]/15 bg-[#332B27] ${
                service.featured
                  ? "min-h-[520px] lg:row-span-2 lg:min-h-[720px]"
                  : "min-h-[340px] lg:min-h-[348px]"
              }`}
            >
              {/* Imagem */}
              <Image
                src={service.image}
                alt={service.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.06]"
              />

              {/* Degradê para leitura */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#100D0B]/95 via-[#100D0B]/40 to-[#100D0B]/10" />

              {/* Número */}
              <span className="absolute left-6 top-6 z-10 font-display text-[13px] font-medium tracking-[0.16em] text-[#E7D8C6]/80 sm:left-8 sm:top-8">
                {service.number}
              </span>

              {/* Ícone */}
              <span className="absolute right-6 top-6 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:border-[#C5A27F] group-hover:bg-[#C5A27F] group-hover:text-[#211C19] sm:right-8 sm:top-8">
                <ArrowUpRight size={19} strokeWidth={1.5} />
              </span>

              {/* Conteúdo */}
              <div className="absolute inset-x-0 bottom-0 z-10 p-7 sm:p-9 lg:p-10">
                <h3
                  className={`font-display font-light tracking-[-0.045em] text-[#F7F3EC] ${
                    service.featured
                      ? "text-[clamp(2.3rem,3.5vw,4.3rem)]"
                      : "text-[clamp(2rem,2.6vw,3rem)]"
                  }`}
                >
                  {service.title}
                </h3>

                <div className="mt-4 h-px w-12 bg-[#C5A27F] transition-all duration-500 group-hover:w-20" />

                <p
                  className={`mt-5 font-light leading-[1.8] text-[#F7F3EC]/80 ${
                    service.featured
                      ? "max-w-[440px] text-[16px] sm:text-[18px]"
                      : "max-w-[400px] text-[15px] sm:text-[16px]"
                  }`}
                >
                  {service.description}
                </p>
              </div>

              {/* Interação sobre o card sem alterar o layout */}
              <button
                type="button"
                onClick={() => setSelectedService(service)}
                aria-label={`Ver procedimentos de ${service.title}`}
                className="absolute inset-0 z-20 cursor-pointer rounded-[16px] focus-visible:outline-2 focus-visible:outline-offset-[-4px] focus-visible:outline-[#C5A27F]"
              />
            </motion.article>
          ))}
        </div>

        {/* CTA final */}
        <motion.div
          initial={{ opacity: 0, y: reducedMotion ? 0 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease }}
          className="mt-14 flex flex-col gap-7 border-t border-[#E7D8C6]/15 pt-10 sm:flex-row sm:items-center sm:justify-between lg:mt-20"
        >
          <p className="max-w-[480px] font-display text-[clamp(1.5rem,2.2vw,2.3rem)] font-light leading-[1.3] tracking-[-0.035em]">
            Seu cuidado começa com
            <span className="text-[#C5A27F]">{" "}uma conversa.</span>
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex min-h-[60px] w-fit items-center justify-center gap-5 rounded-full border border-[#C5A27F]/60 px-9 py-5 text-[14px] font-semibold tracking-wide text-[#F7F3EC] transition-all duration-300 hover:border-[#C5A27F] hover:bg-[#C5A27F] hover:text-[#211C19] sm:px-11 sm:text-[15px]"
          >
            Agendar uma avaliação
            <ArrowUpRight
              size={19}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>

      {/* Modal dos procedimentos */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            className="fixed inset-0 z-[300] flex items-center justify-center bg-[#100D0B]/85 px-4 py-8 backdrop-blur-md sm:px-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setSelectedService(null);
            }}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="atuacao-modal-title"
              initial={{ opacity: 0, y: reducedMotion ? 0 : 24, scale: reducedMotion ? 1 : 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: reducedMotion ? 0 : 16, scale: reducedMotion ? 1 : 0.98 }}
              transition={{ duration: 0.4, ease }}
              className="relative max-h-[90vh] w-full max-w-[650px] overflow-y-auto rounded-[20px] border border-[#C5A27F]/25 bg-[#251E1A] p-7 shadow-2xl sm:p-11"
            >
              <button
                type="button"
                aria-label="Fechar procedimentos"
                onClick={() => setSelectedService(null)}
                className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-[#E7D8C6]/20 text-[#F7F3EC] transition-colors hover:bg-[#E7D8C6]/10"
              >
                <X size={20} />
              </button>

              <h3
                id="atuacao-modal-title"
                className="max-w-[490px] pr-10 font-display text-[clamp(2rem,4vw,3.4rem)] font-light leading-[1.15] tracking-[-0.045em] text-[#F7F3EC]"
              >
                {selectedService.title}
              </h3>
              <p className="mt-5 max-w-[520px] text-[15px] font-light leading-[1.8] text-[#E7D8C6]/75">
                {selectedService.description}
              </p>

              <div className="mt-8 border-t border-[#E7D8C6]/15">
                {selectedService.procedures.map((procedure, index) => (
                  <div
                    key={procedure}
                    className="flex items-start gap-5 border-b border-[#E7D8C6]/15 py-4"
                  >
                    <span className="min-w-6 pt-0.5 text-[12px] text-[#C5A27F]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[15px] leading-[1.6] text-[#F7F3EC]/90 sm:text-[16px]">
                      {procedure}
                    </span>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-[12px] leading-[1.7] text-[#E7D8C6]/55">
                Procedimentos citados em material anterior da profissional.
                Confirme a disponibilidade atual e a indicação durante o atendimento.
              </p>

              <a
                href={getServiceWhatsappUrl(selectedService.title)}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-8 inline-flex min-h-[56px] items-center justify-center gap-4 rounded-full bg-[#C5A27F] px-7 py-4 text-[14px] font-semibold text-[#211C19] transition-colors hover:bg-[#E7D8C6]"
              >
                Consultar pelo WhatsApp
                <ArrowUpRight
                  size={18}
                  className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
