"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { Mail, ArrowDown } from "lucide-react";

// --- LOGO JCSA CONTROLADO ---
const nameData = [
  { id: 1, initial: "J", rest: "UAN" },
  { id: 2, initial: "C", rest: "RUZ" },
  { id: 3, initial: "S", rest: "ENICEN" },
  { id: 4, initial: "A", rest: "COSTA" },
];

interface LogoProps {
  isExpanded: boolean;
  onHoverStart: () => void;
  onHoverEnd: () => void;
}

function JcsaControlledLogo({
  isExpanded,
  onHoverStart,
  onHoverEnd,
}: LogoProps) {
  const revealVars = {
    collapsed: { width: 0, opacity: 0, x: -10, transition: { duration: 0.5 } },
    expanded: {
      width: "auto",
      opacity: 1,
      x: 0,
      transition: { type: "spring", stiffness: 200, damping: 20 },
    },
  };

  return (
    <motion.div
      className="flex items-center justify-center h-auto cursor-default select-none py-2"
      layout
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
    >
      {nameData.map((part) => (
        <motion.div
          key={part.id}
          className="flex items-baseline overflow-visible"
          layout
        >
          <motion.span
            layout
            className="text-5xl md:text-8xl font-bold tracking-tighter text-black uppercase leading-none"
          >
            {part.initial}
          </motion.span>
          <motion.span
            // Aquí está la clave: animate responde directamente al prop
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={revealVars}
            className="overflow-hidden flex items-baseline"
          >
            <span className="text-3xl md:text-5xl font-light text-gray-600 uppercase leading-none whitespace-nowrap pl-0.5 pr-1 py-1">
              {part.rest}
            </span>
          </motion.span>
        </motion.div>
      ))}
    </motion.div>
  );
}

// --- BOTÓN ---
function MagneticButton({ children, href, primary = false }: any) {
  return (
    <motion.a
      href={href}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`px-8 py-4 rounded-full text-sm font-medium tracking-widest uppercase transition-all duration-300 flex items-center gap-3 border ${
        primary
          ? "bg-black text-white border-transparent hover:bg-zinc-800 shadow-xl"
          : "bg-white text-black border-black/10 hover:border-black hover:bg-gray-50"
      }`}
    >
      {children}
    </motion.a>
  );
}

// --- HERO PRINCIPAL ---
export default function Hero({ startAnimation }: { startAnimation: boolean }) {
  const { scrollY } = useScroll();
  const yBackground = useTransform(scrollY, [0, 1000], [0, 400]);

  // CORRECCIÓN 1: Iniciamos en TRUE por defecto.
  // Así, apenas aparece el componente, ya está expandido.
  const [autoExpand, setAutoExpand] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // La lógica combinada:
  const shouldExpand = autoExpand || isHovered;

  // CORRECCIÓN 2: Usamos useEffect dependiente de startAnimation
  useEffect(() => {
    if (startAnimation) {
      // Si la intro terminó, aseguramos que esté expandido (por si acaso)
      setAutoExpand(true);

      // Y programamos el cierre automático
      const timer = setTimeout(() => {
        setAutoExpand(false);
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [startAnimation]);

  const textReveal = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { duration: 1, ease: [0.25, 0.46, 0.45, 0.94] },
    },
  };

  return (
    <motion.div
      className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center bg-white overflow-hidden py-10"
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* TEXTURA & FONDO */}
      <div className="absolute inset-0 z-20 pointer-events-none opacity-[0.04] mix-blend-multiply">
        <svg className="w-full h-full">
          <filter id="n">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.6"
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#n)" />
        </svg>
      </div>
      <motion.div
        style={{ y: yBackground }}
        className="absolute inset-0 pointer-events-none -z-10"
      >
        <motion.div className="absolute top-[10%] left-[10%] w-[30vw] h-[30vw] bg-black/5 rounded-full blur-3xl" />
      </motion.div>

      {/* CONTENIDO */}
      <motion.div
        className="text-center relative z-30 px-6 w-full max-w-7xl mx-auto flex flex-col items-center gap-8 md:gap-12"
        initial="hidden"
        // Si startAnimation es true, activamos la entrada
        animate={startAnimation ? "visible" : "hidden"}
        variants={{
          visible: { transition: { staggerChildren: 0.1 } },
          hidden: {},
        }}
      >
        {/* 1. LOGO INTERACTIVO */}
        <div className="flex flex-col items-center gap-4">
          <JcsaControlledLogo
            isExpanded={shouldExpand}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          />
          <motion.span
            variants={textReveal}
            className="text-[10px] md:text-xs font-medium tracking-[0.4em] text-gray-400 uppercase"
          >
            portafolio personal
          </motion.span>
        </div>

        {/* 2. TEXTOS GRANDES */}
        <div className="flex flex-col items-center">
          <div className="overflow-hidden px-4 py-1">
            <motion.h1
              variants={textReveal}
              className="text-5xl sm:text-7xl md:text-[8rem] font-light text-black tracking-tighter lowercase leading-none"
            >
              desarrollador
            </motion.h1>
          </div>
          <div className="overflow-hidden px-4 py-1">
            <motion.h1
              variants={textReveal}
              className="text-5xl sm:text-7xl md:text-[8rem] font-bold text-black tracking-tighter lowercase leading-none"
            >
              de software<span className="text-black/30">.</span>
            </motion.h1>
          </div>
        </div>

        {/* 3. BOTONES */}
        <motion.div
          variants={textReveal}
          className="flex flex-col sm:flex-row gap-6 pt-4 pb-20 md:pb-0"
        >
          <MagneticButton href="#contacto" primary>
            <Mail size={18} />
            <span>Contactar</span>
          </MagneticButton>
          <MagneticButton href="#proyectos">
            <span>Proyectos</span>
            <ArrowDown size={18} />
          </MagneticButton>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ opacity: startAnimation ? 1 : 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-[10px] tracking-widest text-gray-400 uppercase opacity-50">
          scroll
        </span>
        <div className="h-12 w-[1px] bg-gradient-to-b from-black/20 to-transparent" />
      </motion.div>
    </motion.div>
  );
}
