"use client";

import { useState, useEffect } from "react";
import { Menu, X, Home, User, Cpu, FolderOpen, Mail } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "inicio", href: "#inicio", icon: Home },
  { name: "sobre mí", href: "#sobre-mi", icon: User },
  { name: "habilidades", href: "#habilidades", icon: Cpu },
  { name: "proyectos", href: "#proyectos", icon: FolderOpen },
  { name: "contacto", href: "#contacto", icon: Mail },
];

const sectionThemes: Record<string, "light" | "dark"> = {
  inicio: "light",
  "sobre-mi": "dark",
  habilidades: "light",
  proyectos: "dark",
  contacto: "light",
};

// Recibimos la prop para saber cuándo entrar
export default function SidebarNav({
  startAnimation = true,
}: {
  startAnimation?: boolean;
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [currentBgTheme, setCurrentBgTheme] = useState<"light" | "dark">(
    "light",
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);
            if (sectionThemes[id]) {
              setCurrentBgTheme(sectionThemes[id]);
            }
          }
        });
      },
      { threshold: 0.5 },
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.href.substring(1));
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  // --- ESTILOS DINÁMICOS ---
  const containerClasses =
    currentBgTheme === "light"
      ? "bg-black text-white border-l border-white/10"
      : "bg-white text-black border-l border-black/10";

  const iconActive = currentBgTheme === "light" ? "text-white" : "text-black";
  const iconInactive =
    currentBgTheme === "light"
      ? "text-white/40 hover:text-white"
      : "text-black/40 hover:text-black";
  const tooltipBg =
    currentBgTheme === "light" ? "bg-white text-black" : "bg-black text-white";

  // Clases para el Mini Logo
  const logoTextClass =
    currentBgTheme === "light" ? "text-white" : "text-black";

  return (
    <>
      {/* 1. BOTÓN MÓVIL (Solo aparece si la intro terminó) */}
      <AnimatePresence>
        {startAnimation && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="md:hidden fixed top-6 right-6 z-50"
          >
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`
                    p-4 rounded-full 
                    transition-all duration-500 ease-in-out 
                    hover:scale-110 active:scale-95
                    ${currentBgTheme === "light" ? "bg-black text-white shadow-lg" : "bg-white text-black shadow-lg"}
                `}
              aria-label="Menú"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. SIDEBAR DESKTOP */}
      <motion.aside
        initial={{ x: "100%" }} // Empieza fuera de pantalla a la derecha
        animate={startAnimation ? { x: "0%" } : { x: "100%" }} // Se desliza
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1], // Curva Bezier "Premium Smooth"
          delay: 0.2,
        }}
        className={`
            hidden md:flex fixed right-0 top-0 bottom-0 z-50
            w-24 h-screen
            flex-col justify-center items-center
            py-8
            transition-colors duration-700 ease-in-out
            ${containerClasses}
        `}
      >
        {/* --- MINI LOGO JCSA (Superior) --- */}
        {/* Posicionado absolutamente arriba */}
        <div className="absolute top-10 w-full flex justify-center">
          <AnimatePresence>
            {/* Solo mostramos el logo si NO estamos en 'inicio' */}
            {activeSection !== "inicio" && (
              <motion.a
                href="#inicio"
                initial={{ opacity: 0, scale: 0.8, y: -20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -20 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-2 gap-0.5 cursor-pointer hover:opacity-70 transition-opacity"
                title="Volver al inicio"
              >
                {["J", "C", "S", "A"].map((char) => (
                  <span
                    key={char}
                    className={`text-[10px] font-bold leading-none ${logoTextClass}`}
                  >
                    {char}
                  </span>
                ))}
              </motion.a>
            )}
          </AnimatePresence>
        </div>

        {/* --- NAVEGACIÓN --- */}
        <nav className="flex flex-col items-center gap-10">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            const Icon = item.icon;

            return (
              <a
                key={item.name}
                href={item.href}
                className="group relative flex items-center justify-center p-2"
                aria-label={item.name}
              >
                <Icon
                  size={22}
                  strokeWidth={1.5}
                  className={`transition-all duration-500 ${isActive ? iconActive + " scale-110" : iconInactive}`}
                />

                {isActive && (
                  <motion.span
                    layoutId="activeDot"
                    className={`absolute -right-3 w-1 h-5 rounded-l-full ${currentBgTheme === "light" ? "bg-white" : "bg-black"}`}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}

                {/* Tooltip Hover */}
                <span
                  className={`
                    absolute right-14 opacity-0 group-hover:opacity-100 translate-x-4 group-hover:translate-x-0
                    transition-all duration-300 pointer-events-none
                    text-xs font-medium tracking-widest lowercase py-1.5 px-3 rounded-sm
                    whitespace-nowrap shadow-xl border border-transparent
                    ${tooltipBg}
                  `}
                >
                  {item.name}
                </span>
              </a>
            );
          })}
        </nav>
      </motion.aside>

      {/* 3. MENÚ MÓVIL (Overlay) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black text-white md:hidden flex flex-col items-center justify-center"
          >
            <div className="flex flex-col space-y-8 text-center">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-3xl font-light lowercase tracking-widest flex items-center justify-center gap-4"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon size={28} />
                  {item.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
