"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  MapPin,
  Send,
  Linkedin,
  MessageSquare,
  ArrowUpRight,
  Copy,
  Check,
  Github,
} from "lucide-react"; // Importamos Github
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedDiscord, setCopiedDiscord] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Formulario enviado:", formData);
    alert("¡Gracias por tu mensaje! Te responderé pronto.");
    setFormData({ name: "", email: "", message: "" });
  };

  const copyToClipboard = (text: string, type: "email" | "discord") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedDiscord(true);
      setTimeout(() => setCopiedDiscord(false), 2000);
    }
  };

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
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

  return (
    <motion.section
      id="contacto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={sectionVariants}
      className="w-full min-h-screen py-24 px-4 bg-white text-black relative overflow-hidden flex flex-col justify-center"
    >
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="grid md:grid-cols-12 gap-12 md:gap-20 items-start">
          {/* --- COLUMNA IZQUIERDA: INFO --- */}
          <div className="md:col-span-5 flex flex-col justify-between h-full pt-4">
            <motion.div variants={itemVariants}>
              <h2 className="text-6xl md:text-8xl font-bold mb-8 lowercase tracking-tighter leading-none flex items-baseline">
                contacto
                <motion.span
                  className="inline-block w-3 h-3 md:w-5 md:h-5 bg-black rounded-full ml-1"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [1, 0.7, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </h2>
              <p className="text-gray-500 text-lg md:text-xl font-light lowercase leading-relaxed mb-12 max-w-md">
                ¿tienes un proyecto en mente o alguna duda? estoy disponible
                para nuevas oportunidades.
              </p>
            </motion.div>

            <div className="space-y-10">
              {/* Email Interactivo */}
              <motion.div variants={itemVariants} className="group">
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                  contacto directo
                </h4>
                <div
                  className="flex items-center gap-4 cursor-pointer w-fit"
                  onClick={() =>
                    copyToClipboard("juancruzsenicenacosta@gmail.com", "email")
                  }
                  title="Haz clic para copiar"
                >
                  <span className="text-xl md:text-2xl font-medium border-b-2 border-transparent group-hover:border-black transition-all lowercase break-all">
                    juancruzsenicenacosta@gmail.com
                  </span>

                  <div className="relative flex-shrink-0">
                    <AnimatePresence mode="wait">
                      {copiedEmail ? (
                        <motion.div
                          key="check"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          className="p-2 bg-green-500 text-white rounded-full"
                        >
                          <Check size={16} />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="copy"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          exit={{ scale: 0 }}
                          className="p-2 bg-gray-100 text-gray-600 rounded-full group-hover:bg-black group-hover:text-white transition-colors"
                        >
                          <Copy size={16} />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </motion.div>

              {/* Ubicación */}
              <motion.div variants={itemVariants}>
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">
                  base operativa
                </h4>
                <div className="flex items-center gap-2 text-lg font-light lowercase text-gray-800">
                  <MapPin size={20} className="text-black" />
                  corrientes, argentina (gmt-3)
                </div>
              </motion.div>

              {/* REDES SOCIALES */}
              <motion.div
                variants={itemVariants}
                className="pt-8 border-t border-gray-100"
              >
                <h4 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
                  redes & perfiles
                </h4>
                <div className="flex flex-wrap gap-4">
                  {/* LinkedIn */}
                  <SocialButton
                    href="https://www.linkedin.com/in/juan-cruz-senicen-acosta-a93430203"
                    icon={Linkedin}
                    label="LinkedIn"
                  />

                  {/* GitHub (¡NUEVO!) */}
                  <SocialButton
                    href="https://github.com/jcsa87" // Reemplaza con tu usuario real si es diferente
                    icon={Github}
                    label="GitHub"
                  />

                  {/* Discord */}
                  <button
                    onClick={() =>
                      copyToClipboard("promesasimprudentes", "discord")
                    }
                    className="group flex items-center gap-3 px-5 py-2.5 border border-gray-200 rounded-full hover:bg-[#5865F2] hover:border-[#5865F2] hover:text-white transition-all duration-300 bg-white"
                  >
                    <MessageSquare size={18} />
                    <span className="text-sm font-medium lowercase">
                      {copiedDiscord ? "¡Usuario copiado!" : "Discord"}
                    </span>
                    {copiedDiscord ? (
                      <Check size={14} />
                    ) : (
                      <Copy
                        size={14}
                        className="opacity-50 group-hover:opacity-100"
                      />
                    )}
                  </button>

                  {/* Gmail */}
                  <SocialButton
                    href="mailto:juancruzsenicenacosta@gmail.com"
                    icon={Mail}
                    label="Enviar Correo"
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* --- COLUMNA DERECHA: FORMULARIO --- */}
          <motion.div
            variants={itemVariants}
            className="md:col-span-7 bg-black text-white p-8 md:p-12 rounded-sm shadow-2xl relative overflow-hidden"
          >
            <div className="absolute inset-0 opacity-15 bg-[url('/noise.png')] mix-blend-overlay pointer-events-none"></div>

            <form onSubmit={handleSubmit} className="relative z-10 space-y-10">
              <div className="grid md:grid-cols-2 gap-10">
                <InputGroup
                  label="tu nombre"
                  id="name"
                  value={formData.name}
                  onChange={(e: any) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="ej. juan perez"
                />
                <InputGroup
                  label="tu email"
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e: any) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="ej. hola@gmail.com"
                />
              </div>

              <div className="space-y-4">
                <label
                  htmlFor="message"
                  className="text-xs font-bold uppercase tracking-widest text-gray-500"
                >
                  ¿cómo puedo ayudarte?
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-white/20 py-4 text-xl font-light text-white focus:outline-none focus:border-white transition-all resize-none placeholder-white/10 lowercase"
                  placeholder="cuéntame sobre tu proyecto..."
                />
              </div>

              <div className="pt-6 flex justify-end">
                <motion.button
                  type="submit"
                  className="group flex items-center gap-3 px-8 py-4 bg-white text-black font-bold uppercase tracking-widest text-xs hover:bg-gray-200 transition-colors rounded-sm"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  enviar mensaje
                  <Send
                    size={16}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </motion.button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}

// --- SUBCOMPONENTES ---

function SocialButton({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: any;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 px-5 py-2.5 border border-gray-200 rounded-full hover:bg-black hover:border-black hover:text-white transition-all duration-300 bg-white"
    >
      <Icon size={18} />
      <span className="text-sm font-medium lowercase">{label}</span>
      <ArrowUpRight
        size={14}
        className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
      />
    </a>
  );
}

function InputGroup({
  label,
  id,
  type = "text",
  value,
  onChange,
  placeholder,
}: any) {
  return (
    <div className="space-y-4 group">
      <label
        htmlFor={id}
        className="text-xs font-bold uppercase tracking-widest text-gray-500 group-focus-within:text-white transition-colors"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        required
        className="w-full bg-transparent border-b border-white/20 py-3 text-xl font-light text-white focus:outline-none focus:border-white transition-all placeholder-white/10 lowercase"
        placeholder={placeholder}
      />
    </div>
  );
}
