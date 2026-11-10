
"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";
import { MonteCarlo } from "next/font/google";

const scriptFont = MonteCarlo({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

type Resultado = {
  id: number;
  categoria?: string;
  titulo: string;
  imagem: string;
};

const resultados: Resultado[] = [
  { id: 1, titulo: "Resultado 01", imagem: "/images/resultados/resultado-01.jpg" },
  { id: 2, titulo: "Resultado 02", imagem: "/images/resultados/resultado-02.jpg" },
  { id: 3, titulo: "Resultado 03", imagem: "/images/resultados/resultado-03.jpg" },
  { id: 4, titulo: "Resultado 04", imagem: "/images/resultados/resultado-04.jpg" },
  { id: 5, titulo: "Resultado 05", imagem: "/images/resultados/resultado-05.jpg" },
  { id: 6, titulo: "Resultado 06", imagem: "/images/resultados/resultado-06.jpg" },
  { id: 7, titulo: "Resultado 07", imagem: "/images/resultados/resultado-07.jpg" },
  { id: 8, titulo: "Resultado 08", imagem: "/images/resultados/resultado-08.jpg" },
  { id: 9, titulo: "Resultado 09", imagem: "/images/resultados/resultado-09.jpg" },
  { id: 10, titulo: "Resultado 10", imagem: "/images/resultados/resultado-10.jpg" },
  { id: 11, titulo: "Resultado 11", imagem: "/images/resultados/resultado-11.jpg" },
];

const ease = [0.22, 1, 0.36, 1] as const;

// Tempo para percorrer uma sequência completa de 11 fotos.
const DURACAO_CARROSSEL = 90;

function FotoResultado({
  resultado,
  ampliada = false,
}: {
  resultado: Resultado;
  ampliada?: boolean;
}) {
  const [erro, setErro] = useState(false);

  if (erro) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center gap-3 bg-[#EAE2D8] px-6 text-center">
        <span className="font-display text-[clamp(3rem,6vw,5rem)] font-light tracking-[-0.07em] text-[#C5A27F]/60">
          {String(resultado.id).padStart(2, "0")}
        </span>
        <span className="text-[11px] tracking-[0.13em] text-[#8D7C6C] uppercase">
          Imagem em preparação
        </span>
      </div>
    );
  }

  return (
    <Image
      src={resultado.imagem}
      alt={
        resultado.categoria
          ? `${resultado.titulo} — ${resultado.categoria}`
          : resultado.titulo
      }
      fill
      sizes={
        ampliada
          ? "(max-width: 768px) 100vw, 80vw"
          : "(max-width: 640px) 70vw, (max-width: 1024px) 40vw, 28vw"
      }
      className={
        ampliada
          ? "object-contain"
          : "object-cover transition-transform duration-700 group-hover:scale-[1.045]"
      }
      onError={() => setErro(true)}
    />
  );
}

export default function Resultados() {
  const reducedMotion = useReducedMotion();
  const prefersReducedMotion = reducedMotion === true;

  const [selecionado, setSelecionado] = useState<number | null>(null);
  const [pausado, setPausado] = useState(false);
  const [distancia, setDistancia] = useState(0);

  const grupoRef = useRef<HTMLDivElement>(null);
  const faixaRef = useRef<HTMLDivElement>(null);

  const indiceSelecionado = resultados.findIndex(
    (item) => item.id === selecionado
  );

  const resultadoSelecionado =
    indiceSelecionado >= 0 ? resultados[indiceSelecionado] : null;

  const navegar = (direcao: number) => {
    if (indiceSelecionado < 0) return;

    const proximo =
      (indiceSelecionado + direcao + resultados.length) % resultados.length;

    setSelecionado(resultados[proximo].id);
  };

  // Mede a largura real da primeira sequência para garantir
  // uma repetição contínua, sem saltos.
  useEffect(() => {
    if (!grupoRef.current || !faixaRef.current) return;

    const atualizarDistancia = () => {
      const grupo = grupoRef.current;
      const faixa = faixaRef.current;

      if (!grupo || !faixa) return;

      const gap = parseFloat(getComputedStyle(faixa).columnGap) || 0;

      setDistancia(grupo.getBoundingClientRect().width + gap);
    };

    atualizarDistancia();

    const observer = new ResizeObserver(atualizarDistancia);

    observer.observe(grupoRef.current);
    observer.observe(faixaRef.current);

    return () => observer.disconnect();
  }, []);

  // Pausa o movimento enquanto uma foto está ampliada.
  const carrosselPausado = pausado || selecionado !== null;

  useEffect(() => {
    if (selecionado === null) return;

    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelecionado(null);

      if (event.key === "ArrowRight") {
        setSelecionado((atual) => {
          const index = resultados.findIndex((item) => item.id === atual);
          return resultados[(index + 1) % resultados.length].id;
        });
      }

      if (event.key === "ArrowLeft") {
        setSelecionado((atual) => {
          const index = resultados.findIndex((item) => item.id === atual);
          return resultados[
            (index - 1 + resultados.length) % resultados.length
          ].id;
        });
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = overflowAnterior;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selecionado]);

  const renderizarFotos = (copia: boolean) =>
    resultados.map((resultado) => (
      <button
        key={`${copia ? "copia" : "original"}-${resultado.id}`}
        type="button"
        tabIndex={copia ? -1 : 0}
        aria-hidden={copia ? true : undefined}
        onClick={() => setSelecionado(resultado.id)}
        className="group relative isolate aspect-[4/5] w-[220px] shrink-0 overflow-hidden bg-[#EAE2D8] text-left sm:w-[280px] lg:w-[330px]"
        aria-label={copia ? undefined : `Ampliar ${resultado.titulo}`}
      >
        <FotoResultado resultado={resultado} />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#211C19]/75 via-transparent to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 text-[#F7F3EC] sm:p-6">
          <div>
            {resultado.categoria && (
              <span className="block text-[10px] tracking-[0.12em] text-white/70 uppercase sm:text-[11px]">
                {resultado.categoria}
              </span>
            )}

            <h3 className="mt-1 font-display text-[18px] font-light sm:text-[23px]">
              {resultado.titulo}
            </h3>
          </div>

          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/40 transition-colors group-hover:bg-white group-hover:text-[#211C19]">
            <ArrowUpRight size={17} />
          </span>
        </div>
      </button>
    ));

  return (
    <section
      id="resultados"
      aria-labelledby="resultados-title"
      className="relative overflow-hidden bg-[#F7F3EC] py-24 text-[#49372F] sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-24">
        {/* Cabeçalho original */}
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <motion.h2
            id="resultados-title"
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.85, ease }}
            className="max-w-[760px] font-display text-[clamp(2.7rem,4.8vw,5.2rem)] font-light leading-[1.06] tracking-[-0.055em]"
          >
            Resultados que
            <br />
            <span
              className={`${scriptFont.className} inline-block text-[1.25em] leading-[0.1] tracking-normal text-[#B58E69]`}
            >
              contam histórias.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.12, ease }}
            className="max-w-[370px] text-[15px] font-light leading-[1.85] text-[#776A60] sm:text-[16px]"
          >
            Um espaço para conhecer registros de acompanhamentos
            e cuidados capilares realizados ao longo de diferentes jornadas.
          </motion.p>
        </div>

        {/* Carrossel contínuo com margens laterais */}
        <motion.div
          initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.85, ease }}
          className="relative mt-14 overflow-hidden lg:mt-20"
          onMouseEnter={() => setPausado(true)}
          onMouseLeave={() => setPausado(false)}
          onFocusCapture={() => setPausado(true)}
          onBlurCapture={(event) => {
            if (
              !event.currentTarget.contains(
                event.relatedTarget as Node | null
              )
            ) {
              setPausado(false);
            }
          }}
        >
          <div
            ref={faixaRef}
            className="flex w-max gap-3 sm:gap-5"
            style={{
              animation:
                !prefersReducedMotion && distancia > 0
                  ? `resultados-deslizar ${DURACAO_CARROSSEL}s linear infinite`
                  : "none",
              animationPlayState: carrosselPausado ? "paused" : "running",
              ["--distancia-carrossel" as string]: `-${distancia}px`,
            }}
          >
            <div ref={grupoRef} className="flex shrink-0 gap-3 sm:gap-5">
              {renderizarFotos(false)}
            </div>

            {!prefersReducedMotion && (
              <div
                className="flex shrink-0 gap-3 sm:gap-5"
                aria-hidden="true"
                inert
              >
                {renderizarFotos(true)}
              </div>
            )}
          </div>
        </motion.div>

        <p className="mt-7 max-w-[720px] text-[12px] leading-[1.8] text-[#65594F]">
          Imagens de casos individuais, quando disponibilizadas com autorização.
          Cada pessoa apresenta características e respostas próprias, e os registros
          não representam garantia de resultados semelhantes.
        </p>
      </div>

      {/* Visualizador original */}
      <AnimatePresence>
        {resultadoSelecionado && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Visualização de ${resultadoSelecionado.titulo}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-[#171311]/95 px-4 py-20 backdrop-blur-xl sm:px-12"
            onClick={() => setSelecionado(null)}
          >
            <button
              type="button"
              onClick={() => setSelecionado(null)}
              aria-label="Fechar álbum"
              className="absolute right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 text-white transition-colors hover:bg-white/15 sm:right-9 sm:top-8"
            >
              <X size={21} />
            </button>

            <div
              className="relative flex h-full w-full max-w-[1150px] flex-col items-center justify-center"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative min-h-0 w-full flex-1">
                <div className="group relative h-full w-full">
                  <FotoResultado
                    key={resultadoSelecionado.id}
                    resultado={resultadoSelecionado}
                    ampliada
                  />
                </div>
              </div>

              <div className="flex w-full items-center justify-between gap-4 pt-5 text-white">
                <div>
                  {resultadoSelecionado.categoria && (
                    <p className="text-[11px] tracking-[0.12em] text-white/55 uppercase">
                      {resultadoSelecionado.categoria}
                    </p>
                  )}

                  <p className="mt-1 font-display text-[21px] font-light sm:text-[26px]">
                    {resultadoSelecionado.titulo}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="mr-2 text-[12px] tabular-nums text-white/55">
                    {indiceSelecionado + 1} / {resultados.length}
                  </span>

                  <button
                    type="button"
                    aria-label="Resultado anterior"
                    onClick={() => navegar(-1)}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition-colors hover:bg-white/15"
                  >
                    <ArrowLeft size={19} />
                  </button>

                  <button
                    type="button"
                    aria-label="Próximo resultado"
                    onClick={() => navegar(1)}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 transition-colors hover:bg-white/15"
                  >
                    <ArrowRight size={19} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        @keyframes resultados-deslizar {
          from {
            transform: translate3d(0, 0, 0);
          }
          to {
            transform: translate3d(var(--distancia-carrossel), 0, 0);
          }
        }
      `}</style>
    </section>
  );
}
