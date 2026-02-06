"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface YinYangBrandIntroProps {
  onComplete: () => void;
}

export default function YinYangBrandIntro({
  onComplete,
}: YinYangBrandIntroProps) {
  const [isVisible, setIsVisible] = useState(true);

  // Estructura para el grid 2x2
  const initials = ["J", "C", "S", "A"];

  useEffect(() => {
    // 1. Entrada y lectura (total 3.5s)
    // Al cumplirse, activamos el "exit" de AnimatePresence
    const exitTimer = setTimeout(() => setIsVisible(false), 3500);

    // 2. Tiempo total para desmontar el componente (3.5s + 1s de animación de salida)
    const completeTimer = setTimeout(onComplete, 4500);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  // 1. Contenedor: Orquesta la entrada Y la salida
  const containerVariants = {
    hidden: { opacity: 1 }, // Opacidad 1 para que el fondo blanco tape todo desde el inicio
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.15, // Entrada: J -> C -> S -> A
        delayChildren: 0.5,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        when: "afterChildren", // IMPORTANTE: Espera a que las letras se vayan
        staggerChildren: 0.1, // Tiempo entre cada letra al salir
        staggerDirection: -1, // Salida Inversa: A -> S -> C -> J (Efecto "Rewind")
        duration: 0.5,
      },
    },
  };

  // 2. Variantes de las Letras: Entrada Pop y Salida Pop Inversa
  const letterVariants = {
    hidden: {
      scale: 0,
      opacity: 0,
      rotate: -15, // Pequeño giro al entrar
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
    exit: {
      scale: 0,
      opacity: 0,
      rotate: 15, // Gira al lado contrario al salir
      transition: {
        duration: 0.3,
        ease: "backIn", // "backIn" simula el rebote inverso (succión)
      },
    },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-white overflow-hidden"
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants}
        >
          {/* GRID 2x2 GIGANTE */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-0">
            {initials.map((letter, index) => (
              <motion.div
                key={index}
                variants={letterVariants}
                className="flex items-center justify-center overflow-visible"
              >
                <span
                  className="
                    text-[12rem] md:text-[16rem] 
                    font-bold 
                    leading-[0.85] 
                    tracking-tighter 
                    text-black 
                    select-none
                  "
                >
                  {letter}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
