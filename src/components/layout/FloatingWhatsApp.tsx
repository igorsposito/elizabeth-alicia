
"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const message =
  "Olá! Vim pelo site da Dra. Elizabeth Alicia e gostaria de agendar uma avaliação.";

const href = `https://api.whatsapp.com/send?phone=5577999341034&text=${encodeURIComponent(message)}`;

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="currentColor"
      aria-hidden="true"
      className="h-6 w-6 sm:h-7 sm:w-7"
    >
      <path d="M16.01 3.2A12.72 12.72 0 0 0 5.04 22.35L3.2 28.8l6.62-1.74A12.8 12.8 0 1 0 16.01 3.2Zm0 23.28a10.4 10.4 0 0 1-5.3-1.45l-.38-.23-3.93 1.03 1.05-3.82-.25-.39A10.48 10.48 0 1 1 16 26.48Zm5.75-7.83c-.31-.16-1.84-.91-2.13-1.02-.29-.1-.5-.16-.71.16-.21.31-.82 1.02-1 1.23-.19.21-.37.23-.69.08-.32-.16-1.33-.49-2.54-1.57-.94-.83-1.57-1.86-1.75-2.18-.18-.31-.02-.48.14-.64.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.61-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.6s1.13 3.01 1.29 3.22c.16.21 2.22 3.39 5.38 4.75.75.32 1.33.51 1.78.65.75.24 1.44.21 1.98.13.6-.09 1.84-.75 2.1-1.48.26-.73.26-1.35.18-1.48-.08-.13-.29-.21-.6-.37Z" />
    </svg>
  );
}

export default function FloatingWhatsApp() {
  const reducedMotion = useReducedMotion();

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Agendar avaliação pelo WhatsApp"
      title="Agendar pelo WhatsApp"
      initial={reducedMotion ? false : { opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.5 }}
      whileHover={
        reducedMotion
          ? undefined
          : { y: -4, scale: 1.04 }
      }
      whileTap={{ scale: 0.96 }}
className="group fixed bottom-5 right-5 z-[90] flex h-[58px] w-[58px] items-center justify-center rounded-[20px] border border-[#F2DFC5]/75 bg-[#C5A27F] text-[#211C19] shadow-[0_12px_38px_rgba(75,50,27,0.24),inset_0_1px_0_rgba(255,255,255,0.45)] transition-colors duration-300 hover:bg-[#D9BC9A] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B58E69] sm:bottom-7 sm:right-7 sm:h-[64px] sm:w-[64px]"    >
      <span
        className="pointer-events-none absolute inset-[5px] rounded-[15px] border border-[#FFF4E6]/35"
        aria-hidden="true"
      />

      <span className="relative z-10">
        <WhatsAppIcon />
      </span>

      <span
        className="pointer-events-none absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#F7F3EC] bg-[#49372F] text-[#F7F3EC]"
        aria-hidden="true"
      >
        <ArrowUpRight size={11} strokeWidth={2.2} />
      </span>

      <span
        className="pointer-events-none absolute right-[calc(100%+14px)] hidden whitespace-nowrap rounded-xl border border-[#C5A27F]/40 bg-[#211C19] px-4 py-2.5 text-xs font-medium tracking-wide text-[#F7F3EC] opacity-0 shadow-xl transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 sm:block sm:translate-x-2"
        aria-hidden="true"
      >
        Agende sua avaliação
      </span>
    </motion.a>
  );
}
