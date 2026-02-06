"use client";

import { useState } from "react";
import SidebarNav from "@/components/Home/SidebarNav";
import Hero from "@/components/Home/Hero";
import About from "@/components/Home/About";
import Skills from "@/components/Home/Skills";
import Projects from "@/components/Home/Projects";
import Contact from "@/components/Home/Contact";
import Footer from "@/components/Home/Footer";
import YinYangBrandIntro from "@/components/Intro/YinYangIntro";
import SectionWrapper from "@/components/SectionWrapper";

export default function Home() {
  // Este es el "Interruptor Maestro"
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <>
      {/* 1. LA INTRO: Se muestra solo si no ha terminado */}
      {!introComplete && (
        <YinYangBrandIntro onComplete={() => setIntroComplete(true)} />
      )}

      {/* 2. CONTENEDOR PRINCIPAL */}
      <main
        className={`
            w-full h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth scrollbar-hide
            bg-white transition-opacity duration-1000 
            ${introComplete ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
      >
        <SidebarNav />

        {/* SECCIÓN 1: INICIO (Le pasamos el disparador al Hero) */}
        <SectionWrapper id="inicio" className="bg-white">
          <Hero startAnimation={introComplete} />
        </SectionWrapper>

        {/* SECCIÓN 2: SOBRE MÍ */}
        <SectionWrapper id="sobre-mi" className="bg-black text-white">
          <About />
        </SectionWrapper>

        {/* SECCIÓN 3: HABILIDADES */}
        <SectionWrapper id="habilidades" className="bg-white">
          <Skills />
        </SectionWrapper>

        {/* SECCIÓN 4: PROYECTOS */}
        <SectionWrapper id="proyectos" className="bg-black text-white">
          <Projects />
        </SectionWrapper>

        {/* SECCIÓN 5: CONTACTO */}
        <SectionWrapper id="contacto" className="bg-white">
          <Contact />
        </SectionWrapper>

        {/* Footer (No es una sección completa, solo un cierre) */}
        <div className="snap-start bg-white">
          <Footer />
        </div>
      </main>
    </>
  );
}
