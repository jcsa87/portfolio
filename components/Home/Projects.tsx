"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
  Globe,
  Lock,
} from "lucide-react";
import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "versori padel",
    type: "saas de gestión",
    description:
      "sistema integral para gestión de reservas de canchas y torneos. api de pagos personalizada y administración multi-club.",
    technologies: ["Next.js", "Node.js", "supabase", "Tailwind"],
    // Ejemplo: GitHub privado (#), Demo activa
    links: { github: "#", demo: "https://ferpadel.versorisports.com" },
    gradient: "from-cyan-900 to-blue-900",
    color: "#0891b2",
    image: "/projects/versori.png",
  },
  {
    id: 2,
    title: "e-commerce pro",
    type: "plataforma de ventas",
    description:
      "tienda online con carrito persistente, pagos vía stripe y panel de administración.",
    technologies: ["Next.js", "TypeScript", "Stripe"],
    // Ejemplo: Ambos activos
    links: { github: "#", demo: "#" },
    gradient: "from-emerald-900 to-teal-900",
    color: "#059669",
  },
  {
    id: 3,
    title: "task manager",
    type: "mobile app",
    description:
      "organizador personal con sincronización cloud y modo offline.",
    technologies: ["React Native", "Firebase", "Redux"],
    // Ejemplo: Sin demo web (es app móvil)
    links: { github: "#", demo: "#" },
    gradient: "from-purple-900 to-fuchsia-900",
    color: "#9333ea",
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextProject = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1 === projects.length ? 0 : prev + 1));
  };

  const prevProject = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 < 0 ? projects.length - 1 : prev - 1));
  };

  // --- VARIANTES DE ENTRADA DE SECCIÓN (Scroll) ---
  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Retraso entre elementos
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  // --- VARIANTES DEL CARRUSEL (Internas) ---
  const sliderVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 50 : -50,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 50 : -50,
      opacity: 0,
    }),
  };

  const currentImage = projects[currentIndex].image;
  const currentGradient = projects[currentIndex].gradient;
  const currentColor = projects[currentIndex].color;
  const currentLinks = projects[currentIndex].links;

  // Función auxiliar para verificar si un link es válido
  const hasLink = (link: string) => link && link !== "#" && link !== "";

  // Manejador para repositorios privados
  const handlePrivateGithub = () => {
    alert(
      "Este repositorio es privado. Contáctame si deseas conocer más detalles sobre el código.",
    );
  };

  return (
    <motion.section
      id="proyectos"
      className="w-full min-h-screen flex flex-col justify-center py-12 md:py-24 px-4 bg-black text-white relative overflow-hidden scroll-mt-0 snap-start"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={sectionVariants}
    >
      {/* --- ATMÓSFERA INMERSIVA (GRADIENTE) --- */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vw] md:w-[1200px] md:h-[1200px] rounded-full mix-blend-screen"
          >
            {/* @ts-ignore */}
            {currentImage ? (
              <Image
                src={currentImage}
                alt="Atmosphere"
                fill
                className="object-cover blur-[150px] md:blur-[250px]"
                sizes="100vw"
              />
            ) : (
              <div
                className="w-full h-full blur-[150px] md:blur-[250px]"
                style={{
                  background: `radial-gradient(circle, ${currentColor} 0%, transparent 70%)`,
                }}
              />
            )}
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,black_100%)] z-10"></div>
        <div className="absolute inset-0 opacity-20 bg-[url('/noise.png')] mix-blend-overlay z-20"></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-30 h-full flex flex-col justify-center">
        {/* HEADER */}
        <motion.div
          variants={itemVariants}
          className="mb-8 md:mb-12 flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-6 gap-4"
        >
          <div>
            <h2 className="text-3xl md:text-5xl font-light lowercase tracking-tight mb-2">
              proyectos <span className="font-bold">destacados</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base font-light lowercase">
              soluciones reales con tecnologías modernas.
            </p>
          </div>

          <div className="hidden md:flex gap-2">
            <button
              onClick={prevProject}
              aria-label="Proyecto anterior"
              className="p-3 rounded-full border border-white/10 hover:bg-white text-white hover:text-black transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextProject}
              aria-label="Proyecto siguiente"
              className="p-3 rounded-full border border-white/10 hover:bg-white text-white hover:text-black transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>

        {/* TARJETA PRINCIPAL */}
        <motion.div
          variants={itemVariants}
          className="relative w-full bg-[#0a0a0a]/60 backdrop-blur-xl border border-white/10 rounded-sm overflow-hidden shadow-2xl flex flex-col md:block md:aspect-[21/9]"
        >
          <div className="relative w-full h-full md:absolute md:inset-0">
            <AnimatePresence
              initial={false}
              custom={direction}
              mode="popLayout"
            >
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={sliderVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                  opacity: { duration: 0.2 },
                }}
                className="relative md:absolute inset-0 grid grid-cols-1 md:grid-cols-2 h-full"
              >
                {/* IZQUIERDA: VISUAL */}
                <div className="relative h-[300px] md:h-full flex items-center justify-center bg-black/20 border-b md:border-b-0 md:border-r border-white/5 overflow-hidden group">
                  <div className="relative w-full h-full transform transition-transform duration-700 hover:scale-[1.01]">
                    <div className="w-full h-full flex items-center justify-center p-8 md:p-16">
                      {/* @ts-ignore */}
                      {projects[currentIndex].image ? (
                        <div className="relative w-full h-full shadow-2xl rounded-sm overflow-hidden">
                          <Image
                            src={projects[currentIndex].image}
                            alt={`Captura de ${projects[currentIndex].title}`}
                            fill
                            className="object-contain"
                            sizes="(max-width: 768px) 100vw, 50vw"
                          />
                        </div>
                      ) : (
                        <div
                          className={`w-full aspect-video rounded-md bg-gradient-to-br ${projects[currentIndex].gradient} relative shadow-2xl flex items-center justify-center`}
                        >
                          <div className="absolute inset-0 bg-white/5 opacity-50 backdrop-blur-sm"></div>
                          <div className="w-1/2 h-1/2 bg-black/20 border border-white/10 rounded-sm"></div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-white/50 border border-white/10 px-2 py-1 rounded-sm bg-black/80 backdrop-blur-md">
                      {projects[currentIndex].type}
                    </span>
                  </div>
                </div>

                {/* DERECHA: INFO */}
                <div className="p-6 md:p-12 flex flex-col justify-center relative min-h-[300px]">
                  <span className="hidden sm:block absolute top-0 right-4 md:right-6 text-[80px] md:text-[120px] font-bold text-white/[0.03] leading-none pointer-events-none select-none">
                    0{projects[currentIndex].id}
                  </span>

                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-4xl font-bold mb-3 md:mb-4 lowercase tracking-tight">
                      {projects[currentIndex].title}
                    </h3>
                    <p className="text-gray-400 font-light text-sm md:text-lg leading-relaxed lowercase mb-6 md:mb-8">
                      {projects[currentIndex].description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8 md:mb-10">
                      {projects[currentIndex].technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 md:px-3 md:py-1 text-[10px] md:text-xs border border-white/10 bg-white/5 text-gray-300 rounded-sm lowercase"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* --- BOTONES DE ACCIÓN --- */}
                    <div className="flex gap-4 items-center">
                      {/* Botón WEB */}
                      {hasLink(currentLinks.demo) ? (
                        <a
                          href={currentLinks.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-white border-b border-white pb-1 hover:opacity-70 transition-opacity text-xs md:text-sm font-medium uppercase tracking-wider group"
                        >
                          visitar web{" "}
                          <Globe
                            size={14}
                            className="group-hover:rotate-12 transition-transform"
                          />
                        </a>
                      ) : (
                        <span
                          className="flex items-center gap-2 text-white/30 cursor-not-allowed pb-1 text-xs md:text-sm font-medium uppercase tracking-wider"
                          title="En desarrollo o no disponible"
                        >
                          próximamente{" "}
                          <Globe size={14} className="opacity-50" />
                        </span>
                      )}

                      {/* Botón GITHUB */}
                      {hasLink(currentLinks.github) ? (
                        <a
                          href={currentLinks.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-xs md:text-sm font-medium uppercase tracking-wider group"
                        >
                          github <Github size={14} />
                        </a>
                      ) : (
                        <button
                          onClick={handlePrivateGithub}
                          className="flex items-center gap-2 text-gray-500 hover:text-white transition-colors text-xs md:text-sm font-medium uppercase tracking-wider group cursor-help"
                          title="Click para más info"
                        >
                          github <Lock size={14} />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>

        {/* 3. CONTROLES MÓVILES */}
        <motion.div
          variants={itemVariants}
          className="mt-6 flex md:hidden items-center justify-between border-t border-white/10 pt-4"
        >
          <span className="text-xs text-gray-500 font-mono">
            0{currentIndex + 1} / 0{projects.length}
          </span>
          <div className="flex gap-4">
            <button
              onClick={prevProject}
              aria-label="Proyecto anterior"
              className="p-3 bg-white/5 rounded-full text-white active:bg-white/20 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextProject}
              aria-label="Proyecto siguiente"
              className="p-3 bg-white/5 rounded-full text-white active:bg-white/20 transition-colors"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
