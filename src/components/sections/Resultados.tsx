
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, ArrowUpRight, X } from "lucide-react";
import { MonteCarlo } from "next/font/google";

const scriptFont = MonteCarlo({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

type Categoria = "Todos" | "Queda capilar" | "Densidade" | "Couro cabeludo";

type Resultado = {
  id: number;
  categoria: Exclude<Categoria, "Todos">;
  titulo: string;
  imagem: string;
};

const categorias: Categoria[] = [
  "Todos",
  "Queda capilar",
  "Densidade",
  "Couro cabeludo",
];

// Dados provisórios: substituir por casos reais autorizados.
const resultados: Resultado[] = [
  {
    id: 1,
    categoria: "Queda capilar",
    titulo: "Resultado 01",
    imagem: "/images/resultados/resultado-01.jpg",
  },
  {
    id: 2,
    categoria: "Densidade",
    titulo: "Resultado 02",
    imagem: "/images/resultados/resultado-02.jpg",
  },
  {
    id: 3,
    categoria: "Couro cabeludo",
    titulo: "Resultado 03",
    imagem: "/images/resultados/resultado-03.jpg",
  },
  {
    id: 4,
    categoria: "Queda capilar",
    titulo: "Resultado 04",
    imagem: "/images/resultados/resultado-04.jpg",
  },
  {
    id: 5,
    categoria: "Densidade",
    titulo: "Resultado 05",
    imagem: "/images/resultados/resultado-05.jpg",
  },
  {
    id: 6,
    categoria: "Couro cabeludo",
    titulo: "Resultado 06",
    imagem: "/images/resultados/resultado-06.jpg",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

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
      alt={`${resultado.titulo} — ${resultado.categoria}`}
      fill
      sizes={
        ampliada
          ? "(max-width: 768px) 100vw, 80vw"
          : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
  const [categoriaAtiva, setCategoriaAtiva] = useState<Categoria>("Todos");
  const [selecionado, setSelecionado] = useState<number | null>(null);

  const filtrados =
    categoriaAtiva === "Todos"
      ? resultados
      : resultados.filter((item) => item.categoria === categoriaAtiva);

  const indiceSelecionado = filtrados.findIndex(
    (item) => item.id === selecionado
  );

  const resultadoSelecionado =
    indiceSelecionado >= 0 ? filtrados[indiceSelecionado] : null;

  const navegar = (direcao: number) => {
    if (indiceSelecionado < 0) return;

    const proximo =
      (indiceSelecionado + direcao + filtrados.length) % filtrados.length;

    setSelecionado(filtrados[proximo].id);
  };

  useEffect(() => {
    if (selecionado === null) return;

    const overflowAnterior = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelecionado(null);

      if (event.key === "ArrowRight") {
        setSelecionado((atual) => {
          const index = filtrados.findIndex((item) => item.id === atual);
          return filtrados[(index + 1) % filtrados.length].id;
        });
      }

      if (event.key === "ArrowLeft") {
        setSelecionado((atual) => {
          const index = filtrados.findIndex((item) => item.id === atual);
          return filtrados[
            (index - 1 + filtrados.length) % filtrados.length
          ].id;
        });
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = overflowAnterior;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [selecionado, filtrados]);

  return (
    <section
      id="resultados"
      aria-labelledby="resultados-title"
      className="relative overflow-hidden bg-[#F7F3EC] py-24 text-[#49372F] sm:py-28 lg:py-36"
    >
      <div className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16 xl:px-24">
        {/* Cabeçalho */}
        <div className="flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
          <motion.h2
            id="resultados-title"
            initial={{ opacity: 0, y: reducedMotion ? 0 : 28 }}
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
            initial={{ opacity: 0, y: reducedMotion ? 0 : 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.12, ease }}
            className="max-w-[370px] text-[15px] font-light leading-[1.85] text-[#776A60] sm:text-[16px]"
          >
            Um espaço para conhecer registros de acompanhamentos
            e cuidados capilares realizados ao longo de diferentes jornadas.
          </motion.p>
        </div>

        {/* Filtros */}
        <div className="mt-14 flex flex-wrap gap-2 border-b border-[#49372F]/15 pb-5 lg:mt-20">
          {categorias.map((categoria) => (
            <button
              key={categoria}
              type="button"
              onClick={() => setCategoriaAtiva(categoria)}
              aria-pressed={categoriaAtiva === categoria}
              className={`rounded-full px-5 py-2.5 text-[12px] font-medium transition-colors duration-300 sm:text-[13px] ${
                categoriaAtiva === categoria
                  ? "bg-[#49372F] text-[#F7F3EC]"
                  : "text-[#776A60] hover:bg-[#E7D8C6]/60 hover:text-[#49372F]"
              }`}
            >
              {categoria}
            </button>
          ))}
        </div>

        {/* Galeria uniforme */}
        <motion.div
          layout
          className="mt-7 grid grid-cols-2 gap-3 sm:gap-5 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtrados.map((resultado, index) => (
              <motion.button
                key={resultado.id}
                layout
                type="button"
                onClick={() => setSelecionado(resultado.id)}
                initial={{ opacity: 0, y: reducedMotion ? 0 : 22 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.04,
                  ease,
                }}
                className="group relative isolate aspect-[4/5] w-full overflow-hidden bg-[#EAE2D8] text-left"
                aria-label={`Ampliar ${resultado.titulo}`}
              >
                <FotoResultado resultado={resultado} />

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#211C19]/75 via-transparent to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 text-[#F7F3EC] sm:p-6">
                  <div>
                    <span className="block text-[10px] tracking-[0.12em] text-white/70 uppercase sm:text-[11px]">
                      {resultado.categoria}
                    </span>
                    <h3 className="mt-1 font-display text-[18px] font-light sm:text-[23px]">
                      {resultado.titulo}
                    </h3>
                  </div>

                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/40 transition-colors group-hover:bg-white group-hover:text-[#211C19]">
                    <ArrowUpRight size={17} />
                  </span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        <p className="mt-7 max-w-[720px] text-[12px] leading-[1.8] text-[#8D7C6C]">
          Imagens de casos individuais, quando disponibilizadas com autorização.
          Cada pessoa apresenta características e respostas próprias, e os registros
          não representam garantia de resultados semelhantes.
        </p>
      </div>

      {/* Visualizador */}
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
                  <p className="text-[11px] tracking-[0.12em] text-white/55 uppercase">
                    {resultadoSelecionado.categoria}
                  </p>
                  <p className="mt-1 font-display text-[21px] font-light sm:text-[26px]">
                    {resultadoSelecionado.titulo}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <span className="mr-2 text-[12px] tabular-nums text-white/55">
                    {indiceSelecionado + 1} / {filtrados.length}
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
    </section>
  );
}
