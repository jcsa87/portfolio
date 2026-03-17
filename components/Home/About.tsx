"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  GraduationCap,
  ArrowUpRight,
  BookOpen,
  Terminal,
  Activity,
} from "lucide-react";
import Image from "next/image";

// --- YIN-YANG (Sutil) ---
const YinYangBadge = () => {
  return (
    <motion.div
      className="w-8 h-8 opacity-50 hover:opacity-100 transition-opacity"
      title="el camino del medio"
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    >
      <svg viewBox="0 0 24 24" fill="none" className="text-white w-full h-full">
        <circle
          cx="12"
          cy="12"
          r="11.5"
          stroke="currentColor"
          strokeWidth="1"
        />

        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0V12C12 15.3137 14.6863 18 18 18C21.3137 18 24 15.3137 24 12C24 18.6274 18.6274 24 12 24ZM12 24C5.37258 24 0 18.6274 0 12C0 5.37258 5.37258 0 12 0V12C12 8.68629 9.31371 6 6 6C2.68629 6 0 8.68629 0 12C0 18.6274 5.37258 24 12 24Z"
          fill="currentColor"
        />
        <circle cx="6" cy="12" r="2" fill="black" />
        <circle cx="18" cy="12" r="2" fill="white" />
      </svg>
    </motion.div>
  );
};

