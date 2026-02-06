// components/SectionWrapper.tsx
"use client";

import { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`
        /* 1. Dimensiones */
        w-full 
        /* Cambiamos a min-h para que si el contenido es enorme, crezca y no se corte */
        min-h-[100dvh] 
        
        /* 2. Scroll y Alineación */
        snap-start 
        flex flex-col justify-center items-center 
        relative 
        /* IMPORTANTE: Quitamos overflow-hidden global para evitar cortes de sombras o tooltips */
        /* overflow-hidden <- ELIMINADO */
        
        /* 3. Clases de color */
        ${className}
      `}
    >
      {/* 4. Contenedor interno */}
      <div className="w-full max-w-7xl px-4 md:px-12 mx-auto z-10 relative py-10 md:py-0">
        {children}
      </div>
    </section>
  );
}
