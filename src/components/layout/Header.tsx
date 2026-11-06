
"use client";

import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const whatsappMessage =
  "Olá, Elizabeth! Vim pelo seu site e gostaria de agendar uma consulta.";

const whatsapp =
  "https://api.whatsapp.com/send?phone=5577999341034&text=" +
  encodeURIComponent(whatsappMessage);

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Atuação", href: "#atuacao" },
  { label: "Resultados", href: "#resultados" },
  { label: "Dúvidas", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [headerVisible, setHeaderVisible] = useState(true);

  const lastScrollY = useRef(0);
  const reducedMotion = useReducedMotion();
  const prefersReducedMotion = reducedMotion === true;

  useEffect(() => {
    const updateScroll = () => {
      const currentY = window.scrollY;
      const previousY = lastScrollY.current;

      setScrolled(currentY > 24);

      if (currentY < 100) {
        setHeaderVisible(true);
      } else if (Math.abs(currentY - previousY) > 5) {
        setHeaderVisible(currentY < previousY);
      }

      lastScrollY.current = currentY;
    };

    updateScroll();

    window.addEventListener("scroll", updateScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    };

    window.addEventListener("keydown", onEscape);

    return () => {
      window.removeEventListener("keydown", onEscape);
    };
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      setHeaderVisible(true);
    }
  }, [menuOpen]);

  const handleNavigation = (
    event: MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const target = document.getElementById(
      href.replace("#", "")
    );

    setMenuOpen(false);
    setHeaderVisible(true);

    if (!target) return;

    event.preventDefault();

    const headerHeight = 84;
    const extraSpacing = 16;

    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      headerHeight -
      extraSpacing;

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });

    window.history.replaceState(null, "", href);
  };

  return (
    <>
      <motion.header
        initial={{
          y: prefersReducedMotion ? 0 : -30,
          opacity: 0,
        }}
        animate={{
          y: headerVisible || menuOpen ? 0 : "-110%",
          opacity: 1,
        }}
        transition={{
          duration: prefersReducedMotion ? 0 : 0.45,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow] duration-500 ${
          scrolled || menuOpen
            ? "border-b border-[#DDD2C3]/60 bg-[#FAF9F6]/90 shadow-[0_8px_30px_rgba(53,53,53,0.06)] backdrop-blur-xl"
            : "border-b border-transparent bg-[#FAF9F6]/10"
        }`}
      >
        <div className="mx-auto flex h-[84px] max-w-[1480px] items-center justify-between gap-8 px-6 md:px-10 xl:px-16">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(event) =>
              handleNavigation(event, "#inicio")
            }
            className="relative z-10 flex shrink-0 items-center"
            aria-label="Elizabeth Alícia — Início"
          >
            <Image
              src="/images/logob.png"
              alt="Elizabeth Alícia"
              width={220}
              height={90}
              priority
              className="h-auto max-h-[58px] w-[145px] object-contain object-left brightness-0 opacity-75 transition-opacity duration-300 hover:opacity-100 sm:max-h-[64px] sm:w-[175px]"
            />
          </a>

          {/* Navegação desktop */}
          <nav
            aria-label="Navegação principal"
            className="hidden items-center gap-7 xl:gap-9 lg:flex"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(event) =>
                  handleNavigation(event, link.href)
                }
                className="group relative flex items-center py-3 text-[14px] font-semibold tracking-[-0.015em] text-[#353535] transition-colors duration-300 hover:text-[#A57E55]"
              >
                <span className="relative z-10 transition-transform duration-300 group-hover:-translate-y-[2px]">
                  {link.label}
                </span>

                {/* Linha champagne animada */}
                <span
                  aria-hidden="true"
                  className="absolute bottom-[5px] left-0 h-[2px] w-full origin-left scale-x-0 rounded-full bg-[#B69268] opacity-0 transition-all duration-300 ease-out group-hover:scale-x-100 group-hover:opacity-100"
                />

                {/* Brilho suave no hover */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -inset-x-3 inset-y-0 -z-0 rounded-full bg-[#C9A77A]/0 blur-lg transition-colors duration-300 group-hover:bg-[#C9A77A]/10"
                />
              </a>
            ))}
          </nav>

          {/* Ações */}
          <div className="flex items-center gap-4">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden items-center gap-3 rounded-full border border-[#353535] bg-[#353535] px-6 py-[14px] text-[12px] font-semibold tracking-wide text-white shadow-[0_6px_20px_rgba(53,53,53,0.10)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#A57E55] hover:bg-[#A57E55] hover:shadow-[0_10px_25px_rgba(165,126,85,0.18)] sm:inline-flex"
            >
              Agendar minha consulta

              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            {/* Menu mobile */}
            <button
              type="button"
              aria-label={
                menuOpen ? "Fechar menu" : "Abrir menu"
              }
              aria-expanded={menuOpen}
              aria-controls="menu-mobile"
              onClick={() => setMenuOpen((open) => !open)}
              className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-[#353535]/20 bg-white/40 text-[#353535] transition-colors hover:bg-[#EEEAE3] lg:hidden"
            >
              {menuOpen ? (
                <X size={21} />
              ) : (
                <Menu size={21} />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Menu mobile */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="menu-mobile"
            role="dialog"
            aria-label="Menu de navegação"
            aria-modal="true"
            initial={{
              opacity: 0,
              y: prefersReducedMotion ? 0 : -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: prefersReducedMotion ? 0 : -20,
            }}
            transition={{
              duration: prefersReducedMotion ? 0 : 0.3,
            }}
            className="fixed inset-0 z-40 flex flex-col justify-center overflow-y-auto bg-[#FAF9F6] px-8 pt-20 lg:hidden"
          >
            <nav
              aria-label="Navegação móvel"
              className="flex flex-col gap-7"
            >
              {links.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={(event) =>
                    handleNavigation(event, link.href)
                  }
                  initial={{
                    opacity: 0,
                    x: prefersReducedMotion ? 0 : -20,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: prefersReducedMotion
                      ? 0
                      : index * 0.07,
                  }}
                  className="font-display text-4xl font-light tracking-tight text-[#353535] transition-colors hover:text-[#B69268]"
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="mt-12 flex w-fit items-center gap-3 rounded-full bg-[#353535] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#A57E55]"
            >
              Agendar minha consulta
              <ArrowUpRight size={17} />
            </a>

            <div className="pointer-events-none absolute bottom-8 left-8 right-8 h-px bg-[#DDD2C3]/70" />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
