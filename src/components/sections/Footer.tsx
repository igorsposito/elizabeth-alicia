
import Image from "next/image";
import {
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

const whatsappMessage =
  "Olá! Vim pelo site da Dra. Elizabeth Alícia e gostaria de saber mais sobre o agendamento de uma avaliação.";

const whatsappUrl = `https://api.whatsapp.com/send?phone=5577999341034&text=${encodeURIComponent(whatsappMessage)}`;

const navigation = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Áreas de atuação", href: "#atuacao" },
  { label: "Resultados", href: "#resultados" },
  { label: "Perguntas frequentes", href: "#faq" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#252525] text-[#F7F3EC]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_10%_0%,rgba(197,162,127,0.07),transparent_55%)]"
      />

      <div className="relative mx-auto w-full max-w-[1280px] px-6 pb-7 pt-16 sm:px-10 sm:pt-20 lg:px-16">
        <div className="grid gap-12 pb-16 md:grid-cols-[1.4fr_0.85fr_1fr] md:gap-12 lg:gap-20 lg:pb-20">
          {/* Identidade */}
          <div className="max-w-[360px]">
            <a
              href="#inicio"
              aria-label="Voltar ao início"
              className="group inline-flex flex-col items-start gap-1"
            >
              <Image
                src="/images/logob.png"
                alt="Elizabeth Alícia"
                width={240}
                height={110}
                className="h-auto w-[200px] object-contain object-left sm:w-[220px]"
                priority={false}
              />
            </a>

            <p className="mt-6 max-w-[320px] text-sm leading-[1.9] text-[#D0CBC5]">
              Um olhar individualizado para a saúde capilar,
              com atenção à sua história e às suas necessidades.
            </p>

            {/* Registro profissional */}
            <p className="mt-3 text-[13px] font-medium tracking-wide text-[#D9BC9A]">
              RQE 6445-95
            </p>

            <a
              href="https://www.instagram.com/elizabethalicia/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Dra. Elizabeth Alícia"
              className="group mt-5 inline-flex items-center gap-2.5 rounded-full border border-[#C5A27F]/30 bg-[#C5A27F]/[0.06] px-4 py-2.5 text-sm font-medium text-[#D9BC9A] transition-all duration-300 hover:border-[#C5A27F]/60 hover:bg-[#C5A27F]/[0.12] hover:text-[#F7F3EC]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect
                  width="20"
                  height="20"
                  x="2"
                  y="2"
                  rx="5"
                />
                <circle cx="12" cy="12" r="4" />
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>

              <span>@elizabethalicia</span>

              <ArrowUpRight
                size={14}
                strokeWidth={1.7}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          {/* Navegação oculta no mobile */}
          <nav
            aria-label="Navegação do rodapé"
            className="hidden md:block"
          >
            <h2 className="mb-6 text-sm font-semibold tracking-[-0.01em] text-[#F7F3EC]">
              Navegação
            </h2>

            <ul className="space-y-3.5">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-[#D0CBC5] transition-colors duration-300 hover:text-[#D9BC9A]"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contato */}
          <div>
            <h2 className="mb-6 text-sm font-semibold tracking-[-0.01em] text-[#F7F3EC]">
              Agendamento e contato
            </h2>

            <p className="max-w-[280px] text-sm leading-[1.85] text-[#D0CBC5]">
              Entre em contato para saber mais sobre a
              avaliação e os horários disponíveis.
            </p>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 inline-flex items-center gap-2.5 text-sm font-medium text-[#E1BC91] transition-colors hover:text-white"
            >
              <MessageCircle
                size={18}
                strokeWidth={1.7}
              />
              <span>Conversar pelo WhatsApp</span>
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>
        </div>

        {/* Créditos */}
        <div className="flex flex-col gap-5 border-t border-[#F7F3EC]/10 pt-7 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <p className="text-xs leading-relaxed text-[#AFA9A3]">
            © 2026 Dra. Elizabeth Alícia.
            Todos os direitos reservados.
          </p>

          <div className="flex items-center gap-3">
            <span className="text-[11px] text-[#AFA9A3]">
              Desenvolvido por
            </span>

            <a
              href="https://www.agavelab.com.br"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar o site da Ágave Lab"
              className="inline-flex items-center rounded-sm opacity-90 transition-opacity duration-300 hover:opacity-100"
            >
              <Image
                src="/images/logo-agave.png"
                alt="Ágave Lab"
                width={112}
                height={44}
                className="h-auto max-h-10 w-[100px] object-contain object-left"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
