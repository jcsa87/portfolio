"use client";

import { motion } from "framer-motion";
import { Code, Database, Layers, GitBranch, Sparkles } from "lucide-react";

// Definimos la estructura de una habilidad
interface Skill {
  name: string;
  isProjectStack?: boolean;
}

interface SkillCategory {
  name: string;
  icon: any;
  skills: Skill[];
}

const skillCategories: SkillCategory[] = [
  {
    name: "languages",
    icon: Code,
    skills: [
      { name: "typescript", isProjectStack: true },
      { name: "javascript" },
      { name: "c#" },
      { name: "java" },
      { name: "php" },
      { name: "sql" },
    ],
  },
  {
    name: "frontend",
    icon: Layers,
    skills: [
      { name: "next.js", isProjectStack: true },
      { name: "react", isProjectStack: true },
      { name: "tailwind css", isProjectStack: true },
      { name: "framer motion", isProjectStack: true },
      { name: "html" },
      { name: "css" },
      { name: "bootstrap" },
    ],
  },
  {
    name: "backend",
    icon: Database,
    skills: [
      { name: ".net (c#)" },
      { name: "codeigniter (php)" },
      { name: "entity framework" },
      { name: "t-sql" },
    ],
  },
  {
    name: "databases",
    icon: Database,
    skills: [{ name: "sql server" }, { name: "mysql" }, { name: "postgresql" }],
  },
  {
    name: "tools",
    icon: GitBranch,
    skills: [
      { name: "git" },
      { name: "vercel", isProjectStack: true },
      { name: "figma" },
      { name: "visual studio" },
      { name: "photoshop" },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="habilidades"
      // AJUSTES DE SCROLL Y ALTURA:
      // min-h-screen: Intenta ocupar toda la pantalla.
      // py-12: Menos padding vertical para que entre el contenido.
      // scroll-mt-0: Alineación exacta al hacer click en el sidebar.
      className="w-full min-h-screen flex flex-col justify-center py-12 px-4 bg-white text-black relative overflow-hidden scroll-mt-0 snap-start"
    >
      {/* Fondo decorativo */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"></div>
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"></div>

      <div className="container mx-auto relative z-10 max-w-6xl h-full flex flex-col justify-center">
        {/* Header Compacto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8" // Reducido de mb-20 a mb-8
        >
          <h2 className="text-3xl md:text-4xl font-light mb-2 lowercase tracking-tight">
            mis <span className="font-bold">habilidades</span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto font-light lowercase">
            tecnologías y herramientas que utilizo.
          </p>
        </motion.div>

        {/* Grid Compacto (Gap reducido) */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {skillCategories.map((category, index) => (
            <SkillCard key={category.name} category={category} index={index} />
          ))}
        </div>

        {/* Footer Compacto */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center" // Reducido de mt-20 a mt-8
        >
          <p className="text-gray-400 text-[10px] font-light lowercase tracking-[0.2em] opacity-60">
            stack actualizado • 2026
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// --- SUBCOMPONENTES ---

function SkillCard({
  category,
  index,
}: {
  category: SkillCategory;
  index: number;
}) {
  const isInverse = index % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      // Padding reducido (p-5 en vez de p-8) para ahorrar altura
      className={`
        p-5 rounded-sm border-2 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full
        ${isInverse ? "bg-black text-white border-black" : "bg-white text-black border-black"}
      `}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center gap-3 mb-4">
        {/* Icono más pequeño */}
        <div
          className={`w-8 h-8 flex items-center justify-center border rounded-sm
            ${isInverse ? "bg-white text-black border-white" : "bg-black text-white border-black"}
          `}
        >
          <category.icon size={16} strokeWidth={1.5} />
        </div>

        <h3 className="text-lg font-bold lowercase tracking-tight">
          {category.name}
        </h3>
      </div>

      {/* Lista de habilidades */}
      <div className="flex flex-wrap gap-1.5">
        {category.skills.map((skill) => (
          <SkillBadge key={skill.name} skill={skill} isInverse={isInverse} />
        ))}
      </div>
    </motion.div>
  );
}

function SkillBadge({
  skill,
  isInverse,
}: {
  skill: Skill;
  isInverse: boolean;
}) {
  // Padding y texto reducidos ligeramente
  const baseStyles =
    "relative px-2 py-1 text-xs font-light border rounded-sm lowercase transition-all duration-300 cursor-default flex items-center gap-1 group select-none";

  const themeStyles = isInverse
    ? "bg-black text-white border-white/30 hover:border-white"
    : "bg-white text-black border-black/10 hover:border-black";

  const projectStyles = skill.isProjectStack
    ? isInverse
      ? "border-white/90 font-medium shadow-[0_0_5px_rgba(255,255,255,0.1)]"
      : "border-black/90 font-medium shadow-[0_0_5px_rgba(0,0,0,0.05)]"
    : "";

  return (
    <div className={`${baseStyles} ${themeStyles} ${projectStyles}`}>
      {skill.isProjectStack && (
        <Sparkles
          size={8}
          className={isInverse ? "text-yellow-300" : "text-amber-500"}
        />
      )}
      {skill.name}

      {/* TOOLTIP COMPACTO */}
      {skill.isProjectStack && (
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-1 w-max pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-50">
          <div
            className={`
            text-[9px] px-1.5 py-0.5 rounded-sm uppercase tracking-widest font-bold shadow-lg
            ${isInverse ? "bg-white text-black" : "bg-black text-white"}
          `}
          >
            usado aquí
            <div
              className={`
              absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent
              ${isInverse ? "border-t-white" : "border-t-black"}
            `}
            ></div>
          </div>
        </div>
      )}
    </div>
  );
}
