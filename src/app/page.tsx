
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Atuacao from "@/components/sections/Atuacao";
import SinaisCapilares from "@/components/sections/SinaisCapilares";
import Jornada from "@/components/sections/Jornada";
import Resultados from "@/components/sections/Resultados";
import FAQ from "@/components/sections/FAQ";
import Contato from "@/components/sections/Contato";
import Footer from "@/components/sections/Footer";
import FloatingWhatsApp from "@/components/layout/FloatingWhatsApp";

export default function Home() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Atuacao />
        <SinaisCapilares />
        <Jornada />
        <Resultados />
        <FAQ />
        <Contato />
      </main>

      <Footer />
      <FloatingWhatsApp />

      <style>{`
        html {
          scroll-behavior: smooth;
          scroll-padding-top: 88px;
        }

        @media (prefers-reduced-motion: reduce) {
          html {
            scroll-behavior: auto;
          }
        }
      `}</style>
    </>
  );
}
