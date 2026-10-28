
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "motion/react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const whatsappMessage =
  "Olá! Vim pelo site da Dra. Elizabeth Alícia e gostaria de agendar uma avaliação.";

const whatsapp = `https://api.whatsapp.com/send?phone=5577999341034&text=${encodeURIComponent(
  whatsappMessage
)}`;

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
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const updateScroll = () => setScrolled(window.scrollY > 24);

    updateScroll();
    window.addEventListener("scroll", updateScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", updateScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onEscape);

    return () =>
      window.removeEventListener("keydown", onEscape);
  }, [menuOpen]);

  const handleNavigation = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    const target = document.getElementById(
      href.replace("#", "")
    );

    if (!target) {
      setMenuOpen(false);
      return;
    }

    event.preventDefault();
    setMenuOpen(false);

    const headerHeight = 84;
    const extraSpacing = 16;

    const targetPosition =
      target.getBoundingClientRect().top +
      window.scrollY -
      headerHeight -
      extraSpacing;

    window.scrollTo({
      top: Math.max(0, targetPosition),
      behavior: reducedMotion ? "auto" : "smooth",
    });

    window.history.replaceState(null, "", href);
  };

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled || menuOpen
            ? "border-b border-white/10 bg-[#211c19]/90 shadow-xl shadow-black/10 backdrop-blur-xl"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-[84px] max-w-[1480px] items-center justify-between gap-8 px-6 md:px-10 xl:px-16">
          <a
            href="#inicio"
            onClick={(event) =>
              handleNavigation(event, "#inicio")
            }
            className="relative z-10 flex items-center"
            aria-label="Dra. Elizabeth Alícia — Início"
          >
            <Image
              src="/images/logob.png"
              alt="Elizabeth Alícia"
              width={220}
              height={90}
              priority
              className="h-auto max-h-[58px] w-[145px] object-contain object-left sm:max-h-[64px] sm:w-[175px]"
            />
          </a>

          <nav
            aria-label="Navegação principal"
            className="hidden items-center gap-9 lg:flex"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(event) =>
                  handleNavigation(event, link.href)
                }
                className="group relative py-2 text-[12px] font-medium tracking-wide text-white/75 transition-colors hover:text-white"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 h-px w-0 bg-[#c5a27f] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden items-center gap-3 rounded-full border border-[#c5a27f]/45 px-5 py-3 text-[11px] font-semibold tracking-wide text-[#f7f3ec] transition-all duration-300 hover:border-[#c5a27f] hover:bg-[#c5a27f] hover:text-[#211c19] sm:inline-flex"
            >
              Agendar atendimento
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

            <button
              type="button"
              aria-label={
                menuOpen ? "Fechar menu" : "Abrir menu"
              }
              aria-expanded={menuOpen}
              aria-controls="menu-mobile"
              onClick={() => setMenuOpen(!menuOpen)}
              className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white lg:hidden"
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

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            id="menu-mobile"
            role="dialog"
            aria-label="Menu de navegação"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-[#211c19] px-8 pt-20 lg:hidden"
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
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.07,
                  }}
                  className="font-display text-4xl font-light text-[#f7f3ec]"
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
              className="mt-12 flex w-fit items-center gap-3 rounded-full bg-[#c5a27f] px-7 py-4 text-sm font-semibold text-[#211c19]"
            >
              Agendar atendimento
              <ArrowUpRight size={17} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