export default function About() {
  // --- VARIANTES DE ANIMACIÓN ---
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Retraso entre hijos para efecto cascada
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const handleCvClick = () => {
    alert(
      "¡hola! estoy terminando de pulir los últimos detalles de mi cv. pronto estará disponible para descargar. ¡gracias por el interés! :)",
    );
  };

  return (
    <section
      id="sobre-mi"
      className="w-full min-h-screen bg-black text-white flex flex-col justify-center px-4 md:px-0 py-12 scroll-mt-0 snap-start"
    >
      <div className="container mx-auto max-w-6xl h-full flex flex-col justify-center">
        {/* Header Animado */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }} // Se repite al ver de nuevo
          transition={{ duration: 0.6 }}
          className="mb-6 flex items-center justify-between border-b border-white/10 pb-3"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-light lowercase tracking-tight">
              perfil <span className="font-bold">académico</span>
            </h2>
            <p className="text-xs text-gray-500 lowercase tracking-widest mt-1">
              licenciatura en sistemas de información • unne
            </p>
          </div>
          <YinYangBadge />
        </motion.div>

        {/* Layout Principal con Stagger Animation */}
        <motion.div
          className="grid md:grid-cols-12 gap-5 h-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }} // Se activa cuando el 20% es visible
        >
          {/* 1. FOTO (Columna Izquierda) */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-4 relative group h-full min-h-[400px]"
          >
            <div className="w-full h-full bg-neutral-900 border border-white/10 overflow-hidden relative rounded-sm grayscale group-hover:grayscale-0 transition-all duration-700">
              <Image
                src="/About/foto_perfil.jpg"
                alt="Juan Cruz Senicen Acosta"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
                priority
              />
              <div className="absolute bottom-0 left-0 w-full p-5 bg-gradient-to-t from-black/90 to-transparent z-10">
                <p className="text-white text-2xl font-bold uppercase leading-none tracking-tighter mb-1">
                  juan cruz
                </p>
                <p className="text-white/70 text-sm font-medium uppercase tracking-widest">
                  senicen acosta
                </p>
              </div>
            </div>

          </motion.div>

          {/* 2. CONTENIDO (Columna Derecha) */}
          <div className="md:col-span-8 flex flex-col gap-5">
            {/* Bloque Superior: Formación Técnica */}
            <motion.div
              variants={itemVariants}
              className="bg-white/5 border border-white/10 p-5 rounded-sm relative flex flex-col flex-1 min-h-[250px]"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                <BookOpen size={80} />
              </div>

              <h3 className="text-lg font-bold lowercase mb-3 flex items-center gap-2 flex-shrink-0">
                <Terminal size={16} /> formación técnica
              </h3>

              {/* Texto Scrollable */}
              <div className="overflow-y-auto pr-2 custom-scrollbar flex-grow text-gray-300 font-light text-sm text-justify lowercase space-y-3">
                <p>
                  consolidé el <strong>ciclo básico y superior</strong>,
                  construyendo una base sólida en
                  <span className="text-white font-medium"> algoritmos</span>,
                  <span className="text-white font-medium"> poo</span> y
                  <span className="text-white font-medium"> sql</span>. esta
                  formación se apoya en un fuerte background matemático:
                  <span className="text-white font-medium"> álgebra</span>,
                  <span className="text-white font-medium"> cálculo</span> y
                  <span className="text-white font-medium"> probabilidad</span>.
                </p>
                <p>
                  domino la{" "}
                  <span className="text-white font-medium">
                    ingeniería de software
                  </span>
                  : toma de requerimientos, uml, patrones y arquitecturas
                  escalables.
                </p>
                <p>
                  actualmente, ingreso al 4° año profundizando en
                  <em> ingeniería de software ii</em>, <em>redes</em>,{" "}
                  <em>teoría de la computación</em> y <em>economía aplicada</em>
                  .
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-white/10 flex-shrink-0">
                <SkillTag text="poo & patrones" />
                <SkillTag text="sql & normalización" />
                <SkillTag text="uml" />
                <SkillTag text="redes" />
              </div>
            </motion.div>

            {/* Bloque Inferior: Grid Doble */}
            <div className="grid md:grid-cols-2 gap-5 h-auto">
              {/* Intereses */}
              <motion.div
                variants={itemVariants}
                className="bg-white/5 border border-white/10 p-4 rounded-sm flex flex-col justify-between"
              >
                <div className="mb-2">
                  <h4 className="text-[10px] font-bold lowercase tracking-widest text-gray-500 mb-2 flex items-center gap-2">
                    <Activity size={12} /> fuera de la terminal
                  </h4>
                  <p className="text-xs text-gray-400 font-light leading-relaxed lowercase text-justify">
                    seleccioné esta estetica ya que refleja mi interés por el{" "}
                    <span className="text-white">taoísmo</span> y el camino del medio. Complemento lo
                    académico con <strong>actividad física</strong> y música.
                  </p>
                </div>

                <div className="flex items-center gap-3 mt-auto pt-3 border-t border-white/5">
                  <div className="w-20 h-14 bg-black/50 border border-white/10 rounded-sm overflow-hidden relative group flex-shrink-0">
                    <video
                      src="/About/video_chiquito.mp4"
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    />
                    <div className="absolute top-1 left-1 w-1 h-1 bg-red-500 rounded-full animate-pulse"></div>
                  </div>
                  <div className="flex flex-col">
                  </div>
                </div>
              </motion.div>

              {/* Datos & CV */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col justify-between gap-2"
              >
                <div className="space-y-2 bg-white/5 border border-white/10 p-4 rounded-sm h-full flex flex-col justify-center">
                  <InfoRow
                    icon={GraduationCap}
                    label="carrera"
                    value="lic. en sistemas"
                  />
                  <InfoRow icon={Calendar} label="estado" value="4° año" />
                  <InfoRow
                    icon={MapPin}
                    label="ubicación"
                    value="corrientes, argentina"
                  />
                </div>

                <button
                  onClick={handleCvClick}
                  className="group flex items-center justify-between bg-white text-black px-4 py-3 text-xs font-bold lowercase tracking-wider hover:bg-gray-200 transition-colors rounded-sm w-full cursor-pointer border border-white"
                >
                  <span>descargar cv</span>
                  <ArrowUpRight
                    size={14}
                    className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"
                  />
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 3px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.15);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </section>
  );
}

function SkillTag({ text }: { text: string }) {
  return (
    <span className="px-1.5 py-0.5 border border-white/20 rounded text-[9px] lowercase tracking-wide text-gray-300 bg-white/5">
      {text}
    </span>
  );
}

function InfoRow({
  icon: Icon,
  label,
  value,
}: {
  icon: any;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
      <div className="flex items-center gap-2 text-gray-500">
        <Icon size={12} />
        <span className="text-[9px] lowercase tracking-widest">{label}</span>
      </div>
      <span className="text-xs text-white font-medium lowercase">{value}</span>
    </div>
  );
}
